// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Culling Documentation - minecraft:blockculling_contents
 */

import * as jsoncommon from '../../common';

/**
 * BlockCulling Contents
 * BlockCulling Contents.
 */
export default interface BlockCullingContents {

  /**
   * @remarks
   * bone
   */
  bone?: string;

  /**
   * @remarks
   * cube
   */
  cube?: number;

  /**
   * @remarks
   * Facing
   */
  face?: string;

}