// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_mobeventfilter
 */

import * as jsoncommon from '../../common';

/**
 * Mob Event Filter (Spawn MobEventFilter)
 * Controls spawning based on whether a specific mob event is
 * active. Mob events are world-level toggles (like raids or
 * wandering traders) that can enable or disable certain spawn
 * behaviors.
 */
export default interface SpawnMobEventFilter {

  event?: string;

}