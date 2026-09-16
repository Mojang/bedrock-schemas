// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:economy_trade_table
 * 
 * minecraft:economy_trade_table Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Economy Trade Table (minecraft:economy_trade_table)
 * Defines this entity's ability to trade with players.
 */
export default interface MinecraftEconomyTradeTable {

  /**
   * @remarks
   * Whether legacy trade data is converted into economy trade 
   * data.
   */
  convert_trades_economy?: boolean;

  /**
   * @remarks
   * Range of cured villager discounts applied to trade prices.
   */
  cured_discount?: object;

  /**
   * @remarks
   * The entity localization key used for the trading UI display 
   * name.
   */
  display_name?: string;

  /**
   * @remarks
   * Additional demand discount applied while the player has Hero of
   * the Village.
   */
  hero_demand_discount?: number;

  /**
   * @remarks
   * Maximum allowed range for cured villager discounts.
   */
  max_cured_discount?: object;

  /**
   * @remarks
   * Most negative nearby cured villager discount allowed by legacy
   * pricing.
   */
  max_nearby_cured_discount?: number;

  /**
   * @remarks
   * Nearby cured villager discount step applied by legacy 
   * pricing.
   */
  nearby_cured_discount?: number;

  /**
   * @remarks
   * Whether this trader uses the newer trade screen 
   * implementation.
   */
  new_screen?: boolean;

  /**
   * @remarks
   * Whether generated offers are persisted with the actor save 
   * data.
   */
  persist_trades?: boolean;

  /**
   * @remarks
   * Whether interacting with this trader opens the trade screen.
   */
  show_trade_screen?: boolean;

  /**
   * @remarks
   * Path to the trade table JSON that defines available offers.
   */
  table?: string;

  /**
   * @remarks
   * Whether legacy price calculations are used instead of the newer
   * pricing formula.
   */
  use_legacy_price_formula?: boolean;

}