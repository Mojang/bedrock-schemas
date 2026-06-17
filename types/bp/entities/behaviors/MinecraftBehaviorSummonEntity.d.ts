// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.summon_entity
 * 
 * minecraft:behavior.summon_entity Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Summon Entity Behavior 
 * (minecraft:behavior.summon_entity)
 * Allows the mob to attack the player by summoning other 
 * entities.
 */
export default interface MinecraftBehaviorSummonEntity {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * List of spells for the mob to use to summon entities.
   */
  summon_choices?: object[];

}


export enum MinecraftBehaviorSummonEntityControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}