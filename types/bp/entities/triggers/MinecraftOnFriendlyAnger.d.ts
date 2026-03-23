// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_friendly_anger
 * 
 * minecraft:on_friendly_anger Samples

Polar Bear - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json

"minecraft:on_friendly_anger": {
  "event": "minecraft:on_anger",
  "target": "self"
}


Trader Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json

"minecraft:on_friendly_anger": {
  "event": "minecraft:defend_wandering_trader",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * On Friendly Anger (minecraft:on_friendly_anger)
 * Adds a trigger that will run when a nearby entity of the same
 * type as this entity becomes Angry.
 */
export default interface MinecraftOnFriendlyAnger {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   * 
   * Sample Values:
   * Polar Bear: "minecraft:on_anger"
   *
   * Trader Llama: "minecraft:defend_wandering_trader"
   *
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
   * 
   * Sample Values:
   * Polar Bear: "self"
   *
   *
   */
  target?: string;

}