// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:movement.skip
 * 
 * minecraft:movement.skip Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Skip Movement (minecraft:movement.skip)
 * This move control causes the mob to hop as it moves.
 */
export default interface MinecraftMovementSkip {

  /**
   * @remarks
   * The maximum number in degrees the mob can turn per tick.
   */
  max_turn?: number;

}