// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_playerinvillagefilter
 */

import * as jsoncommon from '../../common';

/**
 * Spawn PlayerInVillageFilter (Spawn PlayerInVillageFilter)
 * Restricts spawning based on whether a player is within village
 * boundaries. Used for village-specific spawns like iron golems, cats,
 * and raid mobs that should only appear when players are near
 * villages.
 */
export default interface SpawnPlayerInVillageFilter {

  distance: number;

  village_border_tolerance?: number;

}