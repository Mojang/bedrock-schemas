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


Block Fabricator - Block Fabricator

"minecraft:item_visual": {
  "geometry": "geometry.mikeamm_gwve_fabricator_in_hand",
  "material_instances": {
    "*": {
      "texture": "mikeamm_gwve_fabricator_in_hand",
      "render_method": "alpha_test"
    }
  }
}


Die - Die

"minecraft:item_visual": {
  "geometry": "minecraft:geometry.full_block",
  "material_instances": {
    "*": {
      "texture": "die_red",
      "render_method": "opaque"
    }
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Block Item Visual (Item Visual)
 * The description identifier of the geometry and material used to
 * render the item of this block.
 * Note: Fixed in 1.26.10: a client crash on world load caused by
 * an out-of-bounds `minecraft:geometry` value inside
 * `minecraft:item_visual` no longer occurs.
 */
export default interface ItemVisual {

  /**
   * @remarks
   * The "minecraft:geometry" component of the item.
   */
  geometry: string;

  /**
   * @remarks
   * The "minecraft:material_instances" component of the item.
   */
  material_instances: object;

}