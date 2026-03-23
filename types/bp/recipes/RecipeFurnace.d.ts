// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Recipes Documentation - minecraft:recipe_furnace
 * 
 * minecraft:recipe_furnace Samples

Beef - beef

{
  "format_version": "1.12",
  "minecraft:recipe_furnace": {
    "description": {
      "identifier": "minecraft:furnace_beef"
    },
    "tags": [
      "furnace",
      "smoker",
      "campfire"
    ],
    "input": "minecraft:beef",
    "output": "minecraft:cooked_beef"
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Furnace Recipe (recipe_furnace)
 * A smelting/cooking recipe for Minecraft Bedrock Edition. Furnace
 * recipes define input items that can be smelted in furnaces, smokers,
 * blast furnaces, or campfires.
 */
export default interface RecipeFurnace {

  /**
   * @remarks
   * The format version of this recipe file.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The furnace recipe definition container.
   */
  "minecraft:recipe_furnace": RecipeFurnaceMinecraftRecipeFurnace;

}


/**
 */
export interface RecipeFurnaceMinecraftRecipeFurnace {

  /**
   * @remarks
   * The recipe description containing identifier.
   */
  description: RecipeFurnaceMinecraftRecipeFurnaceDescription;

  /**
   * @remarks
   * The input item. Can be a simple identifier or include data value
   * (e.g., 'minecraft:wood:4').
   */
  input: string;

  /**
   * @remarks
   * The output item identifier.
   */
  output: string;

  /**
   * @remarks
   * Tags that specify which smelting stations can use this recipe
   * (e.g., 'furnace', 'smoker', 'blast_furnace', 'campfire').
   */
  tags: string[];

}


/**
 */
export interface RecipeFurnaceMinecraftRecipeFurnaceDescription {

  /**
   * @remarks
   * The unique identifier for this recipe.
   */
  identifier: string;

}