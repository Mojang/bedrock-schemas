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
   */
  movement_type?: string;

}