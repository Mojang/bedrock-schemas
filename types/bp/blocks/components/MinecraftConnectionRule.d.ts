// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:connection_rule
 */

import * as jsoncommon from '../../../common';

/**
 * Connection Rule (minecraft:connection_rule)
 * Defines whether other blocks such as fences, walls, bars, and
 * glass panes are allowed to connect to this block.
Experimental toggles
 * required: Upcoming Creator Features (in format versions before
 * 1.26.0).
 */
export default interface MinecraftConnectionRule {

  /**
   * @remarks
   * The type of block allowed to connect to this block. Currently, the
   * options are: `all` (default), `only_fences`, and `none`. Note
   * that the `only_fences` option allows connections from all
   * Vanilla fences excluding NetherBrick.
   */
  accepts_connections_from?: string;

  /**
   * @remarks
   * The cardinal directions that connection is enabled for: `north`,
   * `south`, `east`, and `west`. All directions are enabled by
   * default. Note that if `none` is specified for
   * `accepts_connections_from`, this field will not be used.
   */
  enabled_directions?: string[];

}