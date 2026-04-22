// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.stroll_towards_village
 * 
 * minecraft:behavior.stroll_towards_village Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Stroll Towards Village Behavior
 * (minecraft:behavior.stroll_towards_village)
 * Allows the mob to move into a random location within a village
 * within the search range.
 */
export default interface MinecraftBehaviorStrollTowardsVillage {

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the goal 
   * again
   */
  cooldown_time?: number;

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot.
   */
  goal_radius?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The distance in blocks to search for villages. If <= 0, find the
   * closest village regardless of distance.
   */
  search_range?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Chance that the mob will start this goal, from 0 to 1.
   */
  start_chance?: number;

}


export enum MinecraftBehaviorStrollTowardsVillageControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}