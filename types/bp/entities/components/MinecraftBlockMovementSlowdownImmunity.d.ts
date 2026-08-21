// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:block_movement_slowdown_immunity
 * 
 * minecraft:block_movement_slowdown_immunity Samples

Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

"minecraft:block_movement_slowdown_immunity": {
  "blocks": [
    "minecraft:web"
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Block Movement Slowdown Immunity
 * (minecraft:block_movement_slowdown_immunity)
 * Prevents specified blocks from contributing to this entity's block
 * movement slowdown. It does not cause other blocks to apply
 * slowdown.
 */
export default interface MinecraftBlockMovementSlowdownImmunity {

  /**
   * @remarks
   * List of block descriptors whose existing movement slowdown
   * contribution should be ignored. If omitted or empty, no
   * contributions are ignored.
   * 
   * Sample Values:
   * Cave Spider: ["minecraft:web"]
   *
   *
   */
  blocks?: MinecraftBlockMovementSlowdownImmunityBlocks[];

}


/**
 * Blocks (blocks)
 */
export interface MinecraftBlockMovementSlowdownImmunityBlocks {

  name?: string;

  states?: number;

  tags?: string;

}