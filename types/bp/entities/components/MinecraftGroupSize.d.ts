// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:group_size
 * 
 * minecraft:group_size Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Group Size (minecraft:group_size)
 * Keeps track of entity group size in the given radius.
 */
export default interface MinecraftGroupSize {

  /**
   * @remarks
   * The list of conditions that must be satisfied for other entities to
   * be counted towards group size.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Radius from center of entity.
   */
  radius?: number;

}