// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biome Components Documentation - minecraft:noiseblockspecifier
 */

import * as jsoncommon from '../../../common';

/**
 * Biome NoiseBlockSpecifier (NoiseBlockSpecifier)
 */
export default interface NoiseBlockSpecifier {

  /**
   * @remarks
   * The block to place if the noise sample satisfies the provided
   * threshold/range
   */
  block: string;

  /**
   * @remarks
   * The string identifier of the noise associated with this
   * NoiseBlockSpecifier.
   */
  noise?: string;

  /**
   * @remarks
   * The range of sampled noise value associated with the provided 
   * Block.
   */
  range?: NoiseBlockSpecifierRange;

  /**
   * @remarks
   * The minimum sampled noise value associated with the provided 
   * Block.
   */
  threshold?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface NoiseBlockSpecifierRange {

  max?: number;

  min?: number;

}