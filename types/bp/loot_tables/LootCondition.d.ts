// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Loot Tables Documentation - minecraft:loot_condition
 */

import * as jsoncommon from '../../common';

/**
 * Loot Condition (LootCondition)
 * Defines a condition that must be met for a loot table entry or
 * function to apply.
 */
export default interface LootCondition {

  /**
   * @remarks
   * For 'random_chance' and 'random_chance_with_looting': the base
   * probability (0.0-1.0).
   */
  chance?: number;

  /**
   * @remarks
   * The condition type. Common values: 'killed_by_player',
   * 'killed_by_player_or_pets', 'random_chance', 'random_chance_with_looting',
   * 'has_mark_variant', 'has_variant', 'entity_properties', 'match_tool',
   * 'random_difficulty_chance'.
   */
  condition: string;

  /**
   * @remarks
   * For 'random_difficulty_chance': default probability if
   * difficulty not matched.
   */
  default_chance?: number;

  /**
   * @remarks
   * For 'random_difficulty_chance': probability on easy 
   * difficulty.
   */
  easy?: number;

  /**
   * @remarks
   * For 'entity_properties': which entity to check ('this', 'attacker', or
   * 'attacking_player').
   */
  entity?: string;

  /**
   * @remarks
   * For 'random_difficulty_chance': probability on hard 
   * difficulty.
   */
  hard?: number;

  /**
   * @remarks
   * For 'random_chance_with_looting': additional chance per looting
   * level.
   */
  looting_multiplier?: number;

  /**
   * @remarks
   * For 'match_tool': the tool item properties to match.
   */
  match_tool?: LootConditionMatchTool;

  /**
   * @remarks
   * For 'random_difficulty_chance': probability on normal 
   * difficulty.
   */
  normal?: number;

  /**
   * @remarks
   * For 'random_difficulty_chance': probability on peaceful 
   * difficulty.
   */
  peaceful?: number;

  /**
   * @remarks
   * For 'entity_properties': the entity properties to match.
   */
  properties?: LootConditionProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootConditionMatchTool {

  enchantments?: LootConditionMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootConditionMatchToolEnchantments {

  enchantment?: string;

  levels?: LootConditionMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootConditionMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootConditionProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}