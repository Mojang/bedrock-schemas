// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_initialization
 */

import * as jsoncommon from '../../common';

/**
 * Emitter Initialization (emitter_initialization)
 * Defines Molang expressions that run when the emitter is created and
 * on each update. Useful for initializing and updating emitter
 * variables.
 */
export default interface EmitterInitialization {

  /**
   * @remarks
   * Molang expression run once when the emitter is created. Use this
   * to initialize variables.
   */
  creation_expression?: string;

  /**
   * @remarks
   * Molang expression run each frame while the emitter is active. Use
   * this to update variables based on time or other conditions.
   */
  per_update_expression?: string;

}