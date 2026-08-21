// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:tamemount
 * 
 * minecraft:tamemount Samples

Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 30,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "hay_block",
      "temper_mod": 6
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}


Trader Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json

"minecraft:tamemount": {
  "min_temper": 0,
  "max_temper": 30,
  "feed_text": "action.interact.feed",
  "ride_text": "action.interact.mount",
  "feed_items": [
    {
      "item": "wheat",
      "temper_mod": 3
    },
    {
      "item": "hay_block",
      "temper_mod": 6
    }
  ],
  "auto_reject_items": [
    {
      "item": "horsearmorleather"
    },
    {
      "item": "horsearmoriron"
    },
    {
      "item": "horsearmorgold"
    },
    {
      "item": "horsearmordiamond"
    },
    {
      "item": "minecraft:copper_horse_armor"
    },
    {
      "item": "minecraft:netherite_horse_armor"
    },
    {
      "item": "saddle"
    }
  ],
  "tame_event": {
    "event": "minecraft:on_tame",
    "target": "self"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Tamemount (minecraft:tamemount)
 * Allows entities to flock in groups in water or not.
 */
export default interface MinecraftTamemount {

  /**
   * @remarks
   * The amount the entity's temper will increase when mounted.
   */
  attempt_temper_mod?: number;

  /**
   * @remarks
   * The list of items that, if carried while interacting with the
   * entity, will anger it.
   */
  auto_reject_items?: object[];

  /**
   * @remarks
   * The list of items that, if carried while interacting with the
   * entity, will anger it.
   */
  autoRejectItems?: MinecraftTamemountAutoRejectItems[];

  /**
   * @remarks
   * The list of items that can be used to increase the entity's temper
   * and speed up the taming process.
   * 
   * Sample Values:
   * Llama: [{"item":"wheat","temper_mod":3},{"item":"hay_block","temper_mod":6}]
   *
   *
   */
  feed_items?: object[];

  /**
   * @remarks
   * The text that shows in the feeding interact button.
   * 
   * Sample Values:
   * Llama: "action.interact.feed"
   *
   *
   */
  feed_text?: string;

  /**
   * @remarks
   * The maximum value for the entity's random starting temper.
   * 
   * Sample Values:
   * Llama: 30
   *
   *
   */
  max_temper?: number;

  /**
   * @remarks
   * The minimum value for the entity's random starting temper.
   */
  min_temper?: number;

  /**
   * @remarks
   * The text that shows in the riding interact button.
   * 
   * Sample Values:
   * Llama: "action.interact.mount"
   *
   *
   */
  ride_text?: string;

  /**
   * @remarks
   * Event that triggers when the entity becomes tamed.
   * 
   * Sample Values:
   * Llama: {"event":"minecraft:on_tame","target":"self"}
   *
   *
   */
  tame_event?: MinecraftTamemountTameEvent;

}


/**
 * The list of items that, if carried while interacting with the
 * entity, will anger it.
 */
export interface MinecraftTamemountAutoRejectItems {

  /**
   * @remarks
   * The list of items that, if carried while interacting with the
   * entity, will anger it.
   */
  item?: string;

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
export interface MinecraftTamemountTameEvent {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftTamemountTameEventFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftTamemountTameEventFilters {

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


export enum MinecraftTamemountTameEventTarget {
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