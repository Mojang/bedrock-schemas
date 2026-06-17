// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.look_at_trading_player
 * 
 * minecraft:behavior.look_at_trading_player Samples

Villager - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json

"minecraft:behavior.look_at_trading_player": {
  "priority": 2
}


Villager v2 - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json

"minecraft:behavior.look_at_trading_player": {
  "priority": 7
}


Wandering Trader - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wandering_trader.json

"minecraft:behavior.look_at_trading_player": {
  "priority": 4
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Look At Trading Player Behavior
 * (minecraft:behavior.look_at_trading_player)
 * Compels an entity to look at the player that is currently trading
 * with the entity.
 * Note: Requires the ability to trade in order to work 
 * properly.
 * Note: In 1.26.0 the schema is stricter and rejects invalid JSON.
 * The `min_look_time` and `max_look_time` fields are deprecated and
 * replaced by a single `look_time` range (with `min` and `max`).
 * Existing uses of `min_look_time` / `max_look_time` are upgraded
 * automatically.
 */
export default interface MinecraftBehaviorLookAtTradingPlayer {

  /**
   * @remarks
   * The angle in degrees that the mob can see rotated on the Y-axis
   * (left-right).
   */
  angle_of_view_horizontal?: number;

  /**
   * @remarks
   * The angle in degrees that the mob can see rotated on the X-axis
   * (up-down).
   */
  angle_of_view_vertical?: number;

  control_flags?: string[];

  /**
   * @remarks
   * The distance in blocks from which the entity will look at the
   * nearest entity.
   */
  look_distance?: number;

  /**
   * @remarks
   * Time range to look at the nearest entity.
   */
  look_time?: MinecraftBehaviorLookAtTradingPlayerLookTime;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Villager: 2
   *
   * Villager v2: 7
   *
   * Wandering Trader: 4
   *
   */
  priority?: number;

  /**
   * @remarks
   * The probability of looking at the target. A value of 1.00 is
   * 100%.
   */
  probability?: number;

}


export enum MinecraftBehaviorLookAtTradingPlayerControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item FloatRange (FloatRange)
 * Specifies a numeric range between minimum and maximum values for
 * randomized item properties. Used for variable durability, damage
 * ranges, or timing intervals. The game picks a random value within
 * the range when the property is evaluated, adding natural variation to
 * item behavior.
 */
export interface MinecraftBehaviorLookAtTradingPlayerLookTime {

  max?: number;

  min?: number;

}