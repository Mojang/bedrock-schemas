// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:destruction_particles
 */

import * as jsoncommon from '../../../common';

/**
 * Block Destruction Particles (Destruction Particles)
 * Sets the particles that will be used when block is 
 * destroyed.
 * Note: Available without experimental toggle in 1.21.100. The
 * particle_count field controls how many particles spawn when the
 * block is broken.
 */
export default interface DestructionParticles {

  /**
   * @remarks
   * Sets number of particles to spawn on block destruction.
   */
  particle_count?: number;

  /**
   * @remarks
   * The texture name used for the particle.
   */
  texture?: string;

  /**
   * @remarks
   * Tint multiplied to the color. Tint method logic varies, but
   * often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint.
   */
  tint_method?: string;

}


export enum DestructionParticlesTintMethod {
  none = `none`,
  defaultFoliage = `default_foliage`,
  birchFoliage = `birch_foliage`,
  evergreenFoliage = `evergreen_foliage`,
  dryFoliage = `dry_foliage`,
  grass = `grass`,
  water = `water`
}