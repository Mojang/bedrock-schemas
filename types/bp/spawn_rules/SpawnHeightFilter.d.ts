// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_heightfilter
 */

import * as jsoncommon from '../../common';

/**
 * Spawn HeightFilter (Spawn HeightFilter)
 * Restricts entity spawning to specific Y-coordinate ranges. Useful
 * for creating depth-based mob distribution like slimes in swamps
 * (below Y=40), or limiting surface mobs from spawning 
 * underground.
 */
export default interface SpawnHeightFilter {

  max?: number;

  min?: number;

}