// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Textures Documentation - minecraft:item_texture
 * 
 * minecraft:item_texture Samples

Item Texture - vanilla_data/resource_packs/vanilla/textures/item_texture.json

{
  "textures": [
    "textures/items/apple"
  ]
}

 */

import * as jsoncommon from '../../common';

/**
 * Item Texture Atlas (item_texture)
 * The item_texture.json file defines the texture atlas for item
 * textures. It maps texture names to texture file paths, allowing items
 * to reference textures by name. Located at
 * textures/item_texture.json in resource packs.
 */
export default interface ItemTexture {

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
  texture_data: { [key: string]: ItemTextureTextureData };

  /**
   * @remarks
   * The name of the texture atlas. Typically 'atlas.items' for item
   * textures.
   */
  texture_name: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Item Texture: ["textures/items/apple"]
   *
   */
  textures?: string[];

}


/**
 * Texture Entry (item_texture_entry)
 * Defines a texture that can be referenced by items.
 */
export interface ItemTextureTextureData {

  /**
   * @remarks
   * Array of texture file paths. Multiple paths can be provided for
   * variants (used with aux values in older versions).
   */
  textures: string[];

}