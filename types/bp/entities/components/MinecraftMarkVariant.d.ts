// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:mark_variant
 * 
 * minecraft:mark_variant Samples

Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:mark_variant": {
  "value": 0
}


Trader Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json

"minecraft:mark_variant": {
  "value": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Mark Variant (minecraft:mark_variant)
 * Mark Variant is typically used as an additional per-type way
 * (besides `variant`) to express a different visual form of the
 * same mob.
 */
export default interface MinecraftMarkVariant {

  /**
   * @remarks
   * The Id of the mark_variant. By convention, 0 is the Id of the
   * base entity.
   * 
   * Sample Values:
   * Trader Llama: 1
   *
   */
  value?: number;

}