// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:food
 * 
 * minecraft:food Samples
"minecraft:food": {
  "can_always_eat": false,
  "nutrition": 3,
  "saturation_modifier": 0.6,
  "using_converts_to": "bowl"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Food (minecraft:food)
 * Sets the item as a food component, allowing it to be edible to
 * the player.
 */
export default interface MinecraftFood {

  /**
   * @remarks
   * If true you can always eat this item (even when not hungry). Default
   * is set to false.
   */
  can_always_eat?: boolean;

  /**
   * @remarks
   * Value that is added to the entity's nutrition when the item is
   * used. Default is set to 0.
   */
  nutrition?: number;

  /**
   * @remarks
   * Array of effect names to remove when eating this food. This
   * property was deprecated and is no longer supported in newer
   * versions.
   */
  remove_effects?: string[];

  /**
   * @remarks
   * saturation_modifier is used in this formula: (nutrition *
   * saturation_modifier * 2) when applying the saturation buff.
   * Default is set to 0.6.
   */
  saturation_modifier?: number;

  /**
   * @remarks
   * When used, converts to the item specified by the string in this
   * field. Default does not convert item.
   */
  using_converts_to?: string;

}