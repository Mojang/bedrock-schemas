// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:redstone_conductivity
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
   */
  allows_wire_to_step_down?: boolean;

  /**
   * @remarks
   * Specifies if the block can be powered by redstone.
   */
  redstone_conductor?: boolean;

}