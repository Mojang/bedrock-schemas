// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_appearance_tinting
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Appearance Tinting
 * (particle_appearance_tinting)
 * Applies color tinting to particle textures, from simple solid
 * colors to complex gradients. Use hex colors for static tints, RGBA
 * arrays with Molang for dynamic colors, or gradient objects to
 * blend between colors over particle lifetime. Essential for
 * flames fading orange-to-gray, magical auras shifting colors, or
 * any effect needing color variation.
 */
export default interface ParticleAppearanceTinting {

  /**
   * @remarks
   * The color of the particle, can be a hex color string (like
   * '#RRGGBB'), an array of [r, g, b, a] values (numbers or
   * Molang), or an object with gradient and interpolant.
   */
  color: string[];

}