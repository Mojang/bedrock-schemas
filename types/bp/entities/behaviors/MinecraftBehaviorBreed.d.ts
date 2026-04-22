// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.breed
 * 
 * minecraft:behavior.breed Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:behavior.breed": {
  "priority": 3,
  "speed_multiplier": 1
}


Frog - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json

"minecraft:behavior.breed": {
  "priority": 4
}


Goat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json

"minecraft:behavior.breed": {
  "priority": 3,
  "speed_multiplier": 0.6
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:behavior.breed": {
  "priority": 4,
  "speed_multiplier": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Breed Behavior (minecraft:behavior.breed)
 * Allows this mob to breed with other mobs.
 */
export default interface MinecraftBehaviorBreed {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Chicken: 3
   *
   * Frog: 4
   *
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier applied to the mob when using this AI
   * Goal.
   * 
   * Sample Values:
   * Chicken: 1
   *
   * Goat: 0.6
   *
   *
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorBreedControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}