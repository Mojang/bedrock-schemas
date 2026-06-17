// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_start_takeoff
 * 
 * minecraft:on_start_takeoff Samples

Ender Dragon - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json

"minecraft:on_start_takeoff": {
  "event": "minecraft:start_fly",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity On Start Takeoff (minecraft:on_start_takeoff)
 * Only usable by the Ender Dragon. Adds a trigger to call when this
 * entity starts flying.
 */
export default interface MinecraftOnStartTakeoff {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   * 
   * Sample Values:
   * Ender Dragon: "minecraft:start_fly"
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
  filters?: MinecraftOnStartTakeoffFilters;

  /**
   * @remarks
   * The target of the event.
   * 
   * Sample Values:
   * Ender Dragon: "self"
   *
   */
  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftOnStartTakeoffFilters {

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


export enum MinecraftOnStartTakeoffTarget {
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