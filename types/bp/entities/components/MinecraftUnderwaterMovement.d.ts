// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:underwater_movement
 * 
 * minecraft:underwater_movement Samples

Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:underwater_movement": {
  "value": 0.15
}


Elder Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json

"minecraft:underwater_movement": {
  "value": 0.3
}


Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json

"minecraft:underwater_movement": {
  "value": 0.12
}

 */

import * as jsoncommon from '../../../common';

/**
 * Underwater Movement (minecraft:underwater_movement)
 * Defines the speed with which an entity can move through 
 * water.
 */
export default interface MinecraftUnderwaterMovement {

  /**
   * @remarks
   * Movement speed of the entity under water.
   * 
   * Sample Values:
   * Dolphin: 0.15
   *
   * Elder Guardian: 0.3
   *
   *
   * Guardian: 0.12
   *
   */
  value?: number;

}