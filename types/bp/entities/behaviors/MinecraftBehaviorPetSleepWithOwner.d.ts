// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.pet_sleep_with_owner
 * 
 * minecraft:behavior.pet_sleep_with_owner Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Pet Sleep With Owner Behavior
 * (minecraft:behavior.pet_sleep_with_owner)
 * Allows the pet mob to move onto a bed with its owner while
 * sleeping.
 */
export default interface MinecraftBehaviorPetSleepWithOwner {

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot
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
   * Height in blocks from the owner the pet can be to sleep with
   * owner.
   */
  search_height?: number;

  /**
   * @remarks
   * The distance in blocks from the owner the pet can be to sleep with
   * owner.
   */
  search_range?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   */
  speed_multiplier?: number;

}