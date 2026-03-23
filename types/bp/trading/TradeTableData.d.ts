// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Trading Documentation - minecraft:tradetabledata
 */

import * as jsoncommon from '../../common';

/**
 * Trade Table Data (TradeTableData)
 * Contains internal metadata and type definitions for trade table
 * structures. This form defines the data types used by trade tables,
 * including TradeItem, TradeTier, TradeGroup, and other supporting
 * structures.
 */
export default interface TradeTableData {

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
   * TradeItemList
   */
  _1093643626?: object;

  /**
   * @remarks
   * TradeItem_Quantity
   */
  _2298823339?: object;

  /**
   * @remarks
   * TradeGroup
   */
  _3153354884?: object;

  /**
   * @remarks
   * class Json_Value
   */
  _315535208?: object;

  /**
   * @remarks
   * Trade
   */
  _3738829565?: object;

  /**
   * @remarks
   * Filter Test
   */
  _4150989894?: object;

  /**
   * @remarks
   * TradeItem
   */
  _56017534?: object;

  /**
   * @remarks
   * TradeTier
   */
  _943617905?: object;

}