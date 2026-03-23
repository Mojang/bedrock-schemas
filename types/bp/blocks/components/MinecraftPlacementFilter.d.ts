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
 * Placement Filter (minecraft:placement_filter)
 * Sets rules for under what conditions the block can be placed and
 * survive. If the placement conditions are not met, the block cannot
 * be placed. If the block is already placed and the conditions become
 * invalid (e.g., the supporting block is removed), the block will
 * pop off and drop as an item. If the blocks in the filter are
 * liquid blocks, ensure that an item block is created with a
 * 'liquid_clipped' component set to 'true' and a 'block_placer' component
 * with 'replace_block_item' set to 'true'.
 */
export default interface MinecraftPlacementFilter {

  /**
   * @remarks
   * List of conditions where the block can be placed/survive. Limited to
   * 64 conditions.
   */
  conditions?: MinecraftPlacementFilterConditions[];

}


/**
 * List of conditions where the block can be placed/survive. Limited to
 * 64 conditions.
 */
export interface MinecraftPlacementFilterConditions {

  /**
   * @remarks
   * List of any of the following strings describing which face(s) this
   * block can be placed on: "up", "down", "north", "south", "east",
   * "west", "side", "all". Limited to 6 faces.
   */
  allowed_faces?: string[];

  /**
   * @remarks
   * List of blocks that this block can be placed against in the
   * "allowed_faces" direction. Limited to 64 blocks. Each block in
   * this list can either be specified as a String (block name) or
   * as a BlockDescriptor. A BlockDescriptor is an object that allows
   * you to reference a block (or multiple blocks) based on its tags,
   * or based on its name and states. The fields of a
   * BlockDescriptor are described below. If the blocks in the filter
   * are liquid blocks, ensure that an item block is created with a
   * 'liquid_clipped' component set to 'true' and a 'block_placer' component
   * with 'replace_block_item' set to 'true'.
   */
  block_filter?: MinecraftPlacementFilterConditionsBlockFilter[];

}


/**
 * List of blocks that this block can be placed against in the
 * "allowed_faces" direction. Limited to 64 blocks. Each block in
 * this list can either be specified as a String (block name) or
 * as a BlockDescriptor. A BlockDescriptor is an object that allows
 * you to reference a block (or multiple blocks) based on its tags,
 * or based on its name and states. The fields of a
 * BlockDescriptor are described below. If the blocks in the filter
 * are liquid blocks, ensure that an item block is created with a
 * 'liquid_clipped' component set to 'true' and a 'block_placer' component
 * with 'replace_block_item' set to 'true'.
 */
export interface MinecraftPlacementFilterConditionsBlockFilter {

  /**
   * @remarks
   * The name of a block.
   */
  name?: string;

  /**
   * @remarks
   * The list of Vanilla block states and their values that the block
   * can have, expressed in key/value pairs.
   */
  states?: string[];

  /**
   * @remarks
   * A condition using Molang queries that results to true/false that
   * can be used to query for blocks with certain tags.
   */
  tags?: string;

}