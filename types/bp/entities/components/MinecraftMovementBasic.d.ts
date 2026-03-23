// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:movement.basic
 * 
 * minecraft:movement.basic Samples

Bat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json

"minecraft:movement.basic": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Basic Movement (minecraft:movement.basic)
 * This component accents the movement of an entity.
 */
export default interface MinecraftMovementBasic {

  /**
   * @remarks
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;

}