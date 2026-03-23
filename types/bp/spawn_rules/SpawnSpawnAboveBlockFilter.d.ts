// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_spawnaboveblockfilter
 */

import * as jsoncommon from '../../common';

/**
 * Spawns Above Block Filter (Spawn SpawnAboveBlockFilter)
 * Filters spawning based on blocks above the spawn location. This
 * component appears to have been deprecated or changed in
 * versions after 1.17.20.
 * Note: This spawn condition was used in versions 1.17.20 and
 * earlier but appears to have been removed or replaced in newer
 * versions.
 * IMPORTANT
 * This type is now deprecated, and no longer in use in the latest versions of Minecraft.
 * 
 */
export default interface SpawnSpawnAboveBlockFilter {

  blocks?: object;

  distance?: number;

}