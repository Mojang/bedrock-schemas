// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Textures Documentation - minecraft:blocks_resource
 */

import * as jsoncommon from '../../common';

/**
 * Blocks Resource Definition (blocks_resource)
 * The blocks.json file in a resource pack defines texture and
 * sound mappings for blocks. Each block entry maps a block
 * identifier to its visual and audio properties.
 * Note: This file uses block identifiers as dynamic keys. The
 * format_version field is the only fixed field; all other properties are
 * block-specific entries.
 */
export default interface BlocksResource {

  /**
   * @remarks
   * The format version of the blocks.json file. Can be an array like
   * [1, 1, 0] or a string like '1.1.0'.
   */
  format_version?: string | number[];

}