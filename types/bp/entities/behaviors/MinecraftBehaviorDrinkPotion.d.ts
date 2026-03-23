// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.drink_potion
 * 
 * minecraft:behavior.drink_potion Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Drink Potion Behavior (minecraft:behavior.drink_potion)
 * Allows the mob to drink potions based on specified environment
 * conditions.
 */
export default interface MinecraftBehaviorDrinkPotion {

  /**
   * @remarks
   * A list of potions that this entity can drink. Each potion entry
   * has the following parameters:
   */
  potions?: MinecraftBehaviorDrinkPotionPotions[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The movement speed modifier to apply to the entity while it is
   * drinking a potion. A value of 0 represents no change in 
   * speed.
   */
  speed_modifier?: number;

}


/**
 * A list of potions that this entity can drink. Each potion entry
 * has the following parameters:
 */
export interface MinecraftBehaviorDrinkPotionPotions {

  /**
   * @remarks
   * The percent chance (from 0.0 to 1.0) of this potion being selected
   * when searching for a potion to use.
   */
  chance?: number;

  /**
   * @remarks
   * The filters to use when determining if this potion can be
   * selected.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The registry ID of the potion to use
   */
  id?: number;

}