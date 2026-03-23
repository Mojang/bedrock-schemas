// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:trusting
 * 
 * minecraft:trusting Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Trusting (minecraft:trusting)
 * Defines the rules for a mob to trust players.
 */
export default interface MinecraftTrusting {

  /**
   * @remarks
   * The chance of the entity trusting with each item use between 0.0
   * and 1.0, where 1.0 is 100%.
   */
  probability?: number;

  /**
   * @remarks
   * Event to run when this entity becomes trusting. Can be an
   * object with event and target properties, or a simple event 
   * string.
   */
  trust_event?: object;

  /**
   * @remarks
   * The list of items that can be used to get the entity to trust
   * players. Can be an array or a single item string.
   */
  trust_items?: string[];

}