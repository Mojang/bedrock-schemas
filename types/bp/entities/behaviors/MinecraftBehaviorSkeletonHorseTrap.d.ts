// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.skeleton_horse_trap
 * 
 * minecraft:behavior.skeleton_horse_trap Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Skeleton Horse Trap Behavior
 * (minecraft:behavior.skeleton_horse_trap)
 * Allows Equine mobs to be Horse Traps and be triggered like them,
 * spawning a lightning bolt and a bunch of horses when a player is
 * nearby. Can only be used by Horses, Mules, Donkeys and Skeleton
 * Horses.
 */
export default interface MinecraftBehaviorSkeletonHorseTrap {

  control_flags?: string[];

  /**
   * @remarks
   * Amount of time in seconds the trap exists. After this amount of
   * time is elapsed, the trap is removed from the world if it
   * hasn't been activated
   */
  duration?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Distance in blocks that the player has to be within to trigger the
   * horse trap.
   */
  within_radius?: number;

}


export enum MinecraftBehaviorSkeletonHorseTrapControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}