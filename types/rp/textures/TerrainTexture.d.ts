// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Textures Documentation - minecraft:terrain_texture
 * 
 * minecraft:terrain_texture Samples

Terrain Texture - vanilla_data/resource_packs/vanilla/textures/terrain_texture.json

{
  "textures": [
    "textures/blocks/stone"
  ]
}

 */

import * as jsoncommon from '../../common';

/**
 * Terrain Texture Atlas (terrain_texture)
 * The terrain_texture.json file defines the texture atlas for
 * block textures. It maps texture names to texture file paths,
 * allowing blocks to reference textures by name. Located at
 * textures/terrain_texture.json in resource packs.
 */
export default interface TerrainTexture {

  /**
   * @remarks
   * The number of mipmap levels to generate for the atlas.
   */
  num_mip_levels?: number;

  /**
   * @remarks
   * The padding in pixels between textures in the atlas to prevent
   * bleeding.
   */
  padding?: number;

  /**
   * @remarks
   * The name of the resource pack this atlas belongs to.
   */
  resource_pack_name: string;

  /**
   * @remarks
   * A collection of texture definitions keyed by texture name. Each
   * entry maps a texture name to its source file(s).
   */
  texture_data: { [key: string]: TerrainTextureTextureData };

  /**
   * @remarks
   * The name of the texture atlas. Typically 'atlas.terrain' for
   * block textures.
   */
  texture_name: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Terrain Texture: ["textures/blocks/stone"]
   *
   */
  textures?: string[];

}


/**
 * Texture Entry (terrain_texture_entry)
 * Defines a texture that can be referenced by blocks.
 */
export interface TerrainTextureTextureData {

  /**
   * @remarks
   * A color to overlay on top of the texture, specified as a hex
   * color code.
   */
  overlay_color?: string;

  /**
   * @remarks
   * Array of texture file paths. Multiple paths can be provided for
   * variants (used with aux values in older versions).
   */
  textures: string[];

}