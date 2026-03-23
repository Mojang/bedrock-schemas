// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.explore_outskirts
 * 
 * minecraft:behavior.explore_outskirts Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Explore Outskirts Behavior
 * (minecraft:behavior.explore_outskirts)
 * Allows the entity to first travel to a random point on the
 * outskirts of the village, and then explore random points within a
 * small distance.
 */
export default interface MinecraftBehaviorExploreOutskirts {

  control_flags?: string[];

  /**
   * @remarks
   * The distance from the boundary the villager must be within in
   * to explore the outskirts.
   */
  dist_from_boundary?: number[];

  /**
   * @remarks
   * Total distance in blocks the the entity will explore beyond the
   * village bounds when choosing its travel point.
   */
  explore_dist?: number;

  /**
   * @remarks
   * This is the maximum amount of time an entity will attempt to
   * reach it's travel point on the outskirts of the village before the
   * goal exits.
   */
  max_travel_time?: number;

  /**
   * @remarks
   * The wait time in seconds between choosing new explore points will
   * be chosen on a random interval between this value and the
   * minimum wait time. This value is also the total amount of time
   * the entity will explore random points before the goal stops.
   */
  max_wait_time?: number;

  /**
   * @remarks
   * The entity must be within this distance for it to consider it
   * has successfully reached its target.
   */
  min_dist_from_target?: number;

  /**
   * @remarks
   * The minimum perimeter of the village required to run this 
   * goal.
   */
  min_perimeter?: number;

  /**
   * @remarks
   * The wait time in seconds between choosing new explore points will
   * be chosen on a random interval between this value and the
   * maximum wait time.
   */
  min_wait_time?: number;

  /**
   * @remarks
   * A new explore point will randomly be chosen within this XZ
   * distance of the current target position when navigation has
   * finished and the wait timer has elapsed.
   */
  next_xz?: number;

  /**
   * @remarks
   * A new explore point will randomly be chosen within this Y
   * distance of the current target position when navigation has
   * finished and the wait timer has elapsed.
   */
  next_y?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The multiplier for speed while using this goal. 1.0 maintains the
   * speed.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Each new explore point will be chosen on a random interval between
   * the minimum and the maximum wait time, divided by this value. This
   * does not apply to the first explore point chosen when the goal
   * runs.
   */
  timer_ratio?: number;

}


export enum MinecraftBehaviorExploreOutskirtsControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}