// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.admire_item
 * 
 * minecraft:behavior.admire_item Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Admire Item Behavior (minecraft:behavior.admire_item)
 * Enables the mob to admire items that have been configured as
 * admirable.
 */
export default interface MinecraftBehaviorAdmireItem {

  /**
   * @remarks
   * The sound event to play when admiring the item
   */
  admire_item_sound?: string;

  control_flags?: string[];

  /**
   * @remarks
   * Event to run when the mob starts admiring an item.
   */
  on_admire_item_start?: MinecraftBehaviorAdmireItemOnAdmireItemStart;

  /**
   * @remarks
   * Event to run when the mob stops admiring an item.
   */
  on_admire_item_stop?: MinecraftBehaviorAdmireItemOnAdmireItemStop;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The range of time in seconds to randomly wait before playing the
   * sound again. Can be a number, an array [min, max], or an object
   * with range_min and range_max.
   */
  sound_interval?: number;

}


export enum MinecraftBehaviorAdmireItemControlFlags {
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
export interface MinecraftBehaviorAdmireItemOnAdmireItemStart {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorAdmireItemOnAdmireItemStartFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorAdmireItemOnAdmireItemStartFilters {

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


export enum MinecraftBehaviorAdmireItemOnAdmireItemStartTarget {
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
export interface MinecraftBehaviorAdmireItemOnAdmireItemStop {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorAdmireItemOnAdmireItemStopFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorAdmireItemOnAdmireItemStopFilters {

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


export enum MinecraftBehaviorAdmireItemOnAdmireItemStopTarget {
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
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorAdmireItemSoundInterval {

  max?: number;

  min?: number;

}