// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Trading Documentation - minecraft:tradeitem_quantity
 */

import * as jsoncommon from '../../common';

/**
 * Trade Item Quantity (TradeItemQuantity)
 * Defines a random quantity range for a trade item.
 */
export default interface TradeItemQuantity {

  /**
   * @remarks
   * Maximum number of items for this trade.
   */
  max?: number;

  /**
   * @remarks
   * Minimum number of items for this trade.
   */
  min?: number;

}