// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.lay_down
 * 
 * minecraft:behavior.lay_down Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Lay Down Behavior (minecraft:behavior.lay_down)
 * Allows mobs to lay down at times.
 */
export default interface MinecraftBehaviorLayDown {

  /**
   * @remarks
   * A random value to determine at what intervals something can
   * occur. This has a 1/interval chance to choose this goal
   */
  interval?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * a random value in which the goal can use to pull out of the
   * behavior. This is a 1/interval chance to play the sound
   */
  random_stop_interval?: number;

}