// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.trade_with_player
 * 
 * minecraft:behavior.trade_with_player Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Trade With Player Behavior 
 * (minecraft:behavior.trade_with_player)
 * Allows the player to trade with this mob. When the goal starts, it
 * will stop the mob's navigation.
 */
export default interface MinecraftBehaviorTradeWithPlayer {

  /**
   * @remarks
   * Conditions that need to be met for the behavior to start.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The max distance that the mob can be from the player before exiting
   * the goal.
   */
  max_distance_from_player?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}