import { appendFileSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const PACKAGE = "@minecraft/bedrock-schemas";
const NUMBER = "(0|[1-9][0-9]*)";
const RETAIL = new RegExp(`^${NUMBER}\\.${NUMBER}\\.${NUMBER}$`);
const PREVIEW = new RegExp(`^${NUMBER}\\.${NUMBER}\\.${NUMBER}-beta\\.${NUMBER}$`);
const RELEASE_TAG = /^v[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+(-preview)?$/;

export function channelFor(release, version) {
  if (!release || release.draft !== false) throw new Error("A published, non-draft release is required.");
  const match = typeof release.tag_name === "string" ? RELEASE_TAG.exec(release.tag_name) : null;
  if (!match) {
    throw new Error("Release tag must use vX.Y.Z.W for Retail or vX.Y.Z.W-preview for Preview.");
  }
  const preview = match[1] !== undefined;
  if (release.prerelease !== preview) {
    throw new Error("Release prerelease flag must agree with the -preview tag suffix.");
  }
  if (!preview && RETAIL.test(version)) return "latest";
  if (preview && PREVIEW.test(version)) return "beta";
  throw new Error(`Release/package channel mismatch: ${release.tag_name} / ${version}; Retail packages require X.Y.Z, Preview packages require X.Y.Z-beta.N.`);
}

export function checkPackage(release, manifest, lock) {
  if (manifest.name !== PACKAGE) throw new Error(`Expected package ${PACKAGE}.`);
  if (manifest.version !== lock.version || manifest.version !== lock.packages?.[""]?.version) {
    throw new Error("Package and lockfile versions must match.");
  }
  return channelFor(release, manifest.version);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (process.env.GITHUB_EVENT_NAME !== "release") throw new Error("Only published release events may publish.");
    const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, "utf8"));
    if (event.action !== "published") throw new Error("Only published release events may publish.");
    if (!event.release || process.env.GITHUB_REF !== `refs/tags/${event.release.tag_name}`) {
      throw new Error("Workflow ref must match the release tag.");
    }
    const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
    const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
    const tag = checkPackage(event.release, manifest, lock);
    console.log(`${manifest.name}@${manifest.version} -> ${tag}`);
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `tag=${tag}\n`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}