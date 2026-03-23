// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_weight
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Weight (Spawn Weight)
 * Defines the relative probability of this entity spawning compared to
 * other entities in the same biome and spawn pool. Higher weight
 * values mean more frequent spawns. A weight of 100 is typical for
 * common mobs.
 */
export default interface SpawnWeight {

  default: number;

  rarity?: number;

}