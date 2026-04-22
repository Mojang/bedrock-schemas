// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biome Components Documentation - minecraft:noisedescriptor
 */

import * as jsoncommon from '../../../common';

/**
 * Biome NoiseDescriptor (NoiseDescriptor)
 */
export default interface NoiseDescriptor {

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