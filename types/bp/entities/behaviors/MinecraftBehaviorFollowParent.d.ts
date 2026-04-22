// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.follow_parent
 * 
 * minecraft:behavior.follow_parent Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:behavior.follow_parent": {
  "priority": 5,
  "speed_multiplier": 1.1
}


Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:behavior.follow_parent": {
  "priority": 4,
  "speed_multiplier": 1.1
}


Goat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json

"minecraft:behavior.follow_parent": {
  "priority": 6,
  "speed_multiplier": 1
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:behavior.follow_parent": {
  "priority": 5,
  "speed_multiplier": 1
}


Pig - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json

"minecraft:behavior.follow_parent": {
  "priority": 6,
  "speed_multiplier": 1.1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Follow Parent Behavior 
 * (minecraft:behavior.follow_parent)
 * Allows the mob to follow their parent around.
 */
export default interface MinecraftBehaviorFollowParent {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Chicken: 5
   *
   * Dolphin: 4
   *
   * Goat: 6
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Chicken: 1.1
   *
   *
   * Goat: 1
   *
   *
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorFollowParentControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}