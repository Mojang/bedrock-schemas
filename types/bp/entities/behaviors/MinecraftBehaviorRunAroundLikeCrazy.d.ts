// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.run_around_like_crazy
 * 
 * minecraft:behavior.run_around_like_crazy Samples

Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:behavior.run_around_like_crazy": {
  "priority": 1,
  "speed_multiplier": 1.2
}

 */

import * as jsoncommon from '../../../common';

/**
 * Run Around Like Crazy Behavior
 * (minecraft:behavior.run_around_like_crazy)
 * Allows the mob to run around aimlessly.
 */
export default interface MinecraftBehaviorRunAroundLikeCrazy {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Llama: 1
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Llama: 1.2
   *
   *
   */
  speed_multiplier?: number;

}