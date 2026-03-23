// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:jump.static
 * 
 * minecraft:jump.static Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:jump.static": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Static Jump (minecraft:jump.static)
 * Gives the entity the ability to jump.
 */
export default interface MinecraftJumpStatic {

  /**
   * @remarks
   * The initial vertical velocity for the jump.
   */
  jump_power?: number;

}