// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.sleep
 * 
 * minecraft:behavior.sleep Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Sleep Behavior (minecraft:behavior.sleep)
 * Allows mobs that own a bed to in a village to move to and sleep in
 * it.
 */
export default interface MinecraftBehaviorSleep {

  /**
   * @remarks
   * If true, the mob will be able to use the sleep goal if riding
   * something
   */
  can_sleep_while_riding?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the goal 
   * again
   */
  cooldown_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The height of the mob's collider while sleeping
   */
  sleep_collider_height?: number;

  /**
   * @remarks
   * The width of the mob's collider while sleeping
   */
  sleep_collider_width?: number;

  /**
   * @remarks
   * The y offset of the mob's collider while sleeping
   */
  sleep_y_offset?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * The cooldown time in seconds before the goal can be reused after a
   * internal failure or timeout condition.
   */
  timeout_cooldown?: number;

}


export enum MinecraftBehaviorSleepControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}