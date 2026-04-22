// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:spawn_on_death
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Spawn On Death (minecraft:spawn_on_death)
 * Component for spawning entities when an entity perishes.
 */
export default interface MinecraftSpawnOnDeath {

  /**
   * @remarks
   * Additional random range of entities to spawn, defaults to 0, 0
   * when not set
   */
  additional_spawn_range?: MinecraftSpawnOnDeathAdditionalSpawnRange;

  /**
   * @remarks
   * What entity to spawn, defaults to owning entity when not set
   */
  entity_to_spawn?: string;

  /**
   * @remarks
   * Conditions that need to be met for the behavior to start.
   */
  filters?: MinecraftSpawnOnDeathFilters;

  /**
   * @remarks
   * If true, the entity will inherit the name of the parent entity,
   * defaults to true when not set
   */
  inherit_parent_name?: boolean;

  /**
   * @remarks
   * How many entities to spawn, defaults to 1 when not set
   */
  spawn_amount?: number;

  /**
   * @remarks
   * Spawn method. born, spawned, or summoned, defaults to spawned when
   * not set
   */
  spawn_method?: string;

}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftSpawnOnDeathAdditionalSpawnRange {

  max?: number;

  min?: number;

}


/**
 * Filters (filters)
 */
export interface MinecraftSpawnOnDeathFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}