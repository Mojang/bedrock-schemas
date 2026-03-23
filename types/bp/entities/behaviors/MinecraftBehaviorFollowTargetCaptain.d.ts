// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.follow_target_captain
 * 
 * minecraft:behavior.follow_target_captain Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Follow Target Captain Behavior
 * (minecraft:behavior.follow_target_captain)
 * Allows mob to move towards its current target captain.
 * Note: Requires a entity to be labeled as a captain in a group. An
 * example of this is the `minecraft:is_illager_captain` component used
 * in the `pillager.json` entity definition.
 */
export default interface MinecraftBehaviorFollowTargetCaptain {

  /**
   * @remarks
   * Defines the distance in blocks the mob will stay from its target
   * while following.
   */
  follow_distance?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Defines the maximum distance in blocks a mob can get from its
   * target captain before giving up trying to follow it.
   */
  within_radius?: number;

}