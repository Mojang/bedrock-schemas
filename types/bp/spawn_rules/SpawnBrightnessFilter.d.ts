// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_brightnessfilter
 */

import * as jsoncommon from '../../common';

/**
 * Spawn BrightnessFilter (Spawn BrightnessFilter)
 * Restricts mob spawning based on light level at the spawn location.
 * Hostile mobs typically spawn in darkness (light level 0-7), while
 * passive mobs spawn in brighter areas. Allows setting min/max
 * brightness thresholds and whether to adjust for spawning on a
 * block surface.
 */
export default interface SpawnBrightnessFilter {

  /**
   * @remarks
   * When true, brightness is adjusted for the current weather
   * (rain/thunder reduce light levels).
   */
  adjust_for_weather?: boolean;

  /**
   * @remarks
   * Maximum light level (0-15) at which this entity can spawn.
   */
  max?: number;

  /**
   * @remarks
   * Minimum light level (0-15) at which this entity can spawn.
   */
  min?: number;

}