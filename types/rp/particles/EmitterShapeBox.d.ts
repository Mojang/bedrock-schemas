// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_shape_box
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Shape Box (emitter_shape_box)
 * Emits particles from random positions within a rectangular box
 * volume. Define the box using half_dimensions (distance from
 * center to each edge) and offset from the emitter. Particles can
 * emit outward from spawn points, inward toward center, or in
 * custom directions. Ideal for area effects like smoke filling a
 * room, rain in a region, or magic barriers.
 */
export default interface EmitterShapeBox {

  /**
   * @remarks
   * The direction of particle emission. Can be a string ('inwards' or
   * 'outwards'), or an array of [x, y, z] Molang expressions.
   */
  direction?: string;

  /**
   * @remarks
   * The half dimensions of the box, as [x, y, z] Molang expressions or
   * numbers.
   */
  half_dimensions: string[];

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions or numbers.
   */
  offset?: string[];

  surface_only?: boolean;

}