// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:wearable
 * 
 * minecraft:wearable Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Wearable (minecraft:wearable)
 * Sets the wearable item component, which allows an item to be
 * worn by a player in a specified equipment slot.
 * Note: Valid equipment slots are: slot.armor.head, slot.armor.chest,
 * slot.armor.legs, slot.armor.feet, slot.armor.body, and
 * slot.weapon.offhand. When a non-hand armor slot is used, the max
 * stack size is automatically set to 1.
 * Note: Fixed in format version 1.26.30: when a non-hand slot is
 * selected, `minecraft:wearable` no longer silently overrides an
 * explicit `minecraft:max_stack_size` of 1. Custom items can again
 * declare their own stack size alongside an armor slot without
 * producing inconsistent behavior.
 */
export default interface MinecraftWearable {

  dispensable?: boolean;

  /**
   * @remarks
   * Determines whether the Player's location is hidden on Locator Maps
   * and the Locator Bar when the wearable item is worn. Default is
   * false.
   */
  hides_player_location?: boolean;

  /**
   * @remarks
   * How much protection the wearable item provides. Default is set
   * to 0.
   */
  protection?: number;

  /**
   * @remarks
   * Specifies where the item can be worn. If any non-hand slot is
   * chosen, the max stack size is set to 1.
   */
  slot: string;

}


export enum MinecraftWearableSlot {
  slotArmorBody = `slot.armor.body`,
  slotArmorChest = `slot.armor.chest`,
  slotArmorFeet = `slot.armor.feet`,
  slotArmorHead = `slot.armor.head`,
  slotArmorLegs = `slot.armor.legs`,
  slotWeaponMainhand = `slot.weapon.mainhand`,
  slotWeaponOffhand = `slot.weapon.offhand`
}