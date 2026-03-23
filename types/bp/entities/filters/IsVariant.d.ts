// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Filters Documentation - minecraft:is_variant
 * 
 * minecraft:is_variant Samples
 * At Full..: 
{ "test": "is_variant", "subject": "self", "operator": "equals", "value": "0" }
 * At Short (using Defaults)..: 
{ "test": "is_variant", "value": "0" }

Boat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json

 * At /minecraft:entity/events/minecraft:add_can_ride/sequence[0]/filters/: 
{
  "test": "is_variant",
  "operator": "!=",
  "value": 7
}

 * At /minecraft:entity/events/minecraft:add_can_ride/sequence[1]/filters/: 
{
  "test": "is_variant",
  "operator": "==",
  "value": 7
}


Chest Boat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_boat.json

 * At /minecraft:entity/events/minecraft:add_can_ride/sequence[0]/filters/: 
{
  "test": "is_variant",
  "operator": "!=",
  "subject": "self",
  "value": 7
}

 * At /minecraft:entity/events/minecraft:add_can_ride/sequence[1]/filters/: 
{
  "test": "is_variant",
  "operator": "==",
  "subject": "self",
  "value": 7
}

 */

import * as jsoncommon from '../../../common';

/**
 * Is Variant (is_variant)
 * Returns true if the subject entity is the variant number 
 * provided.
 */
export default interface IsVariant {

  /**
   * @remarks
   * (Optional) The comparison to apply with 'value'.
   * 
   * Sample Values:
   * Boat: "!=", "=="
   *
   *
   */
  operator?: string;

  /**
   * @remarks
   * (Optional) The subject of this filter test.
   * 
   * Sample Values:
   * Chest Boat: "self"
   *
   */
  subject?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Boat: "is_variant"
   *
   */
  test?: string;

  /**
   * @remarks
   * (Required) An integer value.
   * 
   * Sample Values:
   * Boat: 7
   *
   */
  value?: number;

}


export enum IsVariantOperator {
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


export enum IsVariantSubject {
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