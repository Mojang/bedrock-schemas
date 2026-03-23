// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:home
 * 
 * minecraft:home Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Home (minecraft:home)
 * Saves a home position for when the entity is spawned. This
 * component allows entities like bees to remember and return to a
 * specific location such as a hive or nest.
 */
export default interface MinecraftHome {

  /**
   * @remarks
   * Optional list of blocks that can be considered a valid home. If
   * no such block longer exists at that position,
											the home
   * restriction is removed. Example syntax: minecraft:sand. Not
   * supported: minecraft:sand:1.
   */
  home_block_list?: string[];

  /**
   * @remarks
   * Optional radius that the entity will be restricted to in
   * relation to its home.
   */
  restriction_radius?: number;

  /**
   * @remarks
   * Defines how the entity will be restricted to its home position. Valid
   * values are: 'none' (no restriction), 'random_movement' (restricts
   * random wandering to be near home), and 'all_movement' (restricts all
   * movement to be near home, though entities can always move closer to
   * home if they are too far away).
   */
  restriction_type?: string;

}