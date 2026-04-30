// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:equip_item
 * 
 * minecraft:equip_item Samples

Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:equip_item": {
  "excluded_items": [
    {
      "item": "minecraft:banner:15"
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Equip Item (minecraft:equip_item)
 * The entity puts on the desired equipment.
 */
export default interface MinecraftEquipItem {

  /**
   * @remarks
   * If true, the entity can pick up and wear armor items from the
   * ground.
   */
  can_wear_armor?: boolean;

  /**
   * @remarks
   * List of items that the entity should not equip.
   * 
   * Sample Values:
   * Bogged: [{"item":"minecraft:banner:15"}]
   *
   *
   */
  excluded_items?: MinecraftEquipItemExcludedItems[];

}


/**
 */
export interface MinecraftEquipItemExcludedItems {

  item?: string;

}