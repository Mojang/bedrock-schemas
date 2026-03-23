// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:hurt_on_condition
 * 
 * minecraft:hurt_on_condition Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "cause": "lava",
      "damage_per_tick": 4,
      "filters": {
        "subject": "self",
        "test": "in_lava"
      }
    }
  ]
}


Armor Stand - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json

"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "cause": "lava",
      "damage_per_tick": 4,
      "filters": {
        "operator": "==",
        "test": "in_lava",
        "subject": "self",
        "value": true
      }
    }
  ]
}


Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:hurt_on_condition": {
  "damage_conditions": [
    {
      "cause": "drowning",
      "damage_per_tick": 1,
      "filters": {
        "test": "in_contact_with_water"
      }
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Hurt On Condition (minecraft:hurt_on_condition)
 * Defines a set of conditions under which an entity should take
 * damage.
 */
export default interface MinecraftHurtOnCondition {

  /**
   * @remarks
   * List of damage conditions that when met can cause damage to the
   * entity.
   * 
   * Sample Values:
   * Allay: [{"cause":"lava","damage_per_tick":4,"filters":{"subject":"self","test":"in_lava"}}]
   *
   * Armor Stand: [{"cause":"lava","damage_per_tick":4,"filters":{"operator":"==","test":"in_lava","subject":"self","value":true}}]
   *
   */
  damage_conditions?: MinecraftHurtOnConditionDamageConditions[];

}


/**
 * List of damage conditions that when met can cause damage to the
 * entity.
 */
export interface MinecraftHurtOnConditionDamageConditions {

  /**
   * @remarks
   * The kind of damage that is caused to the entity. Various armors and
   * spells use this to determine if the entity is immune.
   */
  cause?: string;

  /**
   * @remarks
   * The amount of damage done each tick that the conditions are 
   * met.
   */
  damage_per_tick?: number;

  /**
   * @remarks
   * The set of conditions that must be satisfied before the entity
   * takes the defined damage.
   */
  filters?: jsoncommon.MinecraftFilter;

}