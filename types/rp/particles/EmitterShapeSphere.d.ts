// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_shape_sphere
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Shape Sphere (emitter_shape_sphere)
 * Emits particles from random positions within a spherical volume.
 * Configure the radius to set sphere size and surface_only to
 * restrict spawns to the outer shell. Direction can be inward,
 * outward, or custom. Ideal for explosions, magical orbs, bubble
 * columns, mob spawn effects, and any effect needing uniform 3D
 * distribution.
 */
export default interface EmitterShapeSphere {

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
   * The radius of the sphere. Can be a number or Molang 
   * expression.
   */
  radius?: string;

  surface_only?: boolean;

}