// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.jump_to_block
 * 
 * minecraft:behavior.jump_to_block Samples

Frog - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json

"minecraft:behavior.jump_to_block": {
  "cooldown_range": [
    5,
    7
  ],
  "priority": 10,
  "max_velocity": 1,
  "forbidden_blocks": [
    "minecraft:water"
  ],
  "minimum_distance": 1,
  "minimum_path_length": 2,
  "preferred_blocks": [
    "minecraft:waterlily",
    "minecraft:big_dripleaf"
  ],
  "preferred_blocks_chance": 0.5,
  "scale_factor": 0.6,
  "search_height": 4,
  "search_width": 8
}


Goat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json

"minecraft:behavior.jump_to_block": {
  "priority": 8,
  "search_width": 10,
  "search_height": 10,
  "minimum_path_length": 8,
  "minimum_distance": 1,
  "scale_factor": 0.6,
  "cooldown_range": [
    30,
    60
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Jump To Block Behavior 
 * (minecraft:behavior.jump_to_block)
 * Allows an entity to jump to another random block.
 */
export default interface MinecraftBehaviorJumpToBlock {

  control_flags?: string[];

  /**
   * @remarks
   * Minimum and maximum cooldown time-range (positive, in seconds)
   * between each attempted jump.
   * 
   * Sample Values:
   * Frog: [5,7]
   *
   * Goat: [30,60]
   *
   */
  cooldown_range?: MinecraftBehaviorJumpToBlockCooldownRange;

  /**
   * @remarks
   * Blocks that the mob can't jump to.
   * 
   * Sample Values:
   * Frog: ["minecraft:water"]
   *
   */
  forbidden_blocks?: string;

  /**
   * @remarks
   * The maximum velocity with which the mob can jump.
   * 
   * Sample Values:
   * Frog: 1
   *
   */
  max_velocity?: number;

  /**
   * @remarks
   * The minimum distance (in blocks) from the mob to a block, in
   * order to consider jumping to it.
   * 
   * Sample Values:
   * Frog: 1
   *
   *
   */
  minimum_distance?: number;

  /**
   * @remarks
   * The minimum length (in blocks) of the mobs path to a block, in
   * order to consider jumping to it.
   * 
   * Sample Values:
   * Frog: 2
   *
   * Goat: 8
   *
   */
  minimum_path_length?: number;

  /**
   * @remarks
   * Blocks that the mob prefers jumping to.
   * 
   * Sample Values:
   * Frog: ["minecraft:waterlily","minecraft:big_dripleaf"]
   *
   */
  preferred_blocks?: string;

  /**
   * @remarks
   * Chance (between 0.0 and 1.0) that the mob will jump to a
   * preferred block, if in range. Only matters if preferred blocks are
   * defined.
   * 
   * Sample Values:
   * Frog: 0.5
   *
   */
  preferred_blocks_chance?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Frog: 10
   *
   * Goat: 8
   *
   */
  priority?: number;

  /**
   * @remarks
   * The scalefactor of the bounding box of the mob while it is
   * jumping.
   * 
   * Sample Values:
   * Frog: 0.6
   *
   *
   */
  scale_factor?: number;

  /**
   * @remarks
   * The height (in blocks, in range [1, 15]) of the search box,
   * centered around the mob.
   * 
   * Sample Values:
   * Frog: 4
   *
   * Goat: 10
   *
   */
  search_height?: number;

  /**
   * @remarks
   * The width (in blocks, in range [1, 15]) of the search box,
   * centered around the mob.
   * 
   * Sample Values:
   * Frog: 8
   *
   * Goat: 10
   *
   */
  search_width?: number;

}


export enum MinecraftBehaviorJumpToBlockControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorJumpToBlockCooldownRange {

  max?: number;

  min?: number;

}