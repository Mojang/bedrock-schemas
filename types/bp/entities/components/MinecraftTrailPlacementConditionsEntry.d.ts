// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:trail_placement_conditions_entry
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Trail Placement Conditions Entry (minecraft:trail placement_conditions
 * entry)
 */
export default interface MinecraftTrailPlacementConditionsEntry {

  /**
   * @remarks
   * Block types that satisfy this condition at its vertical offset from
   * the placement position.
   */
  block_types?: MinecraftTrailPlacementConditionsEntryBlockTypes[];

  /**
   * @remarks
   * Vertical offset from the trail block placement position. Defaults to
   * 0.
   */
  y_offset?: number;

}


/**
 * Block Types (block_types)
 */
export interface MinecraftTrailPlacementConditionsEntryBlockTypes {

  name?: string;

  states?: number;

  tags?: string;

}