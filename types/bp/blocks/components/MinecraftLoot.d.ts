// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:loot
 * 
 * minecraft:loot Samples

Block Fabricator - Block Fabricator

"minecraft:loot": "loot_tables/mikeamm/gray_wave/fabricator.loot.json

Block Gray Ore - Block Gray Ore

"minecraft:loot": "loot_tables/mikeamm/gray_wave/gray_ore.loot.json

Block Orange Ore - Block Orange Ore

"minecraft:loot": "loot_tables/blocks/orange_ore.json

Apple Block - Apple Block

"minecraft:loot": "loot_tables/blocks/apple_block.json
 */

import * as jsoncommon from '../../../common';

/**
 * Loot (minecraft:loot)
 * Specifies the path to the loot table that determines what items
 * are dropped when the block is destroyed. The path is relative to
 * the behavior pack's root folder (e.g.,
 * 'loot_tables/blocks/my_block.json'). Path string is limited to
 * 256 characters. If this component is omitted, the block drops
 * itself.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `String`.

 */
export default interface MinecraftLoot {

}