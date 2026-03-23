// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.drink_milk
 * 
 * minecraft:behavior.drink_milk Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Drink Milk Behavior (minecraft:behavior.drink_milk)
 * Allows the mob to drink milk based on specified environment 
 * conditions.
 */
export default interface MinecraftBehaviorDrinkMilk {

  control_flags?: string[];

  /**
   * @remarks
   * Time (in seconds) that the goal is on cooldown before it can be
   * used again.
   */
  cooldown_seconds?: number;

  /**
   * @remarks
   * Conditions that need to be met for the behavior to start.
   */
  filters?: MinecraftBehaviorDrinkMilkFilters;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


export enum MinecraftBehaviorDrinkMilkControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorDrinkMilkFilters {

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