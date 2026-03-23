// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:enchantable
 * 
 * minecraft:enchantable Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Enchantable (minecraft:enchantable)
 * The enchantable component specifies what enchantments can be
 * applied to the item. Not all enchantments will have an effect on
 * all item components.
 */
export default interface MinecraftEnchantable {

  /**
   * @remarks
   * Specifies which types of enchantments can be applied. For
   * example, `bow` would allow this item to be enchanted as if it
   * were a bow.
   */
  slot: string;

  /**
   * @remarks
   * Specifies the value of the enchantment (minimum of 0).
   */
  value: number;

}