// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:area_attack
 * 
 * minecraft:area_attack Samples

Magma Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json

 * At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:area_attack/: 
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 6,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      }
    ]
  }
}

 * At /minecraft:entity/component_groups/minecraft:slime_medium/minecraft:area_attack/: 
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 4,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      }
    ]
  }
}

 * At /minecraft:entity/component_groups/minecraft:slime_small/minecraft:area_attack/: 
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 3,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      }
    ]
  }
}


Slime - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/slime.json

 * At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:area_attack/: 
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 4,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "snowgolem"
      }
    ]
  }
}

 * At /minecraft:entity/component_groups/minecraft:slime_medium/minecraft:area_attack/: 
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 2,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "snowgolem"
      }
    ]
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Area Attack (minecraft:area_attack)
 * A component that does damage to entities that get within 
 * range.
 */
export default interface MinecraftAreaAttack {

  /**
   * @remarks
   * The type of damage that is applied to entities that enter the
   * damage range. A list of available damage sources can be found at
   * [Entity Damage Sources located in the Vanilla Listings
   * 
   * Documentation](../../VanillaListingsReference/AddonEntityDamageSources.md).
   * 
   * Sample Values:
   * Magma Cube: "entity_attack"
   *
   */
  cause?: string;

  /**
   * @remarks
   * Attack cooldown (in seconds) for how often this entity can
   * attack a target.
   * 
   * Sample Values:
   * Magma Cube: 0.5
   *
   */
  damage_cooldown?: number;

  /**
   * @remarks
   * How much damage per tick is applied to entities that enter the
   * damage range.
   * 
   * Sample Values:
   * Magma Cube: 6, 4, 3
   *
   */
  damage_per_tick?: number;

  /**
   * @remarks
   * How close a hostile entity must be to have the damage 
   * applied.
   * 
   * Sample Values:
   * Magma Cube: 0.15
   *
   */
  damage_range?: number;

  /**
   * @remarks
   * The set of entities that are valid to apply the damage to when
   * within range.
   * 
   * Sample Values:
   * Magma Cube: {"any_of":[{"subject":"other","test":"is_family","value":"player"},{"subject":"other","test":"is_family","value":"irongolem"}]}
   *
   * Slime: {"any_of":[{"subject":"other","test":"is_family","value":"player"},{"subject":"other","test":"is_family","value":"irongolem"},{"subject":"other","test":"is_family","value":"snowgolem"}]}
   *
   */
  entity_filter?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * If the entity should play their attack sound when attacking a
   * target.
   */
  play_attack_sound?: boolean;

  /**
   * @remarks
   * If the entity should use itself as the damage source when
   * attacking a target. If set to `false`, the target entity won't
   * retaliate and its `minecraft:damage_sensor` won't be able to
   * identify the attacker as the damage source.
   */
  use_self_as_damage_source?: boolean;

}