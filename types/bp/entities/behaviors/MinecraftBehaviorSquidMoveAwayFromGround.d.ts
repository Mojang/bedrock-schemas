// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.squid_move_away_from_ground
 * 
 * minecraft:behavior.squid_move_away_from_ground Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Squid Move Away From Ground Behavior
 * (minecraft:behavior.squid_move_away_from_ground)
 * Allows the squid to move away from ground blocks and back to
 * water.
 */
export default interface MinecraftBehaviorSquidMoveAwayFromGround {

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}