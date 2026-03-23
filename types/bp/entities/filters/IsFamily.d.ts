// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Filters Documentation - minecraft:is_family
 * 
 * minecraft:is_family Samples
 * At Full..: 
{ "test": "is_family", "subject": "self", "operator": "equals", "value": "player" }
 * At Short (using Defaults)..: 
{ "test": "is_family", "value": "player" }

Arrow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json

 * At /minecraft:entity/events/minecraft:entity_spawned/sequence[1]/filters/: 
{
  "subject": "other",
  "test": "is_family",
  "value": "player"
}

 * At /minecraft:entity/events/minecraft:entity_spawned/sequence[2]/filters/: 
{
  "subject": "other",
  "test": "is_family",
  "value": "pillager"
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

 * At /minecraft:entity/components/minecraft:behavior.avoid_mob_type/entity_types[0]/filters/: 
{
  "test": "is_family",
  "subject": "other",
  "value": "wolf"
}

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "breeze"
}

 * At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[0]/filters/: 
{
  "test": "is_family",
  "subject": "other",
  "value": "player"
}

 * At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[1]/filters/: 
{
  "test": "is_family",
  "subject": "other",
  "value": "irongolem"
}

 * At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[2]/filters/all_of[0]/: 
{
  "test": "is_family",
  "subject": "other",
  "value": "baby_turtle"
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[0]/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "skeleton"
}

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[1]/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "stray"
}

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[2]/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "zombie"
}

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[3]/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "husk"
}

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[4]/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "spider"
}

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[5]/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "cavespider"
}

 * At /minecraft:entity/components/minecraft:behavior.hurt_by_target/entity_types[0]/filters/all_of[6]/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "other",
  "value": "slime"
}

 * At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[0]/filters/AND[0]/: 
{
  "test": "is_family",
  "subject": 1,
  "operator": 0,
  "value": "player"
}

 * At /minecraft:entity/components/minecraft:behavior.nearest_attackable_target/entity_types[1]/filters/AND[0]/: 
{
  "test": "is_family",
  "subject": 1,
  "operator": 0,
  "value": "irongolem"
}

 * At /minecraft:entity/components/minecraft:damage_sensor/triggers[1]/on_damage/filters/: 
{
  "operator": "!=",
  "test": "is_family",
  "subject": "damager",
  "value": "wind_charge"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Is Family (is_family)
 * Returns true when the subject entity is a member of the named
 * family.
 */
export default interface IsFamily {

  /**
   * @remarks
   * (Optional) The comparison to apply with 'value'.
   * 
   * Sample Values:
   * Bogged: "!="
   *
   *
   */
  operator?: string;

  /**
   * @remarks
   * (Optional) The subject of this filter test.
   * 
   * Sample Values:
   * Arrow: "other"
   *
   * Breeze: 1, "damager"
   *
   */
  subject?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Arrow: "is_family"
   *
   */
  test?: string;

  /**
   * @remarks
   * (Required) The Family name to look for
   * 
   * Sample Values:
   * Arrow: "player", "pillager"
   *
   * Bogged: "wolf", "breeze", "irongolem", "baby_turtle"
   *
   */
  value?: string;

}


export enum IsFamilyOperator {
  /**
   * @remarks
   * Test for inequality.
   */
  notEquals = `!=`,
  /**
   * @remarks
   * Test for less-than the value.
   */
  lessThan = `<`,
  /**
   * @remarks
   * Test for less-than or equal to the value.
   */
  lessThanEquals = `<=`,
  /**
   * @remarks
   * Test for inequality.
   */
  lessThanGreaterThan = `<>`,
  /**
   * @remarks
   * Test for equality.
   */
  equals = `=`,
  /**
   * @remarks
   * Test for equality.
   */
  equalsEquals = `==`,
  /**
   * @remarks
   * Test for greater-than the value.
   */
  greaterThan = `>`,
  /**
   * @remarks
   * Test for greater-than or equal to the value.
   */
  greaterThanEquals = `>=`,
  /**
   * @remarks
   * Test for inequality.
   */
  not = `not`
}


export enum IsFamilySubject {
  /**
   * @remarks
   * The block involved with the interaction.
   */
  block = `block`,
  /**
   * @remarks
   * The damaging actor involved with the interaction.
   */
  damager = `damager`,
  /**
   * @remarks
   * The other member of an interaction, not the caller.
   */
  other = `other`,
  /**
   * @remarks
   * The caller's current parent.
   */
  parent = `parent`,
  /**
   * @remarks
   * The player involved with the interaction.
   */
  player = `player`,
  /**
   * @remarks
   * The entity or object calling the test
   */
  self = `self`,
  /**
   * @remarks
   * The caller's current target.
   */
  target = `target`
}