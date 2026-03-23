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


Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:behavior.pickup_items": {
  "can_pickup_any_item": true,
  "excluded_items": [
    "minecraft:glow_ink_sac",
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


Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

"minecraft:behavior.pickup_items": {
  "priority": 11,
  "max_dist": 3,
  "goal_radius": 2,
  "speed_multiplier": 0.5
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
 * Pickup Items Behavior (minecraft:behavior.pickup_items)
 * Allows the mob to pick up items on the ground.
 */
export default interface MinecraftBehaviorPickupItems {

  /**
   * @remarks
   * If true, the mob can pickup any item
   * 
   * Sample Values:
   * Bogged: true
   *
   *
   */
  can_pickup_any_item?: boolean;

  /**
   * @remarks
   * If true, the mob can pickup items to its hand or armor slots
   */
  can_pickup_to_hand_or_equipment?: boolean;

  /**
   * @remarks
   * List of items this mob will not pick up
   * 
   * Sample Values:
   * Bogged: [{"tags":"q.all_tags('minecraft:is_spear')"}]
   *
   * Drowned: ["minecraft:glow_ink_sac",{"tags":"q.all_tags('minecraft:is_spear')"}]
   *
   *
   */
  excluded_items?: string[];

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
   * Drowned: 6
   *
   */
  priority?: number;

  /**
   * @remarks
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
   * Fox: 0.5
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