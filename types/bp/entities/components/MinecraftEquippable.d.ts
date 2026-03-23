// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:equippable
 * 
 * minecraft:equippable Samples

Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:equippable": {
  "slots": [
    {
      "slot": 1,
      "item": "carpet",
      "accepted_items": [
        "carpet"
      ]
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Equippable (minecraft:equippable)
 * Defines an entity's behavior for having items equipped to 
 * it.
 */
export default interface MinecraftEquippable {

  /**
   * @remarks
   * List of slots and the item that can be equipped.
   * 
   * Sample Values:
   * Llama: [{"slot":1,"item":"carpet","accepted_items":["carpet"]}]
   *
   *
   */
  slots?: MinecraftEquippableSlots[];

}


/**
 * List of slots and the item that can be equipped.
 */
export interface MinecraftEquippableSlots {

  /**
   * @remarks
   * The list of items that can go in this slot.
   */
  accepted_items?: string[];

  /**
   * @remarks
   * Text to be displayed when the entity can be equipped with this
   * item when playing with Touch-screen controls.
   */
  interact_text?: string;

  /**
   * @remarks
   * Identifier of the item that can be equipped for this slot.
   */
  item?: string;

  /**
   * @remarks
   * Event to trigger when this entity is equipped with this 
   * item.
   */
  on_equip?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Event to trigger when this item is removed from this entity.
   */
  on_unequip?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * The slot number of this slot.
   */
  slot?: number;

}