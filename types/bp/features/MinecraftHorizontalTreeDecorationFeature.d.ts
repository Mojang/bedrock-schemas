// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:horizontal_tree_decoration_feature
 */

import * as jsoncommon from '../../common';

/**
 * Horizontal Tree Decoration Feature
 * (minecraft:horizontal_tree_decoration_feature)
 */
export default interface MinecraftHorizontalTreeDecorationFeature {

  /**
   * @remarks
   * Whether neighbors of the same block type are allowed. Will result
   * in blocks being placed with at least one block gap when set to
   * false
   */
  allow_adjacent?: boolean;

  /**
   * @remarks
   * If true, will never place the block on the 'open' side of a
   * block (imagine the block is a fallen tree trunk).
   */
  bark_side_only?: boolean;

  description: MinecraftHorizontalTreeDecorationFeatureDescription;

}


/**
 */
export interface MinecraftHorizontalTreeDecorationFeatureDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}