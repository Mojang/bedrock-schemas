// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:blockdescriptorproxy
 */

import * as jsoncommon from '../../common';

/**
 * Spawn BlockDescriptorProxy (BlockDescriptorProxy)
 * References a block type by name, states, or tags for use in
 * spawn conditions. Used with spawn_above_block_filter to
 * restrict spawning to locations above specific block types like
 * grass_block or stone.
 */
export default interface BlockDescriptorProxy {

  name?: string;

  states?: number;

  tags?: string;

}