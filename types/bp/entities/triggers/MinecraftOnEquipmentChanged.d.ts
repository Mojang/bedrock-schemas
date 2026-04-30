// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_equipment_changed
 * 
 * minecraft:on_equipment_changed Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity On Equipment Changed (minecraft:on_equipment_changed)
 * Allows to specify events to execute when equipment is set in
 * the entity's default equipment slots. Doesn't apply to
 * "minecraft:inventory", use "minecraft:equippable" instead.
 */
export default interface MinecraftOnEquipmentChanged {

  /**
   * @remarks
   * A list of slot-specific events to execute when the entity's equipment
   * changes in those slots.
   */
  slots?: MinecraftOnEquipmentChangedSlots[];

}


/**
 * Entity OnEquipmentChangedSlotEntryDescriptor 
 * (OnEquipmentChangedSlotEntryDescriptor)
 */
export interface MinecraftOnEquipmentChangedSlots {

  /**
   * @remarks
   * Event to execute when the slot is changed to a non-empty 
   * item.
   */
  on_equip?: string;

  /**
   * @remarks
   * Event to execute when the slot is changed to an empty item.
   */
  on_unequip?: string;

  /**
   * @remarks
   * The equipment slot to monitor for changes.
   */
  slot?: string;

}


export enum MinecraftOnEquipmentChangedSlotsSlot {
  slotArmorBody = `slot.armor.body`,
  slotArmorChest = `slot.armor.chest`,
  slotArmorFeet = `slot.armor.feet`,
  slotArmorHead = `slot.armor.head`,
  slotArmorLegs = `slot.armor.legs`,
  slotWeaponMainhand = `slot.weapon.mainhand`,
  slotWeaponOffhand = `slot.weapon.offhand`
}