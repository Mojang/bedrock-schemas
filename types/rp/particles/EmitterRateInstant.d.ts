// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_rate_instant
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Rate Instant (emitter_rate_instant)
 * Spawns all particles in a single instant burst when the emitter
 * activates. Unlike steady emission that spawns particles over
 * time, this creates an immediate cloud of particles—perfect for
 * explosions, block destruction debris, potion splash impacts, ender
 * teleportation effects, and any effect that needs an
 * instantaneous particle release.
 */
export default interface EmitterRateInstant {

  /**
   * @remarks
   * The number of particles to emit. Can be a number or Molang
   * expression.
   */
  num_particles: string;

}