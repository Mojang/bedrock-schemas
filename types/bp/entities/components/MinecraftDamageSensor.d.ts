// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:damage_sensor
 * 
 * minecraft:damage_sensor Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:damage_sensor": {
  "triggers": [
    {
      "deals_damage": "no",
      "on_damage": {
        "filters": {
          "all_of": [
            {
              "subject": "other",
              "test": "is_family",
              "value": "player"
            },
            {
              "subject": "other",
              "test": "is_owner"
            }
          ]
        }
      }
    }
  ]
}


Bat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json

"minecraft:damage_sensor": {
  "triggers": {
    "cause": "fall",
    "deals_damage": "no"
  }
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:damage_sensor": {
  "triggers": [
    {
      "cause": "fall",
      "deals_damage": "no"
    },
    {
      "cause": "projectile",
      "on_damage": {
        "filters": {
          "operator": "!=",
          "test": "is_family",
          "subject": "damager",
          "value": "wind_charge"
        }
      },
      "deals_damage": "no"
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Damage Sensor (minecraft:damage_sensor)
 * Defines what events to call when this entity is damaged by
 * specific entities or items.
 */
export default interface MinecraftDamageSensor {

  /**
   * @remarks
   * Defines how received damage affects the entity.
   */
  deals_damage?: boolean;

  /**
   * @remarks
   * List of triggers with the events to call when taking specific kinds
   * of damage.
   * 
   * Sample Values:
   * Allay: [{"deals_damage":"no","on_damage":{"filters":{"all_of":[{"subject":"other","test":"is_family","value":"player"},{"subject":"other","test":"is_owner"}]}}}]
   *
   * Bat: {"cause":"fall","deals_damage":"no"}
   *
   *
   * Breeze: [{"cause":"fall","deals_damage":"no"},{"cause":"projectile","on_damage":{"filters":{"operator":"!=","test":"is_family","subject":"damager","value":"wind_charge"}},"deals_damage":"no"}]
   *
   */
  triggers?: jsoncommon.MinecraftEventTrigger[];

}


export enum MinecraftDamageSensorDealsDamage {
  /**
   * @remarks
   * Received damage is applied to the entity.
   */
  yes = `yes`,
  /**
   * @remarks
   * Received damage is not applied to the entity.
   */
  no = `no`,
  /**
   * @remarks
   * Received damage is not applied to the entity, but the side
   * effects of the attack are. This means that the attacker's weapon
   * loses durability, enchantment side effects are applied, and so
   * on.
   */
  noButSideEffectsApply = `no_but_side_effects_apply`
}


/**
 * Damage Sensor Trigger (damage_sensor_trigger)
 */
export interface MinecraftDamageSensorTriggers {

  /**
   * @remarks
   * Type of damage that triggers the events.
   */
  cause?: string;

  /**
   * @remarks
   * A modifier that adds/removes to the base damage received from the
   * specified damage cause.
   */
  damage_modifier?: number;

  /**
   * @remarks
   * A multiplier that modifies the base damage received from the
   * specified damage cause.
   */
  damage_multiplier?: number;

  /**
   * @remarks
   * Defines how received damage affects the entity.
   */
  deals_damage?: boolean;

  /**
   * @remarks
   * Event to emit when the trigger conditions are met.
   */
  event?: string;

  /**
   * @remarks
   * Filter conditions for when this trigger applies.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Defines which entities the trigger applies to, and which event to
   * emit when damaged.
   */
  on_damage?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Defines what sound to play when the on_damage filters are 
   * met.
   */
  on_damage_sound_event?: string;

}