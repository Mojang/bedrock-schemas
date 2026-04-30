// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_biomeconditions
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Biome Conditions (Spawn BiomeConditions)
 * Defines the conditions under which an entity can spawn, including
 * biome filters, brightness, height, and herd settings.
 */
export default interface SpawnBiomeConditions {

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  "minecraft:biome_filter"?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Restricts spawning based on light level. Hostile mobs typically spawn
   * in darkness (0-7), passive mobs in brighter areas.
   */
  "minecraft:brightness_filter"?: SpawnBiomeConditionsMinecraftBrightnessFilter;

  /**
   * @remarks
   * Delays entity spawning by a configurable time after conditions are
   * met. Useful for cooldowns after mob deaths.
   */
  "minecraft:delay_filter"?: SpawnBiomeConditionsMinecraftDelayFilter;

  /**
   * @remarks
   * Limits how many of this entity can exist in an area, with
   * separate caps for surface and underground. Set -1 for 
   * unlimited.
   */
  "minecraft:density_limit"?: SpawnBiomeConditionsMinecraftDensityLimit;

  /**
   * @remarks
   * Restricts spawning to specific difficulty levels (Peaceful, Easy,
   * Normal, Hard).
   */
  "minecraft:difficulty_filter"?: SpawnBiomeConditionsMinecraftDifficultyFilter;

  /**
   * @remarks
   * Prevents spawning inside bubble columns.
   */
  "minecraft:disallow_spawns_in_bubble"?: object;

  /**
   * @remarks
   * Controls spawning based on distance from the nearest player. Mobs
   * typically spawn 24-128 blocks from players.
   */
  "minecraft:distance_filter"?: SpawnBiomeConditionsMinecraftDistanceFilter;

  /**
   * @remarks
   * Restricts spawning to specific Y-coordinate ranges. Useful for
   * depth-based mob distribution.
   */
  "minecraft:height_filter"?: SpawnBiomeConditionsMinecraftHeightFilter;

  /**
   * @remarks
   * Specifies herd spawning configuration. Can be a single herd
   * object or an array of herd objects.
   */
  "minecraft:herd"?: object;

  /**
   * @remarks
   * Marks this spawn rule as experimental. Only active when the
   * corresponding experiment toggle is enabled.
   */
  "minecraft:is_experimental"?: object;

  /**
   * @remarks
   * When enabled, spawned entities will not despawn naturally. Used
   * for mobs like villagers.
   */
  "minecraft:is_persistent"?: object;

  /**
   * @remarks
   * Controls spawning based on whether a specific mob event (like
   * raids or wandering traders) is active.
   */
  "minecraft:mob_event_filter"?: SpawnBiomeConditionsMinecraftMobEventFilter;

  /**
   * @remarks
   * Specifies permutation types for spawning. Can be a single object or
   * an array of permutation objects.
   */
  "minecraft:permute_type"?: object;

  /**
   * @remarks
   * Restricts spawning to when a player is near a village. Used for
   * iron golems, cats, and raid mobs.
   */
  "minecraft:player_in_village_filter"?: SpawnBiomeConditionsMinecraftPlayerInVillageFilter;

  /**
   * @remarks
   * Triggers a specific entity event when the mob spawns. Commonly used
   * to initialize entity behavior.
   */
  "minecraft:spawn_event"?: SpawnBiomeConditionsMinecraftSpawnEvent;

  /**
   * @remarks
   * Filters spawning based on blocks above the spawn point.
   */
  "minecraft:spawns_above_block_filter"?: SpawnBiomeConditionsMinecraftSpawnsAboveBlockFilter;

  /**
   * @remarks
   * Indicates the entity can spawn in lava.
   */
  "minecraft:spawns_lava"?: object;

  /**
   * @remarks
   * Specifies blocks on which this entity can spawn. Can be a
   * single block name string, an array of block objects with name
   * property, or an array of strings representing block names.
   */
  "minecraft:spawns_on_block_filter"?: object[];

  /**
   * @remarks
   * Specifies blocks on which this entity cannot spawn. Can be an
   * array of block name strings.
   */
  "minecraft:spawns_on_block_prevented_filter"?: string[];

  /**
   * @remarks
   * When enabled, this entity can spawn on the world surface.
   */
  "minecraft:spawns_on_surface"?: object;

  /**
   * @remarks
   * When enabled, this entity can spawn underground (below the
   * surface).
   */
  "minecraft:spawns_underground"?: object;

  /**
   * @remarks
   * When enabled, this entity can spawn in water.
   */
  "minecraft:spawns_underwater"?: object;

  /**
   * @remarks
   * Relative spawn probability compared to other entities in the
   * same biome. Higher values = more frequent spawns. 100 is
   * typical for common mobs.
   */
  "minecraft:weight"?: SpawnBiomeConditionsMinecraftWeight;

  /**
   * @remarks
   * Restricts spawning based on world age (in ticks). Useful for
   * progressive difficulty where certain mobs appear later.
   */
  "minecraft:world_age_filter"?: SpawnBiomeConditionsMinecraftWorldAgeFilter;

}


/**
 * Biome Filter (minecraft:biome_filter)
 */
export interface SpawnBiomeConditionsMinecraftBiomeFilter {

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
 * Spawn BrightnessFilter (Spawn BrightnessFilter)
 * Restricts mob spawning based on light level at the spawn location.
 * Hostile mobs typically spawn in darkness (light level 0-7), while
 * passive mobs spawn in brighter areas. Allows setting min/max
 * brightness thresholds and whether to adjust for spawning on a
 * block surface.
 */
export interface SpawnBiomeConditionsMinecraftBrightnessFilter {

  adjust_for_weather?: boolean;

  max?: number;

  min?: number;

}


/**
 * Spawn DelayFilter (Spawn DelayFilter)
 * Delays entity spawning by a configurable amount of time after
 * spawn conditions are met. Useful for preventing immediate respawning
 * after mob deaths or creating spawn cooldowns for rare 
 * creatures.
 */
export interface SpawnBiomeConditionsMinecraftDelayFilter {

  identifier?: string;

  max?: number;

  min?: number;

  spawn_chance?: number;

}


/**
 * Spawn DensityLimit (Spawn DensityLimit)
 * Limits how many of this entity type can exist in an area, with
 * separate caps for surface and underground spawning. This prevents
 * overpopulation and controls mob density for performance and
 * gameplay balance.
 */
export interface SpawnBiomeConditionsMinecraftDensityLimit {

  surface?: number;

  underground?: number;

}


/**
 * Spawn DifficultyFilter (Spawn DifficultyFilter)
 * Restricts mob spawning to specific difficulty levels (Peaceful, Easy,
 * Normal, Hard). For example, hostile mobs don't spawn on
 * Peaceful, and some dangerous variants only appear on Hard
 * difficulty.
 */
export interface SpawnBiomeConditionsMinecraftDifficultyFilter {

  max?: string;

  min?: string;

}


export enum SpawnBiomeConditionsMinecraftDifficultyFilterMax {
  easy = `easy`,
  hard = `hard`,
  normal = `normal`,
  peaceful = `peaceful`
}


export enum SpawnBiomeConditionsMinecraftDifficultyFilterMin {
  easy = `easy`,
  hard = `hard`,
  normal = `normal`,
  peaceful = `peaceful`
}


/**
 * Spawn DistanceFilter (Spawn DistanceFilter)
 * Controls spawning based on distance from the nearest player. Mobs
 * typically spawn within a certain radius around players (24-128
 * blocks) and despawn when players move too far away.
 */
export interface SpawnBiomeConditionsMinecraftDistanceFilter {

  max?: number;

  min?: number;

}


/**
 * Spawn HeightFilter (Spawn HeightFilter)
 * Restricts entity spawning to specific Y-coordinate ranges. Useful
 * for creating depth-based mob distribution like slimes in swamps
 * (below Y=40), or limiting surface mobs from spawning 
 * underground.
 */
export interface SpawnBiomeConditionsMinecraftHeightFilter {

  max?: number;

  min?: number;

}


/**
 * Spawn MobEventFilter (Spawn MobEventFilter)
 * Controls spawning based on whether a specific mob event is
 * active. Mob events are world-level toggles (like raids or
 * wandering traders) that can enable or disable certain spawn
 * behaviors.
 */
export interface SpawnBiomeConditionsMinecraftMobEventFilter {

  event?: string;

}


/**
 * Spawn PlayerInVillageFilter (Spawn PlayerInVillageFilter)
 * Restricts spawning based on whether a player is within village
 * boundaries. Used for village-specific spawns like iron golems, cats,
 * and raid mobs that should only appear when players are near
 * villages.
 */
export interface SpawnBiomeConditionsMinecraftPlayerInVillageFilter {

  distance: number;

  village_border_tolerance?: number;

}


/**
 * Spawn MobEventFilter (Spawn MobEventFilter)
 * Controls spawning based on whether a specific mob event is
 * active. Mob events are world-level toggles (like raids or
 * wandering traders) that can enable or disable certain spawn
 * behaviors.
 */
export interface SpawnBiomeConditionsMinecraftSpawnEvent {

  event?: string;

}


/**
 * Spawns Above Block Filter (Spawn SpawnAboveBlockFilter)
 * Filters spawning based on blocks above the spawn location. This
 * component appears to have been deprecated or changed in
 * versions after 1.17.20.
 * Note: This spawn condition was used in versions 1.17.20 and
 * earlier but appears to have been removed or replaced in newer
 * versions.
 * IMPORTANT
 * This type is now deprecated, and no longer in use in the latest versions of Minecraft.
 * 
 */
export interface SpawnBiomeConditionsMinecraftSpawnsAboveBlockFilter {

  blocks?: object;

  distance?: number;

}


/**
 * Spawn Weight (Spawn Weight)
 * Defines the relative probability of this entity spawning compared to
 * other entities in the same biome and spawn pool. Higher weight
 * values mean more frequent spawns. A weight of 100 is typical for
 * common mobs.
 */
export interface SpawnBiomeConditionsMinecraftWeight {

  default: number;

  rarity?: number;

}


/**
 * Spawn WorldAgeFilter (Spawn WorldAgeFilter)
 * Restricts spawning based on how long the world has existed (measured
 * in ticks). Useful for progressive difficulty where certain mobs
 * only start appearing after the world has been played for a
 * minimum amount of time.
 */
export interface SpawnBiomeConditionsMinecraftWorldAgeFilter {

  max?: number;

  min?: number;

}