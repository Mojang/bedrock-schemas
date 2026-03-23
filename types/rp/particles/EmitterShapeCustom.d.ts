// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_shape_custom
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Shape Custom (emitter_shape_custom)
 * Emits particles from positions calculated by custom Molang
 * expressions. Unlike preset shapes, this gives complete control over
 * spawn locations using math expressions that can create rings,
 * spirals, waves, or any procedural pattern. Use the offset
 * expressions to define X, Y, Z coordinates relative to the
 * emitter for complex artistic effects.
 */
export default interface EmitterShapeCustom {

  /**
   * @remarks
   * The direction of particle emission, as [x, y, z] Molang expressions or
   * numbers.
   */
  direction?: string[];

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions or numbers.
   */
  offset?: string[];

}