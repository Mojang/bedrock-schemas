// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.celebrate_survive
 * 
 * minecraft:behavior.celebrate_survive Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Celebrate Survive Behavior
 * (minecraft:behavior.celebrate_survive)
 * Allows the player to trade with this mob. When the goal starts, it
 * will stop the mob's navigation.
 */
export default interface MinecraftBehaviorCelebrateSurvive {

  control_flags?: string[];

  /**
   * @remarks
   * The duration in seconds that the celebration lasts for.
   */
  duration?: number;

  /**
   * @remarks
   * Minimum and maximum time between firework (positive, in
   * seconds).
   */
  fireworks_interval?: MinecraftBehaviorCelebrateSurviveFireworksInterval;

  /**
   * @remarks
   * The event to trigger when the goal's duration expires.
   */
  on_celebration_end_event?: MinecraftBehaviorCelebrateSurviveOnCelebrationEndEvent;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


export enum MinecraftBehaviorCelebrateSurviveControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorCelebrateSurviveFireworksInterval {

  max?: number;

  min?: number;

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
export interface MinecraftBehaviorCelebrateSurviveOnCelebrationEndEvent {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorCelebrateSurviveOnCelebrationEndEventFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorCelebrateSurviveOnCelebrationEndEventFilters {

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


export enum MinecraftBehaviorCelebrateSurviveOnCelebrationEndEventTarget {
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