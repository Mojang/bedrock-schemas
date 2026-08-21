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
 * Send Event Behavior (minecraft:behavior.send_event)
 * Allows the mob to send an event to another mob.
 */
export default interface MinecraftBehaviorSendEvent {

  /**
   * @remarks
   * Time in seconds for the entire event sending process
   */
  cast_duration?: number;

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


/**
 * Event Choice (event_choice)
 */
export interface MinecraftBehaviorSendEventEventChoices {

  /**
   * @remarks
   * Time in seconds for the casting animation.
   */
  cast_duration?: number;

  /**
   * @remarks
   * Time in seconds before this choice can be used again.
   */
  cooldown_time?: number;

  /**
   * @remarks
   * Conditions that must be met for this event choice to be 
   * valid.
   */
  filters?: object;

  /**
   * @remarks
   * Maximum distance from target to activate this event choice.
   */
  max_activation_range?: number;

  /**
   * @remarks
   * Minimum distance from target to activate this event choice.
   */
  min_activation_range?: number;

  /**
   * @remarks
   * Color of particles during casting, in hex format like
   * '#RRGGBBAA'.
   */
  particle_color?: string;

  /**
   * @remarks
   * List of events to send in order with timing.
   */
  sequence?: MinecraftBehaviorSendEventEventChoicesSequence[];

  /**
   * @remarks
   * Sound event to play when casting starts.
   */
  start_sound_event?: string;

  /**
   * @remarks
   * Relative weight for random selection among event choices.
   */
  weight?: number;

}


/**
 * Sequence Step (sequence_step)
 */
export interface MinecraftBehaviorSendEventEventChoicesSequence {

  /**
   * @remarks
   * Delay in seconds before this step executes.
   */
  base_delay?: number;

  /**
   * @remarks
   * Event to send to the target entity.
   */
  event?: string;

  /**
   * @remarks
   * Sound event to play when this step executes.
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