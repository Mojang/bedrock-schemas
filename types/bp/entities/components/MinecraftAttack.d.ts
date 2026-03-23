// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:attack
 * 
 * minecraft:attack Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Attack (minecraft:attack)
 * Defines an entity's melee attack damage and any additional status
 * effects applied on hit. Typical damage values range from 3
 * (zombie, creeper) to 7-21 (iron golem).
 */
export default interface MinecraftAttack {

  /**
   * @remarks
   * Range of the random amount of damage the melee attack deals. A
   * negative value can heal the entity instead of hurting it. Can be
   * a number, an array [min, max], or an object with range_min and
   * range_max properties.
   */
  damage?: number[];

  /**
   * @remarks
   * Duration in seconds of the status ailment applied to the damaged
   * entity.
   */
  effect_duration?: number;

  /**
   * @remarks
   * Identifier of the status ailment to apply to an entity attacked by
   * this entity's melee attack.
   */
  effect_name?: string;

}