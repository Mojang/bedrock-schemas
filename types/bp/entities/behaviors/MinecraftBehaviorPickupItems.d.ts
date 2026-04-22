// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.pickup_items
 * 
 * minecraft:behavior.pickup_items Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": false,
  "search_height": 32,
  "priority": 2,
  "goal_radius": 2.2,
  "can_pickup_to_hand_or_equipment": false,
  "max_dist": 32,
  "pickup_based_on_chance": false,
  "pickup_same_items_as_in_hand": true,
  "speed_multiplier": 6
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": true,
  "excluded_items": [
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ],
  "pickup_based_on_chance": true,
  "goal_radius": 2,
  "priority": 5,
  "max_dist": 3,
  "speed_multiplier": 1
}


Parched - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json

"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": true,
  "excluded_items": [
    {
      "tags": "q.all_tags('minecraft:is_spear')"
    }
  ],
  "pickup_based_on_chance": true,
  "goal_radius": 2,
  "priority": 6,
  "max_dist": 3,
  "speed_multiplier": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Pickup Items Behavior 
 * (minecraft:behavior.pickup_items)
 * Allows the mob to pick up items on the ground.
 */
export default interface MinecraftBehaviorPickupItems {

  /**
   * @remarks
   * If true, the mob can pick up any item
   * 
   * Sample Values:
   * Bogged: true
   *
   *
   */
  can_pickup_any_item?: boolean;

  /**
   * @remarks
   * If true, the mob can pick up items to its hand or armor 
   * slots
   */
  can_pickup_to_hand_or_equipment?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob cannot pickup items after being 
   * attacked
   */
  cooldown_after_being_attacked?: number;

  /**
   * @remarks
   * List of items this mob will not pick up
   * 
   * Sample Values:
   * Bogged: [{"tags":"q.all_tags('minecraft:is_spear')"}]
   *
   *
   */
  excluded_items?: string;

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot
   * 
   * Sample Values:
   * Allay: 2.2
   *
   * Bogged: 2
   *
   *
   */
  goal_radius?: number;

  /**
   * @remarks
   * Maximum distance this mob will look for items to pick up
   * 
   * Sample Values:
   * Allay: 32
   *
   * Bogged: 3
   *
   *
   */
  max_dist?: number;

  /**
   * @remarks
   * Event to run when this mob either finishes or loses interest in
   * picking up an item
   */
  on_pickup_item_end?: MinecraftBehaviorPickupItemsOnPickupItemEnd;

  /**
   * @remarks
   * Event to run when this mob moves to pick up an item
   */
  on_pickup_item_start?: MinecraftBehaviorPickupItemsOnPickupItemStart;

  /**
   * @remarks
   * If true, depending on the difficulty, there is a random chance that
   * the mob may not be able to pickup items
   * 
   * Sample Values:
   * Bogged: true
   *
   *
   */
  pickup_based_on_chance?: boolean;

  /**
   * @remarks
   * If true, the mob will only pick up items that match what it is
   * already holding.
   * 
   * Sample Values:
   * Allay: true
   *
   */
  pickup_same_items_as_in_hand?: boolean;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Allay: 2
   *
   * Bogged: 5
   *
   * Parched: 6
   *
   */
  priority?: number;

  /**
   * @remarks
   * Height in blocks the mob will search for items
   * 
   * Sample Values:
   * Allay: 32
   *
   */
  search_height?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Allay: 6
   *
   * Bogged: 1
   *
   *
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * If true, this mob will chase after the target as long as it's a
   * valid target
   */
  track_target?: boolean;

}


export enum MinecraftBehaviorPickupItemsControlFlags {
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
export interface MinecraftBehaviorPickupItemsOnPickupItemEnd {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorPickupItemsOnPickupItemEndFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorPickupItemsOnPickupItemEndFilters {

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


export enum MinecraftBehaviorPickupItemsOnPickupItemEndTarget {
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
export interface MinecraftBehaviorPickupItemsOnPickupItemStart {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorPickupItemsOnPickupItemStartFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorPickupItemsOnPickupItemStartFilters {

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


export enum MinecraftBehaviorPickupItemsOnPickupItemStartTarget {
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