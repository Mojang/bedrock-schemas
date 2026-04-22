// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.hover
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Hover Behavior (minecraft:behavior.hover)
 * Allows the mob to hover in place.
 */
export default interface MinecraftBehaviorHover {

  control_flags?: string[];

  priority?: number;

}


export enum MinecraftBehaviorHoverControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}