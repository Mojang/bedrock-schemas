// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:target_nearby_sensor
 * 
 * minecraft:target_nearby_sensor Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:target_nearby_sensor": {
  "on_inside_range": {
    "event": "switch_to_melee",
    "target": "self"
  },
  "inside_range": 2,
  "must_see": true,
  "outside_range": 3,
  "on_outside_range": {
    "event": "switch_to_ranged",
    "target": "self"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Target Nearby Sensor (minecraft:target_nearby_sensor)
 * Defines the entity's range within which it can see or sense other
 * entities to target them.
 */
export default interface MinecraftTargetNearbySensor {

  /**
   * @remarks
   * Maximum distance in blocks that another entity will be
   * considered in the 'inside' range
   * 
   * Sample Values:
   * Blaze: 2
   *
   */
  inside_range?: number;

  /**
   * @remarks
   * Whether the other entity needs to be visible to trigger 'inside'
   * events
   * 
   * Sample Values:
   * Blaze: true
   *
   */
  must_see?: boolean;

  /**
   * @remarks
   * Event to call when an entity gets in the inside range. Can be
   * an object with event and target properties, or a simple event
   * string.
   * 
   * Sample Values:
   * Blaze: {"event":"switch_to_melee","target":"self"}
   *
   */
  on_inside_range?: object;

  /**
   * @remarks
   * Event to call when an entity gets outside the outside range. Can
   * be an object with event and target properties, or a simple event
   * string.
   * 
   * Sample Values:
   * Blaze: {"event":"switch_to_ranged","target":"self"}
   *
   */
  on_outside_range?: object;

  /**
   * @remarks
   * Event to call when an entity exits visual range. Can specify 'event'
   * for the name of the event and 'target' for the target of the
   * event
   */
  on_vision_lost_inside_range?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Maximum distance in blocks that another entity will be
   * considered in the 'outside' range
   * 
   * Sample Values:
   * Blaze: 3
   *
   */
  outside_range?: number;

}