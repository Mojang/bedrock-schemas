// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.swim_wander
 * 
 * minecraft:behavior.swim_wander Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Swim Wander Behavior (minecraft:behavior.swim_wander)
 * Allows the entity to wander around while swimming, when not
 * path-finding.
 */
export default interface MinecraftBehaviorSwimWander {

  control_flags?: string[];

  /**
   * @remarks
   * Percent chance to start wandering, when not path-finding. 1 =
   * 100%
   */
  interval?: number;

  /**
   * @remarks
   * Distance to look ahead for obstacle avoidance, while 
   * wandering.
   */
  look_ahead?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * This multiplier modifies the entity's speed when wandering.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Amount of time (in seconds) to wander after wandering behavior was
   * successfully started.
   */
  wander_time?: number;

}


export enum MinecraftBehaviorSwimWanderControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}