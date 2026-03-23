// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:physics
 * 
 * minecraft:physics Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:physics": {
  "has_gravity": false
}


Area Effect Cloud - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/area_effect_cloud.json

"minecraft:physics": {
  "has_collision": false
}


Armor Stand - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json

"minecraft:physics": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Physics (minecraft:physics)
 * Defines physics properties of an actor, including if it is
 * affected by gravity or if it collides with objects.
 */
export default interface MinecraftPhysics {

  /**
   * @remarks
   * Whether or not the entity collides with things.
   */
  has_collision?: boolean;

  /**
   * @remarks
   * Whether or not the entity is affected by gravity.
   */
  has_gravity?: boolean;

  /**
   * @remarks
   * Whether or not the entity should be pushed towards the nearest open
   * area when stuck inside a block.
   */
  push_towards_closest_space?: boolean;

}