// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:color2
 * 
 * minecraft:color2 Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Color2 (minecraft:color2)
 * Defines the entity's second texture color.
 * Note: Only works on vanilla entities that have a second predefined
 * color values (tropical fish).
 */
export default interface MinecraftColor2 {

  /**
   * @remarks
   * The second Palette Color value of the entity.
   */
  value?: number;

}