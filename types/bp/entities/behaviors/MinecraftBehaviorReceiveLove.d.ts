// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.receive_love
 * 
 * minecraft:behavior.receive_love Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Receive Love Behavior (minecraft:behavior.receive_love)
 * Allows the villager to stop so another villager can breed with
 * it. Can only be used by a Villager.
 */
export default interface MinecraftBehaviorReceiveLove {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}