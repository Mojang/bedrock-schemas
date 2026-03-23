// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_outdoors
 * 
 * minecraft:behavior.move_outdoors Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Move Outdoors Behavior 
 * (minecraft:behavior.move_outdoors)
 * Allows this entity to move outdoors.
 */
export default interface MinecraftBehaviorMoveOutdoors {

  control_flags?: string[];

  /**
   * @remarks
   * The radius away from the target block to count as reaching the
   * goal
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
   * The amount of times to try finding a random outdoors position before
   * failing
   */
  search_count?: number;

  /**
   * @remarks
   * The y range to search for an outdoors position for
   */
  search_height?: number;

  /**
   * @remarks
   * The x and z range to search for an outdoors position for
   */
  search_range?: number;

  /**
   * @remarks
   * The movement speed modifier to apply to the entity while it is
   * moving outdoors
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * The cooldown time in seconds before the goal can be reused after
   * pathfinding fails
   */
  timeout_cooldown?: number;

}


export enum MinecraftBehaviorMoveOutdoorsControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}