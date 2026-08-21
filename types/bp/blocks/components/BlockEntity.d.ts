// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:block_entity
 */

import * as jsoncommon from '../../../common';

/**
 * Block Entity (block_entity)
 * Adds per-instance metadata for this block.
 */
export default interface BlockEntity {

  /**
   * @remarks
   * Adds a container to this block.
   */
  container?: object;

  /**
   * @remarks
   * Dynamic-properties can store and retrieve variables on a block via
   * scripting, more at
   * 
   * https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/blockdynamicpropertiescomponent.
   */
  dynamic_properties?: boolean;

}