// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:pushable_by_entity
 * 
 * minecraft:pushable_by_entity Samples

Boat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json

"minecraft:pushable_by_entity": {
  "presets": [
    {
      "push_mode": "legacy_boat",
      "strength_multiplier": 0.1,
      "min_distance": 0.3,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:pushable_by_entity": {}


Chest Minecart - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_minecart.json

"minecraft:pushable_by_entity": {
  "presets": [
    {
      "push_mode": "legacy_minecart",
      "strength_multiplier": 0.1,
      "min_distance": 0.0001,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Pushable By Entity (minecraft:pushable_by_entity)
 * Allows an entity to be pushed by other entities.
 */
export default interface MinecraftPushableByEntity {

  /**
   * @remarks
   * 
   * Sample Values:
   * Boat: [{"push_mode":"legacy_boat","strength_multiplier":0.1,"min_distance":0.3,"push_scale_self":0.5,"push_scale_other":0.25}]
   *
   *
   */
  presets?: MinecraftPushableByEntityPresets[];

}


/**
 * Presets (presets)
 */
export interface MinecraftPushableByEntityPresets {

  /**
   * @remarks
   * 
   * Sample Values:
   * Boat: 0.3
   *
   */
  min_distance?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Boat: "legacy_boat"
   *
   */
  push_mode?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Boat: 0.25
   *
   */
  push_scale_other?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Boat: 0.5
   *
   */
  push_scale_self?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Boat: 0.1
   *
   */
  strength_multiplier?: number;

}