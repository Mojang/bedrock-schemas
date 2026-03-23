// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:dweller
 * 
 * minecraft:dweller Samples

Iron Golem - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json

"minecraft:dweller": {
  "dwelling_type": "village",
  "can_find_poi": false,
  "can_migrate": true,
  "dweller_role": "defender",
  "first_founding_reward": 0,
  "update_interval_base": 60,
  "update_interval_variant": 40
}

 */

import * as jsoncommon from '../../../common';

/**
 * Dweller (minecraft:dweller)
 * Compels an entity to join and migrate between villages and other
 * dwellings.
 */
export default interface MinecraftDweller {

  /**
   * @remarks
   * Whether or not the entity can find and add POIs to the 
   * dwelling.
   */
  can_find_poi?: boolean;

  /**
   * @remarks
   * Determines whether the entity can migrate between dwellings, or
   * only have its initial dwelling.
   * 
   * Sample Values:
   * Iron Golem: true
   *
   */
  can_migrate?: boolean;

  /**
   * @remarks
   * 
   * Sample Values:
   * Iron Golem: "defender"
   *
   */
  dweller_role?: string;

  /**
   * @remarks
   * A padding distance for checking if the entity is within the
   * dwelling.
   */
  dwelling_bounds_tolerance?: number;

  /**
   * @remarks
   * The role of which the entity plays in the dwelling. Current Roles:
   * inhabitant, defender, hostile, passive.
   */
  dwelling_role?: string;

  /**
   * @remarks
   * The type of dwelling the entity wishes to join. Current Types:
   * village.
   * 
   * Sample Values:
   * Iron Golem: "village"
   *
   */
  dwelling_type?: string;

  /**
   * @remarks
   * Determines how much reputation players are rewarded on first
   * founding.
   */
  first_founding_reward?: number;

  /**
   * @remarks
   * Allows the user to define a starting profession for this
   * particular Dweller, instead of letting them choose organically. (They
   * still need to gain experience from trading before this takes
   * effect.)
   */
  preferred_profession?: string;

  /**
   * @remarks
   * How often the entity checks on their dwelling status in ticks.
   * Positive values only.
   * 
   * Sample Values:
   * Iron Golem: 60
   *
   */
  update_interval_base?: number;

  /**
   * @remarks
   * The variant value in ticks that will be added to the
   * update_interval_base.
   * 
   * Sample Values:
   * Iron Golem: 40
   *
   */
  update_interval_variant?: number;

}