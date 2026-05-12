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
 * Entity Place Block Behavior (minecraft:behavior.place_block)
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
  can_place?: MinecraftBehaviorPlaceBlockCanPlace;

  /**
   * @remarks
   * Chance each tick for the entity to try and place a block.
   */
  chance?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Trigger ran if the entity does place its block. Self, Target, and
   * Block are set.
   */
  on_place?: MinecraftBehaviorPlaceBlockOnPlace;

  /**
   * @remarks
   * Block descriptors for which blocks are valid to be placed from
   * the entity's carried item, if empty all blocks are valid.
   */
  placeable_carried_blocks?: MinecraftBehaviorPlaceBlockPlaceableCarriedBlocks[];

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
  randomly_placeable_blocks?: object[];

  /**
   * @remarks
   * XZ range from which the entity will try and place blocks in.
   */
  xz_range?: MinecraftBehaviorPlaceBlockXzRange;

  /**
   * @remarks
   * Y range from which the entity will try and place blocks in.
   */
  y_range?: MinecraftBehaviorPlaceBlockYRange;

}


/**
 * Can Place (can_place)
 */
export interface MinecraftBehaviorPlaceBlockCanPlace {

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


export enum MinecraftBehaviorPlaceBlockControlFlags {
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
export interface MinecraftBehaviorPlaceBlockOnPlace {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorPlaceBlockOnPlaceFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorPlaceBlockOnPlaceFilters {

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


export enum MinecraftBehaviorPlaceBlockOnPlaceTarget {
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
 * Placeable Carried Blocks (placeable_carried_blocks)
 */
export interface MinecraftBehaviorPlaceBlockPlaceableCarriedBlocks {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftBehaviorPlaceBlockXzRange {

  max?: number;

  min?: number;

}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftBehaviorPlaceBlockYRange {

  max?: number;

  min?: number;

}