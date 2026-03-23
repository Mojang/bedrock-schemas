// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_lifetime_once
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Lifetime Once 
 * (emitter_lifetime_once)
 * Creates a single-burst particle effect that runs once and stops.
 * The emitter activates for the specified active_time duration, emits
 * particles, then terminates. Ideal for impact effects like
 * explosions, block breaking, critical hits, potion splashes, and
 * other momentary visual feedback.
 */
export default interface EmitterLifetimeOnce {

  /**
   * @remarks
   * The time in seconds that the emitter is active. Can be a
   * number or Molang expression.
   */
  active_time?: string;

}