// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.mingle
 * 
 * minecraft:behavior.mingle Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Mingle Behavior (minecraft:behavior.mingle)
 * Allows an entity to go to the village bell and mingle with other
 * entities.
 */
export default interface MinecraftBehaviorMingle {

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the goal 
   * again
   */
  cooldown_time?: number;

  /**
   * @remarks
   * Amount of time in seconds that the entity will chat with another
   * entity
   */
  duration?: number;

  /**
   * @remarks
   * The distance from its partner that this entity will mingle. If
   * the entity type is not the same as the entity, this value needs to
   * be identical on both entities.
   */
  mingle_distance?: number;

  /**
   * @remarks
   * The entity type that this entity is allowed to mingle with
   */
  mingle_partner_type?: string;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorMingleControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}