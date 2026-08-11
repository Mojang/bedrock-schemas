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