// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.sneeze
 * 
 * minecraft:behavior.sneeze Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Sneeze Behavior (minecraft:behavior.sneeze)
 * Allows the mob to sneeze, causing it to drop items and affect
 * nearby mobs.
 */
export default interface MinecraftBehaviorSneeze {

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the goal 
   * again
   */
  cooldown_time?: number;

  /**
   * @remarks
   * The probability that the mob will drop an item when it 
   * sneezes.
   */
  drop_item_chance?: number;

  /**
   * @remarks
   * List of entity types this mob will startle (cause to jump) when
   * it sneezes.
   */
  entity_types?: MinecraftBehaviorSneezeEntityTypes[];

  /**
   * @remarks
   * Loot table to select dropped items from.
   */
  loot_table?: string;

  /**
   * @remarks
   * Sound to play when the sneeze is about to happen.
   */
  prepare_sound?: string;

  /**
   * @remarks
   * The time in seconds that the mob takes to prepare to sneeze (while
   * the prepare_sound is playing).
   */
  prepare_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The probability of sneezing. A value of 1.00 is 100%
   */
  probability?: number;

  /**
   * @remarks
   * Sound to play when the sneeze occurs.
   */
  sound?: string;

  /**
   * @remarks
   * Distance in blocks that mobs will be startled.
   */
  within_radius?: number;

}


export enum MinecraftBehaviorSneezeControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * List of entity types this mob will startle (cause to jump) when
 * it sneezes.
 */
export interface MinecraftBehaviorSneezeEntityTypes {

  /**
   * @remarks
   * The amount of time in seconds that the mob has to wait before
   * selecting a target of the same type again
   */
  cooldown?: number;

  /**
   * @remarks
   * Conditions that make this entry in the list valid
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Maximum distance this mob can be away to be a valid choice
   */
  max_dist?: number;

  /**
   * @remarks
   * If true, the mob has to be visible to be a valid choice
   */
  must_see?: boolean;

  /**
   * @remarks
   * Determines the amount of time in seconds that this mob will look
   * for a target before forgetting about it and looking for a new
   * one when the target isn't visible any more
   */
  must_see_forget_duration?: number;

  /**
   * @remarks
   * If true, the mob will stop being targeted if it stops meeting any
   * conditions.
   */
  reevaluate_description?: boolean;

  /**
   * @remarks
   * Multiplier for the running speed. A value of 1.0 means the speed
   * is unchanged
   */
  sprint_speed_multiplier?: number;

  /**
   * @remarks
   * Multiplier for the walking speed. A value of 1.0 means the speed
   * is unchanged
   */
  walk_speed_multiplier?: number;

}