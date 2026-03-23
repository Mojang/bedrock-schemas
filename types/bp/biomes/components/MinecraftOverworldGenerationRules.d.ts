// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biome Components Documentation - minecraft:overworld_generation_rules
 */

import * as jsoncommon from '../../../common';

/**
 * Biome Overworld Generation Rules
 * (minecraft:overworld_generation_rules)
 * Controls how this biome is instantiated (and then potentially modified)
 * during world generation of the overworld.
 * Note: This is a pre-Caves and Cliffs component and is unused for
 * custom biomes.
 */
export default interface MinecraftOverworldGenerationRules {

  /**
   * @remarks
   * Controls the world generation climate categories that this biome
   * can spawn for. Each entry is an array of [climate_name, weight]
   * where climate_name is 'medium', 'warm', 'lukewarm', 'cold', or
   * 'frozen'.
   */
  generate_for_climates?: string;

  /**
   * @remarks
   * An array of any size containing arrays of exactly two elements. For
   * each contained array, the first element is a climate category string
   * ('medium', 'warm', 'lukewarm', 'cold', or 'frozen'). The second
   * element is a positive integer for how much that entry is
   * weighted relative to other entries.
   */
  hills_transformation?: string[];

  /**
   * @remarks
   * What biome to switch to when converting to a mutated biome
   */
  mutate_transformation?: string[];

  /**
   * @remarks
   * What biome to switch to when converting to a river biome (if not
   * the Vanilla 'river' biome)
   */
  river_transformation?: string[];

  /**
   * @remarks
   * What biome to switch to when adjacent to an ocean biome
   */
  shore_transformation?: string[];

}