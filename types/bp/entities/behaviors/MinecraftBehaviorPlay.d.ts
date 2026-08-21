// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.play
 * 
 * minecraft:behavior.play Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Play Behavior (minecraft:behavior.play)
 * Allows the mob to offer a flower to another mob with the
 * minecraft:take_flower behavior.
 */
export default interface MinecraftBehaviorPlay {

  /**
   * @remarks
   * Percent chance that the mob will start this goal, from 0 to 
   * 1.
   */
  chance_to_start?: number;

  control_flags?: string[];

  /**
   * @remarks
   * The distance (in blocks) that the mob tries to be in range of
   * the friend it's following.
   */
  follow_distance?: number;

  /**
   * @remarks
   * The dimensions of the AABB used to search for a potential friend to
   * play with.
   */
  friend_search_area?: number[];

  /**
   * @remarks
   * The entity type(s) to consider when searching for a potential friend
   * to play with.
   */
  friend_types?: object[];

  /**
   * @remarks
   * The max amount of seconds that the mob will play for before exiting
   * the Goal.
   */
  max_play_duration_seconds?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The height (in blocks) that the mob will search within to find a
   * random position position to move to. Must be at least 1.
   */
  random_pos_search_height?: number;

  /**
   * @remarks
   * The distance (in blocks) on ground that the mob will search within
   * to find a random position to move to. Must be at least 1.
   */
  random_pos_search_range?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI 
   * Goal.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorPlayControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}