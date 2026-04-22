// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.restrict_open_door
 * 
 * minecraft:behavior.restrict_open_door Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Restrict Open Door Behavior
 * (minecraft:behavior.restrict_open_door)
 * Allows the mob to stay indoors during night time.
 */
export default interface MinecraftBehaviorRestrictOpenDoor {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


export enum MinecraftBehaviorRestrictOpenDoorControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}