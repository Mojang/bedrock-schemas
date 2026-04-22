// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Validates the release artifacts of @minecraft/bedrock-schemas:
 * 1. All .json files are syntactically valid JSON
 * 2. All .schema.json files are valid JSON Schema (Draft-07)
 * 3. All .d.ts files compile without errors
 * 4. No unexpected file extensions in published directories
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";
import Ajv from "ajv";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

// Directories and files included in the npm package (from "files" in package.json)
const PUBLISHED_DIRS = ["schemas", "types", "forms"];
const PUBLISHED_FILES = ["catalog.json", "settings-template.json", "README.md", "LICENSE"];

// Allowed extensions in published content (empty string = no extension, e.g. LICENSE)
const ALLOWED_EXTENSIONS = new Set([".json", ".md", ".d.ts", ""]);

let errors = 0;

function fail(msg) {
  console.error(`  FAIL: ${msg}`);
  errors++;
}

function pass(msg) {
  console.log(`  OK: ${msg}`);
}

// ── 1. Collect all files from published directories ──────────────────────────

function collectFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const allFiles = [];
for (const dir of PUBLISHED_DIRS) {
  const abs = join(ROOT, dir);
  allFiles.push(...collectFiles(abs));
}
for (const file of PUBLISHED_FILES) {
  allFiles.push(join(ROOT, file));
}

// ── 2. Check for unexpected file extensions ──────────────────────────────────

console.log("\n[1/4] Checking for unexpected file extensions...");

let extensionChecked = 0;
for (const file of allFiles) {
  const rel = relative(ROOT, file);
  // Determine effective extension: treat .d.ts as a single extension
  let ext;
  if (file.endsWith(".d.ts")) {
    ext = ".d.ts";
  } else {
    ext = extname(file);
  }

  if (!ALLOWED_EXTENSIONS.has(ext)) {
    fail(`${rel} has unexpected extension "${ext}"`);
  }
  extensionChecked++;
}
pass(`${extensionChecked} files checked for valid extensions`);

// ── 3. Validate JSON syntax ─────────────────────────────────────────────────

console.log("\n[2/4] Validating JSON syntax...");

const jsonFiles = allFiles.filter((f) => f.endsWith(".json"));
let jsonValid = 0;
for (const file of jsonFiles) {
  const rel = relative(ROOT, file);
  try {
    JSON.parse(readFileSync(file, "utf8"));
    jsonValid++;
  } catch (e) {
    fail(`${rel}: ${e.message}`);
  }
}
pass(`${jsonValid}/${jsonFiles.length} JSON files are syntactically valid`);

// ── 4. Validate JSON Schema files ───────────────────────────────────────────

console.log("\n[3/4] Validating JSON Schema compliance...");

// Use validateSchema() to check each file is a structurally valid JSON Schema
// document (correct keywords, types, etc.) without resolving $ref targets,
// since schemas reference sibling files via relative paths.
const ajv = new Ajv({ allErrors: true, strict: false });
const schemaFiles = allFiles.filter((f) => f.endsWith(".schema.json"));
let schemaValid = 0;
for (const file of schemaFiles) {
  const rel = relative(ROOT, file);
  try {
    const schema = JSON.parse(readFileSync(file, "utf8"));
    const valid = ajv.validateSchema(schema);
    if (!valid) {
      const msg = ajv.errors
        .map((err) => `${err.instancePath} ${err.message}`)
        .join("; ");
      fail(`${rel}: ${msg}`);
    } else {
      schemaValid++;
    }
  } catch (e) {
    fail(`${rel}: ${e.message}`);
  }
}
pass(`${schemaValid}/${schemaFiles.length} schema files are valid JSON Schema`);

// ── 5. Validate .d.ts files via TypeScript ──────────────────────────────────

console.log("\n[4/4] Validating TypeScript declaration files...");

// The existing `tsc --noEmit` in the typecheck script covers this, but we
// run it here too so `npm run validate` is self-contained.
import { execSync } from "node:child_process";
try {
  execSync("npx tsc --noEmit", { cwd: ROOT, stdio: "pipe" });
  const dtsFiles = allFiles.filter((f) => f.endsWith(".d.ts"));
  pass(`${dtsFiles.length} .d.ts files compile successfully`);
} catch (e) {
  const output = e.stdout?.toString() || e.stderr?.toString() || e.message;
  fail(`TypeScript compilation errors:\n${output}`);
}

// ── Summary ─────────────────────────────────────────────────────────────────

console.log("");
if (errors > 0) {
  console.error(`Validation FAILED with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log("All validations passed.");
}
