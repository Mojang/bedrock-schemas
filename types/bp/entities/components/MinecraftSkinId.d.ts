// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:skin_id
 * 
 * minecraft:skin_id Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Skin Id (minecraft:skin_id)
 * Skin ID value. Can be used to differentiate skins, such as base
 * skins for villagers.
 * Note: Requires multiple texture sets to be set up for the
 * entity.
 */
export default interface MinecraftSkinId {

  /**
   * @remarks
   * The ID of the skin. By convention, 0 is the ID of the base 
   * skin.
   */
  value?: number;

}