// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.swell
 * 
 * minecraft:behavior.swell Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Swell Behavior (minecraft:behavior.swell)
 * Allows the creeper to swell up when a player is nearby. It can
 * only be used by Creepers.
 */
export default interface MinecraftBehaviorSwell {

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
   * This mob starts swelling when a target is at least this many
   * blocks away.
   */
  start_distance?: number;

  /**
   * @remarks
   * This mob stops swelling when a target has moved away at least this
   * many blocks.
   */
  stop_distance?: number;

}


export enum MinecraftBehaviorSwellControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}