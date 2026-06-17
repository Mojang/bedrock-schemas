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
"minecraft:repairable": {
  "on_repaired": "minecraft:celebrate",
  "repair_items": [
    "anvil"
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Repairable (minecraft:repairable)
 * Defines the items that can be used to repair a defined item, and
 * the amount of durability each item restores upon repair. Each
 * entry needs to define a list of strings for 'items' that can be
 * used for the repair and an optional 'repair_amount' for how much
 * durability is repaired.
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