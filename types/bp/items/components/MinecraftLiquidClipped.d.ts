// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:liquid_clipped
 */

import * as jsoncommon from '../../../common';

/**
 * Liquid Clipped (minecraft:liquid_clipped)
 * The liquid_clipped component determines whether the item
 * interacts with liquid blocks on use. To allow placement of
 * blocks on liquids, see the 'placement_filter' block 
 * component.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Boolean true/false`.

 */
export default interface MinecraftLiquidClipped {

  /**
   * @remarks
   * Deterines whether the item interacts with liquid blocks on 
   * use.
   */
  value?: boolean;

}