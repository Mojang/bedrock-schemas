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
 * On Target Escape (minecraft:on_target_escape)
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
   * Llama: "minecraft:on_calm"
   *
   * Magma Cube: "minecraft:become_calm"
   *
   *
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
   *
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The target of the event.
   * 
   * Sample Values:
   * Dolphin: "self"
   *
   *
   */
  target?: string;

}