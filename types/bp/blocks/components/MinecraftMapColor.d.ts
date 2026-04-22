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

Block Fabricator - Block Fabricator

"minecraft:map_color": "#5f4a2b

Block Gray Ore - Block Gray Ore

"minecraft:map_color": "#ffcd17

Block Palm Leave - Block Palm Leave

"minecraft:map_color": "#639f28

Block Palm Leave Corner - Block Palm Leave Corner

"minecraft:map_color": "#495f2b

Block Palm Trunk - Block Palm Trunk

"minecraft:map_color": "#b9ae9d

Block White Sand - Block White Sand

"minecraft:map_color": "#fdfdfd

Block Leaf Pile - Block Leaf Pile

"minecraft:map_color": "#ffffff

Block Orange Ore - Block Orange Ore

"minecraft:map_color": "#a69787

Apple Block - Apple Block

"minecraft:map_color": "#f30000
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