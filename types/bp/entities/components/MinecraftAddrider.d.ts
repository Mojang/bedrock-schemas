// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:addrider
 * 
 * minecraft:addrider Samples

Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

 * At /minecraft:entity/component_groups/minecraft:spider_bogged_jockey/minecraft:addrider/: 
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:bogged"
    }
  ]
}

 * At /minecraft:entity/component_groups/minecraft:spider_wither_jockey/minecraft:addrider/: 
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:wither_skeleton"
    }
  ]
}

 * At /minecraft:entity/component_groups/minecraft:spider_jockey/minecraft:addrider/: 
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:skeleton"
    }
  ]
}

 * At /minecraft:entity/component_groups/minecraft:spider_parched_jockey/minecraft:addrider/: 
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:parched"
    }
  ]
}

 * At /minecraft:entity/component_groups/minecraft:spider_stray_jockey/minecraft:addrider/: 
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:stray"
    }
  ]
}


Strider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json

 * At /minecraft:entity/component_groups/minecraft:strider_piglin_jockey/minecraft:addrider/: 
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:zombie_pigman",
      "spawn_event": "minecraft:spawn_as_strider_jockey"
    }
  ]
}

 * At /minecraft:entity/component_groups/minecraft:strider_parent_jockey/minecraft:addrider/: 
"minecraft:addrider": {
  "riders": [
    {
      "entity_type": "minecraft:strider",
      "spawn_event": "minecraft:spawn_baby_strider_jockey"
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Add Rider (minecraft:addrider)
 * Adds a rider to the entity.
 */
export default interface MinecraftAddrider {

  /**
   * @remarks
   * Type of entity to acquire as a rider
   */
  entity_type?: string;

  /**
   * @remarks
   * List of riders to be added to the entity. Can only spawn as
   * many riders as "minecraft:rideable" has "seat_count".
   * 
   * Sample Values:
   * Cave Spider: [{"entity_type":"minecraft:bogged"}], [{"entity_type":"minecraft:wither_skeleton"}]
   *
   */
  riders?: MinecraftAddriderRiders[];

  /**
   * @remarks
   * Trigger event when a rider is acquired
   */
  spawn_event?: string;

}


/**
 * Entity Rider Data (Rider Data)
 * List of riders to be added to the entity. Must have no more
 * riders than "minecraft:rideable" has "seat_count".
 */
export interface MinecraftAddriderRiders {

  /**
   * @remarks
   * The entity type that will be riding this entity.
   */
  entity_type: string;

  /**
   * @remarks
   * The spawn event that will be used when the riding entity is
   * created.
   */
  spawn_event?: string;

}