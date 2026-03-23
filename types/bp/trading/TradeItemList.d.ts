// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Trading Documentation - minecraft:tradeitemlist
 */

import * as jsoncommon from '../../common';

/**
 * Trade Item List (TradeItemList)
 * Defines a list of alternative items that can satisfy a trade
 * requirement. When used with the choice property, any one of the
 * listed items can be used to complete the trade. This provides
 * flexibility in what items a player can offer or receive.
 */
export default interface TradeItemList {

  /**
   * @remarks
   * choice
   */
  choice?: object;

}