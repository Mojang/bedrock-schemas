// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_curve_bezier_chain
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Curve Bezier Chain
 * (particle_curve_bezier_chain)
 * Creates smooth, organic animation curves using chained bezier
 * segments. Unlike linear curves, bezier chains produce
 * natural-feeling motion with acceleration and deceleration. Define
 * control nodes that the curve passes through, with automatic smooth
 * interpolation between them. Used for lifelike particle behaviors like
 * gentle floating, heartbeat pulses, or wind gusts.
 */
export default interface ParticleCurveBezierChain {

  input: { [key: string]: string };

  nodes: object;

  type: string;

}