// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:placement_filter
 */

import * as jsoncommon from '../../../common';

/**
 * Block Placement Filter (Placement Filter)
 * Sets rules for under what conditions the block can be placed and
 * survive. If the placement conditions are not met, the block cannot
 * be placed. If the block is already placed and the conditions become
 * invalid (e.g., the supporting block is removed), the block will
 * pop off and drop as an item. If the blocks in the filter are
 * liquid blocks, ensure that an item block is created with a
 * 'liquid_clipped' component set to 'true' and a 'block_placer' component
 * with 'replace_block_item' set to 'true'.
 * Note: Fixed in 1.26.10: `minecraft:placement_filter` and
 * `minecraft:block_placer` now correctly support placing on
 * liquid blocks when the item uses `liquid_clipped`.
 */
export default interface PlacementFilter {

  /**
   * @remarks
   * List of conditions where the block can be placed/survive
   */
  conditions?: PlacementFilterConditions[];

}


/**
 * Block Placement Condition (Placement Condition)
 */
export interface PlacementFilterConditions {

  /**
   * @remarks
   * List of any of the following strings describing which face(s) this
   * block can be placed on
   */
  allowed_faces?: object;

  /**
   * @remarks
   * List of blocks that this block can be placed against in the
   * "allowed_faces" direction. Each block in this list can either be
   * specified as a String (block name) or as a BlockDescriptor.
   */
  block_filter?: PlacementFilterConditionsBlockFilter[];

}


/**
 * Block Filter (block_filter)
 */
export interface PlacementFilterConditionsBlockFilter {

  name?: string;

  states?: number;

  tags?: string;

}