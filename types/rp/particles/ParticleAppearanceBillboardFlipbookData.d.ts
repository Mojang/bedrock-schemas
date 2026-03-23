// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_appearance_billboard_flipbook_data
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Appearance Billboard Flipbook Data
 * (particle_appearance_billboard flipbook_data)
 * Enables sprite sheet animation for particle billboards, cycling
 * through frames over the particle's lifetime. Configure the
 * texture grid dimensions, animation speed, and whether to loop or
 * stretch timing. Essential for animated particles like animated
 * flames, water splashes with frames, explosion sequences, and any
 * particle using multi-frame textures.
 */
export default interface ParticleAppearanceBillboardFlipbookData {

  base_UV: { [key: string]: string };

  frames_per_second?: number;

  loop?: boolean;

  max_frame: { [key: string]: string };

  size_UV?: number[];

  step_UV?: number[];

  stretch_to_lifetime?: boolean;

}