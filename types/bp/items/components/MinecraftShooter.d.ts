// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:shooter
 * 
 * minecraft:shooter Samples
"minecraft:shooter": {
  "ammunition": [
    {
      "item": "custom_projectile",
      "use_offhand": true,
      "search_inventory": true,
      "use_in_creative": true
    }
  ],
  "max_draw_duration": 1,
  "scale_power_by_draw_duration": true,
  "charge_on_draw": false
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Shooter (minecraft:shooter)
 * Compels an item to shoot projectiles, similarly to a bow or
 * crossbow. Must have the minecraft:use_modifiers component in
 * order to function properly.
 * Note: Ammunition used by minecraft:shooter must have the
 * minecraft:projectile component in order to function 
 * properly.
 * Note: Items equipped with the shooter component will only sustain
 * damage while shooting. Durability will remain unaffected if the
 * item is used for melee attacks.
 */
export default interface MinecraftShooter {

  /**
   * @remarks
   * A list of ammunition entries that define which items can be
   * used as projectiles for this shooter. Each entry specifies the
   * item, whether to search the offhand, inventory, and whether to
   * use in creative mode.
   */
  ammunition?: MinecraftShooterAmmunition[];

  /**
   * @remarks
   * When true, the shooter begins charging when the player starts
   * drawing, similar to a crossbow. Default is false.
   */
  charge_on_draw: boolean;

  /**
   * @remarks
   * The maximum time in seconds that a player can draw the shooter
   * before it automatically fires or reaches maximum power. Default is
   * 0.
   */
  max_draw_duration: number;

  /**
   * @remarks
   * When true, the projectile's launch power increases based on how
   * long the player holds the use button before releasing. Default is
   * false.
   */
  scale_power_by_draw_duration: boolean;

}


/**
 * Item Ammunition (Ammunition)
 * Configures this item as ammunition consumed by ranged weapons like
 * bows and crossbows. Reference compatible shooter items and
 * specify search behavior for inventory slots. When players use
 * the associated weapon, this item is consumed and its projectile is
 * launched.
 */
export interface MinecraftShooterAmmunition {

  /**
   * @remarks
   * Ammunition item description identifier.
   */
  item: string;

  /**
   * @remarks
   * Can search inventory? Default is set to false.
   */
  search_inventory?: boolean;

  /**
   * @remarks
   * Can use in creative mode? Default is set to false.
   */
  use_in_creative?: boolean;

  /**
   * @remarks
   * Can use off-hand? Default is set to false.
   */
  use_offhand?: boolean;

}