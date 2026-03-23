// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Filters Documentation - minecraft:enum_property
 * 
 * minecraft:enum_property Samples
 * At Full..: 
{ "test": "enum_property", "subject": "self", "domain": "minecraft:can_climb", "operator": "equals", "value": "" }
 * At Short (using Defaults)..: 
{ "test": "enum_property", "domain": "minecraft:can_climb", "value": "" }

Egg - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/egg.json

 * At /minecraft:entity/components/minecraft:projectile/on_hit/spawn_chance/on_spawn[0]/filters/: 
{
  "domain": "minecraft:climate_variant",
  "subject": "other",
  "test": "enum_property",
  "value": "warm"
}

 * At /minecraft:entity/components/minecraft:projectile/on_hit/spawn_chance/on_spawn[1]/filters/: 
{
  "domain": "minecraft:climate_variant",
  "subject": "other",
  "test": "enum_property",
  "value": "cold"
}

 * At /minecraft:entity/components/minecraft:projectile/on_hit/particle_on_hit/particle_item_name/blue_egg/: 
{
  "domain": "minecraft:climate_variant",
  "test": "enum_property",
  "value": "cold"
}

 * At /minecraft:entity/components/minecraft:projectile/on_hit/particle_on_hit/particle_item_name/brown_egg/: 
{
  "domain": "minecraft:climate_variant",
  "test": "enum_property",
  "value": "warm"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Property (enum_property)
 * Returns true when the actor property matches the value 
 * provided.
 */
export default interface EnumProperty {

  /**
   * @remarks
   * (Required) The property name to look for
   * 
   * Sample Values:
   * Egg: "minecraft:climate_variant"
   *
   */
  domain?: string;

  /**
   * @remarks
   * (Optional) The comparison to apply with 'value'.
   */
  operator?: string;

  /**
   * @remarks
   * (Optional) The subject of this filter test.
   * 
   * Sample Values:
   * Egg: "other"
   *
   */
  subject?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Egg: "enum_property"
   *
   */
  test?: string;

  /**
   * @remarks
   * (Required) A string value.
   * 
   * Sample Values:
   * Egg: "warm", "cold"
   *
   */
  value?: string;

}


export enum EnumPropertyOperator {
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


export enum EnumPropertySubject {
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