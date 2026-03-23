// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.swim_idle
 * 
 * minecraft:behavior.swim_idle Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Swim Idle Behavior (minecraft:behavior.swim_idle)
 * Allows the entity go idle, if swimming. Entity must be in
 * water.
 */
export default interface MinecraftBehaviorSwimIdle {

  control_flags?: string[];

  /**
   * @remarks
   * Amount of time (in seconds) to stay idle.
   */
  idle_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Percent chance this entity will go idle, 1.0 = 100%.
   */
  success_rate?: number;

}


export enum MinecraftBehaviorSwimIdleControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}