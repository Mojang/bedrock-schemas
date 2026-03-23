// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Recipes Documentation - minecraft:recipe_shapeless
 * 
 * minecraft:recipe_shapeless Samples

Andesite - andesite

{
  "format_version": "1.12",
  "minecraft:recipe_shapeless": {
    "description": {
      "identifier": "minecraft:andesite"
    },
    "tags": [
      "crafting_table"
    ],
    "ingredients": [
      {
        "item": "minecraft:stone",
        "data": 3
      },
      {
        "item": "minecraft:cobblestone"
      }
    ],
    "result": {
      "item": "minecraft:stone",
      "data": 5,
      "count": 2
    }
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Shapeless Recipe (recipe_shapeless)
 * A shapeless crafting recipe for Minecraft Bedrock Edition. Shapeless
 * recipes allow ingredients to be placed in any order and position on
 * the crafting grid, unlike shaped recipes that require specific
 * patterns.
 */
export default interface RecipeShapeless {

  /**
   * @remarks
   * The format version of this recipe file.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The shapeless recipe definition container.
   */
  "minecraft:recipe_shapeless": RecipeShapelessMinecraftRecipeShapeless;

}


/**
 */
export interface RecipeShapelessMinecraftRecipeShapeless {

  /**
   * @remarks
   * The recipe description containing identifier.
   */
  description: RecipeShapelessMinecraftRecipeShapelessDescription;

  /**
   * @remarks
   * An optional group identifier for recipe book organization.
   */
  group?: string;

  /**
   * @remarks
   * The list of ingredients required for the recipe.
   */
  ingredients: RecipeShapelessMinecraftRecipeShapelessIngredients[];

  /**
   * @remarks
   * Recipe priority for conflict resolution.
   */
  priority?: number;

  /**
   * @remarks
   * The crafting result.
   */
  result: RecipeShapelessMinecraftRecipeShapelessResult;

  /**
   * @remarks
   * Tags that specify which crafting stations can use this 
   * recipe.
   */
  tags: string[];

  /**
   * @remarks
   * Conditions that must be met to unlock this recipe in the recipe
   * book.
   */
  unlock?: RecipeShapelessMinecraftRecipeShapelessUnlock[];

}


/**
 */
export interface RecipeShapelessMinecraftRecipeShapelessDescription {

  /**
   * @remarks
   * The unique identifier for this recipe.
   */
  identifier: string;

}


/**
 */
export interface RecipeShapelessMinecraftRecipeShapelessIngredients {

  /**
   * @remarks
   * The number of this ingredient required.
   */
  count?: number;

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
   * An item tag that matches multiple items.
   */
  tag?: string;

}


/**
 */
export interface RecipeShapelessMinecraftRecipeShapelessResult {

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
export interface RecipeShapelessMinecraftRecipeShapelessUnlock {

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