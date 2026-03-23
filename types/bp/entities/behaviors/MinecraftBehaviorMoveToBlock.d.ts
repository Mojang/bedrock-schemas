// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_to_block
 * 
 * minecraft:behavior.move_to_block Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Move To Block Behavior (minecraft:behavior.move_to_block)
 * Allows mob to move towards a block.
 */
export default interface MinecraftBehaviorMoveToBlock {

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot
   */
  goal_radius?: number;

  /**
   * @remarks
   * Event to run on block reached.
   */
  on_reach?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Event to run on completing a stay of stay_duration at the 
   * block.
   */
  on_stay_completed?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The height in blocks that the mob will look for the block.
   */
  search_height?: number;

  /**
   * @remarks
   * The distance in blocks that the mob will look for the block.
   */
  search_range?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Chance to start the behavior (applied after each random
   * tick_interval).
   */
  start_chance?: number;

  /**
   * @remarks
   * Number of ticks needed to complete a stay at the block.
   */
  stay_duration?: number;

  /**
   * @remarks
   * Block types to move to.
   */
  target_blocks?: string[];

  /**
   * @remarks
   * Offset to add to the selected target position.
   */
  target_offset?: number[];

  /**
   * @remarks
   * Kind of block to find fitting the specification. Valid values are
   * "random" and "nearest".
   */
  target_selection_method?: string;

  /**
   * @remarks
   * Average interval in ticks to try to run this behavior.
   */
  tick_interval?: number;

}