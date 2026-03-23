// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.take_block
 * 
 * minecraft:behavior.take_block Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Take Block Behavior (minecraft:behavior.take_block)
 * AI goal that makes entities pick up blocks from the world, like
 * Endermen grabbing blocks to carry. Configure which blocks the
 * entity can take and the search radius. Works with place_block behavior
 * to create entities that relocate blocks or harvest materials from
 * the environment.
 */
export default interface MinecraftBehaviorTakeBlock {

  /**
   * @remarks
   * If true, whether the goal is affected by the mob griefing game
   * rule.
   */
  affected_by_griefing_rule?: boolean;

  /**
   * @remarks
   * Block descriptors for which blocks are valid to be taken by the
   * entity, if empty all blocks are valid.
   */
  blocks?: string[];

  /**
   * @remarks
   * Filters for if the entity should try to take a block. Self and
   * Target are set.
   */
  can_take?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Chance each tick for the entity to try and take a block.
   */
  chance?: number;

  /**
   * @remarks
   * Trigger ran if the entity does take a block. Self, Target, and
   * Block are set.
   */
  on_take?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * If true, whether the entity needs line of sight to the block they
   * are trying to take.
   */
  requires_line_of_sight?: boolean;

  /**
   * @remarks
   * XZ range from which the entity will try and take blocks 
   * from.
   */
  xz_range?: number[];

  /**
   * @remarks
   * Y range from which the entity will try and take blocks from.
   */
  y_range?: number[];

}