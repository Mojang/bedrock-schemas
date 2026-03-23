// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_appearance_billboard_flipbook_data_1.21.0
 */

import * as jsoncommon from '../../common';

/**
 * Particle Appearance Billboard Flipbook Data 1.21.0 Misc
 * Particle Appearance Billboard Flipbook Data 1.21.0 Misc.
 */
export default interface ParticleAppearanceBillboardFlipbookData1210Misc {

  /**
   * @remarks
   * base_UV
   */
  base_UV?: object[];

  /**
   * @remarks
   * frames_per_second
   */
  frames_per_second?: number;

  /**
   * @remarks
   * loop
   */
  loop?: boolean;

  /**
   * @remarks
   * max_frame
   */
  max_frame?: ParticleAppearanceBillboardFlipbookData1210MiscMaxFrame;

  /**
   * @remarks
   * size_UV
   */
  size_UV?: object[];

  /**
   * @remarks
   * step_UV
   */
  step_UV?: object[];

  /**
   * @remarks
   * stretch_to_lifetime
   */
  stretch_to_lifetime?: boolean;

}


/**
 * Max Frame
 * Max Frame
 */
export interface ParticleAppearanceBillboardFlipbookData1210MiscMaxFrame {

}