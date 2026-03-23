// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Textures Documentation - minecraft:flipbook_textures
 * 
 * minecraft:flipbook_textures Samples

Flipbook Textures - vanilla_data/resource_packs/vanilla/textures/flipbook_textures.json

{
  "flipbook_texture": "textures/blocks/fire_0",
  "atlas_tile": "fire_0",
  "ticks_per_frame": 3
}

 */

import * as jsoncommon from '../../common';

/**
 * Flipbook Textures (flipbook_textures)
 * The flipbook_textures.json file defines animated textures for
 * blocks. Each entry specifies a texture that cycles through frames
 * at a specified rate. Located at textures/flipbook_textures.json in
 * resource packs.
 * Note: This file is a JSON array at the root level, with each
 * element being a flipbook texture definition.
 */
export default interface FlipbookTextures {

  /**
   * @remarks
   * 
   * Sample Values:
   * Flipbook Textures: "fire_0"
   *
   */
  atlas_tile?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Flipbook Textures: "textures/blocks/fire_0"
   *
   */
  flipbook_texture?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Flipbook Textures: 3
   *
   */
  ticks_per_frame?: number;

}