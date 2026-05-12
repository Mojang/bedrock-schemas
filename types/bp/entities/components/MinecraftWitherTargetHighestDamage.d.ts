// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:wither_target_highest_damage
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Wither Target Highest Damage
 * (minecraft:wither_target_highest_damage)
 * Allows the wither to focus its attacks on whichever mob has
 * dealt the most damage to it.
 */
export default interface MinecraftWitherTargetHighestDamage {

  control_flags?: string[];

  /**
   * @remarks
   * List of entity types the wither takes into account to find who
   * dealt the most damage to it
   */
  entity_types?: object[];

  priority?: number;

}


export enum MinecraftWitherTargetHighestDamageControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}