// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:custom_hit_test
 * 
 * minecraft:custom_hit_test Samples

Hoglin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json

 * At /minecraft:entity/component_groups/minecraft:hoglin_baby/minecraft:custom_hit_test/: 
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "width": 1,
      "height": 0.85,
      "pivot": [
        0,
        0.5,
        0
      ]
    }
  ]
}

 * At /minecraft:entity/component_groups/minecraft:hoglin_adult/minecraft:custom_hit_test/: 
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "width": 2,
      "height": 1.75,
      "pivot": [
        0,
        1,
        0
      ]
    }
  ]
}


Zoglin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zoglin.json

 * At /minecraft:entity/component_groups/zoglin_adult/minecraft:custom_hit_test/: 
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "height": 1.75,
      "pivot": [
        0,
        1,
        0
      ],
      "width": 2
    }
  ]
}

 * At /minecraft:entity/component_groups/zoglin_baby/minecraft:custom_hit_test/: 
"minecraft:custom_hit_test": {
  "hitboxes": [
    {
      "height": 0.85,
      "pivot": [
        0,
        0.5,
        0
      ],
      "width": 1
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Custom Hit Test (minecraft:custom_hit_test)
 * List of hitboxes for melee and ranged hits against the 
 * entity.
 */
export default interface MinecraftCustomHitTest {

  /**
   * @remarks
   * List of hitboxes for melee and ranged hits against the 
   * entity.
   * 
   * Sample Values:
   * Hoglin: [{"width":1,"height":0.85,"pivot":[0,0.5,0]}], [{"width":2,"height":1.75,"pivot":[0,1,0]}]
   *
   * Zoglin: [{"height":1.75,"pivot":[0,1,0],"width":2}], [{"height":0.85,"pivot":[0,0.5,0],"width":1}]
   *
   */
  hitboxes?: MinecraftCustomHitTestHitboxes[];

}


/**
 */
export interface MinecraftCustomHitTestHitboxes {

  /**
   * @remarks
   * Height of the hitbox.
   */
  height?: number;

  /**
   * @remarks
   * Pivot point of the hitbox.
   */
  pivot?: number[];

  /**
   * @remarks
   * Width of the hitbox.
   */
  width?: number;

}