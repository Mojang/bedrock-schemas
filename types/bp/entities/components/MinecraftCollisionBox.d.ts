// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:collision_box
 * 
 * minecraft:collision_box Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:collision_box": {
  "height": 0.6,
  "width": 0.35
}


Armor Stand - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json

"minecraft:collision_box": {
  "height": 1.975,
  "width": 0.5
}


Arrow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json

"minecraft:collision_box": {
  "height": 0.25,
  "width": 0.25
}


Bat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json

"minecraft:collision_box": {
  "height": 0.9,
  "width": 0.5
}


Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:collision_box": {
  "height": 1.8,
  "width": 0.5
}

 */

import * as jsoncommon from '../../../common';

/**
 * Collision Box (minecraft:collision_box)
 * Sets the width and height of the Entity's collision box.
 */
export default interface MinecraftCollisionBox {

  /**
   * @remarks
   * Height of the collision box in blocks. A negative value will be
   * assumed to be 0.
   * 
   * Sample Values:
   * Allay: 0.6
   *
   * Armor Stand: 1.975
   *
   * Arrow: 0.25
   *
   */
  height?: number;

  /**
   * @remarks
   * Width of the collision box in blocks. A negative value will be
   * assumed to be 0. Min value is -100000000.000000 Max value is
   * 100000000.000000
   * 
   * Sample Values:
   * Allay: 0.35
   *
   * Armor Stand: 0.5
   *
   * Arrow: 0.25
   *
   */
  width?: number;

}