// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Triggers Documentation - minecraft:on_hurt_by_player
 * 
 * minecraft:on_hurt_by_player Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:on_hurt_by_player": {
  "event": "minecraft:on_hurt_event",
  "target": "self"
}

 */

import * as jsoncommon from '../../../common';

/**
 * On Hurt By Player (minecraft:on_hurt_by_player)
 * Adds a trigger to call when this entity is attacked by the
 * player.
 */
export default interface MinecraftOnHurtByPlayer {

  /**
   * @remarks
   * The event to run when the conditions for this trigger are 
   * met.
   * 
   * Sample Values:
   * Blaze: "minecraft:on_hurt_event"
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
   */
  target?: string;

}