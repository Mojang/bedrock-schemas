// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_shape_disc
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Shape Disc (emitter_shape_disc)
 * Emits particles from random positions on a flat circular disc.
 * Configure the radius and plane normal to control disc size and
 * orientation. Surface_only restricts spawns to the disc edge for
 * ring effects. Perfect for ground-based effects like summoning circles,
 * shockwaves, splash impacts, and aura rings around entities.
 */
export default interface EmitterShapeDisc {

  /**
   * @remarks
   * The direction of particle emission. Can be a string ('inwards' or
   * 'outwards'), or an array of [x, y, z] Molang expressions.
   */
  direction?: string;

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions or numbers.
   */
  offset?: string[];

  /**
   * @remarks
   * The normal vector of the disc plane. Can be 'x', 'y', 'z', or
   * an array of [x, y, z] values.
   */
  plane_normal?: string;

  /**
   * @remarks
   * The radius of the disc. Can be a number or Molang 
   * expression.
   */
  radius?: string;

  surface_only?: boolean;

}