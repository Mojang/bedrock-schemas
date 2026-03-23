// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Filters Documentation - minecraft:has_component
 * 
 * minecraft:has_component Samples
 * At Full..: 
{ "test": "has_component", "subject": "self", "operator": "equals", "value": "minecraft:explode" }
 * At Short (using Defaults)..: 
{ "test": "has_component", "value": "minecraft:explode" }

Sheep - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sheep.json

 * At /minecraft:entity/components/minecraft:interact/interactions[0]/on_interact/filters/all_of[2]/: 
{
  "test": "has_component",
  "operator": "!=",
  "value": "minecraft:is_baby"
}

 * At /minecraft:entity/components/minecraft:interact/interactions[0]/on_interact/filters/all_of[3]/: 
{
  "test": "has_component",
  "value": "minecraft:is_dyeable"
}

 * At /minecraft:entity/events/minecraft:on_eat_block/sequence[1]/filters/: 
{
  "subject": "self",
  "test": "has_component",
  "operator": "!=",
  "value": "minecraft:is_baby"
}


Sniffer - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sniffer.json

{
  "test": "has_component",
  "subject": "self",
  "operator": "!=",
  "value": "minecraft:is_baby"
}


Zoglin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/zoglin.json

 * At /minecraft:entity/events/minecraft:entity_transformed/sequence[0]/filters/: 
{
  "subject": "other",
  "test": "has_component",
  "value": "minecraft:is_baby"
}

 * At /minecraft:entity/events/minecraft:entity_transformed/sequence[1]/filters/: 
{
  "test": "has_component",
  "operator": "!=",
  "subject": "other",
  "value": "minecraft:is_baby"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Has Component (has_component)
 * Returns true when the subject entity contains the named 
 * component.
 */
export default interface HasComponent {

  /**
   * @remarks
   * (Optional) The comparison to apply with 'value'.
   * 
   * Sample Values:
   * Sheep: "!="
   *
   */
  operator?: string;

  /**
   * @remarks
   * (Optional) The subject of this filter test.
   * 
   * Sample Values:
   * Sheep: "self"
   *
   *
   * Zoglin: "other"
   *
   */
  subject?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Sheep: "has_component"
   *
   */
  test?: string;

  /**
   * @remarks
   * (Required) The component name to look for
   * 
   * Sample Values:
   * Sheep: "minecraft:is_baby", "minecraft:is_dyeable"
   *
   */
  value?: string;

}


export enum HasComponentOperator {
  /**
   * @remarks
   * Test for inequality.
   */
  notEquals = `!=`,
  /**
   * @remarks
   * Test for less-than the value.
   */
  "<" = `<`,
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
  "=" = `=`,
  /**
   * @remarks
   * Test for equality.
   */
  equalsEquals = `==`,
  /**
   * @remarks
   * Test for greater-than the value.
   */
  ">" = `>`,
  /**
   * @remarks
   * Test for greater-than or equal to the value.
   */
  greaterThanEquals = `>=`,
  /**
   * @remarks
   * Test for equality.
   */
  equals = `equals`,
  /**
   * @remarks
   * Test for inequality.
   */
  not = `not`
}


export enum HasComponentSubject {
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