// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:chest_obstruction
 */

import * as jsoncommon from '../../../common';

/**
 * Chest Obstruction (minecraft:chest_obstruction)
 * The description identifier of the chest obstruction
 * component
Experimental toggles required: Upcoming Creator Features
 * (in format versions before 1.26.20).
 */
export default interface MinecraftChestObstruction {

  /**
   * @remarks
   * [optional] How the block should be evaluated by a chest during
   * chest opening. Must be one of the following options:
"always" -
   * Will always oba chest from opening when directly above it.
"never" -
   * Will never obstruct a chest from opening when directly above
   * it.
"shape" - Will use the Blocks AABB shape to determine if
   * the chest is obstructed from opening when directly above it;
   * this is the default value if no rule is provided.
   */
  obstruction_rule?: string;

}