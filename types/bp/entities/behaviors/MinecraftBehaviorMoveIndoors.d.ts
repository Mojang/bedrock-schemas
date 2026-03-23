// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_indoors
 * 
 * minecraft:behavior.move_indoors Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Move Indoors Behavior 
 * (minecraft:behavior.move_indoors)
 * Allows this entity to move indoors.
 */
export default interface MinecraftBehaviorMoveIndoors {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The movement speed modifier to apply to the entity while it is
   * moving indoors.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * The cooldown time in seconds before the goal can be reused after
   * pathfinding fails
   */
  timeout_cooldown?: number;

}


export enum MinecraftBehaviorMoveIndoorsControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}