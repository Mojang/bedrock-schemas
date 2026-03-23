// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:destructible_by_explosion
 * 
 * minecraft:destructible_by_explosion Samples

Example - Example

"minecraft:destructible_by_explosion": true
 */

import * as jsoncommon from '../../../common';

/**
 * Destructible By Explosion 
 * (minecraft:destructible_by_explosion)
 * Describes the destructible by explosion properties for this
 * block. If set to true, the block will have the default explosion
 * resistance. If set to false, this block is indestructible by
 * explosion. If the component is omitted, the block will have the
 * default explosion resistance.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Boolean true/false`.

 */
export default interface MinecraftDestructibleByExplosion {

  /**
   * @remarks
   * Sets the explosion resistance for the block. Greater values result
   * in greater resistance to explosions. The scale will be
   * different for different explosion power levels. A negative value
   * or 0 means it will easily explode; larger numbers increase level
   * of resistance.
   */
  explosion_resistance?: number;

}