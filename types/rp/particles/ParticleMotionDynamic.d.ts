// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_motion_dynamic
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Motion Dynamic 
 * (particle_motion_dynamic)
 * Applies physics simulation to particle movement including gravity,
 * acceleration, and air resistance. Linear acceleration adds
 * constant force (gravity pulls down, wind pushes sideways), while
 * drag slows particles over time. Rotation acceleration and drag
 * control spinning. Creates natural-feeling motion for smoke rising,
 * debris falling, or leaves drifting.
 */
export default interface ParticleMotionDynamic {

  /**
   * @remarks
   * The linear acceleration of particles, as [x, y, z] Molang
   * expressions or numbers.
   */
  linear_acceleration?: string[];

  /**
   * @remarks
   * The drag coefficient applied to particle motion. Can be a
   * number or Molang expression.
   */
  linear_drag_coefficient?: string;

  /**
   * @remarks
   * The rotation acceleration. Can be a number or Molang 
   * expression.
   */
  rotation_acceleration?: string;

  /**
   * @remarks
   * The rotation drag coefficient. Can be a number or Molang
   * expression.
   */
  rotation_drag_coefficient?: string;

}