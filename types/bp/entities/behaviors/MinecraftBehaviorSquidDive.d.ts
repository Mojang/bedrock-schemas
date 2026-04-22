// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.squid_dive
 * 
 * minecraft:behavior.squid_dive Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Squid Dive Behavior (minecraft:behavior.squid_dive)
 * Allows the squid to dive down in water.
 */
export default interface MinecraftBehaviorSquidDive {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}