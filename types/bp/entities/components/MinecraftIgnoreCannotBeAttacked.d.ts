// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:ignore_cannot_be_attacked
 */

import * as jsoncommon from '../../../common';

/**
 * Ignore Cannot Be Attacked 
 * (minecraft:ignore_cannot_be_attacked)
 * Allows the owner entity to ignore the
 * "minecraft:cannot_be_attacked" component on entities that fulfill
 * the filter.
 */
export default interface MinecraftIgnoreCannotBeAttacked {

  /**
   * @remarks
   * Defines which entities are exceptions and are allowed to be
   * attacked by the owner entity, potentially attacked entity is
   * subject "other". If this is not specified then all attacks by
   * the owner are allowed.
   */
  filters?: jsoncommon.MinecraftFilter;

}