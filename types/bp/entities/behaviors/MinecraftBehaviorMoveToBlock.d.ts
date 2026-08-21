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
 * Entity Move To Block Behavior 
 * (minecraft:behavior.move_to_block)
 * Allows mob to move towards a block.
 */
export default interface MinecraftBehaviorMoveToBlock {

  control_flags?: string[];

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot.
   */
  goal_radius?: number;

  /**
   * @remarks
   * Event to run on block reached.
   */
  on_reach?: MinecraftBehaviorMoveToBlockOnReach[];

  /**
   * @remarks
   * Event to run on completing a stay of stay_duration at the 
   * block.
   */
  on_stay_completed?: MinecraftBehaviorMoveToBlockOnStayCompleted[];

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
   * Movement speed multiplier of the mob when using this AI 
   * Goal.
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
   * Conditions that need to be met for a block to be a valid 
   * target.
   */
  target_block_filters?: MinecraftBehaviorMoveToBlockTargetBlockFilters;

  /**
   * @remarks
   * Block types to move to.
   */
  target_blocks?: string;

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
  target_selection_method?: MinecraftBehaviorMoveToBlockTargetSelectionMethod;

  /**
   * @remarks
   * Average interval in ticks to try to run this behavior.
   */
  tick_interval?: number;

}


export enum MinecraftBehaviorMoveToBlockControlFlags {
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
export interface MinecraftBehaviorMoveToBlockOnReach {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorMoveToBlockOnReachFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorMoveToBlockOnReachFilters {

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


export enum MinecraftBehaviorMoveToBlockOnReachTarget {
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
 * Entity ActorDefinitionTrigger (ActorDefinitionTrigger)
 * Triggers an entity event when specified conditions are met.
 * Events activate component groups that change entity
 * behavior—transforming villagers into zombie villagers, switching mobs
 * to aggressive mode, or triggering growth stages. Combine with
 * filters to create conditional state machines that respond to
 * gameplay.
 */
export interface MinecraftBehaviorMoveToBlockOnStayCompleted {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorMoveToBlockOnStayCompletedFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorMoveToBlockOnStayCompletedFilters {

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


export enum MinecraftBehaviorMoveToBlockOnStayCompletedTarget {
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
 * Target Block Filters (target_block_filters)
 */
export interface MinecraftBehaviorMoveToBlockTargetBlockFilters {

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


export enum MinecraftBehaviorMoveToBlockTargetSelectionMethod {
  nearest = `nearest`,
  random = `random`
}