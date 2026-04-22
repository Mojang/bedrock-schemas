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


Silverfish - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/silverfish.json

"minecraft:on_target_acquired": {
  "event": "minecraft:become_angry",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * On Target Acquired (minecraft:on_target_acquired)
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
   * Llama: "minecraft:mad_at_wolf"
   *
   * Magma Cube: "minecraft:become_aggressive"
   *
   */
  event?: string;

  /**
   * @remarks
   * The list of conditions for this trigger to execute.
   * 
   * Sample Values:
   * Llama: {"all_of":[{"test":"is_family","subject":"target","value":"wolf"},{"test":"has_component","subject":"target","operator":"!=","value":"minecraft:is_tamed"}]}
   *
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The target of the event.
   * 
   * Sample Values:
   * Llama: "self"
   *
   *
   */
  target?: string;

}