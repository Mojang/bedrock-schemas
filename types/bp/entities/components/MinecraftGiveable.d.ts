// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:giveable
 * 
 * minecraft:giveable Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Giveable (minecraft:giveable)
 * Defines sets of items that can be used to trigger events when
 * used on this entity. The item will also be taken and placed in
 * the entity's inventory.
 */
export default interface MinecraftGiveable {

  /**
   * @remarks
   * An optional cool down in seconds to prevent spamming 
   * interactions.
   */
  cooldown?: number;

  /**
   * @remarks
   * The list of items that can be given to the entity to place in
   * their inventory. Can be an array or a single item string.
   */
  items?: string[];

  /**
   * @remarks
   * Event to fire when the correct item is given. Can be an object with
   * event and target properties, or a simple event string.
   */
  on_give?: object;

}