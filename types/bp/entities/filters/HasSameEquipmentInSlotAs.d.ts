// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Filters Documentation - minecraft:has_same_equipment_in_slot_as
 * 
 * minecraft:has_same_equipment_in_slot_as Samples
 * At Full..: 
{ "test": "has_same_equipment_in_slot_as", "subject": "self", "domain": "any", "operator": "equals", "value": "true" }
 * At Short (using Defaults)..: 
{ "test": "has_same_equipment_in_slot_as", "value": "true" }
 */

import * as jsoncommon from '../../../common';

/**
 * Has Same Equipment In Slot As 
 * (has_same_equipment_in_slot_as)
 * Returns whether the subject entity has the same item equipped in
 * the specified slot as calling entity. Only supports specified slots:
 * "main_hand", "head", "torso", "leg", "feet", and "body".
 */
export default interface HasSameEquipmentInSlotAs {

  /**
   * @remarks
   * (Optional) The equipment location to test
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
   */
  subject?: string;

  /**
   * @remarks
   * (Required) true or false.
   */
  value?: boolean;

}


export enum HasSameEquipmentInSlotAsDomain {
  any = `any`,
  armor = `armor`,
  body = `body`,
  feet = `feet`,
  hand = `hand`,
  head = `head`,
  inventory = `inventory`,
  leg = `leg`,
  mainHand = `main_hand`,
  torso = `torso`
}


export enum HasSameEquipmentInSlotAsOperator {
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


export enum HasSameEquipmentInSlotAsSubject {
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