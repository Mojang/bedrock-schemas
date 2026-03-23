// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:scale
 * 
 * minecraft:scale Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Scale (minecraft:scale)
 * Sets the entity's visual size multiplier. A value of 1.0 means
 * normal size, 0.5 is half size (commonly used for baby mobs), and
 * values above 1.0 make the entity larger.
 */
export default interface MinecraftScale {

  /**
   * @remarks
   * The scale multiplier for visual size. 1.0 = normal, 0.5 = half
   * (babies), 2.0 = double size.
   */
  value?: number;

}