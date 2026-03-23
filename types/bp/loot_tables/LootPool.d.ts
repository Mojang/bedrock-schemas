// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Loot Tables Documentation - minecraft:loot_pool
 */

import * as jsoncommon from '../../common';

/**
 * Loot Pool (LootPool)
 * Defines a pool of loot entries that can be rolled one or more
 * times.
 */
export default interface LootPool {

  /**
   * @remarks
   * Additional rolls added based on luck attribute. Can be fixed or
   * range.
   */
  bonus_rolls?: number;

  /**
   * @remarks
   * Array of conditions that must be met for this pool to be
   * rolled.
   */
  conditions?: LootPoolConditions[];

  /**
   * @remarks
   * Array of possible entries to select from when rolling this 
   * pool.
   */
  entries: LootPoolEntries[];

  /**
   * @remarks
   * Number of times to roll this pool. Can be a fixed number or a
   * range object with min/max.
   */
  rolls?: number;

  /**
   * @remarks
   * Tiered entry selection configuration.
   */
  tiers?: LootPoolTiers;

}


/**
 * Loot Condition (LootCondition)
 * Defines a condition that must be met for a loot table entry or
 * function to apply.
 */
export interface LootPoolConditions {

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
  match_tool?: LootPoolConditionsMatchTool;

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
  properties?: LootPoolConditionsProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootPoolConditionsMatchTool {

  enchantments?: LootPoolConditionsMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootPoolConditionsMatchToolEnchantments {

  enchantment?: string;

  levels?: LootPoolConditionsMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootPoolConditionsMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootPoolConditionsProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}


/**
 * Loot Table Entry (LootTableEntry)
 * Defines an entry in a loot table pool that can be selected when
 * the pool rolls.
 */
export interface LootPoolEntries {

  /**
   * @remarks
   * Array of conditions that must be met for this entry to be
   * considered.
   */
  conditions?: LootPoolEntriesConditions[];

  /**
   * @remarks
   * Array of functions to apply to the item when selected.
   */
  functions?: LootPoolEntriesFunctions[];

  /**
   * @remarks
   * The item identifier (for type 'item') or loot table path (for
   * type 'loot_table').
   */
  name?: string;

  /**
   * @remarks
   * Nested pools for type 'loot_table'. Allows inline loot table
   * definition.
   */
  pools?: object[];

  /**
   * @remarks
   * The type of entry. Valid values: 'item' (drops an item),
   * 'loot_table' (references another loot table), 'empty' (drops
   * nothing).
   */
  type: string;

  /**
   * @remarks
   * The relative weight of this entry being selected. Higher weights are
   * more likely. Default is 1.
   */
  weight?: number;

}


/**
 * Loot Condition (LootCondition)
 * Defines a condition that must be met for a loot table entry or
 * function to apply.
 */
export interface LootPoolEntriesConditions {

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
  match_tool?: LootPoolEntriesConditionsMatchTool;

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
  properties?: LootPoolEntriesConditionsProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootPoolEntriesConditionsMatchTool {

  enchantments?: LootPoolEntriesConditionsMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootPoolEntriesConditionsMatchToolEnchantments {

  enchantment?: string;

  levels?: LootPoolEntriesConditionsMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootPoolEntriesConditionsMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootPoolEntriesConditionsProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}


/**
 * Loot Function (LootFunction)
 * Defines a function that modifies a loot table entry when
 * selected.
 */
export interface LootPoolEntriesFunctions {

  /**
   * @remarks
   * Conditions that must be met for this function to apply.
   */
  conditions?: LootPoolEntriesFunctionsConditions[];

  /**
   * @remarks
   * For 'set_count' and 'looting_enchant': the count value or
   * range.
   */
  count?: LootPoolEntriesFunctionsCount;

  /**
   * @remarks
   * For 'set_damage': the damage percentage or range (0.0-1.0).
   */
  damage?: LootPoolEntriesFunctionsDamage;

  /**
   * @remarks
   * For 'set_data': the data value or range to set.
   */
  data?: LootPoolEntriesFunctionsData;

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
  levels?: LootPoolEntriesFunctionsLevels;

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
export interface LootPoolEntriesFunctionsConditions {

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
  match_tool?: LootPoolEntriesFunctionsConditionsMatchTool;

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
  properties?: LootPoolEntriesFunctionsConditionsProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootPoolEntriesFunctionsConditionsMatchTool {

  enchantments?: LootPoolEntriesFunctionsConditionsMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootPoolEntriesFunctionsConditionsMatchToolEnchantments {

  enchantment?: string;

  levels?: LootPoolEntriesFunctionsConditionsMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootPoolEntriesFunctionsConditionsMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootPoolEntriesFunctionsConditionsProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}


/**
 */
export interface LootPoolEntriesFunctionsCount {

  max?: number;

  min?: number;

}


/**
 */
export interface LootPoolEntriesFunctionsDamage {

  max?: number;

  min?: number;

}


/**
 */
export interface LootPoolEntriesFunctionsData {

  max?: number;

  min?: number;

}


/**
 */
export interface LootPoolEntriesFunctionsLevels {

  max?: number;

  min?: number;

}




/**
 */
export interface LootPoolTiers {

  bonus_chance?: number;

  bonus_rolls?: number;

  initial_range?: number;

}