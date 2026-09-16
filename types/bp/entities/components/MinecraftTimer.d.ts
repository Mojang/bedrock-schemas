// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:timer
 * 
 * minecraft:timer Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Timer (minecraft:timer)
 * Adds a timer after which an event will fire.
 */
export default interface MinecraftTimer {

  /**
   * @remarks
   * If true, the timer will restart every time after it fires.
   */
  looping?: boolean;

  /**
   * @remarks
   * This is a list of objects, representing one value in seconds that
   * can be picked before firing the event and an optional weight.
   * Incompatible with time.
   */
  random_time_choices?: object[];

  /**
   * @remarks
   * If true, the amount of time on the timer will be random between the
   * min and max values specified in time.
   */
  randomInterval?: boolean;

  /**
   * @remarks
   * Amount of time in seconds for the timer. Can be specified as a
   * number or a pair of numbers (min and max). Incompatible with
   * random_time_choices.
   */
  time?: number[];

  /**
   * @remarks
   * Event to fire when the time on the timer runs out. Can be an
   * object with event and target properties, or a simple event 
   * string.
   */
  time_down_event?: MinecraftTimerTimeDownEvent;

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
export interface MinecraftTimerTimeDownEvent {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftTimerTimeDownEventFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftTimerTimeDownEventFilters {

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


export enum MinecraftTimerTimeDownEventTarget {
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