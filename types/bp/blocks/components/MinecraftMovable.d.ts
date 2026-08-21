// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:movable
 * 
 * minecraft:movable Samples

Block Red Shrub - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/red_shrub.block.json

"minecraft:movable": {
  "movement_type": "popped"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Movable (minecraft:movable)
 * Defines whether the block can be pushed or pulled by a piston. Use
 * movement_type to declare the block as push_pull, push, popped, or
 * immovable; use sticky to opt into same-block grouping similar to
 * slime blocks.
 */
export default interface MinecraftMovable {

  /**
   * @remarks
   * How the block reacts to being pushed by another block like a
   * piston. The options are: "push_pull" - The default value for
   * this field. The block will be pushed and pulled by a piston. "push"
   * - The block will only be pulled by a piston and will ignore a
   * sticky piston. "popped" - The block is destroyed when moved by
   * a piston. "immovable" - The block is unaffected by a piston.
   * 
   * Sample Values:
   * Block Red Shrub: "popped"
   *
   *
   */
  movement_type: MinecraftMovableMovementType;

  /**
   * @remarks
   * How the block should handle adjacent blocks around it when being
   * pushed by another block like a piston. The options are: "same" -
   * Adjacent blocks to this block will be moved when moved. This
   * excludes other blocks with the "same" property. This will only
   * work with the movement_type: "push_pull". "none" - The default and
   * will not move adjacent blocks.
   */
  sticky?: MinecraftMovableSticky;

}


export enum MinecraftMovableMovementType {
  immovable = `immovable`,
  popped = `popped`,
  push = `push`,
  pushPull = `push_pull`
}


export enum MinecraftMovableSticky {
  none = `none`,
  same = `same`
}