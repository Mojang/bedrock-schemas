// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_motion_parametric
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Motion Parametric
 * (particle_motion_parametric)
 * Controls particle position and rotation using Molang expressions
 * evaluated each frame, overriding physics simulation. Position is
 * relative to emitter origin, allowing mathematical motion patterns
 * like orbits, waves, spirals, or any path describable through
 * equations. Ideal for magical effects, precise choreographed motion,
 * or synchronized particle formations.
 */
export default interface ParticleMotionParametric {

  /**
   * @remarks
   * Direction of particle motion, as [x, y, z] Molang 
   * expressions.
   */
  direction?: string[];

  /**
   * @remarks
   * Position offset relative to the particle emitter, as [x, y, z]
   * Molang expressions.
   */
  relative_position?: string[];

  rotation?: { [key: string]: string };

}