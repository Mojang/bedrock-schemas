// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Loot Tables Documentation - minecraft:loot_function
 */

import * as jsoncommon from '../../common';

/**
 * Loot Function (LootFunction)
 * Defines a function that modifies a loot table entry when
 * selected.
 */
export default interface LootFunction {

  /**
   * @remarks
   * Conditions that must be met for this function to apply.
   */
  conditions?: LootFunctionConditions[];

  /**
   * @remarks
   * For 'set_count' and 'looting_enchant': the count value or
   * range.
   */
  count?: LootFunctionCount;

  /**
   * @remarks
   * For 'set_damage': the damage percentage or range (0.0-1.0).
   */
  damage?: LootFunctionDamage;

  /**
   * @remarks
   * For 'set_data': the data value or range to set.
   */
  data?: LootFunctionData;

  /**
   * @remarks
   * For 'exploration_map': the structure destination type.
   */
  destination?: string;

  /**
   * @remarks
   * The function type. Common values: 'set_count', 'set_data', 'set_damage',
   * 'set_nbt', 'enchant_randomly', 'enchant_with_levels', 'looting_enchant',
   * 'furnace_smelt', 'set_actor_id', 'set_book_contents', 'fill_container',
   * 'exploration_map', 'set_banner_details', 'set_armor_trim'.
   */
  function: string;

  /**
   * @remarks
   * For 'set_actor_id': the entity identifier.
   */
  id?: string;

  /**
   * @remarks
   * For 'enchant_with_levels': the enchantment level or range.
   */
  levels?: LootFunctionLevels;

  /**
   * @remarks
   * For 'enchant_randomly': whether to include treasure 
   * enchantments.
   */
  treasure?: boolean;

}


/**
 * Loot Condition (LootCondition)
 * Defines a condition that must be met for a loot table entry or
 * function to apply.
 */
export interface LootFunctionConditions {

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
  match_tool?: LootFunctionConditionsMatchTool;

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
  properties?: LootFunctionConditionsProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootFunctionConditionsMatchTool {

  enchantments?: LootFunctionConditionsMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootFunctionConditionsMatchToolEnchantments {

  enchantment?: string;

  levels?: LootFunctionConditionsMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootFunctionConditionsMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootFunctionConditionsProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}


/**
 */
export interface LootFunctionCount {

  max?: number;

  min?: number;

}


/**
 */
export interface LootFunctionDamage {

  max?: number;

  min?: number;

}


/**
 */
export interface LootFunctionData {

  max?: number;

  min?: number;

}


/**
 */
export interface LootFunctionLevels {

  max?: number;

  min?: number;

}