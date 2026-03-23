// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.random_swim
 * 
 * minecraft:behavior.random_swim Samples

Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:behavior.random_swim": {
  "priority": 5,
  "interval": 0,
  "xz_dist": 20
}


Elder Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json

"minecraft:behavior.random_swim": {
  "avoid_surface": false,
  "speed_multiplier": 0.5,
  "priority": 7
}


Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json

"minecraft:behavior.random_swim": {
  "avoid_surface": false,
  "speed_multiplier": 1,
  "interval": 80,
  "priority": 7
}

 */

import * as jsoncommon from '../../../common';

/**
 * Random Swim Behavior (minecraft:behavior.random_swim)
 * Allows an entity to randomly move through water.
 */
export default interface MinecraftBehaviorRandomSwim {

  /**
   * @remarks
   * If true, the mob will avoid surface water blocks by swimming below
   * them
   */
  avoid_surface?: boolean;

  /**
   * @remarks
   * A random value to determine when to randomly move somewhere. This
   * has a 1/interval chance to choose this goal
   * 
   * Sample Values:
   * Guardian: 80
   *
   */
  interval?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Dolphin: 5
   *
   * Elder Guardian: 7
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Elder Guardian: 0.5
   *
   * Guardian: 1
   *
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Distance in blocks on ground that the mob will look for a new
   * spot to move to. Must be at least 1
   * 
   * Sample Values:
   * Dolphin: 20
   *
   */
  xz_dist?: number;

  /**
   * @remarks
   * Distance in blocks that the mob will look up or down for a new
   * spot to move to. Must be at least 1
   */
  y_dist?: number;

}