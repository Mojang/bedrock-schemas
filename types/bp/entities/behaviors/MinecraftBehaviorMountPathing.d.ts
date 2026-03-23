// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.mount_pathing
 * 
 * minecraft:behavior.mount_pathing Samples

Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

"minecraft:behavior.mount_pathing": {
  "priority": 5,
  "target_dist": 0,
  "speed_multiplier": 1.25,
  "track_target": true
}


Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:behavior.mount_pathing": {
  "priority": 2,
  "speed_multiplier": 1.5,
  "target_dist": 0,
  "track_target": true
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:behavior.mount_pathing": {
  "priority": 1,
  "speed_multiplier": 1.25,
  "target_dist": 0,
  "track_target": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Mount Pathing Behavior (minecraft:behavior.mount_pathing)
 * Allows the mob to move around on its own while mounted seeking a
 * target to attack. Also will allow an entity to target another entity
 * for an attack.
 */
export default interface MinecraftBehaviorMountPathing {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Cave Spider: 5
   *
   * Chicken: 2
   *
   *
   * Llama: 1
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Cave Spider: 1.25
   *
   * Chicken: 1.5
   *
   *
   *
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * The distance at which this mob wants to be away from its 
   * target
   */
  target_dist?: number;

  /**
   * @remarks
   * If true, this mob will chase after the target as long as it's a
   * valid target
   * 
   * Sample Values:
   * Cave Spider: true
   *
   *
   */
  track_target?: boolean;

}