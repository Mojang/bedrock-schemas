// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Filters Documentation - minecraft:has_equipment_tag
 * 
 * minecraft:has_equipment_tag Samples
 * At Full..: 
{ "test": "has_equipment_tag", "subject": "self", "domain": "any", "operator": "equals", "value": "dirt" }
 * At Short (using Defaults)..: 
{ "test": "has_equipment_tag", "value": "dirt" }

Sulfur Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[0]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_bouncy"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[1]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_regular"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[2]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_flat"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[3]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_flat"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[4]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_light"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[5]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_sliding"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[6]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_sliding"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[7]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_sticky"
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_without_block/minecraft:interact/interactions[0]/on_interact/filters/any_of[8]/: 
{
  "test": "has_equipment_tag",
  "subject": "other",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_high_resistance"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[1]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_bouncy"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[2]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_regular"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[3]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_flat"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[4]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_flat"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[5]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_light"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[6]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_fast_sliding"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[7]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_slow_sliding"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[8]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_sticky"
}

 * At /minecraft:entity/events/minecraft:on_block_absorbed/sequence[9]/filters/: 
{
  "test": "has_equipment_tag",
  "domain": "main_hand",
  "value": "minecraft:sulfur_cube_archetype_high_resistance"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Has Equipment Tag (has_equipment_tag)
 * Tests for the presence of an item with the named tag in the
 * designated slot of the subject entity.
 */
export default interface HasEquipmentTag {

  /**
   * @remarks
   * (Optional) The equipment location to test
   * 
   * Sample Values:
   * Sulfur Cube: "main_hand"
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
   * Sulfur Cube: "other"
   *
   */
  subject?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Sulfur Cube: "has_equipment_tag"
   *
   */
  test?: string;

  /**
   * @remarks
   * (Required) The item name to look for
   * 
   * Sample Values:
   * Sulfur Cube: "minecraft:sulfur_cube_archetype_bouncy", "minecraft:sulfur_cube_archetype_regular", "minecraft:sulfur_cube_archetype_slow_flat", "minecraft:sulfur_cube_archetype_fast_flat", "minecraft:sulfur_cube_archetype_light", "minecraft:sulfur_cube_archetype_fast_sliding", "minecraft:sulfur_cube_archetype_slow_sliding", "minecraft:sulfur_cube_archetype_sticky", "minecraft:sulfur_cube_archetype_high_resistance"
   *
   */
  value?: string;

}


export enum HasEquipmentTagDomain {
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


export enum HasEquipmentTagOperator {
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


export enum HasEquipmentTagSubject {
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