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
 * Entity Knockback Roar Behavior 
 * (minecraft:behavior.knockback_roar)
 * Allows the mob to perform a damaging knockback that affects all
 * nearby entities.
 */
export default interface MinecraftBehaviorKnockbackRoar {

  /**
   * @remarks
   * The delay after which the knockback occurs (in seconds).
   */
  attack_time?: number;

  control_flags?: string[];

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
  damage_filters?: MinecraftBehaviorKnockbackRoarDamageFilters;

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
  knockback_filters?: MinecraftBehaviorKnockbackRoarKnockbackFilters;

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
  on_roar_end?: MinecraftBehaviorKnockbackRoarOnRoarEnd;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


export enum MinecraftBehaviorKnockbackRoarControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Damage Filters (damage_filters)
 */
export interface MinecraftBehaviorKnockbackRoarDamageFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


/**
 * Knockback Filters (knockback_filters)
 */
export interface MinecraftBehaviorKnockbackRoarKnockbackFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


/**
 * Entity ActorDefinitionTrigger (ActorDefinitionTrigger)
 * Triggers an entity event when specified conditions are met.
 * Events activate component groups that change entity
 * behavior—transforming villagers into zombie villagers, switching mobs
 * to aggressive mode, or triggering growth stages. Combine with
 * filters to create conditional state machines that respond to
 * gameplay.
 */
export interface MinecraftBehaviorKnockbackRoarOnRoarEnd {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorKnockbackRoarOnRoarEndFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorKnockbackRoarOnRoarEndFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


export enum MinecraftBehaviorKnockbackRoarOnRoarEndTarget {
  baby = `baby`,
  block = `block`,
  damager = `damager`,
  holder = `holder`,
  item = `item`,
  other = `other`,
  parent = `parent`,
  player = `player`,
  self = `self`,
  target = `target`
}