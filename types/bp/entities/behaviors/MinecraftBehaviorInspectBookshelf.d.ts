// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.inspect_bookshelf
 * 
 * minecraft:behavior.inspect_bookshelf Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Inspect Bookshelf Behavior
 * (minecraft:behavior.inspect_bookshelf)
 * Allows the mob to inspect bookshelves.
 */
export default interface MinecraftBehaviorInspectBookshelf {

  control_flags?: string[];

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot.
   */
  goal_radius?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The number of randomly selected blocks each tick that the mob
   * will check within its search range and height for a valid block to
   * move to. A value of 0 will have the mob check every block within
   * range in one tick.
   */
  search_count?: number;

  /**
   * @remarks
   * The height that the mob will search for bookshelves.
   */
  search_height?: number;

  /**
   * @remarks
   * The distance in blocks the mob will look for books to 
   * inspect.
   */
  search_range?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorInspectBookshelfControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}