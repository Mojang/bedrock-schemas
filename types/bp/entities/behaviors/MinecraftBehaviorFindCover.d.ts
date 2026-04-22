// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.find_cover
 * 
 * minecraft:behavior.find_cover Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Find Cover Behavior (minecraft:behavior.find_cover)
 * Allows the mob to seek shade.
 */
export default interface MinecraftBehaviorFindCover {

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob has to wait before using the goal 
   * again
   */
  cooldown_time?: number;

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

}


export enum MinecraftBehaviorFindCoverControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}