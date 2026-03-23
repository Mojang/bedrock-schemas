// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.roll
 * 
 * minecraft:behavior.roll Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Roll Behavior (minecraft:behavior.roll)
 * This allows the mob to roll forward.
 */
export default interface MinecraftBehaviorRoll {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The probability that the mob will use the goal.
   */
  probability?: number;

}