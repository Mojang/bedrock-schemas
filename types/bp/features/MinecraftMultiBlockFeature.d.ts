// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:multi_block_feature
 */

import * as jsoncommon from '../../common';

/**
 * Multi Block Feature (minecraft:multi_block_feature)
 * Places a multi-block in the world as a biome decoration feature. A
 * multi-block must be defined with the `minecraft:multi_block` trait.
 * The required `places_block` field supports a single block, it
 * must be a multi-block and it must be be the first part of a
 * multi-block i.e. the `minecraft:multi_block_part` state must have
 * a value of 0. The optional `may_replace` field is an allowlists which
 * specifies what blocks each part of the multi-block can replace. If
 * this field is omitted, the multi-block parts can be placed
 * anywhere. However, they may not replace other multi-block parts.
 * The optional `randomize_rotation` field will randomize the
 * multi-blocks cardinal orientation. If this field is enabled then
 * the multi-block must have the cardinal direction state. The
 * optional `enforce_placement_rules` field will check if each part
 * of the multi-block may be placed on top of existing blocks. If
 * the multi-block defines a `minecraft:placement_filter` component then
 * each part is also checked against the blocks defined in that
 * component.
 * Note: This item requires a format version of at least 
 * 1.26.50.
 */
export default interface MinecraftMultiBlockFeature {

  description: MinecraftMultiBlockFeatureDescription;

  /**
   * @remarks
   * If true, enforce the multi-blocks mayPlace checks.
   */
  enforce_placement_rules?: boolean;

  may_replace?: string[];

  /**
   * @remarks
   * If true, randomizes the block's cardinal orientation.
   */
  randomize_rotation?: boolean;

}


/**
 */
export interface MinecraftMultiBlockFeatureDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}