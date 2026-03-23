// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_rate_manual
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Rate Manual (emitter_rate_manual)
 * Allows manual control over particle emission through events rather
 * than automatic spawning. Particles are only created when
 * explicitly triggered via Molang or particle events, up to the
 * max_particles limit. Useful for effects that should only spawn
 * under specific conditions, like damage indicators, pickup sparkles, or
 * script-controlled visual feedback.
 */
export default interface EmitterRateManual {

  /**
   * @remarks
   * The maximum number of particles that can exist at once. Can be
   * a number or Molang expression.
   */
  max_particles: string;

}