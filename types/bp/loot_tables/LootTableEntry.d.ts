// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Loot Tables Documentation - minecraft:loot_entry
 */

import * as jsoncommon from '../../common';

/**
 * Loot Table Entry (LootTableEntry)
 * Defines an entry in a loot table pool that can be selected when
 * the pool rolls.
 */
export default interface LootTableEntry {

  /**
   * @remarks
   * Array of conditions that must be met for this entry to be
   * considered.
   */
  conditions?: LootTableEntryConditions[];

  /**
   * @remarks
   * Array of functions to apply to the item when selected.
   */
  functions?: LootTableEntryFunctions[];

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
  pools?: LootTableEntryPools[];

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
export interface LootTableEntryConditions {

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
  match_tool?: LootTableEntryConditionsMatchTool;

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
  properties?: LootTableEntryConditionsProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootTableEntryConditionsMatchTool {

  enchantments?: LootTableEntryConditionsMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootTableEntryConditionsMatchToolEnchantments {

  enchantment?: string;

  levels?: LootTableEntryConditionsMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootTableEntryConditionsMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootTableEntryConditionsProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}


/**
 * Loot Function (LootFunction)
 * Defines a function that modifies a loot table entry when
 * selected.
 */
export interface LootTableEntryFunctions {

  /**
   * @remarks
   * Conditions that must be met for this function to apply.
   */
  conditions?: LootTableEntryFunctionsConditions[];

  /**
   * @remarks
   * For 'set_count' and 'looting_enchant': the count value or
   * range.
   */
  count?: LootTableEntryFunctionsCount;

  /**
   * @remarks
   * For 'set_damage': the damage percentage or range (0.0-1.0).
   */
  damage?: LootTableEntryFunctionsDamage;

  /**
   * @remarks
   * For 'set_data': the data value or range to set.
   */
  data?: LootTableEntryFunctionsData;

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
  levels?: LootTableEntryFunctionsLevels;

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
export interface LootTableEntryFunctionsConditions {

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
  match_tool?: LootTableEntryFunctionsConditionsMatchTool;

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
  properties?: LootTableEntryFunctionsConditionsProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootTableEntryFunctionsConditionsMatchTool {

  enchantments?: LootTableEntryFunctionsConditionsMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootTableEntryFunctionsConditionsMatchToolEnchantments {

  enchantment?: string;

  levels?: LootTableEntryFunctionsConditionsMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootTableEntryFunctionsConditionsMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootTableEntryFunctionsConditionsProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}


/**
 */
export interface LootTableEntryFunctionsCount {

  max?: number;

  min?: number;

}


/**
 */
export interface LootTableEntryFunctionsDamage {

  max?: number;

  min?: number;

}


/**
 */
export interface LootTableEntryFunctionsData {

  max?: number;

  min?: number;

}


/**
 */
export interface LootTableEntryFunctionsLevels {

  max?: number;

  min?: number;

}


/**
 * Loot Pool (LootPool)
 * Defines a pool of loot entries that can be rolled one or more
 * times.
 */
export interface LootTableEntryPools {

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
  conditions?: LootTableEntryPoolsConditions[];

  /**
   * @remarks
   * Array of possible entries to select from when rolling this 
   * pool.
   */
  entries: object[];

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
  tiers?: LootTableEntryPoolsTiers;

}


/**
 * Loot Condition (LootCondition)
 * Defines a condition that must be met for a loot table entry or
 * function to apply.
 */
export interface LootTableEntryPoolsConditions {

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
  match_tool?: LootTableEntryPoolsConditionsMatchTool;

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
  properties?: LootTableEntryPoolsConditionsProperties;

  /**
   * @remarks
   * For 'has_mark_variant' or 'has_variant': the variant value to
   * match.
   */
  value?: number;

}


/**
 */
export interface LootTableEntryPoolsConditionsMatchTool {

  enchantments?: LootTableEntryPoolsConditionsMatchToolEnchantments[];

  item?: string;

}


/**
 */
export interface LootTableEntryPoolsConditionsMatchToolEnchantments {

  enchantment?: string;

  levels?: LootTableEntryPoolsConditionsMatchToolEnchantmentsLevels;

}


/**
 */
export interface LootTableEntryPoolsConditionsMatchToolEnchantmentsLevels {

  min?: number;

}


/**
 */
export interface LootTableEntryPoolsConditionsProperties {

  on_fire?: boolean;

  on_ground?: boolean;

}




/**
 */
export interface LootTableEntryPoolsTiers {

  bonus_chance?: number;

  bonus_rolls?: number;

  initial_range?: number;

}