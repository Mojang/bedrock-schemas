// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.go_home
 * 
 * minecraft:behavior.go_home Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Go Home Behavior (minecraft:behavior.go_home)
 * Allows the mob to move back to the position they were 
 * spawned.
 */
export default interface MinecraftBehaviorGoHome {

  /**
   * @remarks
   * Distance in blocks that the mob is considered close enough to
   * the end of the current path. A new path will then be calculated to
   * continue toward home.
   */
  calculate_new_path_radius?: number;

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot.
   */
  goal_radius?: number;

  /**
   * @remarks
   * A random value to determine when to randomly move somewhere. This
   * has a 1/interval chance to choose this goal.
   */
  interval?: number;

  /**
   * @remarks
   * Event(s) to run when this goal fails.
   */
  on_failed?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Event(s) to run when this mob gets home.
   */
  on_home?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI 
   * Goal.
   */
  speed_multiplier?: number;

}