// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_lifetime_looping
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Lifetime Looping 
 * (emitter_lifetime_looping)
 * Creates repeating particle effects that cycle between active and
 * dormant phases. The emitter runs for the active_time duration, pauses
 * for sleep_time, then repeats indefinitely. Perfect for ambient
 * effects like bubbling cauldrons, flickering torches, pulsing
 * enchantment glows, or creature breathing animations.
 */
export default interface EmitterLifetimeLooping {

  /**
   * @remarks
   * The time in seconds that the emitter is active. Can be a
   * number or Molang expression.
   */
  active_time?: string;

  /**
   * @remarks
   * The time in seconds that the emitter sleeps between active periods.
   * Can be a number or Molang expression.
   */
  sleep_time?: string;

}