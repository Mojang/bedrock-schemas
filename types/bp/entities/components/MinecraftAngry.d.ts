// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:angry
 * 
 * minecraft:angry Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Angry (minecraft:angry)
 * Defines an entity's 'angry' state using a timer.
 */
export default interface MinecraftAngry {

  /**
   * @remarks
   * The sound event to play when the mob is angry
   */
  angry_sound?: string;

  /**
   * @remarks
   * If set, other entities of the same entity definition within the
   * broadcastRange will also become angry
   */
  broadcast_anger?: boolean;

  /**
   * @remarks
   * If set, other entities of the same entity definition within the
   * broadcastRange will also become angry whenever this mob 
   * attacks
   */
  broadcast_anger_on_attack?: boolean;

  /**
   * @remarks
   * If true, other entities of the same entity definition within the
   * broadcastRange will also become angry whenever this mob is
   * attacked
   */
  broadcast_anger_on_being_attacked?: boolean;

  /**
   * @remarks
   * If false, when this mob is killed it does not spread its anger to
   * other entities of the same entity definition within the
   * broadcastRange
   */
  broadcast_anger_when_dying?: boolean;

  /**
   * @remarks
   * Conditions that make this entry in the list valid
   */
  broadcast_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Distance in blocks within which other entities of the same entity
   * type will become angry
   */
  broadcast_range?: number;

  /**
   * @remarks
   * A list of entity families to broadcast anger to
   */
  broadcast_targets?: string[];

  /**
   * @remarks
   * Event to fire when this entity is calmed down. Can be a simple
   * event name string or an object with event and target 
   * properties.
   */
  calm_event?: object;

  /**
   * @remarks
   * The amount of time in seconds that the entity will be angry.
   */
  duration?: number;

  /**
   * @remarks
   * Variance in seconds added to the duration [-delta, delta].
   */
  duration_delta?: number;

  /**
   * @remarks
   * Filter out mob types that it should not attack while angry (other
   * Piglins)
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The range of time in seconds to randomly wait before playing the
   * sound again.
   */
  sound_interval?: number[];

}