// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:shareables
 * 
 * minecraft:shareables Samples

Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_sword",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_sword",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_sword",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_sword",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_sword",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_sword",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:bow",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_helmet",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_helmet",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_helmet",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_helmet",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_helmet",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_helmet",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:turtle_helmet",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:0",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:1",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:carved_pumpkin",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_chestplate",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_chestplate",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_chestplate",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_chestplate",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_chestplate",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_leggings",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_leggings",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_leggings",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_leggings",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_leggings",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_leggings",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_boots",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_boots",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_boots",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_boots",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_boots",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_boots",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_boots",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    }
  ],
  "singular_pickup": true
}


Skeleton - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton.json

"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_sword",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_sword",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_sword",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_sword",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_sword",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_sword",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:bow",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_helmet",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_helmet",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_helmet",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_helmet",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_helmet",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_helmet",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:turtle_helmet",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:0",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:1",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:carved_pumpkin",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_chestplate",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_chestplate",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_chestplate",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_chestplate",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_chestplate",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_leggings",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_leggings",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_leggings",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_leggings",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_leggings",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_leggings",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_boots",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_boots",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_boots",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_boots",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_boots",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_boots",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_boots",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    }
  ],
  "singular_pickup": true
}


Wither Skeleton - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither_skeleton.json

"minecraft:shareables": {
  "items": [
    {
      "item": "minecraft:netherite_sword",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_sword",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_sword",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_sword",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_sword",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_sword",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_sword",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_shovel",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_shovel",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_shovel",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_shovel",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_shovel",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_shovel",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_shovel",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_pickaxe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_pickaxe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_pickaxe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_pickaxe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_pickaxe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_pickaxe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_pickaxe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_axe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_axe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_axe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_axe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_axe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_axe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_axe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:wooden_hoe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:stone_hoe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_hoe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_hoe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_hoe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_hoe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_hoe",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_helmet",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_helmet",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_helmet",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_helmet",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_helmet",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_helmet",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_helmet",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:turtle_helmet",
      "priority": 7,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:0",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:skull:1",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:carved_pumpkin",
      "priority": 8,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_chestplate",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_chestplate",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_chestplate",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_chestplate",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_chestplate",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_chestplate",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_chestplate",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_leggings",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_leggings",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_leggings",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_leggings",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_leggings",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_leggings",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_leggings",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:netherite_boots",
      "priority": 0,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:diamond_boots",
      "priority": 1,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:iron_boots",
      "priority": 2,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:chainmail_boots",
      "priority": 3,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:golden_boots",
      "priority": 4,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:copper_boots",
      "priority": 5,
      "surplus_amount": 1,
      "want_amount": 1
    },
    {
      "item": "minecraft:leather_boots",
      "priority": 6,
      "surplus_amount": 1,
      "want_amount": 1
    }
  ],
  "singular_pickup": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Shareables (minecraft:shareables)
 * Defines a list of items the mob wants to share or pick up. Items
 * can be configured with optional parameters to control pickup,
 * sharing, and inventory behavior.
 */
export default interface MinecraftShareables {

  /**
   * @remarks
   * A bucket for all other items in the game. Note this category is
   * always least priority items.
   */
  all_items?: boolean;

  /**
   * @remarks
   * Maximum number of this item the mob will hold.
   */
  all_items_max_amount?: number;

  /**
   * @remarks
   * Number of this item considered extra that the entity wants to
   * share.
   */
  all_items_surplus_amount?: number;

  /**
   * @remarks
   * Number of this item this entity wants to share.
   */
  all_items_want_amount?: number;

  /**
   * @remarks
   * List of items or item tags that the entity wants to share. Items
   * in-game will match to this list from top to bottom, meaning that
   * the first occurance of a match, be it name or tag, will shadow
   * those coming after.
   * 
   * Sample Values:
   * Bogged: [{"item":"minecraft:netherite_sword","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_sword","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_sword","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_sword","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_sword","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:stone_sword","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:wooden_sword","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:bow","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_helmet","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_helmet","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_helmet","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_helmet","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_helmet","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_helmet","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_helmet","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:turtle_helmet","priority":7,"surplus_amount":1,"want_amount":1},{"item":"minecraft:skull:0","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:skull:1","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:carved_pumpkin","priority":8,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_chestplate","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_chestplate","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_chestplate","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_chestplate","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_chestplate","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_chestplate","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_chestplate","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_leggings","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_leggings","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_leggings","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_leggings","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_leggings","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_leggings","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_leggings","priority":6,"surplus_amount":1,"want_amount":1},{"item":"minecraft:netherite_boots","priority":0,"surplus_amount":1,"want_amount":1},{"item":"minecraft:diamond_boots","priority":1,"surplus_amount":1,"want_amount":1},{"item":"minecraft:iron_boots","priority":2,"surplus_amount":1,"want_amount":1},{"item":"minecraft:chainmail_boots","priority":3,"surplus_amount":1,"want_amount":1},{"item":"minecraft:golden_boots","priority":4,"surplus_amount":1,"want_amount":1},{"item":"minecraft:copper_boots","priority":5,"surplus_amount":1,"want_amount":1},{"item":"minecraft:leather_boots","priority":6,"surplus_amount":1,"want_amount":1}]
   *
   *
   */
  items?: MinecraftShareablesItems[];

  /**
   * @remarks
   * Boolean value that controls if the mob is able to pick up more of
   * the same item if it is already holding that item
   */
  singular_pickup?: boolean;

}


/**
 * List of items or item tags that the entity wants to share. Items
 * in-game will match to this list from top to bottom, meaning that
 * the first occurance of a match, be it name or tag, will shadow
 * those coming after.
 */
export interface MinecraftShareablesItems {

  /**
   * @remarks
   * Mob will admire the item after picking up by looking at it. For
   * this to happen the mob needs to have an Admire component and an
   * Admire goal.
   */
  admire?: boolean;

  /**
   * @remarks
   * Mob will barter for the item after picking it up. For this to
   * work the mob needs to have a Barter component and a Barter 
   * goal.
   */
  barter?: boolean;

  /**
   * @remarks
   * Determines whether the mob will consume the item or not.
   */
  consume_item?: boolean;

  /**
   * @remarks
   * Defines the item this entity wants to craft with the item defined by
   * "item". Should be an item name.
   */
  craft_into?: string;

  /**
   * @remarks
   * The name of the item. Aux value can be specified, for instance
   * 'minecraft:skull:1'. Alternatively, a tag can be specified to
   * match all items with that tag.
   */
  item?: string;

  /**
   * @remarks
   * Maximum number of this item the mob will hold.
   */
  max_amount?: number;

  /**
   * @remarks
   * Maximum number items the mob will pick up during a single goal
   * tick.
   */
  pickup_limit?: number;

  /**
   * @remarks
   * Determines whether the mob can only pickup the item and not drop
   * it.
   */
  pickup_only?: boolean;

  /**
   * @remarks
   * Prioritizes which items the entity prefers. 0 is the highest
   * priority.
   */
  priority?: number;

  /**
   * @remarks
   * Determines whether the mob will try to put the item in its
   * inventory if it has the inventory component and if it can't be
   * equipped.
   */
  stored_in_inventory?: boolean;

  /**
   * @remarks
   * Number of this item considered extra that the entity wants to
   * share.
   */
  surplus_amount?: number;

  /**
   * @remarks
   * Number of this item this entity wants to share.
   */
  want_amount?: number;

}