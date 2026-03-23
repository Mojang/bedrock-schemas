// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:scan_surface
 */

import * as jsoncommon from '../../common';

/**
 * Scan Surface (minecraft:scan_surface)
 * Searches for valid terrain surface positions before placing
 * features. Scans downward from the generation height to find solid
 * ground, then places the referenced feature at appropriate surface
 * level. Essential for features like flowers, grass, and
 * decorations that must sit on top of terrain regardless of
 * elevation.
 * IMPORTANT
 * This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.
 * 
 */
export default interface MinecraftScanSurface {

  description: MinecraftScanSurfaceDescription;

  format_version?: string;

}


/**
 */
export interface MinecraftScanSurfaceDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}