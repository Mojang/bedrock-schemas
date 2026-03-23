// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_rate_steady
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Rate Steady (emitter_rate_steady)
 * Continuously spawns particles at a consistent rate over time. The
 * spawn_rate controls how many particles appear per second, while
 * max_particles limits the total active count. This is the most
 * common emission mode, used for ongoing effects like torch flames,
 * mob auras, weather effects, potion bubbles, and ambient
 * environmental particles.
 */
export default interface EmitterRateSteady {

  /**
   * @remarks
   * The maximum number of particles that can exist at once. Can be
   * a number or Molang expression.
   */
  max_particles: string;

  /**
   * @remarks
   * The number of particles to spawn per second. Can be a number or
   * Molang expression.
   */
  spawn_rate: string;

}