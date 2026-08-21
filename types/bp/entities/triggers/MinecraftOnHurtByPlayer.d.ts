// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_hurt_by_player
 * 
 * minecraft:on_hurt_by_player Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:on_hurt_by_player": {
  "event": "minecraft:on_hurt_event",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity On Hurt By Player (minecraft:on_hurt_by_player)
 * Adds a trigger to call when this entity is attacked by the
 * player.
 */
export default interface MinecraftOnHurtByPlayer {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   * 
   * Sample Values:
   * Blaze: "minecraft:on_hurt_event"
   *
   */
  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftOnHurtByPlayerFilters;

  /**
   * @remarks
   * The target of the event.
   * 
   * Sample Values:
   * Blaze: "self"
   *
   */
  target?: MinecraftOnHurtByPlayerTarget;

}


/**
 * Filters (filters)
 */
export interface MinecraftOnHurtByPlayerFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


export enum MinecraftOnHurtByPlayerTarget {
  baby = `baby`,
  block = `block`,
  damager = `damager`,
  holder = `holder`,
  item = `item`,
  other = `other`,
  parent = `parent`,
  player = `player`,
  self = `self`,
  target = `target`
}