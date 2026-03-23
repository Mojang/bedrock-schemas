// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.play_dead
 * 
 * minecraft:behavior.play_dead Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Play Dead Behavior (minecraft:behavior.play_dead)
 * Allows this entity to pretend to be dead to avoid being targeted by
 * attackers.
 */
export default interface MinecraftBehaviorPlayDead {

  /**
   * @remarks
   * Whether the mob will receive the regeneration effect while playing
   * dead.
   */
  apply_regeneration?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * The list of Entity Damage Sources that will cause this mob to
   * play dead.
   */
  damage_sources?: string[];

  /**
   * @remarks
   * The amount of time the mob will remain playing dead (in
   * seconds).
   */
  duration?: number;

  /**
   * @remarks
   * The list of other triggers that are required for the mob to
   * activate play dead
   */
  filters?: MinecraftBehaviorPlayDeadFilters;

  /**
   * @remarks
   * The amount of health at which damage will cause the mob to play
   * dead.
   */
  force_below_health?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The range of damage that may cause the goal to start depending on
   * randomness. Damage taken below the min will never cause the goal
   * to start. Damage taken above the max will always cause the goal
   * to start.
   */
  random_damage_range?: MinecraftBehaviorPlayDeadRandomDamageRange;

  /**
   * @remarks
   * The likelihood of this goal starting upon taking damage.
   */
  random_start_chance?: number;

}


export enum MinecraftBehaviorPlayDeadControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


export enum MinecraftBehaviorPlayDeadDamageSources {
  all = `all`,
  anvil = `anvil`,
  blockExplosion = `block_explosion`,
  campfire = `campfire`,
  charging = `charging`,
  contact = `contact`,
  drowning = `drowning`,
  entityAttack = `entity_attack`,
  entityExplosion = `entity_explosion`,
  fall = `fall`,
  fallingBlock = `falling_block`,
  fire = `fire`,
  fireTick = `fire_tick`,
  fireworks = `fireworks`,
  flyIntoWall = `fly_into_wall`,
  freezing = `freezing`,
  lava = `lava`,
  lightning = `lightning`,
  maceSmash = `mace_smash`,
  magic = `magic`,
  magma = `magma`,
  none = `none`,
  override = `override`,
  piston = `piston`,
  projectile = `projectile`,
  ramAttack = `ram_attack`,
  selfDestruct = `self_destruct`,
  sonicBoom = `sonic_boom`,
  soulCampfire = `soul_campfire`,
  stalactite = `stalactite`,
  stalagmite = `stalagmite`,
  starve = `starve`,
  suffocation = `suffocation`,
  temperature = `temperature`,
  thorns = `thorns`,
  void = `void`,
  wither = `wither`
}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorPlayDeadFilters {

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
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftBehaviorPlayDeadRandomDamageRange {

  max?: number;

  min?: number;

}