// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.flee_sun
 * 
 * minecraft:behavior.flee_sun Samples

Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:behavior.flee_sun": {
  "priority": 2,
  "speed_multiplier": 1
}


Parched - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json

"minecraft:behavior.flee_sun": {
  "priority": 3,
  "speed_multiplier": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Flee Sun Behavior (minecraft:behavior.flee_sun)
 * Allows the mob to run away from direct sunlight and seek 
 * shade.
 * Note: This behavior is used by undead mobs like skeletons and
 * zombies that burn in sunlight. The entity will seek shade or
 * water during daytime to avoid sun damage.
 */
export default interface MinecraftBehaviorFleeSun {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Bogged: 2
   *
   *
   * Parched: 3
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Bogged: 1
   *
   *
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorFleeSunControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}