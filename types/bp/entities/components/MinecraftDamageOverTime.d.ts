// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:damage_over_time
 * 
 * minecraft:damage_over_time Samples

Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:damage_over_time": {
  "damage_per_hurt": 1,
  "time_between_hurt": 0
}


Vex - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/vex.json

"minecraft:damage_over_time": {
  "damage_per_hurt": 1,
  "time_between_hurt": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Damage Over Time (minecraft:damage_over_time)
 * Applies defined amount of damage to the entity at specified 
 * intervals.
 */
export default interface MinecraftDamageOverTime {

  /**
   * @remarks
   * Amount of damage caused each hurt.
   * 
   * Sample Values:
   * Dolphin: 1
   *
   *
   */
  damage_per_hurt?: number;

  /**
   * @remarks
   * Time in seconds between damage.
   * 
   * Sample Values:
   * Vex: 1
   *
   */
  time_between_hurt?: number;

}