// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.slime_random_direction
 * 
 * minecraft:behavior.slime_random_direction Samples

Magma Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json

"minecraft:behavior.slime_random_direction": {
  "priority": 4
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Slime Random Direction Behavior
 * (minecraft:behavior.slime_random_direction)
 * Allows the entity to move in random directions like a slime.
 */
export default interface MinecraftBehaviorSlimeRandomDirection {

  /**
   * @remarks
   * Additional time (in whole seconds), chosen randomly in the range
   * of [0, "add_random_time_range"], to add to
   * "min_change_direction_time".
   */
  add_random_time_range?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Constant minimum time (in seconds) to wait before choosing a
   * new direction.
   */
  min_change_direction_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Magma Cube: 4
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * Maximum rotation angle range (in degrees) when randomly choosing a
   * new direction.
   */
  turn_range?: number;

}


export enum MinecraftBehaviorSlimeRandomDirectionControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}