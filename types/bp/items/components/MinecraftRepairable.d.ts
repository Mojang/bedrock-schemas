// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:repairable
 * 
 * minecraft:repairable Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Repairable (minecraft:repairable)
 * The repairable item component specifies which items can be used
 * to repair this item, along with how much durability is 
 * gained.
 */
export default interface MinecraftRepairable {

  /**
   * @remarks
   * List of repair item entries. Each entry needs to define a list of
   * strings for `items` that can be used for the repair and an
   * optional `repair_amount` for how much durability is gained.
   */
  repair_items?: string;

}