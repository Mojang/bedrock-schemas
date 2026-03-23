// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:item_visual
 * 
 * minecraft:item_visual Samples
"minecraft:item_visual": {
  "geometry": {
    "identifier": "minecraft:geometry.full_block"
  },
  "material_instances": {
    "*": {
      "texture": "dirt",
      "render_method": "opaque"
    }
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Visual (minecraft:item_visual)
 * The description identifier of the geometry and material used to
 * render the item of this block.
 */
export default interface MinecraftItemVisual {

  /**
   * @remarks
   * [Required] The "minecraft:geometry" component that will be used
   * for the item.
   */
  geometry?: object[];

  /**
   * @remarks
   * [Required] The "minecraft:material_instances" component that will
   * be used for the item.
   */
  material_instances?: object[];

}