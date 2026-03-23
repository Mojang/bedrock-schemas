// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.stomp_attack
 * 
 * minecraft:behavior.stomp_attack Samples

Polar Bear - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json

"minecraft:behavior.stomp_attack": {
  "priority": 1,
  "track_target": true,
  "require_complete_path": true,
  "stomp_range_multiplier": 2,
  "no_damage_range_multiplier": 2
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Stomp Attack Behavior 
 * (minecraft:behavior.stomp_attack)
 * Allows an entity to attack using stomp AoE damage behavior.
 */
export default interface MinecraftBehaviorStompAttack {

  /**
   * @remarks
   * Allows the mob to perform this melee attack behavior only once
   * during its lifetime.
   */
  attack_once?: boolean;

  /**
   * @remarks
   * Defines the entity types this entity will attack.
   */
  attack_types?: string;

  /**
   * @remarks
   * Allows the mob, if on fire and empty handed, to ignite its
   * target upon a successful attack.
   */
  can_spread_on_fire?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * Cooldown time, in seconds, between consecutive attacks.
   */
  cooldown_time?: number;

  /**
   * @remarks
   * Time, in seconds, added to the attack path recalculation interval
   * when the target is beyond "path_inner_boundary".
   */
  inner_boundary_time_increase?: number;

  /**
   * @remarks
   * Maximum base time, in seconds, before recalculating a new attack
   * path to the target (before increases are applied).
   */
  max_path_time?: number;

  /**
   * @remarks
   * Minimum base time, in seconds, before recalculating a new attack
   * path to the target (before increases are applied).
   */
  min_path_time?: number;

  /**
   * @remarks
   * Multiplied with the final AoE damage range to determine a no
   * damage range. The stomp attack will go on cooldown if target is
   * in this no damage range.
   * 
   * Sample Values:
   * Polar Bear: 2
   *
   */
  no_damage_range_multiplier?: number;

  /**
   * @remarks
   * Defines the event to trigger when this entity successfully 
   * attacks.
   */
  on_attack?: MinecraftBehaviorStompAttackOnAttack;

  /**
   * @remarks
   * Defines the event to trigger when this entity kills the 
   * target.
   */
  on_kill?: MinecraftBehaviorStompAttackOnKill;

  /**
   * @remarks
   * Time, in seconds, added to the attack path recalculation interval
   * when the target is beyond "path_outer_boundary".
   */
  outer_boundary_time_increase?: number;

  /**
   * @remarks
   * Time, in seconds, added to the attack path recalculation interval
   * when the mob cannot move along the current path.
   */
  path_fail_time_increase?: number;

  /**
   * @remarks
   * Distance at which to increase attack path recalculation by
   * "inner_boundary_time_increase".
   */
  path_inner_boundary?: number;

  /**
   * @remarks
   * Distance at which to increase attack path recalculation by
   * "outer_boundary_time_increase".
   */
  path_outer_boundary?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Polar Bear: 1
   *
   */
  priority?: number;

  /**
   * @remarks
   * Defines a 1-in-N chance for the mob to stop its current attack,
   * where N equals "random_stop_interval".
   */
  random_stop_interval?: number;

  /**
   * @remarks
   * Used with the base size of the entity to determine minimum
   * target-distance before trying to deal attack damage.
   */
  reach_multiplier?: number;

  /**
   * @remarks
   * Specifies whether a full navigation path from the mob to the
   * target is required.
   * 
   * Sample Values:
   * Polar Bear: true
   *
   */
  require_complete_path?: boolean;

  /**
   * @remarks
   * Multiplier applied to the mob's movement speed when moving toward
   * its target.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Multiplied with the base size of the entity to determine stomp AoE
   * damage range.
   * 
   * Sample Values:
   * Polar Bear: 2
   *
   */
  stomp_range_multiplier?: number;

  /**
   * @remarks
   * Allows the mob to track its target even if it lacks a
   * hard-coded sensing component.
   * 
   * Sample Values:
   * Polar Bear: true
   *
   */
  track_target?: boolean;

  /**
   * @remarks
   * Maximum rotation, in degrees, on the X-axis while the mob is
   * trying to look at its target.
   */
  x_max_rotation?: number;

  /**
   * @remarks
   * Maximum rotation, in degrees, on the Y-axis while the mob is
   * trying to look at its target.
   */
  y_max_head_rotation?: number;

}


export enum MinecraftBehaviorStompAttackControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
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
export interface MinecraftBehaviorStompAttackOnAttack {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorStompAttackOnAttackFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorStompAttackOnAttackFilters {

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


export enum MinecraftBehaviorStompAttackOnAttackTarget {
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


/**
 * Entity ActorDefinitionTrigger (ActorDefinitionTrigger)
 * Triggers an entity event when specified conditions are met.
 * Events activate component groups that change entity
 * behavior—transforming villagers into zombie villagers, switching mobs
 * to aggressive mode, or triggering growth stages. Combine with
 * filters to create conditional state machines that respond to
 * gameplay.
 */
export interface MinecraftBehaviorStompAttackOnKill {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorStompAttackOnKillFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorStompAttackOnKillFilters {

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


export enum MinecraftBehaviorStompAttackOnKillTarget {
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