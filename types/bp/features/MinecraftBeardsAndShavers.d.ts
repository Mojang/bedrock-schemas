// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:beards_and_shavers
 */

import * as jsoncommon from '../../common';

/**
 * Beards And Shavers (minecraft:beards_and_shavers)
 * Carves or fills terrain within a defined bounding box during world
 * generation. 'Beard' operations add blocks below structures to
 * connect them to ground, while 'shaver' operations remove blocks
 * above to create clearance. Used for natural integration of
 * structures like villages into varied terrain.
 * IMPORTANT
 * This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.
 * 
 */
export default interface MinecraftBeardsAndShavers {

  /**
   * @remarks
   * Dimensions of the Bounding Box
   */
  bounding_box_max: string[];

  /**
   * @remarks
   * Dimensions of the Bounding Box
   */
  bounding_box_min: string[];

  description: MinecraftBeardsAndShaversDescription;

  format_version?: string;

}


/**
 */
export interface MinecraftBeardsAndShaversDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}