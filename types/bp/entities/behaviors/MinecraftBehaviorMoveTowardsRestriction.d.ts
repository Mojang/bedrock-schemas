// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_towards_restriction
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Move Towards Restriction Behavior
 * (minecraft:behavior.move_towards_restriction)
 * AI goal that drives entities back toward their designated home
 * area when they've wandered too far. Works with components like
 * minecraft:home to define the restriction zone. Used for
 * village-bound mobs, territorial creatures, or any entity that
 * should patrol or return to a specific location.
 */
export default interface MinecraftBehaviorMoveTowardsRestriction {

  control_flags?: string[];

  priority?: number;

  /**
   * @remarks
   * This multiplier modifies the entity's speed when moving towards its
   * restriction.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorMoveTowardsRestrictionControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}