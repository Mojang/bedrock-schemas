// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.squid_idle
 * 
 * minecraft:behavior.squid_idle Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Squid Idle Behavior (minecraft:behavior.squid_idle)
 * Allows the squid to swim in place idly.
 */
export default interface MinecraftBehaviorSquidIdle {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}