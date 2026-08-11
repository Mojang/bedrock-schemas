// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:block_placer
 * 
 * minecraft:block_placer Samples
"minecraft:block_placer": {
  "block": "seeds",
  "use_on": [
    "dirt",
    "grass"
  ],
  "replace_block_item": true
}


Red Shrub - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/red_shrub.json

"minecraft:block_placer": {
  "block": "minecraft:red_shrub",
  "replace_block_item": true
}


Shelf Mushroom - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/shelf_mushroom.json

"minecraft:block_placer": {
  "block": "minecraft:shelf_mushroom",
  "replace_block_item": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Block Placer (minecraft:block_placer)
 * Sets the item as a placer item component for blocks. Items with
 * this component will place a block when used.
 * Note: This component can also be used instead of the
 * minecraft:icon component to render the block this item will place
 * as the icon.
 */
export default interface MinecraftBlockPlacer {

  /**
   * @remarks
   * When true, block placement through this item is aligned while the
   * interaction button is held down. Supported from `format_version` 1.26.0
   * onward.
   */
  aligned_placement?: boolean;

  /**
   * @remarks
   * Defines the block that will be placed.
   * 
   * Sample Values:
   * Red Shrub: "minecraft:red_shrub"
   *
   * Shelf Mushroom: "minecraft:shelf_mushroom"
   *
   */
  block: string;

  /**
   * @remarks
   * If true, the item will be registered as the item for this block.
   * This item will be returned by default when the block is
   * broken/picked. Note: the identifier for this item must match the
   * block's identifier for this field to be valid. Defaults to
   * false.
   * 
   * Sample Values:
   * Red Shrub: true
   *
   *
   */
  replace_block_item?: boolean;

  /**
   * @remarks
   * List of block descriptors of the blocks that this item can be
   * used on. If left empty, all blocks will be allowed.
   */
  use_on?: MinecraftBlockPlacerUseOn[];

}


/**
 * Use On (use_on)
 */
export interface MinecraftBlockPlacerUseOn {

  name?: string;

  states?: number;

  tags?: string;

}