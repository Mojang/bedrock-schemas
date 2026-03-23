// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:durability
 * 
 * minecraft:durability Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Durability (minecraft:durability)
 * The durability item component specifies how much damage the item
 * takes before breaking, and allows the item to be combined to
 * repair or augment them.
 */
export default interface MinecraftDurability {

  /**
   * @remarks
   * Specifies the percentage chance of this item losing durability. Default
   * is set to 100. Defined as an int range with min and max 
   * value.
   */
  damage_chance?: MinecraftDurabilityDamageChance;

  /**
   * @remarks
   * Max durability is the amount of damage that this item can take
   * before breaking. This is a required parameter and has a
   * minimum of 0.
   */
  max_durability: number;

}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftDurabilityDamageChance {

  max?: number;

  min?: number;

}