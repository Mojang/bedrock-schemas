// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_curve_linear
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Curve Linear 
 * (particle_curve_linear)
 * Creates animation curves using linear interpolation between keyframe
 * values. Define input range and corresponding output values; the
 * curve linearly blends between adjacent keyframes. Simpler than
 * bezier curves but effective for straightforward animations like
 * size growing, alpha fading, or color shifting over particle 
 * lifetime.
 */
export default interface ParticleCurveLinear {

  horizontal_range?: { [key: string]: string };

  input: { [key: string]: string };

  nodes: { [key: string]: string };

  type: object;

}