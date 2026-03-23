// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Recipes Documentation - minecraft:recipe_shaped
 * 
 * minecraft:recipe_shaped Samples

Anvil - anvil

{
  "format_version": "1.12",
  "minecraft:recipe_shaped": {
    "description": {
      "identifier": "minecraft:anvil"
    },
    "tags": [
      "crafting_table"
    ],
    "pattern": [
      "III",
      " i ",
      "iii"
    ],
    "key": {
      "I": {
        "item": "minecraft:iron_block"
      },
      "i": {
        "item": "minecraft:iron_ingot"
      }
    },
    "result": {
      "item": "minecraft:anvil"
    }
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Shaped Recipe (recipe_shaped)
 * A shaped crafting recipe for Minecraft Bedrock Edition. Shaped
 * recipes require ingredients to be placed in a specific pattern on
 * the crafting grid.
 * Note: The 'data' field for items is deprecated in versions 1.20.0
 * and later. Use flattened item identifiers instead.
 */
export default interface RecipeShaped {

  /**
   * @remarks
   * The format version of this recipe file. Common versions include
   * '1.12' and '1.20.10'.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The shaped recipe definition container.
   */
  "minecraft:recipe_shaped": RecipeShapedMinecraftRecipeShaped;

}


/**
 */
export interface RecipeShapedMinecraftRecipeShaped {

  /**
   * @remarks
   * If true, the recipe pattern can be mirrored horizontally.
   */
  assume_symmetry?: boolean;

  /**
   * @remarks
   * The recipe description containing identifier.
   */
  description: RecipeShapedMinecraftRecipeShapedDescription;

  /**
   * @remarks
   * An optional group identifier for recipe book organization.
   */
  group?: string;

  /**
   * @remarks
   * Maps pattern characters to item definitions.
   */
  key: { [key: string]: RecipeShapedMinecraftRecipeShapedKey };

  /**
   * @remarks
   * The crafting pattern as an array of strings. Each string represents a
   * row, and each character maps to a key. Use space for empty 
   * slots.
   */
  pattern: string[];

  /**
   * @remarks
   * Recipe priority for conflict resolution. Lower values have higher
   * priority.
   */
  priority?: number;

  /**
   * @remarks
   * The crafting result.
   */
  result: RecipeShapedMinecraftRecipeShapedResult;

  /**
   * @remarks
   * Tags that specify which crafting stations can use this recipe
   * (e.g., 'crafting_table', 'stonecutter').
   */
  tags: string[];

  /**
   * @remarks
   * Conditions that must be met to unlock this recipe in the recipe
   * book.
   */
  unlock?: RecipeShapedMinecraftRecipeShapedUnlock[];

}


/**
 */
export interface RecipeShapedMinecraftRecipeShapedDescription {

  /**
   * @remarks
   * The unique identifier for this recipe (e.g., 
   * 'minecraft:anvil').
   */
  identifier: string;

}


/**
 */
export interface RecipeShapedMinecraftRecipeShapedKey {

  /**
   * @remarks
   * An item definition for a pattern character.
   */
  AZaz: RecipeShapedMinecraftRecipeShapedKeyAZaz;

}


/**
 */
export interface RecipeShapedMinecraftRecipeShapedKeyAZaz {

  /**
   * @remarks
   * The item data/aux value for items with variants.
   */
  data?: number;

  /**
   * @remarks
   * The item identifier.
   */
  item: string;

  /**
   * @remarks
   * An item tag that matches multiple items (e.g., 
   * 'minecraft:planks').
   */
  tag?: string;

}


/**
 */
export interface RecipeShapedMinecraftRecipeShapedResult {

  /**
   * @remarks
   * The number of items produced.
   */
  count?: number;

  /**
   * @remarks
   * The result item data/aux value.
   */
  data?: number;

  /**
   * @remarks
   * The result item identifier.
   */
  item: string;

}


/**
 */
export interface RecipeShapedMinecraftRecipeShapedUnlock {

  /**
   * @remarks
   * The context in which the recipe is unlocked (e.g.,
   * 'AlwaysUnlocked', 'PlayerInWater', 'PlayerHasManyItems', 
   * 'None').
   */
  context?: string;

  /**
   * @remarks
   * The item that must be obtained to unlock this recipe.
   */
  item?: string;

}