// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:ravager_blocked
 * 
 * minecraft:ravager_blocked Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Ravager Blocked (minecraft:ravager_blocked)
 * Defines the ravager's response to their melee attack being
 * blocked.
 */
export default interface MinecraftRavagerBlocked {

  /**
   * @remarks
   * The strength with which blocking entities should be knocked 
   * back
   */
  knockback_strength?: number;

  /**
   * @remarks
   * A list of weighted responses to the melee attack being 
   * blocked
   */
  reaction_choices?: string[];

}