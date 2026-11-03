// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:crevasse_feature
 */

import * as jsoncommon from '../../common';

/**
 * Crevasse Feature (minecraft:crevasse_feature)
 */
export default interface MinecraftCrevasseFeature {

  description: MinecraftCrevasseFeatureDescription;

  /**
   * @remarks
   * Maximum end-to-end length of the crevasse, in blocks.
   */
  max_length?: number;

  /**
   * @remarks
   * Maximum width of the crevasse cross-section, in blocks.
   */
  max_width?: number;

  /**
   * @remarks
   * Minimum connected horizontal footprint required before carving
   * begins, in blocks.
   */
  min_footprint?: number;

}


/**
 */
export interface MinecraftCrevasseFeatureDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}