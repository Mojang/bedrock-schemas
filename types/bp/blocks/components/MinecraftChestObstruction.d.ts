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
 * Block Chest Obstruction (minecraft:chest_obstruction)
 * This defines how a block reacts to a chest being opened underneath 
 * it.
 * Note: Added in 1.26.10 behind the Upcoming Creator Features
 * experiment and released without the experimental toggle for
 * block format versions 1.26.20 and newer. Controls how a block
 * placed above a chest affects the chest's ability to open: `always`
 * always obstructs, `never` never obstructs, and `shape` (the
 * default) uses the block's AABB.
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


export enum MinecraftChestObstructionObstructionRule {
  always = `always`,
  never = `never`,
  shape = `shape`
}