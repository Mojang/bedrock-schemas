// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biome Components Documentation - minecraft:subsurface_builder
 */

import * as jsoncommon from '../../../common';

/**
 * Subsurface Builder (minecraft:subsurface_builder)
 * Sub Surface Builders allow specifying a
 * `minecraft:surface_builder` to be applied to biomes located
 * underneath regular terrain surface. Note, however, that
 * pre-existing surface builder types' processing have not been
 * updated to accommodate the ability to specify them for
 * sub-terrain height ranges, which may lead to unexpected results when
 * using them.
 */
export default interface MinecraftSubsurfaceBuilder {

  /**
   * @remarks
   * Controls block types and strategy used for terrain 
   * generation.
   */
  builder: object;

}