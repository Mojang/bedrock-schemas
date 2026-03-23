// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Recipes Documentation - minecraft:recipe_brewing_mix
 * 
 * minecraft:recipe_brewing_mix Samples

Strength - strength

{
  "format_version": "1.12",
  "minecraft:recipe_brewing_mix": {
    "description": {
      "identifier": "minecraft:brew_awkward_blaze_powder"
    },
    "tags": [
      "brewing_stand"
    ],
    "input": "minecraft:potion_type:awkward",
    "reagent": "minecraft:blaze_powder",
    "output": "minecraft:potion_type:strength"
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Brewing Mix Recipe (recipe_brewing_mix)
 * A brewing recipe for Minecraft Bedrock Edition. Brewing recipes
 * define how potions are created by combining a base potion with a
 * reagent in a brewing stand.
 */
export default interface RecipeBrewingMix {

  /**
   * @remarks
   * The format version of this recipe file.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The brewing mix recipe definition container.
   */
  "minecraft:recipe_brewing_mix": RecipeBrewingMixMinecraftRecipeBrewingMix;

}


/**
 */
export interface RecipeBrewingMixMinecraftRecipeBrewingMix {

  /**
   * @remarks
   * The recipe description containing identifier.
   */
  description: RecipeBrewingMixMinecraftRecipeBrewingMixDescription;

  /**
   * @remarks
   * The input potion type (e.g., 
   * 'minecraft:potion_type:awkward').
   */
  input: string;

  /**
   * @remarks
   * The output potion type (e.g., 
   * 'minecraft:potion_type:strength').
   */
  output: string;

  /**
   * @remarks
   * The reagent item that modifies the potion (e.g.,
   * 'minecraft:blaze_powder').
   */
  reagent: string;

  /**
   * @remarks
   * Tags that specify this is a brewing_stand recipe.
   */
  tags: string[];

}


/**
 */
export interface RecipeBrewingMixMinecraftRecipeBrewingMixDescription {

  /**
   * @remarks
   * The unique identifier for this recipe.
   */
  identifier: string;

}