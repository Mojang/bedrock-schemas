// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:loot
 * 
 * minecraft:loot Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Loot (minecraft:loot)
 * Specifies the loot table that determines what items this entity
 * drops upon death. The table path is relative to the behavior pack's
 * root folder.
 * Note: Requires a loot table to be used when dropping items upon
 * death.
 */
export default interface MinecraftLoot {

  /**
   * @remarks
   * Path to the loot table JSON file, relative to the behavior pack's
   * root (e.g., 'loot_tables/entities/zombie.json').
   */
  table?: string;

}