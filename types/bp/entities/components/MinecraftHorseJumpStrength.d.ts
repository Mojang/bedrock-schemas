// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:horse.jump_strength
 * 
 * minecraft:horse.jump_strength Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Horse Jump Strength (minecraft:horse.jump_strength)
 * Determines the jump height for a horse or similar entity, like a
 * donkey.
 */
export default interface MinecraftHorseJumpStrength {

  /**
   * @remarks
   * Value of jump strength the entity has when spawned.
   */
  value?: MinecraftHorseJumpStrengthValue;

}


/**
 * Describes the range of jump strength.
 */
export interface MinecraftHorseJumpStrengthValue {

  /**
   * @remarks
   * Defines the maximum strength level.
   */
  range_max?: number;

  /**
   * @remarks
   * Defines the minimum strength level.
   */
  range_min?: number;

}