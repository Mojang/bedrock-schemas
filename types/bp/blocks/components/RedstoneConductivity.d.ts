// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:redstone_conductivity
 * 
 * minecraft:redstone_conductivity Samples

Block Black Concrete Double Slab - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_double_slab.block.json

"minecraft:redstone_conductivity": {
  "redstone_conductor": true
}


Block Black Concrete Slab - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_slab.block.json

"minecraft:redstone_conductivity": {
  "redstone_conductor": false
}


Block Black Concrete Stairs - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_stairs.block.json

"minecraft:redstone_conductivity": {
  "redstone_conductor": false,
  "allows_wire_to_step_down": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Block Redstone Conductivity (Redstone Conductivity)
 * The basic redstone properties of a block. If the component is
 * not provided the default values are used.
 */
export default interface RedstoneConductivity {

  /**
   * @remarks
   * Specifies if redstone wire can stair-step downward on the 
   * block.
   * 
   * Sample Values:
   * Block Black Concrete Stairs: true
   *
   */
  allows_wire_to_step_down?: boolean;

  /**
   * @remarks
   * Specifies if the block can be powered by redstone.
   * 
   * Sample Values:
   * Block Black Concrete Double Slab: true
   *
   *
   */
  redstone_conductor?: boolean;

}