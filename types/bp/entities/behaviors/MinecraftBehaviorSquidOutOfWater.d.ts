// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.squid_out_of_water
 * 
 * minecraft:behavior.squid_out_of_water Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Squid Out Of Water Behavior 
 * (minecraft:behavior.squid_out_of_water)
 * Allows the squid to stick to the ground when outside water.
 */
export default interface MinecraftBehaviorSquidOutOfWater {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}