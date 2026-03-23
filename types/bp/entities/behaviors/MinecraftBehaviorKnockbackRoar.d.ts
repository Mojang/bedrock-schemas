// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.knockback_roar
 * 
 * minecraft:behavior.knockback_roar Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Knockback Roar Behavior (minecraft:behavior.knockback_roar)
 * Allows the mob to perform a damaging knockback that affects all
 * nearby entities.
 */
export default interface MinecraftBehaviorKnockbackRoar {

  /**
   * @remarks
   * The delay after which the knockback occurs (in seconds).
   */
  attack_time?: number;

  /**
   * @remarks
   * Time (in seconds) the mob has to wait before using the goal
   * again.
   */
  cooldown_time?: number;

  /**
   * @remarks
   * The list of conditions another entity must meet to be a valid
   * target to apply damage to.
   */
  damage_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The max duration of the roar (in seconds).
   */
  duration?: number;

  /**
   * @remarks
   * The damage dealt by the knockback roar.
   */
  knockback_damage?: number;

  /**
   * @remarks
   * The list of conditions another entity must meet to be a valid
   * target to apply knockback to.
   */
  knockback_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The maximum height for vertical knockback.
   */
  knockback_height_cap?: number;

  /**
   * @remarks
   * The strength of the horizontal knockback.
   */
  knockback_horizontal_strength?: number;

  /**
   * @remarks
   * The radius (in blocks) of the knockback effect.
   */
  knockback_range?: number;

  /**
   * @remarks
   * The strength of the vertical knockback.
   */
  knockback_vertical_strength?: number;

  /**
   * @remarks
   * Event that is triggered when the roar ends. Can be an object with
   * event and target properties, or a simple event string.
   */
  on_roar_end?: object;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}