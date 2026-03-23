// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:admire_item
 * 
 * minecraft:admire_item Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Admire Item (minecraft:admire_item)
 * Allows an entity to ignore attackable targets for a given
 * duration.
 */
export default interface MinecraftAdmireItem {

  /**
   * @remarks
   * Duration, in seconds, for which mob won't admire items if it
   * was hurt
   */
  cooldown_after_being_attacked?: number;

  /**
   * @remarks
   * Duration, in seconds, that the mob is pacified.
   */
  duration?: number;

}