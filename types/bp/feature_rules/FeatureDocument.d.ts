// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Feature Rules Documentation - minecraft:feature_document
 */

import * as jsoncommon from '../../common';

/**
 * Feature Document (feature_document)
 * A Minecraft Bedrock Edition feature definition document. Features are
 * world generation elements like ore deposits, trees, geodes, and
 * other placeable structures. They define the blocks to place and
 * how to arrange them.
 */
export default interface FeatureDocument {

  /**
   * @remarks
   * The format version of this feature file. Use '1.13.0' or 
   * later.
   */
  format_version: string | number[];

}