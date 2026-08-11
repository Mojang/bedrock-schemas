// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:multipart_block_column_feature
 */

import * as jsoncommon from '../../common';

/**
 * Multipart Block Column Feature
 * (minecraft:multipart_block_column_feature)
 */
export default interface MinecraftMultipartBlockColumnFeature {

  description: MinecraftMultipartBlockColumnFeatureDescription;

  /**
   * @remarks
   * The direction of the column. If omitted then it will default to
   * 'UP'
   */
  direction?: string;

  may_place_on?: string[];

  may_replace?: string[];

  weighted_heights?: string[];

}


/**
 */
export interface MinecraftMultipartBlockColumnFeatureDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}