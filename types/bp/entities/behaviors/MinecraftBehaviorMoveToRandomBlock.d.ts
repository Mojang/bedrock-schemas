// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_to_random_block
 * 
 * minecraft:behavior.move_to_random_block Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Move To Random Block Behavior
 * (minecraft:behavior.move_to_random_block)
 * Allows mob to move towards a random block.
 */
export default interface MinecraftBehaviorMoveToRandomBlock {

  /**
   * @remarks
   * Defines the distance from the mob, in blocks, that the block to
   * move to will be chosen.
   */
  block_distance?: number;

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
   * Movement speed multiplier of the mob when using this AI Goal
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Defines the distance in blocks the mob has to be from the block
   * for the movement to be finished.
   */
  within_radius?: number;

}


export enum MinecraftBehaviorMoveToRandomBlockControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}