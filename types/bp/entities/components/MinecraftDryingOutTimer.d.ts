// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:drying_out_timer
 * 
 * minecraft:drying_out_timer Samples

Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:drying_out_timer": {
  "total_time": 120,
  "water_bottle_refill_time": 0,
  "dried_out_event": {
    "event": "dried_out"
  },
  "stopped_drying_out_event": {
    "event": "stop_dryingout"
  },
  "recover_after_dried_out_event": {
    "event": "recover_after_dried_out"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Drying Out Timer (minecraft:drying_out_timer)
 * Adds a timer for drying out that will count down and fire
 * 'dried_out_event' or will stop as soon as the entity will get
 * under rain or water and fire 'stopped_drying_out_event'.
 */
export default interface MinecraftDryingOutTimer {

  /**
   * @remarks
   * Event to fire when the drying out time runs out. Can be an
   * object with event and target properties, or a simple event 
   * string.
   * 
   * Sample Values:
   * Dolphin: {"event":"dried_out"}
   *
   */
  dried_out_event?: object;

  /**
   * @remarks
   * Event to fire when entity was already dried out but received increase
   * in water supply. Can be an object with event and target properties, or
   * a simple event string.
   * 
   * Sample Values:
   * Dolphin: {"event":"recover_after_dried_out"}
   *
   */
  recover_after_dried_out_event?: object;

  /**
   * @remarks
   * Event to fire when entity stopped drying out. Can be an object with
   * event and target properties, or a simple event string.
   * 
   * Sample Values:
   * Dolphin: {"event":"stop_dryingout"}
   *
   */
  stopped_drying_out_event?: object;

  /**
   * @remarks
   * Amount of time in seconds to dry out fully.
   * 
   * Sample Values:
   * Dolphin: 120
   *
   */
  total_time?: number;

  /**
   * @remarks
   * Optional amount of additional time in seconds given by using
   * splash water bottle on entity.
   */
  water_bottle_refill_time?: number;

}