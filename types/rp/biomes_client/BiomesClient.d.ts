// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biomes Client Documentation - minecraft:biomes_client
 * 
 * minecraft:biomes_client Samples

Basic - basic

{
  "biomes": {
    "default": {
      "water_surface_color": "#44AFF5",
      "water_surface_transparency": 0.65,
      "water_fog_color": "#44AFF5",
      "water_fog_distance": 15,
      "fog_color": "#ABD2FF"
    },
    "minecraft:swampland": {
      "water_surface_color": "#4c6559",
      "water_surface_transparency": 1,
      "water_fog_color": "#4c6559",
      "water_fog_distance": 8
    }
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Biomes Client (biomes_client)
 * The biomes_client.json file defines client-side visual properties for
 * biomes, including water colors, fog colors, and transparency settings.
 * This file does not use a format_version field.
 * Note: The 'default' entry provides fallback values for any biome
 * not explicitly defined. All color values use hex format with '#'
 * prefix.
 */
export default interface BiomesClient {

  /**
   * @remarks
   * A collection of biome visual definitions. Keys are biome
   * identifiers (e.g., 'minecraft:plains') or 'default' for fallback
   * settings.
   */
  biomes: { [key: string]: BiomesClientBiomes };

}


/**
 */
export interface BiomesClientBiomes {

  /**
   * @remarks
   * The color of atmospheric fog in this biome. Specified as a hex
   * color string.
   */
  fog_color?: string;

  /**
   * @remarks
   * Reference to a fog definition file that controls fog rendering for
   * this biome (e.g., 'minecraft:fog_default').
   */
  fog_identifier?: string;

  /**
   * @remarks
   * When true, inherits fog settings from the prior fog stack. When
   * false, uses only this biome's explicit fog settings.
   */
  inherit_from_prior_fog?: boolean;

  /**
   * @remarks
   * When true, removes all fog definitions that were inherited from
   * prior biomes or defaults before applying this biome's fog
   * settings.
   */
  remove_all_prior_fog?: boolean;

  /**
   * @remarks
   * The color of fog when underwater in this biome. Specified as a
   * hex color string.
   */
  water_fog_color?: string;

  /**
   * @remarks
   * The distance at which underwater fog becomes fully opaque.
   */
  water_fog_distance?: number;

  /**
   * @remarks
   * The color of water surfaces in this biome. Specified as a hex
   * color string (e.g., '#44AFF5').
   */
  water_surface_color?: string;

  /**
   * @remarks
   * The transparency of water surfaces. 0.0 is fully transparent, 1.0
   * is fully opaque.
   */
  water_surface_transparency?: number;

}