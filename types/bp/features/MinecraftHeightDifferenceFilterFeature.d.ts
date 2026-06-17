// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:height_difference_filter_feature
 */

import * as jsoncommon from '../../common';

/**
 * Height Difference Filter Feature
 * (minecraft:height_difference_filter_feature)
 * Note: Introduced in 1.26.30. Conditionally places a referenced
 * `places_feature` based on the upward and downward height
 * differences (relative to the placement position) found within
 * `search_radius` in each cardinal direction. Useful for placing
 * features that only make sense on terrain with a specific shape
 * (cliffs, gentle slopes, flat plateaus).
 */
export default interface MinecraftHeightDifferenceFilterFeature {

  description: MinecraftHeightDifferenceFilterFeatureDescription;

  /**
   * @remarks
   * Specifies the maximum height difference allowed downwards.
   */
  max_allowed_downward_height_diff?: number;

  /**
   * @remarks
   * Specifies the maximum height difference allowed upwards.
   */
  max_allowed_upward_height_diff?: number;

  /**
   * @remarks
   * Specifies the minimum height difference required downwards.
   */
  min_required_downward_height_diff?: number;

  /**
   * @remarks
   * Specifies the minimum height difference required upwards.
   */
  min_required_upward_height_diff?: number;

  /**
   * @remarks
   * 'search_radius' specifies the the length in each cardinal direction
   * the filter will check for blocks against the given 
   * differences.
   */
  search_radius: number;

}


/**
 */
export interface MinecraftHeightDifferenceFilterFeatureDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}