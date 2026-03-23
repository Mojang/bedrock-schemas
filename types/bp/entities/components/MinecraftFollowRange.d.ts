// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:follow_range
 * 
 * minecraft:follow_range Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:follow_range": {
  "value": 1024
}


Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:follow_range": {
  "max": 48,
  "value": 48
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:follow_range": {
  "value": 32
}


Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:follow_range": {
  "value": 48,
  "max": 48
}


Elder Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json

"minecraft:follow_range": {
  "max": 16,
  "value": 16
}

 */

import * as jsoncommon from '../../../common';

/**
 * Follow Range (minecraft:follow_range)
 * Defines the maximum range, in blocks, that a mob will pursue a
 * target. This affects AI behaviors like chasing players or
 * attacking.
 */
export default interface MinecraftFollowRange {

  /**
   * @remarks
   * Maximum follow distance in blocks. The entity will not pursue
   * targets beyond this range.
   * 
   * Sample Values:
   * Blaze: 48
   *
   *
   * Elder Guardian: 16
   *
   */
  max?: number;

  /**
   * @remarks
   * The default follow range in blocks. Entities will attempt to
   * stay within this radius of their target.
   * 
   * Sample Values:
   * Allay: 1024
   *
   * Blaze: 48
   *
   * Breeze: 32
   *
   */
  value?: number;

}