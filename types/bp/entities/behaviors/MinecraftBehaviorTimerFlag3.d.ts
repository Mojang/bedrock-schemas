// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.timer_flag_3
 * 
 * minecraft:behavior.timer_flag_3 Samples

Sniffer - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json

"minecraft:behavior.timer_flag_3": {
  "priority": 5,
  "cooldown_range": {
    "min": 0,
    "max": 0
  },
  "duration_range": {
    "min": 2,
    "max": 5
  },
  "on_end": {
    "event": "on_feeling_happy_end",
    "target": "self"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Timer Flag 3 Behavior 
 * (minecraft:behavior.timer_flag_3)
 * Fires an event when this behavior starts, then waits for a
 * duration before stopping. When stopping due to that timeout or
 * due to being interrupted by another behavior, fires another event.
 * query.timer_flag_3 will return 1.0 on both the client and server
 * when this behavior is running, and 0.0 otherwise.
 */
export default interface MinecraftBehaviorTimerFlag3 {

  control_flags?: string[];

  /**
   * @remarks
   * Goal cooldown range in seconds. Can be a range object or a
   * single number.
   * 
   * Sample Values:
   * Sniffer: {"min":0,"max":0}
   *
   */
  cooldown_range?: number[];

  /**
   * @remarks
   * Goal duration range in seconds. Can be a range object or a
   * single number.
   * 
   * Sample Values:
   * Sniffer: {"min":2,"max":5}
   *
   */
  duration_range?: number[];

  /**
   * @remarks
   * Event(s) to run when the goal ends.
   * 
   * Sample Values:
   * Sniffer: {"event":"on_feeling_happy_end","target":"self"}
   *
   */
  on_end?: MinecraftBehaviorTimerFlag3OnEnd;

  /**
   * @remarks
   * Event(s) to run when the goal starts.
   */
  on_start?: MinecraftBehaviorTimerFlag3OnStart;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Sniffer: 5
   *
   */
  priority?: number;

}


export enum MinecraftBehaviorTimerFlag3ControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorTimerFlag3CooldownRange {

  max?: number;

  min?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorTimerFlag3DurationRange {

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
export interface MinecraftBehaviorTimerFlag3OnEnd {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorTimerFlag3OnEndFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorTimerFlag3OnEndFilters {

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


export enum MinecraftBehaviorTimerFlag3OnEndTarget {
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
export interface MinecraftBehaviorTimerFlag3OnStart {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorTimerFlag3OnStartFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorTimerFlag3OnStartFilters {

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


export enum MinecraftBehaviorTimerFlag3OnStartTarget {
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