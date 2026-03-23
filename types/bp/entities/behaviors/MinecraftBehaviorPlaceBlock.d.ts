// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.place_block
 * 
 * minecraft:behavior.place_block Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Place Block Behavior (minecraft:behavior.place_block)
 * AI goal that makes entities place blocks into the world, like
 * Endermen placing their carried block or snow golems leaving snow
 * trails. Configure which blocks can be placed, where they can be
 * placed, and how often the entity attempts placement. Creates mobs
 * that modify the environment.
 */
export default interface MinecraftBehaviorPlaceBlock {

  /**
   * @remarks
   * If true, whether the goal is affected by the mob griefing game
   * rule.
   */
  affected_by_griefing_rule?: boolean;

  /**
   * @remarks
   * Filters for if the entity should try to place its block. Self and
   * Target are set.
   */
  can_place?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Chance each tick for the entity to try and place a block.
   */
  chance?: number;

  /**
   * @remarks
   * Trigger ran if the entity does place its block. Self, Target, and
   * Block are set.
   */
  on_place?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Block descriptors for which blocks are valid to be placed from
   * the entity's carried item, if empty all blocks are valid.
   */
  placeable_carried_blocks?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Weighted block descriptors for which blocks should be randomly
   * placed, if empty the entity will try to place its carried block
   * from placeable_carried_blocks.
   */
  randomly_placeable_blocks?: string[];

  /**
   * @remarks
   * XZ range from which the entity will try and place blocks in.
   */
  xz_range?: number[];

  /**
   * @remarks
   * Y range from which the entity will try and place blocks in.
   */
  y_range?: number[];

}