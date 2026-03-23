// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.dig
 * 
 * minecraft:behavior.dig Samples

Warden - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json

"minecraft:behavior.dig": {
  "duration": 5.5,
  "idle_time": 60,
  "vibration_is_disturbance": true,
  "suspicion_is_disturbance": true,
  "on_start": {
    "event": "on_digging_event"
  },
  "priority": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Dig Behavior (minecraft:behavior.dig)
 * Allows this entity to dig into the ground before despawning.
 */
export default interface MinecraftBehaviorDig {

  /**
   * @remarks
   * If true, this behavior can run when this entity is named. Otherwise
   * not.
   */
  allow_dig_when_named?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * Indicates that the actor should start digging when it sees
   * daylight
   */
  digs_in_daylight?: boolean;

  /**
   * @remarks
   * Goal duration in seconds
   * 
   * Sample Values:
   * Warden: 5.5
   *
   */
  duration?: number;

  /**
   * @remarks
   * The minimum idle time in seconds between the last detected
   * disturbance to the start of digging.
   * 
   * Sample Values:
   * Warden: 60
   *
   */
  idle_time?: number;

  /**
   * @remarks
   * Event(s) to run when the goal starts.
   * 
   * Sample Values:
   * Warden: {"event":"on_digging_event"}
   *
   */
  on_start?: MinecraftBehaviorDigOnStart;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Warden: 1
   *
   */
  priority?: number;

  /**
   * @remarks
   * If true, finding new suspicious locations count as disturbances that
   * may delay the start of this goal.
   * 
   * Sample Values:
   * Warden: true
   *
   */
  suspicion_is_disturbance?: boolean;

  /**
   * @remarks
   * If true, vibrations count as disturbances that may delay the
   * start of this goal.
   * 
   * Sample Values:
   * Warden: true
   *
   */
  vibration_is_disturbance?: boolean;

}


export enum MinecraftBehaviorDigControlFlags {
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
export interface MinecraftBehaviorDigOnStart {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorDigOnStartFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorDigOnStartFilters {

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


export enum MinecraftBehaviorDigOnStartTarget {
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