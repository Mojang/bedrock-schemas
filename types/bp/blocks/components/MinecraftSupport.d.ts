// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:support
 */

import * as jsoncommon from '../../../common';

/**
 * Block Support (minecraft:support)
 * Defines the support shape of the block. Currently only allows for
 * blocks to have the same shape as a Vanilla fence and Vanilla stair.
 * To work with custom stairs, requires the use of
 * "minecraft:vertical_half" and "minecraft:cardinal_direction" or
 * "minecraft:facing_direction" which can be set through the
 * "minecraft:placement_direction" block trait. Custom blocks without
 * this component will default to unit cube support. The type of
 * support shape for this block. Currently, the options are: "fence"
 * and "stair".
 * Note: Defines how this block provides structural support. Currently
 * accepts shape `fence` or `stair`. Pair with the
 * `minecraft:placement_direction` trait (and
 * `minecraft:vertical_half`) for custom stair-shaped supports.
 * Note: Available without the Upcoming Creator Features experimental toggle
 * for block format versions 1.26.0 or higher.
 */
export default interface MinecraftSupport {

  /**
   * @remarks
   * Required field. The type of support shape for this block.
   */
  shape: string;

}


export enum MinecraftSupportShape {
  fence = `fence`,
  stair = `stair`
}