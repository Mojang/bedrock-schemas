// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:sculk_patch_feature
 */

import * as jsoncommon from '../../common';

/**
 * Sculk Patch Feature (minecraft:sculk_patch_feature)
 * Generates clusters of sculk blocks with veins spreading across
 * surfaces, as found in Deep Dark biomes and Ancient Cities. Configure
 * patch size, spread pattern, and catalyst generation. Creates the
 * distinctive dark blue organic growth that defines sculk-infected
 * underground areas.
 * IMPORTANT
 * This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.
 * 
 */
export default interface MinecraftSculkPatchFeature {

  can_place_sculk_patch_on: string[];

  charge_amount: number;

  cursor_count: number;

  description: MinecraftSculkPatchFeatureDescription;

  format_version?: string;

  growth_rounds: number;

  spread_attempts: number;

  spread_rounds: number;

}


/**
 */
export interface MinecraftSculkPatchFeatureDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}