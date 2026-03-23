// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.work
 * 
 * minecraft:behavior.work Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Work Behavior (minecraft:behavior.work)
 * Allows the NPC to use the POI.
 */
export default interface MinecraftBehaviorWork {

  /**
   * @remarks
   * The amount of ticks the NPC will stay in their the work 
   * location
   */
  active_time?: number;

  /**
   * @remarks
   * If true, this entity can work when their jobsite POI is being
   * rained on.
   */
  can_work_in_rain?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * The amount of ticks the goal will be on cooldown before it can
   * be used again
   */
  goal_cooldown?: number;

  /**
   * @remarks
   * Event to run when the mob reaches their jobsite.
   */
  on_arrival?: MinecraftBehaviorWorkOnArrival;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The max interval in which a sound will play.
   */
  sound_delay_max?: number;

  /**
   * @remarks
   * The min interval in which a sound will play.
   */
  sound_delay_min?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * If "can_work_in_rain" is false, this is the maximum number of
   * ticks left in the goal where rain will not interrupt the 
   * goal
   */
  work_in_rain_tolerance?: number;

}


export enum MinecraftBehaviorWorkControlFlags {
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
export interface MinecraftBehaviorWorkOnArrival {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorWorkOnArrivalFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorWorkOnArrivalFilters {

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


export enum MinecraftBehaviorWorkOnArrivalTarget {
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