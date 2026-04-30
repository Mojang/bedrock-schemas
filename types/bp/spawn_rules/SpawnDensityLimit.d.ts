// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_densitylimit
 */

import * as jsoncommon from '../../common';

/**
 * Density Limit (Spawn DensityLimit)
 * Limits how many of this entity type can exist in an area, with
 * separate caps for surface and underground spawning. This prevents
 * overpopulation and controls mob density for performance and
 * gameplay balance.
 */
export default interface SpawnDensityLimit {

  surface?: number;

  underground?: number;

}