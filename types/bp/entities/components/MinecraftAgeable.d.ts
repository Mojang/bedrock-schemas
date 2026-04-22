// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:ageable
 * 
 * minecraft:ageable Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ],
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}


Cow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json

"minecraft:ageable": {
  "duration": 1200,
  "feed_items": "wheat",
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}


Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    "fish",
    "salmon"
  ],
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
  ],
  "grow_up": {
    "event": "ageable_grow_up",
    "target": "self"
  }
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:ageable": {
  "duration": 1200,
  "feed_items": [
    {
      "item": "wheat",
      "growth": 0.1
    },
    {
      "item": "hay_block",
      "growth": 0.9
    }
  ],
  "pause_growth_items": [
    "golden_dandelion"
  ],
  "reset_growth_items": [
    "golden_dandelion"
  ],
  "grow_up": {
    "event": "minecraft:ageable_grow_up",
    "target": "self"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Ageable (minecraft:ageable)
 * Adds a timer for the entity to grow up. It can be accelerated by
 * giving the entity the items it likes as defined by 
 * feed_items.
 */
export default interface MinecraftAgeable {

  /**
   * @remarks
   * List of items that are dropped when an entity grows up
   */
  drop_items?: string[];

  /**
   * @remarks
   * Length of time before an entity grows up (-1 to always stay a
   * baby)
   * 
   * Sample Values:
   * Chicken: 1200
   *
   *
   */
  duration?: number;

  /**
   * @remarks
   * List of items that can be fed to an entity to age them up. Can
   * be a single item string, an array of strings, or an array of
   * objects with item and growth properties.
   * 
   * Sample Values:
   * Chicken: ["wheat_seeds","beetroot_seeds","melon_seeds","pumpkin_seeds","pitcher_pod","torchflower_seeds"]
   *
   * Cow: "wheat"
   *
   * Dolphin: ["fish","salmon"]
   *
   */
  feed_items?: MinecraftAgeableFeedItems[];

  /**
   * @remarks
   * Event to fire when an entity grows up. Can be an object with
   * event and target properties, or a simple event string.
   * 
   * Sample Values:
   * Chicken: {"event":"minecraft:ageable_grow_up","target":"self"}
   *
   *
   * Dolphin: {"event":"ageable_grow_up","target":"self"}
   *
   */
  grow_up?: object;

  /**
   * @remarks
   * List of conditions to meet so that the entity can be fed.
   */
  interact_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * List of items that can be fed to the entity to pause growth for
   * baby entities.
   * 
   * Sample Values:
   * Chicken: ["golden_dandelion"]
   *
   *
   */
  pause_growth_items?: string[];

  /**
   * @remarks
   * List of items that can be used to reset growth for baby 
   * entities.
   * 
   * Sample Values:
   * Chicken: ["golden_dandelion"]
   *
   *
   */
  reset_growth_items?: string[];

}


/**
 */
export interface MinecraftAgeableFeedItems {

  /**
   * @remarks
   * How much the entity ages when fed this item.
   */
  growth?: number;

  /**
   * @remarks
   * The item identifier.
   */
  item?: string;

}