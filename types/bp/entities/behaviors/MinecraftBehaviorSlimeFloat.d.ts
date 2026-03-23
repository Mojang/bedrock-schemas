// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.slime_float
 * 
 * minecraft:behavior.slime_float Samples

Magma Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json

"minecraft:behavior.slime_float": {
  "priority": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Slime Float Behavior (minecraft:behavior.slime_float)
 * Allow slimes to float in water / lava.
 */
export default interface MinecraftBehaviorSlimeFloat {

  control_flags?: string[];

  /**
   * @remarks
   * Percent chance a slime or magma cube has to jump while in water /
   * lava.
   */
  jump_chance_percentage?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Magma Cube: 1
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * Determines the multiplier the entity's speed is modified by
   * when moving through water / lava.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorSlimeFloatControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}