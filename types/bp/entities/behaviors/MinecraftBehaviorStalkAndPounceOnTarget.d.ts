// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.stalk_and_pounce_on_target
 * 
 * minecraft:behavior.stalk_and_pounce_on_target Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Stalk And Pounce On Target Behavior
 * (minecraft:behavior.stalk_and_pounce_on_target)
 * Allows a mob to stalk a target, then once within range pounce onto
 * a target, on success the target will be attacked dealing damage
 * defined by the attack component. On failure, the mob will risk
 * getting stuck.
 */
export default interface MinecraftBehaviorStalkAndPounceOnTarget {

  /**
   * @remarks
   * The amount of time the mob will be interested before pouncing. This
   * happens when the mob is within range of pouncing
   */
  interest_time?: number;

  /**
   * @remarks
   * The distance in blocks the mob jumps in the direction of its
   * target
   */
  leap_distance?: number;

  /**
   * @remarks
   * The height in blocks the mob jumps when leaping at its 
   * target
   */
  leap_height?: number;

  /**
   * @remarks
   * The maximum distance away a target can be before the mob gives up
   * on stalking
   */
  max_stalk_dist?: number;

  /**
   * @remarks
   * The maximum distance away from the target in blocks to begin
   * pouncing at the target
   */
  pounce_max_dist?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Allows the actor to be set to persist upon targeting a 
   * player
   */
  set_persistent?: boolean;

  /**
   * @remarks
   * The movement speed in which you stalk your target
   */
  stalk_speed?: number;

  /**
   * @remarks
   * The max distance away from the target when landing from the
   * pounce that will still result in damaging the target
   */
  strike_dist?: number;

  /**
   * @remarks
   * The amount of time the mob will be stuck if they fail and land on
   * a block they can be stuck on
   */
  stuck_time?: number;

}