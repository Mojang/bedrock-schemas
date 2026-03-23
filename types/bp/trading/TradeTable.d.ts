// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Trading Documentation - minecraft:trade
 */

import * as jsoncommon from '../../common';

/**
 * Trade Table (TradeTable)
 * Defines a trade table with tiers of trades for villagers or
 * other trading entities.
 */
export default interface TradeTable {

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  _1088251937?: object;

  /**
   * @remarks
   * struct SharedTypes_v1_21_30_TradeItemList
   */
  _1093643626?: object;

  /**
   * @remarks
   * struct SharedTypes_v1_21_30_TradeItem_Quantity
   */
  _2298823339?: object;

  /**
   * @remarks
   * struct SharedTypes_v1_21_30_TradeGroup
   */
  _3153354884?: object;

  /**
   * @remarks
   * class Json_Value
   */
  _315535208?: object;

  /**
   * @remarks
   * struct SharedTypes_v1_21_30_Trade
   */
  _3738829565?: object;

  /**
   * @remarks
   * Filter Test
   */
  _4150989894?: object;

  /**
   * @remarks
   * struct SharedTypes_v1_21_30_TradeItem
   */
  _56017534?: object;

  /**
   * @remarks
   * struct SharedTypes_v1_21_30_TradeTier
   */
  _943617905?: object;

  /**
   * @remarks
   * The format version of this trade table.
   */
  format_version?: string;

  /**
   * @remarks
   * Array of trade tiers. Each tier unlocks as the villager gains
   * experience. Novice (tier 1) is always available.
   */
  tiers: TradeTableTiers[];

  /**
   * @remarks
   * The weight/probability of this trade being selected.
   */
  weight?: number;

}


/**
 * Trade Tier (TradeTier)
 * Defines a tier of trades that becomes available as a villager levels
 * up.
 */
export interface TradeTableTiers {

  /**
   * @remarks
   * Array of trade groups available at this tier. Each group can
   * randomly select one or more trades to offer.
   */
  groups?: TradeTableTiersGroups[];

  /**
   * @remarks
   * The total experience points required for this tier to unlock. For
   * novice (tier 1), this is typically 0. Higher tiers require more
   * XP (e.g., 10, 70, 150, 250).
   */
  total_exp_required?: number;

  /**
   * @remarks
   * Array of trades directly in this tier, without grouping. Alternative to
   * using groups.
   */
  trades?: TradeTableTiersTrades[];

}


/**
 * Trade Group (TradeGroup)
 * A group of trades from which one or more can be randomly selected for
 * a villager to offer.
 */
export interface TradeTableTiersGroups {

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
  trades?: TradeTableTiersGroupsTrades[];

}


/**
 * Trade (TradeSingle)
 * Defines a single trade offered by a villager or wandering 
 * trader.
 */
export interface TradeTableTiersGroupsTrades {

  /**
   * @remarks
   * Array of items the villager gives to the player in exchange. Usually
   * 1 item.
   */
  gives: TradeTableTiersGroupsTradesGives[];

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
  wants: TradeTableTiersGroupsTradesWants[];

}


/**
 * Trade Item (TradeItem)
 * Defines an item used in a trade, either as input (wants) or
 * output (gives).
 */
export interface TradeTableTiersGroupsTradesGives {

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
export interface TradeTableTiersGroupsTradesWants {

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
 * Trade (TradeSingle)
 * Defines a single trade offered by a villager or wandering 
 * trader.
 */
export interface TradeTableTiersTrades {

  /**
   * @remarks
   * Array of items the villager gives to the player in exchange. Usually
   * 1 item.
   */
  gives: TradeTableTiersTradesGives[];

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
  wants: TradeTableTiersTradesWants[];

}


/**
 * Trade Item (TradeItem)
 * Defines an item used in a trade, either as input (wants) or
 * output (gives).
 */
export interface TradeTableTiersTradesGives {

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
export interface TradeTableTiersTradesWants {

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