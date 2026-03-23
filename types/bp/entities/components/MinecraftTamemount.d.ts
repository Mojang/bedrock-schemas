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
 * Tamemount (minecraft:tamemount)
 * Allows the Entity to be tamed by mounting it.
 */
export default interface MinecraftTamemount {

  /**
   * @remarks
   * The amount the entity's temper will increase when mounted.
   */
  attempt_temper_mod?: number;

  /**
   * @remarks
   */
  auto_reject_items?: MinecraftTamemountAutoRejectItems[];

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
  feed_items?: MinecraftTamemountFeedItems[];

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
  tame_event?: jsoncommon.MinecraftEventTrigger;

}


/**
 * Auto reject items (auto_reject_items)
 */
export interface MinecraftTamemountAutoRejectItems {

  /**
   * @remarks
   * 
   * Sample Values:
   * Trader Llama: "horsearmorleather"
   *
   */
  item?: string;

}


/**
 * The list of items that, if carried while interacting with the
 * entity, will anger it.
 */
export interface MinecraftTamemountAutoRejectItems {

  /**
   * @remarks
   * Name of the item this entity dislikes and will cause it to get
   * angry if used while untamed.
   */
  item?: string;

}


/**
 * The list of items that can be used to increase the entity's temper
 * and speed up the taming process.
 */
export interface MinecraftTamemountFeedItems {

  /**
   * @remarks
   * Name of the item this entity likes and can be used to increase this
   * entity's temper.
   */
  item?: string;

  /**
   * @remarks
   * The amount of temper this entity gains when fed this item.
   */
  temper_mod?: number;

}