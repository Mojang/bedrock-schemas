// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.eat_carried_item
 * 
 * minecraft:behavior.eat_carried_item Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Eat Carried Item Behavior
 * (minecraft:behavior.eat_carried_item)
 * If the mob is carrying a food item, the mob will eat it and the
 * effects will be applied to the mob.
 * Note: Requires food items to be in the entity's inventory in
 * order to eat the food.
 */
export default interface MinecraftBehaviorEatCarriedItem {

  control_flags?: string[];

  /**
   * @remarks
   * Time in seconds the mob should wait before eating the item.
   */
  delay_before_eating?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


export enum MinecraftBehaviorEatCarriedItemControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}