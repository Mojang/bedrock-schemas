// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.random_look_around_and_sit
 * 
 * minecraft:behavior.random_look_around_and_sit Samples

Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

"minecraft:behavior.random_look_around_and_sit": {
  "priority": 12,
  "min_look_count": 2,
  "max_look_count": 5,
  "min_look_time": 80,
  "max_look_time": 100,
  "probability": 0.001
}

 */

import * as jsoncommon from '../../../common';

/**
 * Random Look Around And Sit Behavior
 * (minecraft:behavior.random_look_around_and_sit)
 * Allows the mob to randomly sit and look around for a duration. Note:
 * Must have a sitting animation set up to use this.
 */
export default interface MinecraftBehaviorRandomLookAroundAndSit {

  /**
   * @remarks
   * If the goal should continue to be used as long as the mob is
   * leashed.
   */
  continue_if_leashed?: boolean;

  /**
   * @remarks
   * The mob will stay sitting on reload.
   */
  continue_sitting_on_reload?: boolean;

  /**
   * @remarks
   * The rightmost angle a mob can look at on the horizontal plane with
   * respect to its initial facing direction.
   */
  max_angle_of_view_horizontal?: number;

  /**
   * @remarks
   * The max amount of unique looks a mob will have while looking 
   * around.
   * 
   * Sample Values:
   * Fox: 5
   *
   */
  max_look_count?: number;

  /**
   * @remarks
   * The max amount of time (in ticks) a mob will stay looking at a
   * direction while looking around.
   * 
   * Sample Values:
   * Fox: 100
   *
   */
  max_look_time?: number;

  /**
   * @remarks
   * The leftmost angle a mob can look at on the horizontal plane with
   * respect to its initial facing direction.
   */
  min_angle_of_view_horizontal?: number;

  /**
   * @remarks
   * The min amount of unique looks a mob will have while looking 
   * around.
   * 
   * Sample Values:
   * Fox: 2
   *
   */
  min_look_count?: number;

  /**
   * @remarks
   * The min amount of time (in ticks) a mob will stay looking at a
   * direction while looking around.
   * 
   * Sample Values:
   * Fox: 80
   *
   */
  min_look_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Fox: 12
   *
   */
  priority?: number;

  /**
   * @remarks
   * The probability of randomly looking around/sitting.
   * 
   * Sample Values:
   * Fox: 0.001
   *
   */
  probability?: number;

  /**
   * @remarks
   * The cooldown in seconds before the goal can be used again.
   */
  random_look_around_cooldown?: number;

}