// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.make_love
 * 
 * minecraft:behavior.make_love Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Make Love Behavior (minecraft:behavior.make_love)
 * Allows the villager to look for a mate to spawn other villagers 
 * with.
 */
export default interface MinecraftBehaviorMakeLove {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}