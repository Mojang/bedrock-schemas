// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:scale_by_age
 */

import * as jsoncommon from '../../../common';

/**
 * Scale By Age (minecraft:scale_by_age)
 * Defines the entity's size interpolation based on the entity's 
 * age.
 */
export default interface MinecraftScaleByAge {

  /**
   * @remarks
   * Ending scale of the entity when it's fully grown.
   */
  end_scale?: number;

  /**
   * @remarks
   * Initial scale of the newborn entity.
   */
  start_scale?: number;

}