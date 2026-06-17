// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:damage
 * 
 * minecraft:damage Samples
"minecraft:damage": {
  "minecraft:damage": 2
}

 */

import * as jsoncommon from '../../../common';

/**
 * Damage (minecraft:damage)
 * The damage component determines how much extra damage the item
 * does on attack.
 * Note: From 1.26.0 onward, `value` supports the full int16 range of
 * 0 to 32767.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Integer number`.

 */
export default interface MinecraftDamage {

  /**
   * @remarks
   * The amount of extra damage this item deals when attacking. This
   * value is added to the base attack damage. Must be a positive 
   * integer.
   */
  value?: number;

}