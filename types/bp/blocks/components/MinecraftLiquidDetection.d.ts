// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:liquid_detection
 * 
 * minecraft:liquid_detection Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Liquid Detection (minecraft:liquid_detection)
 * The definitions for how a block behaves when detecting liquid. Only
 * one rule definition is allowed per liquid type - if multiple are
 * specified, the first will be used and the rest will be
 * ignored.
Experimental toggles required: Upcoming Creator Features (in
 * format versions before 1.21.60).
 */
export default interface MinecraftLiquidDetection {

  /**
   * @remarks
   * Whether this block can contain the liquid. For example, if the
   * liquid type is `water`, this means the block can be
   * waterlogged.
   */
  can_contain_liquid?: boolean;

  /**
   * @remarks
   * The type of liquid this detection rule is for. Currently, `water` is
   * the only supported liquid type. If this field is omitted, `water`
   * will be the liquid type by default.
   */
  liquid_type?: string;

  /**
   * @remarks
   * How the block reacts to flowing water. Must be one of the
   * following options:
"blocking" - The default value for this field.
   * The block stops the liquid from flowing.
"broken" - The block is
   * destroyed completely.
"popped" - The block is destroyed and its
   * item is spawned.
"no_reaction" - The block is unaffected; visually,
   * the liquid will flow through the block.
   */
  on_liquid_touches?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * When a block contains a liquid, controls the directions in
   * which the liquid can't flow out from the block. Also controls the
   * directions in which a block can stop liquid flowing into it if
   * `no_reaction` is set for the `on_liquid_touches` field. Can be
   * a list of the following directions: "up", "down", "north", "south",
   * "east", "west". The default is an empty list; this means that
   * liquid can flow out of all directions by default.
   */
  stops_liquid_flowing_from_direction?: string[];

  /**
   * @remarks
   * Whether this block uses the encompassing collider to visually clip
   * the liquid. The encompassing collider is the smallest single AABB
   * that contains all of the block's colliders.
A liquid's base
   * visual shape is ALWAYS a quad, they do not have more
   * subdivisions.
When use_liquid_clipping is TRUE, the game will
   * attempt to reduce the visible volume of water if the collision shape
   * allows it. Eg. a wall will turn the water base shape into a
   * rectangle on the side of the incoming water.
When use_liquid_clipping is
   * FALSE, the game will preserve the water base shape as a full
   * square, no matter what the collision shape of the block they
   * share space with is.
   */
  use_liquid_clipping?: boolean;

}