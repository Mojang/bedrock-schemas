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
 * Interact (minecraft:interact)
 * Defines interactions with this entity.
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
  interactions?: MinecraftInteractInteractions[];

}


/**
 */
export interface MinecraftInteractInteractions {

  /**
   * @remarks
   * If true, the player can give items to the entity during
   * interaction.
   * 
   * Sample Values:
   * Allay: true
   *
   */
  give_item?: boolean;

  hurt_item?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Allay: "action.interact.allay"
   *
   */
  interact_text?: string;

  /**
   * @remarks
   * Event to fire when the interaction occurs. Can be a string event
   * name or an object with filters.
   * 
   * Sample Values:
   * Allay: {"filters":{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_sneak_held","subject":"other","value":false}]}}
   *
   */
  on_interact?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Particle effect that will be triggered at the start of the
   * interaction.
   */
  particle_on_start?: MinecraftInteractInteractionsParticleOnStart[];

  /**
   * @remarks
   * List of sounds to play when the interaction occurs.
   */
  play_sounds?: string;

  /**
   * @remarks
   * Allows to repair one of the entity's items.
   */
  repair_entity_item?: MinecraftInteractInteractionsRepairEntityItem[];

  /**
   * @remarks
   * List of entities to spawn when the interaction occurs.
   */
  spawn_entities?: string;

  /**
   * @remarks
   * Loot table with items to drop on the ground upon successful
   * interaction.
   */
  spawn_items?: MinecraftInteractInteractionsSpawnItems[];

  /**
   * @remarks
   * If true, the player will do the 'swing' animation when
   * interacting with this entity.
   */
  swing?: boolean;

  /**
   * @remarks
   * If true, the player can take items from the entity during
   * interaction.
   * 
   * Sample Values:
   * Allay: true
   *
   */
  take_item?: boolean;

  /**
   * @remarks
   * The item used will transform to this item upon successful interaction.
   * Format: itemName:auxValue
   */
  transform_to_item?: string;

  /**
   * @remarks
   * If true, the interaction will use an item.
   */
  use_item?: boolean;

  /**
   * @remarks
   * Vibration to emit when the interaction occurs. Admitted values are
   * none (no vibration emitted), shear, entity_die, entity_act,
   * entity_interact.
   */
  vibration?: string;

}


/**
 * Particle effect that will be triggered at the start of the
 * interaction.
 */
export interface MinecraftInteractInteractionsParticleOnStart {

  /**
   * @remarks
   * Whether or not the particle will appear closer to who performed the
   * interaction.
   */
  particle_offset_towards_interactor?: boolean;

  /**
   * @remarks
   * The type of particle that will be spawned.
   */
  particle_type?: string;

  /**
   * @remarks
   * Will offset the particle this amount in the y direction.
   */
  particle_y_offset?: number;

}


/**
 * Allows to repair one of the entity's items.
 */
export interface MinecraftInteractInteractionsRepairEntityItem {

  /**
   * @remarks
   * How much of the item durability should be restored upon
   * interaction.
   */
  amount?: number;

  /**
   * @remarks
   * The entity's slot containing the item to be repaired. Inventory slots
   * are denoted by positive numbers. Armor slots are denoted by
   * 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet'
   * and 'slot.armor.body'.
   */
  slot?: number;

}


/**
 * Loot table with items to drop on the ground upon successful
 * interaction.
 */
export interface MinecraftInteractInteractionsSpawnItems {

  /**
   * @remarks
   * File path, relative to the Behavior Pack's path, to the loot
   * table file.
   */
  table?: string;

  /**
   * @remarks
   * Will offset the items spawn position this amount in the y
   * direction.
   */
  y_offset?: number;

}