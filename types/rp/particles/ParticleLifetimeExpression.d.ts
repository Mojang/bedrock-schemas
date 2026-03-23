// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_lifetime_expression
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Lifetime Expression
 * (particle_lifetime_expression)
 * Controls individual particle lifetimes using Molang expressions. The
 * max_lifetime sets the absolute duration limit, while
 * expiration_expression can terminate particles early when
 * conditions are met (like leaving a certain area). Enables dynamic
 * particle populations that respond to game state beyond simple
 * time-based expiration.
 */
export default interface ParticleLifetimeExpression {

  /**
   * @remarks
   * When the expression is non-zero, the particle expires. Can be a
   * number or Molang expression.
   */
  expiration_expression?: string;

  /**
   * @remarks
   * The maximum lifetime of the particle in seconds. Can be a
   * number or Molang expression.
   */
  max_lifetime?: string;

}