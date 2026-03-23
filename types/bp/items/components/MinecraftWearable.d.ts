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
 * Wearable items can be worn by a player in a specified slot.
 */
export default interface MinecraftWearable {

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