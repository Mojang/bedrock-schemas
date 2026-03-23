// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_ignite
 */

import * as jsoncommon from '../../../common';

/**
 * On Ignite (minecraft:on_ignite)
 * Adds a trigger to call when this entity is set on fire.
 */
export default interface MinecraftOnIgnite {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   */
  event?: string;

  /**
   * @remarks
   * The list of conditions for this trigger to execute.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The target of the event.
   */
  target?: string;

}