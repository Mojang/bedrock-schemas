// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:variant
 * 
 * minecraft:variant Samples

Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

 * At /minecraft:entity/component_groups/minecraft:fox_red/minecraft:variant/: 
"minecraft:variant": {
  "value": 0
}

 * At /minecraft:entity/component_groups/minecraft:fox_arctic/minecraft:variant/: 
"minecraft:variant": {
  "value": 1
}


Frog - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json

 * At /minecraft:entity/component_groups/warm_frog/minecraft:variant/: 
"minecraft:variant": {
  "value": 2
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

 * At /minecraft:entity/component_groups/minecraft:llama_gray/minecraft:variant/: 
"minecraft:variant": {
  "value": 3
}


Magma Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json

 * At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:variant/: 
"minecraft:variant": {
  "value": 4
}

 */

import * as jsoncommon from '../../../common';

/**
 * Variant (minecraft:variant)
 * Variant is typically used as a per-type way to express a
 * different visual form of the same mob. For example, for cats,
 * variant is a number that defines the breed of cat.
 * Note: This behavior is a requirement for setting up multiple types
 * of variants for an entity.
 */
export default interface MinecraftVariant {

  /**
   * @remarks
   * The Id of the variant. By convention, 0 is the Id of the base
   * entity/default appearance.
   * 
   * Sample Values:
   * Fox: 1
   *
   * Frog: 2
   *
   * Llama: 3
   *
   */
  value?: number;

}