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
  noise_block_specifiers: object[];

  /**
   * @remarks
   * The Specification for the Noise used by the surface builder.
   */
  noise_descriptor: object;

  /**
   * @remarks
   * A list of blocks that the surface builder is not allowed to
   * replace. Leaving this list empty or unspecified will allow the
   * replacement of any (non-air) block type.
   */
  non_replaceable_blocks?: string;

  type: string;

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