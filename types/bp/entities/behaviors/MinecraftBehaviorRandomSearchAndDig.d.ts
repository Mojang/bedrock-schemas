// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.random_search_and_dig
 * 
 * minecraft:behavior.random_search_and_dig Samples

Sniffer - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json

"minecraft:behavior.random_search_and_dig": {
  "priority": 5,
  "speed_multiplier": 1.25,
  "find_valid_position_retries": 5,
  "target_blocks": [
    "minecraft:dirt",
    "minecraft:coarse_dirt",
    "minecraft:grass",
    "minecraft:podzol",
    "minecraft:dirt_with_roots",
    "minecraft:moss_block",
    "minecraft:pale_moss_block",
    "minecraft:mud",
    "minecraft:muddy_mangrove_roots"
  ],
  "goal_radius": 2,
  "search_range_xz": 20,
  "search_range_y": 3,
  "cooldown_range": {
    "min": 0,
    "max": 0
  },
  "digging_duration_range": {
    "min": 8,
    "max": 10
  },
  "item_table": "loot_tables/gameplay/entities/sniffer_seeds.json",
  "spawn_item_after_seconds": 6,
  "spawn_item_pos_offset": 2.25,
  "on_searching_start": {
    "event": "on_searching_start",
    "target": "self"
  },
  "on_fail_during_searching": {
    "event": "on_fail_during_searching",
    "target": "self"
  },
  "on_digging_start": {
    "event": "on_digging_start",
    "target": "self"
  },
  "on_item_found": {
    "event": "on_item_found",
    "target": "self"
  },
  "on_fail_during_digging": {
    "event": "on_fail_during_digging",
    "target": "self"
  },
  "on_success": {
    "event": "on_search_and_digging_success",
    "target": "self"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Random Search And Dig Behavior
 * (minecraft:behavior.random_search_and_dig)
 * Allows this entity to locate a random target block that it can
 * path find to. Once found, the entity will move towards it and
 * dig up an item. [Default target block types: Dirt, Grass, Podzol,
 * DirtWithRoots, MossBlock, Mud, MuddyMangroveRoots].
 */
export default interface MinecraftBehaviorRandomSearchAndDig {

  control_flags?: string[];

  /**
   * @remarks
   * Goal cooldown range in seconds.
   * 
   * Sample Values:
   * Sniffer: {"min":0,"max":0}
   *
   */
  cooldown_range?: MinecraftBehaviorRandomSearchAndDigCooldownRange;

  /**
   * @remarks
   * Digging duration in seconds.
   * 
   * Sample Values:
   * Sniffer: {"min":8,"max":10}
   *
   */
  digging_duration_range?: MinecraftBehaviorRandomSearchAndDigDiggingDurationRange;

  /**
   * @remarks
   * Amount of retries to find a valid target position within search
   * range.
   * 
   * Sample Values:
   * Sniffer: 5
   *
   */
  find_valid_position_retries?: number;

  /**
   * @remarks
   * Distance in blocks within the entity to considers it has reached
   * it's target position.
   * 
   * Sample Values:
   * Sniffer: 2
   *
   */
  goal_radius?: number;

  /**
   * @remarks
   * File path relative to the resource pack root for items to spawn
   * list (loot table format).
   * 
   * Sample Values:
   * Sniffer: "loot_tables/gameplay/entities/sniffer_seeds.json"
   *
   */
  item_table?: string;

  /**
   * @remarks
   * Event to run when the goal ends searching has begins 
   * digging.
   * 
   * Sample Values:
   * Sniffer: {"event":"on_digging_start","target":"self"}
   *
   */
  on_digging_start?: MinecraftBehaviorRandomSearchAndDigOnDiggingStart;

  /**
   * @remarks
   * Event to run when the goal failed while in digging state.
   * 
   * Sample Values:
   * Sniffer: {"event":"on_fail_during_digging","target":"self"}
   *
   */
  on_fail_during_digging?: MinecraftBehaviorRandomSearchAndDigOnFailDuringDigging;

  /**
   * @remarks
   * Event to run when the goal failed while in searching state.
   * 
   * Sample Values:
   * Sniffer: {"event":"on_fail_during_searching","target":"self"}
   *
   */
  on_fail_during_searching?: MinecraftBehaviorRandomSearchAndDigOnFailDuringSearching;

  /**
   * @remarks
   * Event to run when the goal find a item.
   * 
   * Sample Values:
   * Sniffer: {"event":"on_item_found","target":"self"}
   *
   */
  on_item_found?: MinecraftBehaviorRandomSearchAndDigOnItemFound;

  /**
   * @remarks
   * Event to run when the goal starts searching.
   * 
   * Sample Values:
   * Sniffer: {"event":"on_searching_start","target":"self"}
   *
   */
  on_searching_start?: MinecraftBehaviorRandomSearchAndDigOnSearchingStart;

  /**
   * @remarks
   * Event to run when searching and digging has ended.
   * 
   * Sample Values:
   * Sniffer: {"event":"on_search_and_digging_success","target":"self"}
   *
   */
  on_success?: MinecraftBehaviorRandomSearchAndDigOnSuccess;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Sniffer: 5
   *
   */
  priority?: number;

  /**
   * @remarks
   * Width and length of the volume around the entity used to find a
   * valid target position
   * 
   * Sample Values:
   * Sniffer: 20
   *
   */
  search_range_xz?: number;

  /**
   * @remarks
   * Height of the volume around the entity used to find a valid target
   * position
   * 
   * Sample Values:
   * Sniffer: 3
   *
   */
  search_range_y?: number;

  /**
   * @remarks
   * Digging duration before spawning item in seconds.
   * 
   * Sample Values:
   * Sniffer: 6
   *
   */
  spawn_item_after_seconds?: number;

  /**
   * @remarks
   * Distance to offset the item's spawn location in the direction the
   * mob is facing.
   * 
   * Sample Values:
   * Sniffer: 2.25
   *
   */
  spawn_item_pos_offset?: number;

  /**
   * @remarks
   * Searching movement speed multiplier.
   * 
   * Sample Values:
   * Sniffer: 1.25
   *
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * List of target block types the goal will look to dig on.
   * Overrides the default list.
   * 
   * Sample Values:
   * Sniffer: ["minecraft:dirt","minecraft:coarse_dirt","minecraft:grass","minecraft:podzol","minecraft:dirt_with_roots","minecraft:moss_block","minecraft:pale_moss_block","minecraft:mud","minecraft:muddy_mangrove_roots"]
   *
   */
  target_blocks?: MinecraftBehaviorRandomSearchAndDigTargetBlocks[];

  /**
   * @remarks
   * Dig target position offset from the feet position of the mob in
   * their facing direction.
   */
  target_dig_position_offset?: number;

}


export enum MinecraftBehaviorRandomSearchAndDigControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorRandomSearchAndDigCooldownRange {

  max?: number;

  min?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorRandomSearchAndDigDiggingDurationRange {

  max?: number;

  min?: number;

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
export interface MinecraftBehaviorRandomSearchAndDigOnDiggingStart {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorRandomSearchAndDigOnDiggingStartFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorRandomSearchAndDigOnDiggingStartFilters {

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


export enum MinecraftBehaviorRandomSearchAndDigOnDiggingStartTarget {
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
export interface MinecraftBehaviorRandomSearchAndDigOnFailDuringDigging {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorRandomSearchAndDigOnFailDuringDiggingFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorRandomSearchAndDigOnFailDuringDiggingFilters {

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


export enum MinecraftBehaviorRandomSearchAndDigOnFailDuringDiggingTarget {
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
export interface MinecraftBehaviorRandomSearchAndDigOnFailDuringSearching {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorRandomSearchAndDigOnFailDuringSearchingFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorRandomSearchAndDigOnFailDuringSearchingFilters {

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


export enum MinecraftBehaviorRandomSearchAndDigOnFailDuringSearchingTarget {
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
export interface MinecraftBehaviorRandomSearchAndDigOnItemFound {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorRandomSearchAndDigOnItemFoundFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorRandomSearchAndDigOnItemFoundFilters {

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


export enum MinecraftBehaviorRandomSearchAndDigOnItemFoundTarget {
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
export interface MinecraftBehaviorRandomSearchAndDigOnSearchingStart {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorRandomSearchAndDigOnSearchingStartFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorRandomSearchAndDigOnSearchingStartFilters {

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


export enum MinecraftBehaviorRandomSearchAndDigOnSearchingStartTarget {
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
export interface MinecraftBehaviorRandomSearchAndDigOnSuccess {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorRandomSearchAndDigOnSuccessFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorRandomSearchAndDigOnSuccessFilters {

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


export enum MinecraftBehaviorRandomSearchAndDigOnSuccessTarget {
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
 * Target Blocks (target_blocks)
 */
export interface MinecraftBehaviorRandomSearchAndDigTargetBlocks {

  name?: string;

  states?: number;

  tags?: string;

}