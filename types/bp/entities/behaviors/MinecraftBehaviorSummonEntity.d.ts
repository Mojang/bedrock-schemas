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
 * Summon Entity Behavior (minecraft:behavior.summon_entity)
 * Allows the mob to attack the player by summoning other 
 * entities.
 */
export default interface MinecraftBehaviorSummonEntity {

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
  summon_choices?: MinecraftBehaviorSummonEntitySummonChoices[];

}


/**
 * Summon Choice (summon_choice)
 */
export interface MinecraftBehaviorSummonEntitySummonChoices {

  /**
   * @remarks
   * Time in seconds the spell casting will take.
   */
  cast_duration?: number;

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the spell 
   * again.
   */
  cooldown_time?: number;

  /**
   * @remarks
   * If true, the mob will do the casting animations and render spell
   * particles.
   */
  do_casting?: boolean;

  /**
   * @remarks
   * Conditions that must be met for this summon choice to be 
   * valid.
   */
  filters?: object;

  /**
   * @remarks
   * Upper bound of the activation distance in blocks for this 
   * spell.
   */
  max_activation_range?: number;

  /**
   * @remarks
   * Lower bound of the activation distance in blocks for this 
   * spell.
   */
  min_activation_range?: number;

  /**
   * @remarks
   * The color of the particles for this spell. Can be an integer (ARGB)
   * or a hex string like '#AARRGGBB'.
   */
  particle_color?: string;

  /**
   * @remarks
   * List of summon steps for the spell.
   */
  sequence?: MinecraftBehaviorSummonEntitySummonChoicesSequence[];

  /**
   * @remarks
   * Sound event to play when casting starts.
   */
  start_sound_event?: string;

  /**
   * @remarks
   * Relative weight for random selection among summon choices.
   */
  weight?: number;

}


/**
 * Summon Step (summon_step)
 */
export interface MinecraftBehaviorSummonEntitySummonChoicesSequence {

  /**
   * @remarks
   * Delay in seconds before this step starts.
   */
  base_delay?: number;

  /**
   * @remarks
   * Delay in seconds between each entity summon.
   */
  delay_per_summon?: number;

  /**
   * @remarks
   * The entity type to summon.
   */
  entity_type?: string;

  /**
   * @remarks
   * Number of entities to spawn in this step.
   */
  num_entities_spawned?: number;

  /**
   * @remarks
   * Shape of the summon pattern: 'circle' or 'line'.
   */
  shape?: string;

  /**
   * @remarks
   * Size of the summon pattern.
   */
  size?: number;

  /**
   * @remarks
   * Sound event to play when summoning.
   */
  sound_event?: string;

  /**
   * @remarks
   * Maximum number of entities that can be summoned.
   */
  summon_cap?: number;

  /**
   * @remarks
   * Radius to check for existing summoned entities.
   */
  summon_cap_radius?: number;

  /**
   * @remarks
   * Target for the summon: 'self' or 'other'.
   */
  target?: string;

}