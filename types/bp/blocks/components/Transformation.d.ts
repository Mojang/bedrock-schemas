// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:transformation
 */

import * as jsoncommon from '../../../common';

/**
 * Block Transformation (Transformation)
 * The block's translation, rotation and scale with respect to the
 * center of its world position.
 * Note: Added in 1.19.80 as a replacement for the previous block
 * rotation component, adding support for scaling and translation in
 * addition to rotation. May be added to the whole block and/or to
 * individual block permutations.
 * Note: Added rotation_pivot and scale_pivot attributes in 1.21.0 to
 * support pivoted rotation and scale operations.
 */
export default interface Transformation {

  /**
   * @remarks
   * The block's rotation in increments of 90 degrees
   */
  rotation?: number[];

  /**
   * @remarks
   * The point to apply rotation around.
   */
  rotation_pivot?: number[];

  /**
   * @remarks
   * The block's scale
   */
  scale?: number[];

  /**
   * @remarks
   * The point to apply scale around.
   */
  scale_pivot?: number[];

  /**
   * @remarks
   * The block's translation
   */
  translation?: number[];

}