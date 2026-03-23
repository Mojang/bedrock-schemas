// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_wake_with_owner
 * 
 * minecraft:on_wake_with_owner Samples
 */

import * as jsoncommon from '../../../common';

/**
 * On wake with owner trigger (minecraft:on_wake_with_owner)
 * A trigger when a mob's tamed onwer wakes up.
 */
export default interface MinecraftOnWakeWithOwner {

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