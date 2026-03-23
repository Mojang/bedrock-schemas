// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.charge_held_item
 * 
 * minecraft:behavior.charge_held_item Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Charge Held Item Behavior 
 * (minecraft:behavior.charge_held_item)
 * Allows an entity to charge and use their held item.
 */
export default interface MinecraftBehaviorChargeHeldItem {

  /**
   * @remarks
   * The list of items that can be used to charge the held item. This
   * list is required and must have at least one item in it.
   */
  items?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}