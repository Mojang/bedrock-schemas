// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:seed
 * 
 * minecraft:seed Samples

Beetroot Seeds - vanilla_data/behavior_packs/vanilla/items/beetroot_seeds.json

"minecraft:seed": {
  "crop_result": "beetroot"
}


Glow Berries - vanilla_data/behavior_packs/vanilla_1.17.0/items/glow_berries.json

"minecraft:seed": {
  "crop_result": "cave_vines",
  "plant_at": [
    "cave_vines",
    "cave_vines_head_with_berries"
  ],
  "plant_at_any_solid_surface": true,
  "plant_at_face": "DOWN"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Seed (minecraft:seed)
 * Sets the item as a seed that can be planted to grow crops. When
 * used on valid ground, the seed will place the specified crop
 * block.
 */
export default interface MinecraftSeed {

  /**
   * @remarks
   * The block identifier that will be placed when the seed is
   * planted (e.g., 'wheat', 'beetroot', 'cave_vines').
   * 
   * Sample Values:
   * Beetroot Seeds: "beetroot"
   *
   * Glow Berries: "cave_vines"
   *
   */
  crop_result: string;

  /**
   * @remarks
   * Array of block identifiers that this seed can be planted on or
   * attached to. If not specified, standard farmland rules 
   * apply.
   * 
   * Sample Values:
   * Glow Berries: ["cave_vines","cave_vines_head_with_berries"]
   *
   */
  plant_at?: string[];

  /**
   * @remarks
   * If true, the seed can be planted on any solid surface, not just
   * farmland or specified blocks. This property was deprecated and
   * removed in versions after 1.18.
   * 
   * Sample Values:
   * Glow Berries: true
   *
   */
  plant_at_any_solid_surface?: boolean;

  /**
   * @remarks
   * The face of a block where this seed can be planted. Values: 'UP'
   * for top of blocks (normal crops), 'DOWN' for bottom (hanging plants
   * like glow berries). This property was deprecated and removed in
   * versions after 1.18.
   * 
   * Sample Values:
   * Glow Berries: "DOWN"
   *
   */
  plant_at_face?: string;

}