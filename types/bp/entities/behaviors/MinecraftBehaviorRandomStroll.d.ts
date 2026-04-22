// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.random_stroll
 * 
 * minecraft:behavior.random_stroll Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:behavior.random_stroll": {
  "priority": 4,
  "speed_multiplier": 1
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 1
}


Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

"minecraft:behavior.random_stroll": {
  "priority": 6,
  "speed_multiplier": 0.8
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Random Stroll Behavior 
 * (minecraft:behavior.random_stroll)
 * Allows a mob to randomly stroll around.
 */
export default interface MinecraftBehaviorRandomStroll {

  control_flags?: string[];

  /**
   * @remarks
   * A random value to determine when to randomly move somewhere. This
   * has a 1/interval chance to choose this goal
   */
  interval?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Blaze: 4
   *
   * Bogged: 6
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Blaze: 1
   *
   *
   * Cave Spider: 0.8
   *
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Distance in blocks on ground that the mob will look for a new
   * spot to move to. Must be at least 1
   */
  xz_dist?: number;

  /**
   * @remarks
   * Distance in blocks that the mob will look up or down for a new
   * spot to move to. Must be at least 1
   */
  y_dist?: number;

}


export enum MinecraftBehaviorRandomStrollControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}