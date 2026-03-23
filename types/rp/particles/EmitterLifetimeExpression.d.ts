// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_lifetime_expression
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Lifetime Expression
 * (emitter_lifetime_expression)
 * Controls when the emitter activates and expires using Molang
 * expressions. The activation expression starts particle emission when
 * it evaluates to non-zero, and the expiration expression stops it.
 * This enables dynamic effects tied to entity state—like flames that
 * only appear when an entity is on fire, or magic particles that
 * pulse with the caster's mana.
 */
export default interface EmitterLifetimeExpression {

  /**
   * @remarks
   * When the expression is non-zero, the emitter is activated. Can
   * be a number or Molang expression.
   */
  activation_expression?: string;

  /**
   * @remarks
   * When the expression is non-zero, the emitter expires. Can be a
   * number or Molang expression.
   */
  expiration_expression?: string;

}