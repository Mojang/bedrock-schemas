# @minecraft/bedrock-schemas

[npm version](https://www.npmjs.com/package/@minecraft/bedrock-schemas)
[License: MIT](LICENSE)

JSON Schemas and TypeScript types for Minecraft Bedrock Edition content files — entities, blocks, items, biomes, features, loot tables, recipes, and more.

## Installation

```bash
npm install @minecraft/bedrock-schemas
```

## What's Included

| Directory | Description |
|-----------|-------------|
| `schemas/` | [JSON Schema (draft-07)](http://json-schema.org/draft-07/schema#) definitions for behavior pack and resource pack files |
| `types/` | TypeScript type declarations (`.d.ts`) for the same content, with JSDoc comments and sample links |
| `forms/` | Form definitions used by Minecraft Creator editor tooling |
| `catalog.json` | A schema catalog mapping file-match glob patterns to their corresponding schema URLs |
| `settings-template.json` | A ready-made VS Code `settings.json` snippet for enabling JSON schema validation |

## Usage

### TypeScript Types

Import types for specific Bedrock content areas:

```ts
// Import everything
import { bp, rp, common } from "@minecraft/bedrock-schemas";

// Or import a specific category
import type { default as EntityBehavior } from "@minecraft/bedrock-schemas/bp/entities";
import type { default as BlockComponents } from "@minecraft/bedrock-schemas/bp/blocks/components";
```

Available subpath imports include:

- `@minecraft/bedrock-schemas/bp/entities`
- `@minecraft/bedrock-schemas/bp/blocks`
- `@minecraft/bedrock-schemas/bp/items`
- `@minecraft/bedrock-schemas/bp/biomes`
- `@minecraft/bedrock-schemas/bp/features`
- `@minecraft/bedrock-schemas/bp/loot_tables`
- `@minecraft/bedrock-schemas/bp/recipes`
- `@minecraft/bedrock-schemas/rp/entity`
- `@minecraft/bedrock-schemas/rp/models`
- `@minecraft/bedrock-schemas/rp/particles`
- `@minecraft/bedrock-schemas/common`
- …and many more (see `exports` in `package.json` for the full list)

### JSON Schema Validation in VS Code

Copy `settings-template.json` into your project's `.vscode/settings.json` to get auto-completion and validation for Bedrock content files:

```bash
cp node_modules/@minecraft/bedrock-schemas/settings-template.json .vscode/settings.json
```

Or load the included schema catalog programmatically:

```ts
import catalog from "@minecraft/bedrock-schemas/catalog.json";
// catalog.schemas[] contains fileMatch patterns and schema URLs
```

### Referencing Schemas Directly

Point any JSON Schema-aware tool at the schema files:

```json
{
  "$schema": "./node_modules/@minecraft/bedrock-schemas/schemas/bp/entities/index.schema.json"
}
```

## Documentation

For full Minecraft Bedrock Edition creator documentation, visit [learn.microsoft.com/minecraft/creator](https://learn.microsoft.com/minecraft/creator/).

## Contributing

This package is automatically generated, so directly contributing to this GitHub repo is not generally possible. If you have questions or issues, please open an issue on [GitHub](https://github.com/Mojang/bedrock-schemas/issues).

## License

[MIT](LICENSE) — Copyright (c) Microsoft Corporation.
