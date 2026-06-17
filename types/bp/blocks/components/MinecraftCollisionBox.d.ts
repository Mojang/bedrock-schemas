// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:collision_box
 * 
 * minecraft:collision_box Samples
"minecraft:collision_box": {
  "origin": [
    -8,
    0,
    -8
  ],
  "size": [
    16,
    16,
    16
  ]
}


Block Fabricator - Block Fabricator

"minecraft:collision_box": true

Block Leaf Pile - Block Leaf Pile

"minecraft:collision_box": {
  "origin": [
    -8,
    2,
    -8
  ],
  "size": [
    16,
    4,
    16
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Collision Box (minecraft:collision_box)
 * Defines the area of the block that collides with entities. If
 * set to true, default values are used (a full 16x16x16 block). If
 * set to false, the block's collision with entities is disabled,
 * allowing entities to pass through. If this component is
 * omitted, default values are used.
 * Note: Released from the Holiday Creator Features experiment in
 * 1.19.50. Pairs with the custom geometry component so creators can
 * author bespoke collision shapes.
 * Note: Supports an array of collision boxes (for multi-part collision
 * shapes) and a maximum collision box height of 24 units (up from
 * 16). Available without the Upcoming Creator Features experiment and
 * without the format_version 1.21.130 requirement starting in
 * 1.26.0.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Boolean true/false`.

 */
export default interface MinecraftCollisionBox {

  /**
   * @remarks
   * Minimal position of the bounds of the collision box. "origin" is
   * specified as [x, y, z] and must be in the range (-8, 0, -8) to
   * (8, 24, 8), inclusive.
   */
  origin?: number[];

  /**
   * @remarks
   * Size of each side of the collision box. Size is specified as
   * [x, y, z]. "origin" + "size" must be in the range (-8, 0, -8) to
   * (8, 24, 8), inclusive.
   */
  size?: number[];

}