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

Block Fabricator - Block Fabricator

"minecraft:destructible_by_explosion": {
  "explosion_resistance": 15
}


Block Gray Ore - Block Gray Ore

"minecraft:destructible_by_explosion": {
  "explosion_resistance": 96
}


Block Palm Leave - Block Palm Leave

"minecraft:destructible_by_explosion": {
  "explosion_resistance": 1.3
}


Block White Sand - Block White Sand

"minecraft:destructible_by_explosion": {
  "explosion_resistance": 1.1
}


Block Leaf Pile - Block Leaf Pile

"minecraft:destructible_by_explosion": {
  "explosion_resistance": 0.5
}


Block Orange Ore - Block Orange Ore

"minecraft:destructible_by_explosion": {
  "explosion_resistance": 30
}


Apple Block - Apple Block

"minecraft:destructible_by_explosion": {
  "explosion_resistance": 2.9
}

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