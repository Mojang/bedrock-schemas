// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.random_hover
 * 
 * minecraft:behavior.random_hover Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:behavior.random_hover": {
  "hover_height": [
    1,
    4
  ],
  "y_dist": 8,
  "interval": 1,
  "xz_dist": 8,
  "priority": 9,
  "y_offset": -1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Random Hover Behavior 
 * (minecraft:behavior.random_hover)
 * Allows the mob to hover around randomly, close to the 
 * surface.
 */
export default interface MinecraftBehaviorRandomHover {

  control_flags?: string[];

  /**
   * @remarks
   * The height above the surface which the mob will try to 
   * maintain
   * 
   * Sample Values:
   * Allay: [1,4]
   *
   */
  hover_height?: MinecraftBehaviorRandomHoverHoverHeight;

  /**
   * @remarks
   * A random value to determine when to randomly move somewhere. This
   * has a 1/interval chance to choose this goal
   * 
   * Sample Values:
   * Allay: 1
   *
   */
  interval?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Allay: 9
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * Distance in blocks on ground that the mob will look for a new
   * spot to move to. Must be at least 1
   * 
   * Sample Values:
   * Allay: 8
   *
   */
  xz_dist?: number;

  /**
   * @remarks
   * Distance in blocks that the mob will look up or down for a new
   * spot to move to. Must be at least 1
   * 
   * Sample Values:
   * Allay: 8
   *
   */
  y_dist?: number;

  /**
   * @remarks
   * Height in blocks to add to the selected target position
   * 
   * Sample Values:
   * Allay: -1
   *
   */
  y_offset?: number;

}


export enum MinecraftBehaviorRandomHoverControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftBehaviorRandomHoverHoverHeight {

  max?: number;

  min?: number;

}