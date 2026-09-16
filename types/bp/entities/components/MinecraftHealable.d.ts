// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:healable
 * 
 * minecraft:healable Samples

Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:healable": {
  "items": [
    {
      "item": "wheat",
      "heal_amount": 2
    },
    {
      "item": "hay_block",
      "heal_amount": 10
    }
  ]
}


Parrot - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json

"minecraft:healable": {
  "filters": {
    "operator": "!=",
    "test": "is_riding",
    "value": true
  },
  "force_use": true,
  "items": [
    {
      "effects": [
        {
          "amplifier": 0,
          "chance": 1,
          "duration": 1000,
          "name": "fatal_poison"
        }
      ],
      "heal_amount": 0,
      "item": "cookie"
    }
  ]
}


Sniffer - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json

"minecraft:healable": {
  "items": [
    {
      "item": "torchflower_seeds",
      "heal_amount": 2
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Healable (minecraft:healable)
 * How entities heal.
 * Note: From 1.21.130, each entry in `items` accepts an optional
 * `result_item` field. On a successful heal, the consumed item is
 * replaced in the player's inventory with the specified item.
 */
export default interface MinecraftHealable {

  /**
   * @remarks
   * The filter group that defines the conditions for using this item
   * to heal the entity.
   * 
   * Sample Values:
   * Parrot: {"operator":"!=","test":"is_riding","value":true}
   *
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Determines if item can be used regardless of entity being at
   * full health.
   * 
   * Sample Values:
   * Parrot: true
   *
   */
  force_use?: boolean;

  /**
   * @remarks
   * The array of items that can be used to heal this entity.
   * 
   * Sample Values:
   * Llama: [{"item":"wheat","heal_amount":2},{"item":"hay_block","heal_amount":10}]
   *
   * Parrot: [{"effects":[{"amplifier":0,"chance":1,"duration":1000,"name":"fatal_poison"}],"heal_amount":0,"item":"cookie"}]
   *
   */
  items?: object[];

}


/**
 * Filters (filters)
 */
export interface MinecraftHealableFilters {

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