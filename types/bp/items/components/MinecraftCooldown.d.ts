// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:cooldown
 * 
 * minecraft:cooldown Samples
"minecraft:cooldown": {
  "category": "attack",
  "duration": 0.2
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Cooldown (minecraft:cooldown)
 * Adds a cooldown to an item, preventing it from being used again
 * for a specified duration. Items sharing the same category will
 * enter cooldown together when any one of them is used.
 */
export default interface MinecraftCooldown {

  /**
   * @remarks
   * A string identifier that groups items together. When an item with
   * a cooldown is used, all items sharing the same category also
   * enter cooldown.
   */
  category: string;

  /**
   * @remarks
   * The duration of time in seconds that items with the matching category
   * will spend cooling down before becoming usable again.
   */
  duration: number;

  /**
   * @remarks
   * The type of action that triggers the cooldown. Use 'use' for
   * items consumed on use, or 'attack' for weapons. Default is
   * 'use'.
   */
  type?: string;

}


export enum MinecraftCooldownType {
  attack = `attack`,
  use = `use`
}