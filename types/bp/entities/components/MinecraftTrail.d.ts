// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:trail
 * 
 * minecraft:trail Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Trail (minecraft:trail)
 * Causes an entity to leave a trail of blocks as it moves about the
 * world. Obeys Mob Griefing rules.
 */
export default interface MinecraftTrail {

  /**
   * @remarks
   * The type of block that is spawned as a trail behind the entity.
   * Solid blocks cannot be spawned at an offset of (0, 0, 0).
   */
  block_type?: string;

  /**
   * @remarks
   * When true, the trail will replace blocks that match the
   * replaceable blocks list even if normal placement rules prevent 
   * it.
   */
  force_replace_matched_blocks?: boolean;

  /**
   * @remarks
   * When provided, the trail spawns blocks across a (2 * radius +
   * 1) by (2 * radius + 1) horizontal area centered on the spawn
   * offset. Uses the legacy four-corner sampling when omitted.
   */
  radius?: number;

  /**
   * @remarks
   * A list of blocks that can be replaced by the trail block. If
   * the block at the spawn offset is not in this list, the trail block
   * will not spawn. If omitted it will default to only air 
   * blocks.
   */
  replaceable_blocks?: MinecraftTrailReplaceableBlocks[];

  /**
   * @remarks
   * One or more conditions that must be met in order to cause the
   * chosen block type to spawn.
   */
  spawn_filter?: MinecraftTrailSpawnFilter;

  /**
   * @remarks
   * The offset from the entity's current position at which to spawn
   * the block, capped at 16 blocks away.
   */
  spawn_offset?: number[];

}


/**
 * Replaceable Blocks (replaceable_blocks)
 */
export interface MinecraftTrailReplaceableBlocks {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Spawn Filter (spawn_filter)
 */
export interface MinecraftTrailSpawnFilter {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}