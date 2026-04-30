// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:knockback_resistance
 * 
 * minecraft:knockback_resistance Samples

Armor Stand - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json

"minecraft:knockback_resistance": {
  "value": 1
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:knockback_resistance": {
  "value": 0
}


Ender Dragon - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json

"minecraft:knockback_resistance": {
  "max": 100,
  "value": 100
}

 */

import * as jsoncommon from '../../../common';

/**
 * Knockback Resistance (minecraft:knockback_resistance)
 * Determines an entity's resistance to knockback from melee attacks. A
 * value of 0.0 means no resistance, while 1.0 provides full
 * immunity to knockback (like iron golems).
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Decimal number`.

 */
export default interface MinecraftKnockbackResistance {

  /**
   * @remarks
   * Maximum potential knockback resistance for this entity.
   * 
   * Sample Values:
   * Ender Dragon: 100
   *
   */
  max?: number;

  /**
   * @remarks
   * The amount of knockback resistance, from 0.0 (none) to 1.0 (full
   * immunity).
   * 
   * Sample Values:
   * Armor Stand: 1
   *
   * Ender Dragon: 100
   *
   *
   */
  value?: number;

}