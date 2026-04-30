// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_distancefilter
 */

import * as jsoncommon from '../../common';

/**
 * Distance Filter (Spawn DistanceFilter)
 * Controls spawning based on distance from the nearest player. Mobs
 * typically spawn within a certain radius around players (24-128
 * blocks) and despawn when players move too far away.
 */
export default interface SpawnDistanceFilter {

  max?: number;

  min?: number;

}