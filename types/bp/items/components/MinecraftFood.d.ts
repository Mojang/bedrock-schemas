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
 */

import * as jsoncommon from '../../../common';

/**
 * Item Food (minecraft:food)
 * When an item has a food component, it becomes edible to the
 * player. Must have the 'minecraft:use_duration' component in
 * order to function properly.
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