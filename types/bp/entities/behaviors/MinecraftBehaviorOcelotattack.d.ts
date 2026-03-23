// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.ocelotattack
 * 
 * minecraft:behavior.ocelotattack Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Ocelotattack Behavior 
 * (minecraft:behavior.ocelotattack)
 * Controls specific attack behavior for Ocelots.
 */
export default interface MinecraftBehaviorOcelotattack {

  control_flags?: string[];

  /**
   * @remarks
   * Time (in seconds) between attacks.
   */
  cooldown_time?: number;

  /**
   * @remarks
   * Max distance from the target, this entity will use this attack
   * behavior.
   */
  max_distance?: number;

  /**
   * @remarks
   * Max distance from the target, this entity starts sneaking.
   */
  max_sneak_range?: number;

  /**
   * @remarks
   * Max distance from the target, this entity starts sprinting (sprinting
   * takes priority over sneaking).
   */
  max_sprint_range?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Used with the base size of the entity to determine minimum
   * target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;

  /**
   * @remarks
   * Modifies the attacking entity's movement speed while 
   * sneaking.
   */
  sneak_speed_multiplier?: number;

  /**
   * @remarks
   * Modifies the attacking entity's movement speed while 
   * sprinting.
   */
  sprint_speed_multiplier?: number;

  /**
   * @remarks
   * Modifies the attacking entity's movement speed when not sneaking or
   * sprinting, but still within attack range.
   */
  walk_speed_multiplier?: number;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the X-axis, this entity can
   * rotate while trying to look at the target.
   */
  x_max_rotation?: number;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the Y-axis, this entity's head
   * can rotate while trying to look at the target.
   */
  y_max_head_rotation?: number;

}


export enum MinecraftBehaviorOcelotattackControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}