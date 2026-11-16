// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.send_event
 * 
 * minecraft:behavior.send_event Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Send Event Behavior (minecraft:behavior.send_event)
 * Allows the mob to send an event to another mob.
 */
export default interface MinecraftBehaviorSendEvent {

  /**
   * @remarks
   * Time in seconds for the entire event sending process
   */
  cast_duration?: number;

  control_flags?: string[];

  /**
   * @remarks
   * List of possible events to send with conditions, weights, and
   * targeting parameters.
   */
  event_choices?: MinecraftBehaviorSendEventEventChoices[];

  /**
   * @remarks
   * If true, the mob will face the entity it sends an event to
   */
  look_at_target?: boolean;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * List of events to send
   */
  sequence?: MinecraftBehaviorSendEventSequence[];

}


export enum MinecraftBehaviorSendEventControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Entity SendEventChoice (SendEventChoice)
 */
export interface MinecraftBehaviorSendEventEventChoices {

  /**
   * @remarks
   * Time in seconds for the entire event sending process
   */
  cast_duration?: number;

  /**
   * @remarks
   * Time in seconds the mob has to wait before using this spell 
   * again
   */
  cooldown_time?: number;

  /**
   * @remarks
   * If true, the mob will show a casting animation while sending the
   * event
   */
  do_casting?: boolean;

  /**
   * @remarks
   * Conditions that the target must meet to be eligible for
   * receiving the event
   */
  filters?: MinecraftBehaviorSendEventEventChoicesFilters;

  /**
   * @remarks
   * If true, the mob will face the entity it sends an event to
   */
  look_at_target?: boolean;

  /**
   * @remarks
   * Maximum distance in blocks the target can be for this spell to
   * activate
   */
  max_activation_range?: number;

  /**
   * @remarks
   * Minimum distance in blocks the target must be for this spell to
   * activate
   */
  min_activation_range?: number;

  /**
   * @remarks
   * The color of the particles spawned while casting this spell
   */
  particle_color?: string;

  /**
   * @remarks
   * List of events to send
   */
  sequence?: MinecraftBehaviorSendEventEventChoicesSequence[];

  /**
   * @remarks
   * The sound event to play when this spell starts
   */
  start_sound_event?: string;

  /**
   * @remarks
   * Relative weight of this spell choice when randomly selected from
   * valid choices
   */
  weight?: number;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorSendEventEventChoicesFilters {

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


/**
 * Entity SendEventStage (SendEventStage)
 */
export interface MinecraftBehaviorSendEventEventChoicesSequence {

  /**
   * @remarks
   * Amount of time in seconds before starting this step
   */
  base_delay?: number;

  /**
   * @remarks
   * The event to send to the entity
   */
  event?: string;

  /**
   * @remarks
   * The sound event to play when this step happens
   */
  sound_event?: string;

}


/**
 * List of events to send.
 */
export interface MinecraftBehaviorSendEventSequence {

  /**
   * @remarks
   * Amount of time in seconds before starting this step
   */
  base_delay?: number;

  /**
   * @remarks
   * The event to send to the entity
   */
  event?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * The sound event to play when this step happens
   */
  sound_event?: jsoncommon.MinecraftEventTrigger;

}