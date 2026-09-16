// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:strength
 * 
 * minecraft:strength Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Strength (minecraft:strength)
 * Defines the strength of this entity.
 */
export default interface MinecraftStrength {

  /**
   * @remarks
   * The maximum strength of this entity
   */
  max?: number;

  /**
   * @remarks
   * The initial value of the strength
   */
  value?: number;

}