// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:breathable
 * 
 * minecraft:breathable Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:breathable": {
  "suffocateTime": 0,
  "totalSupply": 15
}


Bat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json

"minecraft:breathable": {
  "suffocate_time": 0,
  "total_supply": 15
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:breathable": {
  "breathes_water": true,
  "suffocate_time": 0,
  "total_supply": 15
}

 */

import * as jsoncommon from '../../../common';

/**
 * Breathable (minecraft:breathable)
 * Defines what blocks this entity can breathe in and gives them the
 * ability to suffocate.
 */
export default interface MinecraftBreathable {

  /**
   * @remarks
   * List of blocks this entity can breathe in, in addition to the
   * selected items above.
   */
  breathe_blocks?: string[];

  /**
   * @remarks
   * If set, this entity can breathe in air.
   */
  breathes_air?: boolean;

  /**
   * @remarks
   * If set, this entity can breathe in lava.
   */
  breathes_lava?: boolean;

  /**
   * @remarks
   * If set, this entity can breathe in solid blocks.
   */
  breathes_solids?: boolean;

  /**
   * @remarks
   * If set, this entity can breathe in water.
   * 
   * Sample Values:
   * Bogged: true
   *
   */
  breathes_water?: boolean;

  /**
   * @remarks
   * If set, this entity will have visible bubbles while in 
   * water.
   */
  generates_bubbles?: boolean;

  /**
   * @remarks
   * Time in seconds to recover breath to maximum.
   */
  inhale_time?: number;

  /**
   * @remarks
   * List of blocks this entity cannot breathe in, in addition to
   * the selected items above.
   */
  non_breathe_blocks?: string[];

  /**
   * @remarks
   * Time in seconds between suffocation damage.
   */
  suffocate_time?: number;

  suffocateTime?: number;

  /**
   * @remarks
   * Time in seconds the entity can hold its breath.
   * 
   * Sample Values:
   * Bat: 15
   *
   *
   */
  total_supply?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Allay: 15
   *
   */
  totalSupply?: number;

}