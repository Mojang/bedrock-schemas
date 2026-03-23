// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Trading Documentation - minecraft:tradegroup
 */

import * as jsoncommon from '../../common';

/**
 * Trade Group (TradeGroup)
 * A group of trades from which one or more can be randomly selected for
 * a villager to offer.
 */
export default interface TradeGroup {

  /**
   * @remarks
   * The number of trades to randomly select from this group to
   * offer to the player. Typically 1-2.
   */
  num_to_select?: number;

  /**
   * @remarks
   * Array of possible trades in this group. The specified number will
   * be randomly chosen.
   */
  trades?: TradeGroupTrades[];

}


/**
 * Trade (TradeSingle)
 * Defines a single trade offered by a villager or wandering 
 * trader.
 */
export interface TradeGroupTrades {

  /**
   * @remarks
   * Array of items the villager gives to the player in exchange. Usually
   * 1 item.
   */
  gives: TradeGroupTradesGives[];

  /**
   * @remarks
   * Maximum number of times this trade can be used before it
   * becomes locked. Trade refreshes when villager restocks at
   * workstation.
   */
  max_uses?: number;

  /**
   * @remarks
   * Whether the player receives experience orbs when completing this
   * trade.
   */
  reward_exp?: boolean;

  /**
   * @remarks
   * Amount of experience the villager gains when this trade is
   * used. Contributes to villager leveling up.
   */
  trader_exp?: number;

  /**
   * @remarks
   * Array of items the villager wants to receive from the player in
   * exchange. Usually 1-2 items.
   */
  wants: TradeGroupTradesWants[];

}


/**
 * Trade Item (TradeItem)
 * Defines an item used in a trade, either as input (wants) or
 * output (gives).
 */
export interface TradeGroupTradesGives {

  /**
   * @remarks
   * __DEP_fltrs
   */
  __DEP_fltrs?: object;

  /**
   * @remarks
   * __DEP_fnctns
   */
  __DEP_fnctns?: object;

  /**
   * @remarks
   * Alternative items that can be traded.
   */
  choice?: object[];

  /**
   * @remarks
   * Optional filters that must pass for this item to be included in
   * the trade.
   */
  filters?: object;

  /**
   * @remarks
   * Array of functions to apply to the trade item, such as
   * enchantments.
   */
  functions?: object[];

  /**
   * @remarks
   * The item identifier, e.g., 'minecraft:emerald' or
   * 'minecraft:coal'. Can include data value suffix like
   * 'minecraft:coal:0'.
   */
  item: string;

  /**
   * @remarks
   * Multiplier applied to price increases when supply/demand changes.
   * Higher values mean prices fluctuate more. Typical value is
   * 0.05.
   */
  price_multiplier?: number;

  /**
   * @remarks
   * Number of this item involved in the trade. Can be a fixed number or
   * an object with min/max for random quantity.
   */
  quantity?: number;

}


/**
 * Trade Item (TradeItem)
 * Defines an item used in a trade, either as input (wants) or
 * output (gives).
 */
export interface TradeGroupTradesWants {

  /**
   * @remarks
   * __DEP_fltrs
   */
  __DEP_fltrs?: object;

  /**
   * @remarks
   * __DEP_fnctns
   */
  __DEP_fnctns?: object;

  /**
   * @remarks
   * Alternative items that can be traded.
   */
  choice?: object[];

  /**
   * @remarks
   * Optional filters that must pass for this item to be included in
   * the trade.
   */
  filters?: object;

  /**
   * @remarks
   * Array of functions to apply to the trade item, such as
   * enchantments.
   */
  functions?: object[];

  /**
   * @remarks
   * The item identifier, e.g., 'minecraft:emerald' or
   * 'minecraft:coal'. Can include data value suffix like
   * 'minecraft:coal:0'.
   */
  item: string;

  /**
   * @remarks
   * Multiplier applied to price increases when supply/demand changes.
   * Higher values mean prices fluctuate more. Typical value is
   * 0.05.
   */
  price_multiplier?: number;

  /**
   * @remarks
   * Number of this item involved in the trade. Can be a fixed number or
   * an object with min/max for random quantity.
   */
  quantity?: number;

}