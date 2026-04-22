// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:spawn_entity
 * 
 * minecraft:spawn_entity Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:spawn_entity": {
  "entities": [
    {
      "min_wait_time": 300,
      "max_wait_time": 600,
      "spawn_sound": "plop",
      "spawn_item": "egg",
      "filters": [
        {
          "test": "rider_count",
          "subject": "self",
          "operator": "==",
          "value": 0
        },
        {
          "test": "enum_property",
          "subject": "self",
          "domain": "minecraft:climate_variant",
          "value": "temperate"
        }
      ]
    },
    {
      "min_wait_time": 300,
      "max_wait_time": 600,
      "spawn_sound": "plop",
      "spawn_item": "brown_egg",
      "filters": [
        {
          "test": "rider_count",
          "subject": "self",
          "operator": "==",
          "value": 0
        },
        {
          "test": "enum_property",
          "subject": "self",
          "domain": "minecraft:climate_variant",
          "value": "warm"
        }
      ]
    },
    {
      "min_wait_time": 300,
      "max_wait_time": 600,
      "spawn_sound": "plop",
      "spawn_item": "blue_egg",
      "filters": [
        {
          "test": "rider_count",
          "subject": "self",
          "operator": "==",
          "value": 0
        },
        {
          "test": "enum_property",
          "subject": "self",
          "domain": "minecraft:climate_variant",
          "value": "cold"
        }
      ]
    }
  ]
}


Sniffer - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json

"minecraft:spawn_entity": {
  "entities": {
    "min_wait_time": 0,
    "max_wait_time": 0,
    "spawn_sound": "plop",
    "spawn_item": "sniffer_egg",
    "spawn_item_event": {
      "event": "on_egg_spawned",
      "target": "self"
    },
    "single_use": true
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Spawn Entity (minecraft:spawn_entity)
 * Adds a timer after which this entity will spawn another entity or
 * item (similar to vanilla's chicken's egg-laying behavior).
 */
export default interface MinecraftSpawnEntity {

  /**
   * @remarks
   * List of entity spawn definitions. Can be a single object or an
   * array of objects.
   * 
   * Sample Values:
   * Chicken: [{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"temperate"}]},{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"brown_egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"warm"}]},{"min_wait_time":300,"max_wait_time":600,"spawn_sound":"plop","spawn_item":"blue_egg","filters":[{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"cold"}]}]
   *
   * Sniffer: {"min_wait_time":0,"max_wait_time":0,"spawn_sound":"plop","spawn_item":"sniffer_egg","spawn_item_event":{"event":"on_egg_spawned","target":"self"},"single_use":true}
   *
   */
  entities?: MinecraftSpawnEntityEntities[];

  /**
   * @remarks
   * If present, the specified entity will only spawn if the filter
   * evaluates to true.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Maximum amount of time to randomly wait in seconds before another
   * entity is spawned.
   */
  max_wait_time?: number;

  /**
   * @remarks
   * Minimum amount of time to randomly wait in seconds before another
   * entity is spawned.
   */
  min_wait_time?: number;

  /**
   * @remarks
   * The number of entities of this type to spawn each time that this
   * triggers.
   */
  num_to_spawn?: number;

  /**
   * @remarks
   * If true, this the spawned entity will be leashed to the 
   * parent.
   */
  should_leash?: boolean;

  /**
   * @remarks
   * If true, this component will only ever spawn the specified entity
   * once.
   */
  single_use?: boolean;

  /**
   * @remarks
   * Identifier of the entity to spawn, leave empty to spawn the item
   * defined by "spawn_item" instead.
   */
  spawn_entity?: string;

  /**
   * @remarks
   * Event to call on the spawned entity when it spawns.
   */
  spawn_event?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Item identifier of the item to spawn.
   */
  spawn_item?: string;

  /**
   * @remarks
   * Event to call on this entity when the item is spawned.
   */
  spawn_item_event?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Method to use to spawn the entity.
   */
  spawn_method?: string;

  /**
   * @remarks
   * Identifier of the sound effect to play when the entity is
   * spawned.
   */
  spawn_sound?: string;

}


/**
 * Entities (spawn_entity_entry)
 */
export interface MinecraftSpawnEntityEntities {

  /**
   * @remarks
   * If present, the specified entity will only spawn if the filter
   * evaluates to true.
   * 
   * Sample Values:
   * Chicken: [{"test":"rider_count","subject":"self","operator":"==","value":0},{"test":"enum_property","subject":"self","domain":"minecraft:climate_variant","value":"temperate"}]
   *
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * 
   * Sample Values:
   * Chicken: 600
   *
   */
  max_wait_time?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Chicken: 300
   *
   */
  min_wait_time?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Chicken: "egg"
   *
   */
  spawn_item?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Chicken: "plop"
   *
   */
  spawn_sound?: string;

}