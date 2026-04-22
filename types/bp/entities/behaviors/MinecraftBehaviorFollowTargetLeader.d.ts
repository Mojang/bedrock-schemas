// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.follow_target_leader
 */

import * as jsoncommon from '../../../common';

/**
 * Follow Target Leader Behavior
 * (minecraft:behavior.follow_target_leader)
 * Allows mob to move towards its target leader.
 */
export default interface MinecraftBehaviorFollowTargetLeader {

  /**
   * @remarks
   * If true, the mob will always search for a valid leader to
   * follow if none is found or current leader is not valid 
   * anymore
   */
  always_look_for_leader?: boolean;

  /**
   * @remarks
   * Defines the distance in blocks the mob will stay from its target
   * while following.
   */
  follow_distance?: number;

  /**
   * @remarks
   * The filters to use when determining if a mob is a suitable leader
   * or not.
   */
  leader_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Number of ticks that must pass before a new search is initiated after
   * a target is not found, lost, or becomes invalid.
   */
  search_cooldown?: number;

  /**
   * @remarks
   * Defines the maximum distance in blocks a mob can get from its
   * target leader before giving up trying to follow it.
   */
  within_radius?: number;

}