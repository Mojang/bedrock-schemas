// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:biomeconditions
 */

import * as jsoncommon from '../../common';

/**
 * Spawn BiomeConditions (BiomeConditions)
 * Biome specific rules for spawning.
 */
export default interface BiomeConditions {

  /**
   * @remarks
   * Filter to limit spawns to specific biomes. Can be a single filter
   * object or an array of filter objects.
   */
  biome_filter?: BiomeConditionsBiomeFilter;

  /**
   * @remarks
   * Configurations for size and events when spawning groups of
   * entities
   */
  herds?: BiomeConditionsHerds[];

  /**
   * @remarks
   * Filter to exclude entities if the event is disabled.
   */
  mob_event_filter?: string;

  /**
   * @remarks
   * List of randomly choosable permutations of the entity
   */
  permute_types?: BiomeConditionsPermuteTypes[];

  /**
   * @remarks
   * The weight used when comparing other entities that can  spawn
   * within a biome
   */
  weight: number;

}


/**
 * Biome Filter (biome_filter)
 */
export interface BiomeConditionsBiomeFilter {

  /**
   * @remarks
   * All of these tests must pass.
   */
  all_of?: object[];

  /**
   * @remarks
   * Any of these tests must pass.
   */
  any_of?: object[];

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: string;

  /**
   * @remarks
   * None of these tests must pass.
   */
  none_of?: object[];

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: string;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: string;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: number;

}


/**
 * Spawn Herd (Herd)
 * Configures group spawning behavior with min/max herd sizes. Allows
 * running events on the first N entities spawned (initial_event) or
 * after skipping M entities (event). Common for pack animals like
 * wolves or swarm mobs like silverfish.
 */
export interface BiomeConditionsHerds {

  /**
   * @remarks
   * An event to run after 'event_skip_count' number of entities in
   * the group have spawned
   */
  event?: string;

  /**
   * @remarks
   * Number of entities spawned in the group to skip before running the
   * event
   */
  event_skip_count?: number;

  /**
   * @remarks
   * Event run for the first 'initial_event_count' number of the
   * group are placed.
   */
  initial_event?: string;

  /**
   * @remarks
   * Number of times that 'initial_event' can run
   */
  initial_event_count?: number;

  /**
   * @remarks
   * Maximum number of entities in this group to attempt to spawn
   */
  max?: number;

  /**
   * @remarks
   * Minimum number of entities in this group to attempt to spawn
   */
  min?: number;

}


/**
 * Spawn PermuteType (PermuteType)
 * Defines a weighted spawn variant that may be selected when the
 * spawn rule triggers. Configure the entity to spawn and its
 * weight relative to other permutations—higher weights mean that
 * variant spawns more frequently. Enables mob variety like zombie
 * villagers occasionally replacing regular zombies.
 */
export interface BiomeConditionsPermuteTypes {

  /**
   * @remarks
   * Specifies the entity type to spawn when selected
   */
  entity_type?: object;

  /**
   * @remarks
   * The minimum number of this permutation's entity to spawn
   */
  min_guaranteed?: number;

  /**
   * @remarks
   * The likelihood of this to be selected over the combined weight of
   * all the entities in the permutation
   */
  weight: number;

}