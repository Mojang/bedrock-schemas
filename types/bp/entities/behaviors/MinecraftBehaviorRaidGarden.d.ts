// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.raid_garden
 * 
 * minecraft:behavior.raid_garden Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Raid Garden Behavior (minecraft:behavior.raid_garden)
 * Allows the mob to eat/raid crops out of farms until they are
 * full.
 */
export default interface MinecraftBehaviorRaidGarden {

  /**
   * @remarks
   * Blocks that the mob is looking for to eat/raid
   */
  blocks?: string[];

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds between each time it eats/raids
   */
  eat_delay?: number;

  /**
   * @remarks
   * Amount of time in seconds before this mob wants to eat/raid again
   * after eating its maximum
   */
  full_delay?: number;

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot.
   */
  goal_radius?: number;

  /**
   * @remarks
   * Time in seconds before starting to eat/raid once it arrives at
   * it
   */
  initial_eat_delay?: number;

  /**
   * @remarks
   * Maximum number of crops this entity wants to eat/raid. If set to
   * zero or less then it doesn't have a maximum
   */
  max_to_eat?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Height in blocks the mob will look for crops to eat
   */
  search_height?: number;

  /**
   * @remarks
   * Distance in blocks the mob will look for crops to eat
   */
  search_range?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorRaidGardenControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}