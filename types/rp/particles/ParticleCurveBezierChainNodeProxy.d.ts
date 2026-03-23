// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_curve_bezier_chain_node_proxy
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Curve Bezier Chain Node Proxy
 * (particle_curve_bezier_chain node_proxy)
 * Defines a control point in a bezier chain curve, specifying position
 * and slope at that point. Multiple nodes chain together to
 * create smooth curves for animating particle properties over time.
 * Each node's slope controls how smoothly values transition to
 * neighboring nodes, enabling organic motion like bobbing, pulsing, or
 * easing effects.
 */
export default interface ParticleCurveBezierChainNodeProxy {

  left_slope?: number;

  left_value?: number;

  right_slope?: number;

  right_value?: number;

  slope?: number;

  value?: number;

}