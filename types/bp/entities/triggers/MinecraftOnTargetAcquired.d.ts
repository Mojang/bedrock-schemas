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


Hoglin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json

"minecraft:on_target_acquired": {
  "event": "become_angry_event",
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
   * Drowned: "minecraft:has_target"
   *
   * Hoglin: "become_angry_event"
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
   * Drowned: "self"
   *
   *
   */
  target?: string;

}