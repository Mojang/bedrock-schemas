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
  event_choices?: object[];

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