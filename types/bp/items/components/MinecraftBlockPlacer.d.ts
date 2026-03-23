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
 */

import * as jsoncommon from '../../../common';

/**
 * Item Block Placer (minecraft:block_placer)
 * Items with the block_placer component will place a block when
 * used. 
This component can also be used instead of the
 * "minecraft:icon" component to render the referenced block as
 * the item icon.
 */
export default interface MinecraftBlockPlacer {

  /**
   * @remarks
   * If true, block placement through this item will be aligned while
   * holding the interaction button down. Defaults to false.
   */
  aligned_placement?: boolean;

  /**
   * @remarks
   * Defines the block that will be placed.
   */
  block: object;

  /**
   * @remarks
   * If true, the item will be registered as the item for this block.
   * This item will be returned by default when the block is
   * broken/picked. Note: the identifier for this item must match the
   * block's identifier for this field to be valid. Defaults to
   * false.
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