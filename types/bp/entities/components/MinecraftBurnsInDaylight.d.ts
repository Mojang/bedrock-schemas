// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:burns_in_daylight
 * 
 * minecraft:burns_in_daylight Samples

Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:burns_in_daylight": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Burns In Daylight (minecraft:burns_in_daylight)
 * Specifies that this entity takes fire damage when exposed to
 * direct sunlight. This component is used by undead mobs like
 * zombies, skeletons, and phantoms. The entity will catch fire when
 * in sunlight unless it is wearing armor in the protection slot,
 * standing in water, or in a shaded area.
 */
export default interface MinecraftBurnsInDaylight {

  /**
   * @remarks
   * The equipment slot that provides protection from burning in
   * sunlight. If armor is equipped in this slot, the entity will not
   * burn. Commonly set to 'slot.armor.head' for helmets or
   * 'slot.armor.body' for horse armor.
   */
  protection_slot?: string;

}


export enum MinecraftBurnsInDaylightProtectionSlot {
  slotArmorBody = `slot.armor.body`,
  slotArmorChest = `slot.armor.chest`,
  slotArmorFeet = `slot.armor.feet`,
  slotArmorHead = `slot.armor.head`,
  slotArmorLegs = `slot.armor.legs`,
  slotWeaponMainhand = `slot.weapon.mainhand`,
  slotWeaponOffhand = `slot.weapon.offhand`
}