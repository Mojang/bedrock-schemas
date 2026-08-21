// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_target_escape
 * 
 * minecraft:on_target_escape Samples

Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:on_target_escape": {
  "target": "self"
}


Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:on_target_escape": {
  "event": "minecraft:lost_target",
  "target": "self"
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:on_target_escape": {
  "filters": {
    "all_of": [
      {
        "test": "is_family",
        "subject": "target",
        "value": "wolf"
      },
      {
        "test": "has_component",
        "subject": "target",
        "operator": "!=",
        "value": "minecraft:is_tamed"
      }
    ]
  },
  "event": "minecraft:on_calm",
  "target": "self"
}


Magma Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json

"minecraft:on_target_escape": {
  "event": "minecraft:become_calm",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity On Target Escape (minecraft:on_target_escape)
 * Adds a trigger to call when this entity loses the target it
 * currently has.
 */
export default interface MinecraftOnTargetEscape {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   * 
   * Sample Values:
   * Drowned: "minecraft:lost_target"
   *
   * Llama: "minecraft:on_calm"
   *
   * Magma Cube: "minecraft:become_calm"
   *
   */
  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   * 
   * Sample Values:
   * Llama: {"all_of":[{"test":"is_family","subject":"target","value":"wolf"},{"test":"has_component","subject":"target","operator":"!=","value":"minecraft:is_tamed"}]}
   *
   */
  filters?: MinecraftOnTargetEscapeFilters;

  /**
   * @remarks
   * The target of the event.
   * 
   * Sample Values:
   * Dolphin: "self"
   *
   *
   */
  target?: MinecraftOnTargetEscapeTarget;

}


/**
 * Filters (filters)
 */
export interface MinecraftOnTargetEscapeFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


export enum MinecraftOnTargetEscapeTarget {
  baby = `baby`,
  block = `block`,
  damager = `damager`,
  holder = `holder`,
  item = `item`,
  other = `other`,
  parent = `parent`,
  player = `player`,
  self = `self`,
  target = `target`
}