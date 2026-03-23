// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:grows_crop
 * 
 * minecraft:grows_crop Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Grows Crop (minecraft:grows_crop)
 * Could increase crop growth when entity walks over crop.
 */
export default interface MinecraftGrowsCrop {

  /**
   * @remarks
   * Value between 0-1. Chance of success per tick.
   */
  chance?: number;

  /**
   * @remarks
   * Number of charges
   */
  charges?: number;

}