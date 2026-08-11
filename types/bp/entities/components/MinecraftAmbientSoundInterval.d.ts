// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:ambient_sound_interval
 * 
 * minecraft:ambient_sound_interval Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.is_using_item",
      "event_name": "ambient.tame"
    },
    {
      "condition": "!query.is_using_item",
      "event_name": "ambient"
    }
  ],
  "range": 5,
  "value": 5
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "!query.is_on_ground",
      "event_name": "ambient.in.air"
    }
  ],
  "range": 16,
  "value": 8
}


Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.is_baby",
      "event_name": "ambient.baby"
    }
  ],
  "range": 16,
  "value": 6
}


Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.head_is_in_water",
      "event_name": "ambient.in.water"
    }
  ],
  "range": 16,
  "value": 6
}


Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:ambient_sound_interval": {
  "event_name": "ambient",
  "event_names": [
    {
      "condition": "query.head_is_in_water",
      "event_name": "ambient.in.water"
    }
  ],
  "range": 16,
  "value": 8
}

 */

import * as jsoncommon from '../../../common';

/**
 * Ambient Sound Interval (minecraft:ambient_sound_interval)
 * Delay for an entity playing its sound.
 */
export default interface MinecraftAmbientSoundInterval {

  /**
   * @remarks
   * Level sound event to be played as the ambient sound.
   * 
   * Sample Values:
   * Allay: "ambient"
   *
   *
   */
  event_name?: string;

  /**
   * @remarks
   * List of dynamic level sound events, with conditions for choosing
   * between them. Evaluated in order, first one wins. If none
   * evaluate to true, 'event_name' will take precedence.
   * 
   * Sample Values:
   * Allay: [{"condition":"query.is_using_item","event_name":"ambient.tame"},{"condition":"!query.is_using_item","event_name":"ambient"}]
   *
   * Breeze: [{"condition":"!query.is_on_ground","event_name":"ambient.in.air"}]
   *
   */
  event_names?: MinecraftAmbientSoundIntervalEventNames[];

  /**
   * @remarks
   * Maximum time in seconds to randomly add to the ambient sound delay
   * time.
   */
  range?: number;

  /**
   * @remarks
   * Minimum time in seconds before the entity plays its ambient sound
   * again.
   */
  value?: number;

}


/**
 * List of dynamic level sound events, with conditions for choosing
 * between them. Evaluated in order, first one wins. If none
 * evaluate to true, 'event_name' will take precedence.
 */
export interface MinecraftAmbientSoundIntervalEventNames {

  /**
   * @remarks
   * The condition that must be satisfied to select the given ambient
   * sound
   */
  condition?: string;

  /**
   * @remarks
   * Level sound event to be played as the ambient sound
   */
  event_name?: string;

}