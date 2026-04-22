// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_towards_home_restriction
 * 
 * minecraft:behavior.move_towards_home_restriction Samples

Elder Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json

"minecraft:behavior.move_towards_home_restriction": {
  "priority": 5
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Move Towards Home Restriction Behavior
 * (minecraft:behavior.move_towards_home_restriction)
 * Allows entities with a `minecraft:home` component to move towards
 * their home position. 
		If `restriction_radius` is set, entities will
 * be able to run this behavior only if outside of it.
 */
export default interface MinecraftBehaviorMoveTowardsHomeRestriction {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Elder Guardian: 5
   *
   *
   */
  priority?: number;

  /**
   * @remarks
   * This multiplier modifies the entity's speed when moving towards its
   * restriction.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorMoveTowardsHomeRestrictionControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}