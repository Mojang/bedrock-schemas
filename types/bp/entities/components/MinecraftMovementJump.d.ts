// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:movement.jump
 * 
 * minecraft:movement.jump Samples

Sulfur Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_without_target/minecraft:movement.jump/: 
"minecraft:movement.jump": {
  "jump_delay": [
    0.5,
    1.5
  ]
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_with_target/minecraft:movement.jump/: 
"minecraft:movement.jump": {
  "jump_delay": [
    0.16,
    0.5
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Jump Movement (minecraft:movement.jump)
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 * Note: In order to follow targets, this entity must have the
 * `minecraft:behavior.slime_attack` component, otherwise the
 * entity will jump in the direction it's looking in.
 */
export default interface MinecraftMovementJump {

  /**
   * @remarks
   * Delay in seconds after landing when using the slime move control. Can
   * be a single number, an array [min, max], or an object with
   * range_min and range_max.
   * 
   * Sample Values:
   * Sulfur Cube: [0.5,1.5], [0.16,0.5]
   *
   */
  jump_delay?: number[];

  /**
   * @remarks
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;

}