// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:break_blocks
 * 
 * minecraft:break_blocks Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Break Blocks (minecraft:break_blocks)
 * Specifies the blocks that the entity can break as it moves 
 * around.
 */
export default interface MinecraftBreakBlocks {

  /**
   * @remarks
   * A list of the blocks that can be broken as this entity moves
   * around.
   */
  breakable_blocks?: string[];

}