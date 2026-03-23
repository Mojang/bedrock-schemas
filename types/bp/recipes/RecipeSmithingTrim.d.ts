// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Recipes Documentation - minecraft:recipe_smithing_trim
 * 
 * minecraft:recipe_smithing_trim Samples

Armor Trim - armor_trim

{
  "format_version": "1.12",
  "minecraft:recipe_smithing_trim": {
    "description": {
      "identifier": "minecraft:smithing_armor_trim"
    },
    "tags": [
      "smithing_table"
    ],
    "template": {
      "tag": "minecraft:trim_templates"
    },
    "base": {
      "tag": "minecraft:trimmable_armors"
    },
    "addition": {
      "tag": "minecraft:trim_materials"
    }
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Smithing Trim Recipe (recipe_smithing_trim)
 * A smithing table armor trim recipe for Minecraft Bedrock Edition.
 * Smithing trim recipes define how armor items are decorated with
 * trim patterns using trim templates and materials.
 */
export default interface RecipeSmithingTrim {

  /**
   * @remarks
   * The format version of this recipe file.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The smithing trim recipe definition container.
   */
  "minecraft:recipe_smithing_trim": RecipeSmithingTrimMinecraftRecipeSmithingTrim;

}


/**
 */
export interface RecipeSmithingTrimMinecraftRecipeSmithingTrim {

  /**
   * @remarks
   * The trim material or tag to apply.
   */
  addition: RecipeSmithingTrimMinecraftRecipeSmithingTrimAddition;

  /**
   * @remarks
   * The base armor item or tag to be trimmed.
   */
  base: RecipeSmithingTrimMinecraftRecipeSmithingTrimBase;

  /**
   * @remarks
   * The recipe description containing identifier.
   */
  description: RecipeSmithingTrimMinecraftRecipeSmithingTrimDescription;

  /**
   * @remarks
   * Tags that specify this is a smithing_table recipe.
   */
  tags: string[];

  /**
   * @remarks
   * The trim template item or tag.
   */
  template: RecipeSmithingTrimMinecraftRecipeSmithingTrimTemplate;

}


/**
 */
export interface RecipeSmithingTrimMinecraftRecipeSmithingTrimAddition {

  /**
   * @remarks
   * A specific item identifier for the addition.
   */
  item?: string;

  /**
   * @remarks
   * An item tag for the addition (e.g., 
   * 'minecraft:trim_materials').
   */
  tag?: string;

}


/**
 */
export interface RecipeSmithingTrimMinecraftRecipeSmithingTrimBase {

  /**
   * @remarks
   * A specific item identifier for the base.
   */
  item?: string;

  /**
   * @remarks
   * An item tag for the base (e.g., 
   * 'minecraft:trimmable_armors').
   */
  tag?: string;

}


/**
 */
export interface RecipeSmithingTrimMinecraftRecipeSmithingTrimDescription {

  /**
   * @remarks
   * The unique identifier for this recipe.
   */
  identifier: string;

}


/**
 */
export interface RecipeSmithingTrimMinecraftRecipeSmithingTrimTemplate {

  /**
   * @remarks
   * A specific item identifier for the template.
   */
  item?: string;

  /**
   * @remarks
   * An item tag for the template (e.g., 
   * 'minecraft:trim_templates').
   */
  tag?: string;

}