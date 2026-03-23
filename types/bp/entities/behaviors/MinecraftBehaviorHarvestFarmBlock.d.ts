// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.harvest_farm_block
 * 
 * minecraft:behavior.harvest_farm_block Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Harvest Farm Block Behavior
 * (minecraft:behavior.harvest_farm_block)
 * Allows the entity to search within an area for farmland with air
 * above it. If found, the entity will replace the air block by
 * planting a seed item from its inventory on the farmland block. This
 * goal will not execute if the entity does not have an item in
 * its inventory.
 */
export default interface MinecraftBehaviorHarvestFarmBlock {

  control_flags?: string[];

  /**
   * @remarks
   * Distance in blocks within the entity considers it has reached it's
   * target position.
   */
  goal_radius?: number;

  /**
   * @remarks
   * The maximum amount of time in seconds that the goal can take
   * before searching for the first harvest block. The time is
   * chosen between 0 and this number.
   */
  max_seconds_before_search?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The maximum amount of time in seconds that the goal can take
   * before searching again, after failing to find a a harvest block
   * already. The time is chosen between 0 and this number.
   */
  search_cooldown_max_seconds?: number;

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
   * The height in blocks the entity will search within to find a
   * valid target position.
   */
  search_height?: number;

  /**
   * @remarks
   * The distance in blocks the entity will search within to find a
   * valid target position.
   */
  search_range?: number;

  /**
   * @remarks
   * The amount of time in seconds that the goal will cooldown after a
   * successful reap/sow, before it can start again.
   */
  seconds_until_new_task?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorHarvestFarmBlockControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}