// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:interact
 * 
 * minecraft:interact Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Interact (minecraft:interact)
 * Defines interactions with this entity.
 * Note: In 1.26.0, the `swing` field on each interaction entry
 * defaults to `true` (it previously defaulted to `false`). Set it
 * explicitly to `false` to opt out of the player's swing 
 * animation.
 */
export default interface MinecraftInteract {

  /**
   * @remarks
   * Time in seconds before this entity can be interacted with 
   * again.
   */
  cooldown?: number;

  /**
   * @remarks
   * Time in seconds before this entity can be interacted with after
   * being attacked.
   */
  cooldown_after_being_attacked?: number;

  /**
   * @remarks
   * The entity's slot to remove and drop the item from, if any, upon
   * successful interaction. Inventory slots are denoted by positive
   * numbers. Equipment slots are denoted by 'slot.weapon.mainhand',
   * 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs',
   * 'slot.armor.feet' and 'slot.armor.body'.
   */
  drop_item_slot?: string;

  /**
   * @remarks
   * Will offset the item drop position this amount in the y
   * direction. Requires "drop_item_slot" to be specified.
   */
  drop_item_y_offset?: number;

  /**
   * @remarks
   * The entity's slot to equip the item to, if any, upon successful
   * interaction. Inventory slots are denoted by positive numbers.
   * Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand',
   * 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet'
   * and 'slot.armor.body'.
   */
  equip_item_slot?: string;

  /**
   * @remarks
   * The amount of health this entity will recover or lose when
   * interacting with this item. Negative values will harm the
   * entity.
   */
  health_amount?: number;

  /**
   * @remarks
   * The amount of damage the item will take when used to interact with
   * this entity. A value of 0 means the item won't lose 
   * durability.
   */
  hurt_item?: number;

  /**
   * @remarks
   * Text to show when the player is able to interact in this way
   * with this entity when playing with touch-screen controls.
   */
  interact_text?: string;

  /**
   * @remarks
   * The list of interactions for this entity.
   */
  interactions?: object[];

}