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
 * Entity Buoyant (minecraft:buoyant)
 * Enables an entity to float on the specified liquid blocks.
 * Note: In 1.26.10 the `simulate_waves` boolean was replaced with
 * the `movement_type` string field (`waves` / `bobbing` /
 * `none`). `big_wave_probability` and `big_wave_speed` only apply
 * when `movement_type` is `waves`.
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
   * Whether the entity can step out of a liquid block onto a
   * neighboring solid block when pushed against it.
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
  liquid_blocks?: MinecraftBuoyantLiquidBlocks[];

  /**
   * @remarks
   * Type of vertical movement applied to the entity. `waves` simulates
   * wave movement based on the entity's speed (default). `bobbing` moves
   * the entity up and down at a constant pace. `none` disables wave
   * movement. Replaces the previous `simulate_waves` boolean.
   */
  movement_type?: string;

}


/**
 * Liquid Blocks (liquid_blocks)
 */
export interface MinecraftBuoyantLiquidBlocks {

  name?: string;

  states?: number;

  tags?: string;

}


export enum MinecraftBuoyantMovementType {
  bobbing = `bobbing`,
  none = `none`,
  waves = `waves`
}