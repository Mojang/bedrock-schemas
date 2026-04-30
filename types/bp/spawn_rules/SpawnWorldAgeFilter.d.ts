// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_worldagefilter
 */

import * as jsoncommon from '../../common';

/**
 * World Age Filter (Spawn WorldAgeFilter)
 * Restricts spawning based on how long the world has existed (measured
 * in ticks). Useful for progressive difficulty where certain mobs
 * only start appearing after the world has been played for a
 * minimum amount of time.
 */
export default interface SpawnWorldAgeFilter {

  max?: number;

  min?: number;

}