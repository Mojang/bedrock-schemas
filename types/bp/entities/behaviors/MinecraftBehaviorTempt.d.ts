// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.tempt
 * 
 * minecraft:behavior.tempt Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 1,
  "items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ]
}


Cow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json

"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 1.25,
  "items": [
    "wheat"
  ]
}


Frog - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json

"minecraft:behavior.tempt": {
  "can_tempt_vertically": true,
  "items": [
    "slime_ball"
  ],
  "priority": 5,
  "speed_multiplier": 1.25
}


Goat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json

"minecraft:behavior.tempt": {
  "priority": 4,
  "speed_multiplier": 0.75,
  "items": [
    "wheat"
  ]
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:behavior.tempt": {
  "priority": 5,
  "speed_multiplier": 1.2,
  "items": [
    "hay_block"
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Tempt Behavior (minecraft:behavior.tempt)
 * Allows a mob to be tempted by a player holding a specific item.
 * Uses pathfinding for movement.
 */
export default interface MinecraftBehaviorTempt {

  /**
   * @remarks
   * If true, the mob can stop being tempted if the player moves too
   * fast while close to this mob.
   */
  can_get_scared?: boolean;

  /**
   * @remarks
   * If true, vertical distance to the player will be considered when
   * tempting.
   * 
   * Sample Values:
   * Frog: true
   *
   */
  can_tempt_vertically?: boolean;

  /**
   * @remarks
   * If true, the mob can be tempted even if it has a passenger (i.e.
   * if being ridden).
   */
  can_tempt_while_ridden?: boolean;

  /**
   * @remarks
   * List of items that can tempt the mob.
   * 
   * Sample Values:
   * Chicken: ["wheat_seeds","beetroot_seeds","melon_seeds","pumpkin_seeds","pitcher_pod","torchflower_seeds"]
   *
   * Cow: ["wheat"]
   *
   * Frog: ["slime_ball"]
   *
   */
  items?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Chicken: 4
   *
   *
   * Frog: 5
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * Range of random ticks to wait between tempt sounds. Can be a
   * number, an array [min, max], or an object with
   * range_min/range_max or min/max.
   */
  sound_interval?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Chicken: 1
   *
   * Cow: 1.25
   *
   *
   * Goat: 0.75
   *
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * The distance at which the mob will stop following the 
   * player.
   */
  stop_distance?: number;

  /**
   * @remarks
   * Sound to play while the mob is being tempted.
   */
  tempt_sound?: string;

  /**
   * @remarks
   * Distance in blocks this mob can get tempted by a player holding an
   * item they like.
   */
  within_radius?: number;

}