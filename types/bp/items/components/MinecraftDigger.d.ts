// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:digger
 * 
 * minecraft:digger Samples
"minecraft:digger": {
  "minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
      {
        "speed": 6,
        "block": {
          "tags": "query.any_tag( 'wood' )"
        }
      },
      {
        "block": "minecraft:coal_ore",
        "speed": 2
      }
    ]
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Digger (minecraft:digger)
 * Configures an item as a digging tool, allowing it to break
 * specific blocks faster than normal. Define which blocks are
 * affected and the speed multiplier for each.
 */
export default interface MinecraftDigger {

  /**
   * @remarks
   * An array of objects that define which blocks this item can dig
   * and at what speed. Each entry specifies a block (by ID or tag
   * query) and a speed multiplier.
   */
  destroy_speeds?: MinecraftDiggerDestroySpeeds[];

  /**
   * @remarks
   * When true, the Efficiency enchantment will increase the dig
   * speed of this item. Default is false.
   */
  use_efficiency?: boolean;

}


/**
 * Item BlockInfo (BlockInfo)
 * Associates a block type with a custom digging speed multiplier for
 * the minecraft:digger component. Map blocks to speed values so
 * pickaxes mine stone quickly, axes chop wood faster, and custom
 * tools excel at specific materials. Enables tool specialization matching
 * vanilla Minecraft conventions.
 */
export interface MinecraftDiggerDestroySpeeds {

  /**
   * @remarks
   * Block to be dug.
   */
  block: MinecraftDiggerDestroySpeedsBlock;

  /**
   * @remarks
   * Digging speed for the correlating block(s).
   */
  speed: number;

}


/**
 * Block (block)
 */
export interface MinecraftDiggerDestroySpeedsBlock {

  name?: string;

  states?: number;

  tags?: string;

}