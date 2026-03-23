// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_shape_point
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Shape Point (emitter_shape_point)
 * Emits all particles from a single point in space, offset from the
 * emitter origin. This is the simplest and most common emission
 * shape—all particles spawn at the same location and spread outward
 * based on their initial velocity. Used for torches, candles, sparks,
 * magic projectile cores, and any effect with a focused emission
 * source.
 */
export default interface EmitterShapePoint {

  /**
   * @remarks
   * The direction of particle emission, as [x, y, z] Molang
   * expressions.
   */
  direction?: string[];

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions.
   */
  offset?: string[];

}