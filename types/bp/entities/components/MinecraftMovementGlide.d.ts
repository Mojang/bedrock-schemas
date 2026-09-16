// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:movement.glide
 * 
 * minecraft:movement.glide Samples

Phantom - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/phantom.json

"minecraft:movement.glide": {
  "speed_when_turning": 0.2,
  "start_speed": 0.1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Glide Movement (minecraft:movement.glide)
 * Move control for a flying mob that has a gliding movement.
 */
export default interface MinecraftMovementGlide {

  /**
   * @remarks
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;

  /**
   * @remarks
   * Speed that the mob adjusts to when it has to turn quickly.
   * 
   * Sample Values:
   * Phantom: 0.2
   *
   */
  speed_when_turning?: number;

  /**
   * @remarks
   * Initial speed of the mob when it starts gliding.
   * 
   * Sample Values:
   * Phantom: 0.1
   *
   */
  start_speed?: number;

}