// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Recipes Documentation - minecraft:recipe_smithing_transform
 * 
 * minecraft:recipe_smithing_transform Samples

Netherite - netherite

{
  "format_version": "1.12",
  "minecraft:recipe_smithing_transform": {
    "description": {
      "identifier": "minecraft:smithing_netherite_axe"
    },
    "tags": [
      "smithing_table"
    ],
    "template": "minecraft:netherite_upgrade_smithing_template",
    "base": "minecraft:diamond_axe",
    "addition": "minecraft:netherite_ingot",
    "result": "minecraft:netherite_axe"
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Smithing Transform Recipe (recipe_smithing_transform)
 * A smithing table transformation recipe for Minecraft Bedrock
 * Edition. Smithing transform recipes define how items are
 * upgraded using a smithing template, base item, and addition 
 * material.
 */
export default interface RecipeSmithingTransform {

  /**
   * @remarks
   * The format version of this recipe file.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The smithing transform recipe definition container.
   */
  "minecraft:recipe_smithing_transform": RecipeSmithingTransformMinecraftRecipeSmithingTransform;

}


/**
 */
export interface RecipeSmithingTransformMinecraftRecipeSmithingTransform {

  /**
   * @remarks
   * The addition material (e.g., 'minecraft:netherite_ingot').
   */
  addition: string;

  /**
   * @remarks
   * The base item to be transformed (e.g., 
   * 'minecraft:diamond_axe').
   */
  base: string;

  /**
   * @remarks
   * The recipe description containing identifier.
   */
  description: RecipeSmithingTransformMinecraftRecipeSmithingTransformDescription;

  /**
   * @remarks
   * The resulting transformed item.
   */
  result: string;

  /**
   * @remarks
   * Tags that specify this is a smithing_table recipe.
   */
  tags: string[];

  /**
   * @remarks
   * The smithing template item (e.g.,
   * 'minecraft:netherite_upgrade_smithing_template').
   */
  template: string;

}


/**
 */
export interface RecipeSmithingTransformMinecraftRecipeSmithingTransformDescription {

  /**
   * @remarks
   * The unique identifier for this recipe.
   */
  identifier: string;

}