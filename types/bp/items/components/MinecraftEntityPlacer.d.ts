// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:entity_placer
 * 
 * minecraft:entity_placer Samples
"minecraft:entity_placer": {
  "entity": "minecraft:spider",
  "dispense_on": [
    "minecraft:web"
  ],
  "use_on": [
    "minecraft:web"
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Entity Placer (minecraft:entity_placer)
 * Allows an item to place entities into the world. Additionally, in
 * version 1.19.80 and above, the component allows the item to set
 * the spawn type of a monster spawner.
 */
export default interface MinecraftEntityPlacer {

  /**
   * @remarks
   * List of block descriptors of the blocks that this item can be
   * dispensed on. If left empty, all blocks will be allowed.
   */
  dispense_on?: MinecraftEntityPlacerDispenseOn[];

  /**
   * @remarks
   * The entity to be placed in the world.
   */
  entity?: object;

  /**
   * @remarks
   * List of block descriptors of the blocks that this item can be
   * used on. If left empty, all blocks will be allowed.
   */
  use_on?: MinecraftEntityPlacerUseOn[];

}


/**
 * Dispense On (dispense_on)
 */
export interface MinecraftEntityPlacerDispenseOn {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Use On (use_on)
 */
export interface MinecraftEntityPlacerUseOn {

  name?: string;

  states?: number;

  tags?: string;

}