// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Filters Documentation - minecraft:is_difficulty
 * 
 * minecraft:is_difficulty Samples
 * At Full..: 
{ "test": "is_difficulty", "subject": "self", "operator": "equals", "value": "normal" }
 * At Short (using Defaults)..: 
{ "test": "is_difficulty", "value": "normal" }

Arrow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json

{
  "test": "is_difficulty",
  "value": "hard"
}


Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

 * At /minecraft:entity/events/minecraft:become_angry/sequence[1]/filters/: 
{
  "test": "is_difficulty",
  "value": "easy"
}

 * At /minecraft:entity/events/minecraft:become_angry/sequence[2]/filters/: 
{
  "test": "is_difficulty",
  "value": "normal"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Is Difficulty (is_difficulty)
 * Tests the current difficulty level of the game.
 */
export default interface IsDifficulty {

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
   * 
   * Sample Values:
   * Arrow: "is_difficulty"
   *
   *
   */
  test?: string;

  /**
   * @remarks
   * (Required) The game's difficulty level to test
   * 
   * Sample Values:
   * Arrow: "hard"
   *
   * Cave Spider: "easy", "normal"
   *
   */
  value?: string;

}


export enum IsDifficultyOperator {
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


export enum IsDifficultySubject {
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


export enum IsDifficultyValue {
  easy = `easy`,
  hard = `hard`,
  normal = `normal`,
  peaceful = `peaceful`
}