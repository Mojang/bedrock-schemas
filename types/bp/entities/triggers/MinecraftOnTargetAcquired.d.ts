// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_target_acquired
 * 
 * minecraft:on_target_acquired Samples

Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

"minecraft:on_target_acquired": {
  "event": "minecraft:become_angry"
}


Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:on_target_acquired": {
  "event": "minecraft:has_target",
  "target": "self"
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:on_target_acquired": {
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
  "event": "minecraft:mad_at_wolf",
  "target": "self"
}


Magma Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json

"minecraft:on_target_acquired": {
  "event": "minecraft:become_aggressive",
  "target": "self"
}


Polar Bear - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json

 * At /minecraft:entity/component_groups/minecraft:baby_wild/minecraft:on_target_acquired/: 
"minecraft:on_target_acquired": {
  "event": "minecraft:on_scared",
  "target": "self"
}

 * At /minecraft:entity/component_groups/minecraft:adult_wild/minecraft:on_target_acquired/: 
"minecraft:on_target_acquired": {
  "event": "minecraft:on_anger",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity On Target Acquired (minecraft:on_target_acquired)
 * Adds a trigger to call when this entity finds a target.
 */
export default interface MinecraftOnTargetAcquired {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   * 
   * Sample Values:
   * Cave Spider: "minecraft:become_angry"
   *
   * Drowned: "minecraft:has_target"
   *
   * Llama: "minecraft:mad_at_wolf"
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
  filters?: MinecraftOnTargetAcquiredFilters;

  /**
   * @remarks
   * The target of the event.
   * 
   * Sample Values:
   * Drowned: "self"
   *
   *
   */
  target?: MinecraftOnTargetAcquiredTarget;

}


/**
 * Filters (filters)
 */
export interface MinecraftOnTargetAcquiredFilters {

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


export enum MinecraftOnTargetAcquiredTarget {
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