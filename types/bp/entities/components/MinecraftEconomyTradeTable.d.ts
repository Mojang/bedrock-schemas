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
 * Economy Trade Table (minecraft:economy_trade_table)
 * Defines this entity's ability to trade with players.
 */
export default interface MinecraftEconomyTradeTable {

  /**
   * @remarks
   * Determines when the mob transforms, if the trades should be
   * converted when the new mob has a economy_trade_table. When the
   * trades are converted, the mob will generate a new trade list with
   * their new trade table, but then it will try to convert any of
   * the same trades over to have the same enchantments and user data.
   * For example, if the original has a Emerald to Enchanted Iron
   * Sword (Sharpness 1), and the new trade also has an Emerald for
   * Enchanted Iron Sword, then the enchantment will be Sharpness 
   * 1.
   */
  convert_trades_economy?: boolean;

  /**
   * @remarks
   * How much should the discount be modified by when the player has
   * cured the Zombie Villager. Can be specified as a pair of
   * numbers (When use_legacy_price_formula is true this is the
   * low-tier trade discount and high-tier trade discount, otherwise it
   * is the minor positive gossip and major positive gossip.)
   */
  cured_discount?: number[];

  /**
   * @remarks
   * Name to be displayed while trading with this entity
   */
  display_name?: string;

  /**
   * @remarks
   * Used in legacy prices to determine how much should Demand be
   * modified by when the player has the Hero of the Village mob
   * effect
   */
  hero_demand_discount?: number;

  /**
   * @remarks
   * The max the discount can be modified by when the player has
   * cured the Zombie Villager. Can be specified as a pair of
   * numbers (When use_legacy_price_formula is true this is the
   * low-tier trade discount and high-tier trade discount, otherwise it
   * is the minor positive gossip and major positive gossip.)
   */
  max_cured_discount?: number[];

  /**
   * @remarks
   * The max the discount can be modified by when the player has
   * cured a nearby Zombie Villager. Only used when
   * use_legacy_price_formula is true, otherwise max_cured_discount (low)
   * is used.
   */
  max_nearby_cured_discount?: number;

  /**
   * @remarks
   * How much should the discount be modified by when the player has
   * cured a nearby Zombie Villager
   */
  nearby_cured_discount?: number;

  /**
   * @remarks
   * Used to determine if trading with entity opens the new trade
   * screen
   */
  new_screen?: boolean;

  /**
   * @remarks
   * Determines if the trades should persist when the mob transforms. This
   * makes it so that the next time the mob is transformed to
   * something with a trade_table or economy_trade_table, then it
   * keeps their trades.
   */
  persist_trades?: boolean;

  /**
   * @remarks
   * Show an in game trade screen when interacting with the mob.
   */
  show_trade_screen?: boolean;

  /**
   * @remarks
   * File path relative to the resource pack root for this entity's 
   * trades
   */
  table?: string;

  /**
   * @remarks
   * Determines whether the legacy formula is used to determines the
   * trade prices.
   */
  use_legacy_price_formula?: boolean;

}