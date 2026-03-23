// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_hurt
 * 
 * minecraft:on_hurt Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:on_hurt": {
  "event": "minecraft:on_hurt_event",
  "target": "self"
}


Ender Crystal - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_crystal.json

"minecraft:on_hurt": {
  "event": "minecraft:crystal_explode",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * On Hurt (minecraft:on_hurt)
 * Adds a trigger to call when this entity takes damage.
 */
export default interface MinecraftOnHurt {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   * 
   * Sample Values:
   * Blaze: "minecraft:on_hurt_event"
   *
   * Ender Crystal: "minecraft:crystal_explode"
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
   * Blaze: "self"
   *
   *
   */
  target?: string;

}