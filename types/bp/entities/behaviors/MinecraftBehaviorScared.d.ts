// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.scared
 * 
 * minecraft:behavior.scared Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Scared Behavior (minecraft:behavior.scared)
 * Allows the mob to become scared when the weather outside is
 * thundering.
 */
export default interface MinecraftBehaviorScared {

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
   * The interval in which a sound will play when active in a
   * 1/delay chance to kick off.
   */
  sound_delay?: number;

  /**
   * @remarks
   * The interval in which a sound will play when active in a
   * 1/delay chance to kick off
   */
  sound_interval?: number;

}


export enum MinecraftBehaviorScaredControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}