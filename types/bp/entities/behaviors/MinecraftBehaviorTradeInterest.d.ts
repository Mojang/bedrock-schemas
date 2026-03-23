// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.trade_interest
 * 
 * minecraft:behavior.trade_interest Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Trade Interest Behavior (minecraft:behavior.trade_interest)
 * Allows the mob to look at a player that is holding a tradable 
 * item.
 */
export default interface MinecraftBehaviorTradeInterest {

  /**
   * @remarks
   * The max time in seconds that the trader will hold an item before
   * attempting to switch for a different item that takes the same
   * trade
   */
  carried_item_switch_time?: number;

  /**
   * @remarks
   * The time in seconds before the trader can use this goal 
   * again
   */
  cooldown?: number;

  /**
   * @remarks
   * The max time in seconds that the trader will be interested with
   * showing its trade items
   */
  interest_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The max time in seconds that the trader will wait when you no
   * longer have items to trade
   */
  remove_item_time?: number;

  /**
   * @remarks
   * Distance in blocks this mob can be interested by a player holding an
   * item they like
   */
  within_radius?: number;

}