// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Trading Documentation - minecraft:tradeitem
 */

import * as jsoncommon from '../../common';

/**
 * Trade Item (TradeItem)
 * Defines an item used in a trade, either as input (wants) or
 * output (gives).
 */
export default interface TradeItem {

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