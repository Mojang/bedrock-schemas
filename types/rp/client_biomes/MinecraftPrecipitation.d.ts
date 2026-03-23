// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Client Biomes Documentation - minecraft:precipitation
 */

import * as jsoncommon from '../../common';

/**
 * Client Biome Precipitation (minecraft:precipitation)
 * Describes the visuals for a biome's precipitation. Biomes without
 * this component will have default values. At most one
 * precipitation type can be set for a biome.
 */
export default interface MinecraftPrecipitation {

  /**
   * @remarks
   * Density of ash precipitation visuals. Used in the soul sand
   * valley biome.
   */
  ash?: number;

  /**
   * @remarks
   * Density of blue spore precipitation visuals. Used in the warped
   * forest biome.
   */
  blue_spores?: number;

  /**
   * @remarks
   * Density of red spore precipitation visuals. Used in the crimson
   * forest biome.
   */
  red_spores?: number;

  /**
   * @remarks
   * Density of white ash precipitation visuals. Used in the basalt
   * deltas biome.
   */
  white_ash?: number;

}