// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:legacy_spawn_contents
 */

import * as jsoncommon from '../../common';

/**
 * Struct Legacy Spawn Contents Spawn
 * Struct Legacy Spawn Contents Spawn.
 */
export default interface StructLegacySpawnContentsSpawn {

  /**
   * @remarks
   * conditions
   */
  conditions?: StructLegacySpawnContentsSpawnConditions[];

  /**
   * @remarks
   * description
   */
  description?: StructLegacySpawnContentsSpawnDescription;

}


/**
 * Legacy Spawn BiomeConditions
 * Legacy Spawn BiomeConditions.
 */
export interface StructLegacySpawnContentsSpawnConditions {

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  "minecraft:biome_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftBiomeFilter;

  /**
   * @remarks
   * minecraft:brightness_filter
   */
  "minecraft:brightness_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftBrightnessFilter;

  /**
   * @remarks
   * minecraft:delay_filter
   */
  "minecraft:delay_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftDelayFilter;

  /**
   * @remarks
   * minecraft:density_limit
   */
  "minecraft:density_limit"?: StructLegacySpawnContentsSpawnConditionsMinecraftDensityLimit;

  /**
   * @remarks
   * minecraft:difficulty_filter
   */
  "minecraft:difficulty_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftDifficultyFilter;

  /**
   * @remarks
   * minecraft:disallow_spawns_in_bubble
   */
  "minecraft:disallow_spawns_in_bubble"?: object;

  /**
   * @remarks
   * minecraft:distance_filter
   */
  "minecraft:distance_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftDistanceFilter;

  /**
   * @remarks
   * minecraft:height_filter
   */
  "minecraft:height_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftHeightFilter;

  /**
   * @remarks
   * minecraft:herd
   */
  "minecraft:herd"?: object;

  /**
   * @remarks
   * minecraft:is_experimental
   */
  "minecraft:is_experimental"?: object;

  /**
   * @remarks
   * minecraft:is_persistent
   */
  "minecraft:is_persistent"?: object;

  /**
   * @remarks
   * minecraft:mob_event_filter
   */
  "minecraft:mob_event_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftMobEventFilter;

  /**
   * @remarks
   * minecraft:permute_type
   */
  "minecraft:permute_type"?: object;

  /**
   * @remarks
   * minecraft:player_in_village_filter
   */
  "minecraft:player_in_village_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftPlayerInVillageFilter;

  /**
   * @remarks
   * minecraft:spawn_event
   */
  "minecraft:spawn_event"?: StructLegacySpawnContentsSpawnConditionsMinecraftSpawnEvent;

  /**
   * @remarks
   * minecraft:spawns_above_block_filter
   */
  "minecraft:spawns_above_block_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftSpawnsAboveBlockFilter;

  /**
   * @remarks
   * minecraft:spawns_lava
   */
  "minecraft:spawns_lava"?: object;

  /**
   * @remarks
   * minecraft:spawns_on_block_filter
   */
  "minecraft:spawns_on_block_filter"?: object;

  /**
   * @remarks
   * minecraft:spawns_on_block_prevented_filter
   */
  "minecraft:spawns_on_block_prevented_filter"?: object;

  /**
   * @remarks
   * minecraft:spawns_on_surface
   */
  "minecraft:spawns_on_surface"?: object;

  /**
   * @remarks
   * minecraft:spawns_underground
   */
  "minecraft:spawns_underground"?: object;

  /**
   * @remarks
   * minecraft:spawns_underwater
   */
  "minecraft:spawns_underwater"?: object;

  /**
   * @remarks
   * minecraft:weight
   */
  "minecraft:weight"?: StructLegacySpawnContentsSpawnConditionsMinecraftWeight;

  /**
   * @remarks
   * minecraft:world_age_filter
   */
  "minecraft:world_age_filter"?: StructLegacySpawnContentsSpawnConditionsMinecraftWorldAgeFilter;

}


/**
 * Biome Filter
 * Biome Filter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftBiomeFilter {

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
  test?: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


/**
 * Legacy Spawn BrightnessFilter
 * Legacy Spawn BrightnessFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftBrightnessFilter {

  /**
   * @remarks
   * adjust_for_weather
   */
  adjust_for_weather?: boolean;

  /**
   * @remarks
   * max
   */
  max?: number;

  /**
   * @remarks
   * min
   */
  min?: number;

}


/**
 * Legacy Spawn DelayFilter
 * Legacy Spawn DelayFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftDelayFilter {

  /**
   * @remarks
   * identifier
   */
  identifier?: string;

  /**
   * @remarks
   * max
   */
  max?: number;

  /**
   * @remarks
   * min
   */
  min?: number;

  /**
   * @remarks
   * spawn_chance
   */
  spawn_chance?: number;

}


/**
 * Legacy Spawn DensityLimit
 * Legacy Spawn DensityLimit.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftDensityLimit {

  /**
   * @remarks
   * surface
   */
  surface?: number;

  /**
   * @remarks
   * underground
   */
  underground?: number;

}


/**
 * Legacy Spawn DifficultyFilter
 * Legacy Spawn DifficultyFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftDifficultyFilter {

  /**
   * @remarks
   * enum SharedTypes_Legacy_Spawn_Difficulty
   */
  max?: string;

  /**
   * @remarks
   * enum SharedTypes_Legacy_Spawn_Difficulty
   */
  min?: string;

}


/**
 * Legacy Spawn DistanceFilter
 * Legacy Spawn DistanceFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftDistanceFilter {

  /**
   * @remarks
   * max
   */
  max?: number;

  /**
   * @remarks
   * min
   */
  min?: number;

}


/**
 * Legacy Spawn HeightFilter
 * Legacy Spawn HeightFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftHeightFilter {

  /**
   * @remarks
   * max
   */
  max?: number;

  /**
   * @remarks
   * min
   */
  min?: number;

}


/**
 * Legacy Spawn MobEventFilter
 * Legacy Spawn MobEventFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftMobEventFilter {

  /**
   * @remarks
   * event
   */
  event?: string;

}


/**
 * Legacy Spawn PlayerInVillageFilter
 * Legacy Spawn PlayerInVillageFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftPlayerInVillageFilter {

  /**
   * @remarks
   * distance
   */
  distance?: number;

  /**
   * @remarks
   * village_border_tolerance
   */
  village_border_tolerance?: number;

}


/**
 * Legacy Spawn MobEventFilter
 * Legacy Spawn MobEventFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftSpawnEvent {

  /**
   * @remarks
   * event
   */
  event?: string;

}


/**
 * Legacy Spawn SpawnAboveBlockFilter
 * Legacy Spawn SpawnAboveBlockFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftSpawnsAboveBlockFilter {

  /**
   * @remarks
   * blocks
   */
  blocks?: object;

  /**
   * @remarks
   * distance
   */
  distance?: number;

}


/**
 * Legacy Spawn Weight
 * Legacy Spawn Weight.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftWeight {

  /**
   * @remarks
   * default
   */
  default?: number;

  /**
   * @remarks
   * rarity
   */
  rarity?: number;

}


/**
 * Legacy Spawn WorldAgeFilter
 * Legacy Spawn WorldAgeFilter.
 */
export interface StructLegacySpawnContentsSpawnConditionsMinecraftWorldAgeFilter {

  /**
   * @remarks
   * max
   */
  max?: number;

  /**
   * @remarks
   * min
   */
  min?: number;

}


/**
 * Legacy Spawn Description
 * Legacy Spawn Description.
 */
export interface StructLegacySpawnContentsSpawnDescription {

  /**
   * @remarks
   * identifier
   */
  identifier?: string;

  /**
   * @remarks
   * population_control
   */
  population_control?: string;

}