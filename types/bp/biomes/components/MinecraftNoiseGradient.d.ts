// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biome Components Documentation - minecraft:noise_gradient
 */

import * as jsoncommon from '../../../common';

/**
 * Biome Noise Gradient (minecraft:noise_gradient)
 * Places continuous bands of blocks according to a noise
 * distribution. This surface builder's processing has been
 * implemented with sub-terrain height ranges in mind.
 */
export default interface MinecraftNoiseGradient {

  /**
   * @remarks
   * The noise block specifiers defining which ranges of noise are
   * associated with which blocks. The ranges provided are valid on
   * the interval [0, 1], and may overlap at their endpoints.
   */
  noise_block_specifiers: MinecraftNoiseGradientNoiseBlockSpecifiers[];

  /**
   * @remarks
   * The Specification for the Noise used by the surface builder.
   */
  noise_descriptor: MinecraftNoiseGradientNoiseDescriptor;

  /**
   * @remarks
   * A list of blocks that the surface builder is not allowed to
   * replace. Leaving this list empty or unspecified will allow the
   * replacement of any (non-air) block type.
   */
  non_replaceable_blocks?: string;

  type: string;

}


/**
 * Biome NoiseBlockSpecifier (NoiseBlockSpecifier)
 */
export interface MinecraftNoiseGradientNoiseBlockSpecifiers {

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
  range?: MinecraftNoiseGradientNoiseBlockSpecifiersRange;

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
export interface MinecraftNoiseGradientNoiseBlockSpecifiersRange {

  max?: number;

  min?: number;

}


/**
 * Biome NoiseDescriptor (NoiseDescriptor)
 */
export interface MinecraftNoiseGradientNoiseDescriptor {

  /**
   * @remarks
   * Governs the attenuation of the first n octaves in the generated 
   * noise.
   */
  amplitudes: number[];

  /**
   * @remarks
   * Governs the general frequency characteristics of the generated noise.
   * Lower value results in noise with lower frequency content.
   */
  first_octave: number;

  /**
   * @remarks
   * The string used to initialize the noise. Has no impact on the
   * qualitative aspects of the generated values.
   */
  name: string;

}


export enum MinecraftNoiseGradientType {
  minecraftCapped = `minecraft:capped`,
  minecraftFrozenOcean = `minecraft:frozen_ocean`,
  minecraftMesa = `minecraft:mesa`,
  minecraftNoiseGradient = `minecraft:noise_gradient`,
  minecraftOverworld = `minecraft:overworld`,
  minecraftSwamp = `minecraft:swamp`,
  minecraftTheEnd = `minecraft:the_end`
}