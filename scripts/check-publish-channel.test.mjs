import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { channelFor, checkPackage } from "./check-publish-channel.mjs";

function releaseFor(tag, prerelease = tag.endsWith("-preview")) {
  return { tag_name: tag, prerelease, draft: false };
}

test("Retail releases select latest and Preview prereleases select beta", () => {
  assert.equal(channelFor(releaseFor("v1.26.40.5"), "1.26.40"), "latest");
  assert.equal(channelFor(releaseFor("v1.26.50.25-preview"), "1.26.50-beta.25"), "beta");
});

test("samples-style tags allow padded revisions without imposing an npm revision mapping", () => {
  assert.equal(channelFor(releaseFor("v1.26.40.05"), "1.26.40"), "latest");
  assert.equal(channelFor(releaseFor("v1.26.50.02-preview"), "1.26.50-beta.25"), "beta");
});

test("drafts, mismatched release tags or channels, and unsupported versions are rejected", () => {
  for (const [release, version] of [
    [releaseFor("v1.26.20.21"), "1.26.20-beta.21"],
    [releaseFor("v1.26.40.5-preview"), "1.26.40"],
    [releaseFor("v1.26.40.5", true), "1.26.40"],
    [releaseFor("v1.26.40.5-preview", false), "1.26.40-beta.5"],
    [{ ...releaseFor("v1.26.40.5"), draft: true }, "1.26.40"],
    [{ tag_name: "v1.26.40.5" }, "1.26.40"],
    [{ ...releaseFor("v1.26.40.5"), prerelease: "false" }, "1.26.40"],
    [undefined, "1.26.40"],
    [releaseFor("v1.26.40"), "1.26.40"],
    [releaseFor("v1.26.40-beta.5", true), "1.26.40-beta.5"],
    [releaseFor("1.26.40.5"), "1.26.40"],
    [releaseFor("v1.26.40.5-preview-extra", true), "1.26.40-beta.5"],
    [releaseFor("v1.26.40.5"), "1.26.40.5"],
    [releaseFor("v1.26.40.5"), "01.26.40"],
    [releaseFor("v1.26.40.5-preview"), "1.26.40-rc.1"],
    [releaseFor("v1.26.40.5-preview"), "1.26.40-beta.01"],
  ]) assert.throws(() => channelFor(release, version));
});

test("publishing checks package identity and producer-supplied lockfile versions", () => {
  const manifest = { name: "@minecraft/bedrock-schemas", version: "1.26.40" };
  const lock = { version: "1.26.40", packages: { "": { version: "1.26.40" } } };
  const release = releaseFor("v1.26.40.5");
  assert.equal(checkPackage(release, manifest, lock), "latest");
  assert.throws(() => checkPackage(release, { ...manifest, name: "other" }, lock), /Expected package/);
  assert.throws(() => checkPackage(release, manifest, { ...lock, version: "1.26.30" }), /versions must match/);
  assert.throws(() => checkPackage(release, manifest, { ...lock, packages: {} }), /versions must match/);
  assert.throws(() => checkPackage(release, manifest, {
    ...lock, packages: { "": { version: "1.26.30" } },
  }), /versions must match/);
});

test("the offline helper emits the tag for GitHub Actions without modifying package files", t => {
  const directory = mkdtempSync(join(tmpdir(), "bedrock-publish-test-"));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const output = join(directory, "output");
  const packageFile = new URL("../package.json", import.meta.url);
  const lockFile = new URL("../package-lock.json", import.meta.url);
  const originalPackage = readFileSync(packageFile, "utf8");
  const originalLock = readFileSync(lockFile, "utf8");
  const manifest = JSON.parse(originalPackage);
  const release = releaseFor(manifest.version.includes("-beta.") ? "v1.26.50.02-preview" : "v1.26.40.05");
  const eventFile = join(directory, "event.json");
  writeFileSync(eventFile, JSON.stringify({ action: "published", release }));
  const result = spawnSync(process.execPath, [fileURLToPath(new URL("./check-publish-channel.mjs", import.meta.url))], {
    env: { ...process.env, GITHUB_EVENT_NAME: "release", GITHUB_EVENT_PATH: eventFile,
      GITHUB_REF: `refs/tags/${release.tag_name}`, GITHUB_OUTPUT: output }, encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(readFileSync(output, "utf8"), `tag=${channelFor(release, manifest.version)}\n`);
  assert.equal(readFileSync(packageFile, "utf8"), originalPackage);
  assert.equal(readFileSync(lockFile, "utf8"), originalLock);
});

test("the CLI rejects non-published events, drafts, and refs not matching the release tag", t => {
  const directory = mkdtempSync(join(tmpdir(), "bedrock-release-test-"));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
  const release = releaseFor(manifest.version.includes("-beta.") ? "v1.26.50.02-preview" : "v1.26.40.05");
  const eventFile = join(directory, "event.json");
  const output = join(directory, "output");
  for (const [name, action, draft, ref] of [
    ["push", "published", false, `refs/tags/${release.tag_name}`],
    ["workflow_dispatch", "published", false, `refs/tags/${release.tag_name}`],
    ["release", "created", false, `refs/tags/${release.tag_name}`],
    ["release", "edited", false, `refs/tags/${release.tag_name}`],
    ["release", "published", true, `refs/tags/${release.tag_name}`],
    ["release", "published", false, "refs/heads/main"],
    ["release", "published", false, "refs/tags/v0.0.0"],
  ]) {
    writeFileSync(eventFile, JSON.stringify({ action, release: { ...release, draft } }));
    const result = spawnSync(process.execPath, [fileURLToPath(new URL("./check-publish-channel.mjs", import.meta.url))], {
      env: { ...process.env, GITHUB_EVENT_NAME: name, GITHUB_EVENT_PATH: eventFile,
        GITHUB_REF: ref, GITHUB_OUTPUT: output }, encoding: "utf8",
    });
    assert.equal(result.status, 1, `${name}/${action}/${draft}/${ref}: ${result.stderr}`);
    assert.equal(existsSync(output), false);
  }
});