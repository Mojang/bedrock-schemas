// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:inventory
 * 
 * minecraft:inventory Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Inventory (minecraft:inventory)
 * Defines this entity's inventory properties.
 */
export default interface MinecraftInventory {

  /**
   * @remarks
   * Number of slots that this entity can gain per extra strength
   */
  additional_slots_per_strength?: number;

  /**
   * @remarks
   * If true, the contents of this inventory can be removed by a
   * hopper
   */
  can_be_siphoned_from?: boolean;

  /**
   * @remarks
   * Type of container this entity has. Can be horse, minecart_chest, chest_boat,
   * minecart_hopper, inventory, container or hopper
   */
  container_type?: string;

  /**
   * @remarks
   * Number of slots the container has
   */
  inventory_size?: number;

  /**
   * @remarks
   * If true, the entity will not drop its inventory on death
   */
  private?: boolean;

  /**
   * @remarks
   * If true, the entity's inventory can only be accessed by its
   * owner or itself
   */
  restrict_to_owner?: boolean;

}