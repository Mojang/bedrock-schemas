// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:buoyant
 * 
 * minecraft:buoyant Samples

Sulfur Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_bouncy/minecraft:buoyant/: 
"minecraft:buoyant": {
  "base_buoyancy": 1,
  "apply_gravity": false,
  "can_auto_step_from_liquid": true,
  "movement_type": "bobbing",
  "liquid_blocks": [
    "minecraft:water",
    "minecraft:flowing_water",
    "minecraft:lava",
    "minecraft:flowing_lava"
  ]
}


Xp Orb - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/xp_orb.json

"minecraft:buoyant": {
  "apply_gravity": false,
  "liquid_blocks": [
    "minecraft:flowing_water",
    "minecraft:water"
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Buoyant (minecraft:buoyant)
 * Enables an entity to float on the specified liquid blocks.
 */
export default interface MinecraftBuoyant {

  /**
   * @remarks
   * Applies gravity each tick. Causes "movement_type" to be more
   * impactful, but also gravity to be applied more intensely outside
   * liquids.
   */
  apply_gravity?: boolean;

  /**
   * @remarks
   * Base buoyancy used to calculate how much will a entity 
   * float.
   * 
   * Sample Values:
   * Sulfur Cube: 1
   *
   */
  base_buoyancy?: number;

  /**
   * @remarks
   * Probability for a big wave hitting the entity. Only used if
   * "movement_type" is "waves".
   */
  big_wave_probability?: number;

  /**
   * @remarks
   * Multiplier for the speed to make a big wave. Triggered depending on
   * "big_wave_probability".
   */
  big_wave_speed?: number;

  /**
   * @remarks
   * Whether the entity can move out of a liquid block to a
   * neighboring solid block if pushed against it.
   * 
   * Sample Values:
   * Sulfur Cube: true
   *
   */
  can_auto_step_from_liquid?: boolean;

  /**
   * @remarks
   * How much an entity will be dragged down when the component is
   * removed.
   */
  drag_down_on_buoyancy_removed?: number;

  /**
   * @remarks
   * List of blocks this entity can float on. Must be a liquid 
   * block.
   * 
   * Sample Values:
   * Sulfur Cube: ["minecraft:water","minecraft:flowing_water","minecraft:lava","minecraft:flowing_lava"]
   *
   * Xp Orb: ["minecraft:flowing_water","minecraft:water"]
   *
   */
  liquid_blocks?: string[];

  /**
   * @remarks
   * Type of vertical movement applied to the entity:
"waves", simulates
   * wave movement based on the entity speed.
"bobbing", simulates waves
   * going through.
"none", simulates waves going through.
   * 
   * Sample Values:
   * Sulfur Cube: "bobbing"
   *
   */
  movement_type?: string;

}