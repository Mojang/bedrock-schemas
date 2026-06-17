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
 * Block Connection Rule (minecraft:connection_rule)
 * Defines whether other blocks such as fences, walls, bars, and
 * glass panes are allowed to connect to this block.
 * Note: Lets a custom block control whether other blocks with
 * connection behavior (fences, walls, bars, glass panes) may
 * visually connect to it. Released alongside the new
 * `minecraft:has_fence_connections` VanillaBlockTag.
 * Note: Available without the Upcoming Creator Features experimental toggle
 * for block format versions 1.26.0 or higher.
 */
export default interface MinecraftConnectionRule {

  /**
   * @remarks
   * The type of block allowed to connect to this block. Note that the
   * "only_fences" option allows connections from all Vanilla fences
   * excluding NetherBrick.
   */
  accepts_connections_from?: string;

  /**
   * @remarks
   * The cardinal directions that connection is enabled for. Note that
   * if "none" is specified for "accepts_connections_from", this field
   * will not be used.
   */
  enabled_directions?: string[];

}


export enum MinecraftConnectionRuleAcceptsConnectionsFrom {
  all = `all`,
  none = `none`,
  onlyFences = `only_fences`
}


export enum MinecraftConnectionRuleEnabledDirections {
  east = `east`,
  north = `north`,
  south = `south`,
  west = `west`
}