// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.find_mount
 * 
 * minecraft:behavior.find_mount Samples

Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:behavior.find_mount": {
  "max_failed_attempts": 20,
  "priority": 1,
  "start_delay": 15,
  "within_radius": 16
}


Parrot - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json

"minecraft:behavior.find_mount": {
  "avoid_water": true,
  "mount_distance": 2,
  "priority": 4,
  "start_delay": 100,
  "target_needed": false,
  "within_radius": 16
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Find Mount Behavior (minecraft:behavior.find_mount)
 * Allows the mob to look around for another mob to ride atop 
 * it.
 */
export default interface MinecraftBehaviorFindMount {

  /**
   * @remarks
   * If true, the mob will not go into water blocks when going towards a
   * mount
   * 
   * Sample Values:
   * Parrot: true
   *
   */
  avoid_water?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * Number of attempts to find mount
   * 
   * Sample Values:
   * Drowned: 20
   *
   */
  max_failed_attempts?: number;

  /**
   * @remarks
   * This is the distance the mob needs to be, in blocks, from the
   * desired mount to mount it. If the value is below 0, the mob will
   * use its default attack distance
   * 
   * Sample Values:
   * Parrot: 2
   *
   */
  mount_distance?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Drowned: 1
   *
   * Parrot: 4
   *
   */
  priority?: number;

  /**
   * @remarks
   * Time the mob will wait before starting to move towards the 
   * mount
   * 
   * Sample Values:
   * Drowned: 15
   *
   * Parrot: 100
   *
   */
  start_delay?: number;

  /**
   * @remarks
   * If true, the mob will only look for a mount if it has a 
   * target
   */
  target_needed?: boolean;

  /**
   * @remarks
   * Distance in blocks within which the mob will look for a 
   * mount
   * 
   * Sample Values:
   * Drowned: 16
   *
   *
   */
  within_radius?: number;

}


export enum MinecraftBehaviorFindMountControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}