// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Visuals Documentation - minecraft:block_reference.v1.10.0
 */

import * as jsoncommon from '../../common';

/**
 * Block Reference (v1.10.0) (block_reference)
 * Defines a block reference object as used by resource pack client
 * definitions (format_version 1.10.0).
 */
export default interface BlockReference {

  name: string;

  states: BlockReferenceStates;

}


/**
 */
export interface BlockReferenceStates {

  "w:w"?: number;

}