// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:uv_proxy
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles UV Proxy (UV Proxy)
 * Controls UV texture mapping and flipbook animation for
 * particles.
 */
export default interface UVProxy {

  flipbook?: UVProxyFlipbook;

  texture_height?: number;

  texture_width?: number;

  uv?: { [key: string]: string };

  uv_size?: { [key: string]: string };

}


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
export interface UVProxyFlipbook {

  base_UV: { [key: string]: string };

  frames_per_second?: number;

  loop?: boolean;

  max_frame: { [key: string]: string };

  size_UV?: number[];

  step_UV?: number[];

  stretch_to_lifetime?: boolean;

}