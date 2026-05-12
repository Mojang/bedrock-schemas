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
 * Entity Take Block Behavior (minecraft:behavior.take_block)
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
  blocks?: MinecraftBehaviorTakeBlockBlocks[];

  /**
   * @remarks
   * Filters for if the entity should try to take a block. Self and
   * Target are set.
   */
  can_take?: MinecraftBehaviorTakeBlockCanTake;

  /**
   * @remarks
   * Chance each tick for the entity to try and take a block.
   */
  chance?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Trigger ran if the entity does take a block. Self, Target, and
   * Block are set.
   */
  on_take?: MinecraftBehaviorTakeBlockOnTake;

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
  xz_range?: MinecraftBehaviorTakeBlockXzRange;

  /**
   * @remarks
   * Y range from which the entity will try and take blocks from.
   */
  y_range?: MinecraftBehaviorTakeBlockYRange;

}


/**
 * Blocks (blocks)
 */
export interface MinecraftBehaviorTakeBlockBlocks {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Can Take (can_take)
 */
export interface MinecraftBehaviorTakeBlockCanTake {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


export enum MinecraftBehaviorTakeBlockControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Entity ActorDefinitionTrigger (ActorDefinitionTrigger)
 * Triggers an entity event when specified conditions are met.
 * Events activate component groups that change entity
 * behavior—transforming villagers into zombie villagers, switching mobs
 * to aggressive mode, or triggering growth stages. Combine with
 * filters to create conditional state machines that respond to
 * gameplay.
 */
export interface MinecraftBehaviorTakeBlockOnTake {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorTakeBlockOnTakeFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorTakeBlockOnTakeFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


export enum MinecraftBehaviorTakeBlockOnTakeTarget {
  baby = `baby`,
  block = `block`,
  damager = `damager`,
  holder = `holder`,
  item = `item`,
  other = `other`,
  parent = `parent`,
  player = `player`,
  self = `self`,
  target = `target`
}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftBehaviorTakeBlockXzRange {

  max?: number;

  min?: number;

}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftBehaviorTakeBlockYRange {

  max?: number;

  min?: number;

}