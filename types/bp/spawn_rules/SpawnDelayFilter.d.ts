// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_delayfilter
 */

import * as jsoncommon from '../../common';

/**
 * Delay Filter (Spawn DelayFilter)
 * Delays entity spawning by a configurable amount of time after
 * spawn conditions are met. Useful for preventing immediate respawning
 * after mob deaths or creating spawn cooldowns for rare 
 * creatures.
 */
export default interface SpawnDelayFilter {

  identifier?: string;

  max?: number;

  min?: number;

  spawn_chance?: number;

}