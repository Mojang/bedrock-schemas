// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.random_sitting
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Random Sitting Behavior 
 * (minecraft:behavior.random_sitting)
 * Allows the mob to randomly sit for a duration.
 */
export default interface MinecraftBehaviorRandomSitting {

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the goal 
   * again
   */
  cooldown?: number;

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the goal 
   * again
   */
  cooldown_time?: number;

  /**
   * @remarks
   * The minimum amount of time in seconds before the mob will stand
   * back up
   */
  min_sit_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * This is the chance that the mob will start this goal, from 0
   * to 1
   */
  start_chance?: number;

  /**
   * @remarks
   * This is the chance that the mob will stop this goal, from 0 to
   * 1
   */
  stop_chance?: number;

}


export enum MinecraftBehaviorRandomSittingControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}