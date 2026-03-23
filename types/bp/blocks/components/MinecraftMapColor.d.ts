// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:map_color
 * 
 * minecraft:map_color Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Map Color (minecraft:map_color)
 * Sets the color of the block when rendered to a map. If this
 * component is omitted, the block will not show up on the map.
 */
export default interface MinecraftMapColor {

  /**
   * @remarks
   * The color is represented as a hex value in the format "#RRGGBB". May
   * also be expressed as an array of [R, G, B] from 0 to 255.
   */
  color?: string;

  /**
   * @remarks
   * Optional, tint multiplied to the color. Tint method logic varies,
   * but often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint. Supported tint methods are
   * "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage",
   * "grass" and "water"
   */
  tint_method?: string;

}