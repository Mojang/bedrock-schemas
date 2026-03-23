// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:scheduler
 * 
 * minecraft:scheduler Samples

Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

"minecraft:scheduler": {
  "min_delay_secs": 0,
  "max_delay_secs": 0,
  "scheduled_events": [
    {
      "filters": [
        {
          "test": "is_sleeping",
          "value": true
        }
      ],
      "event": "minecraft:ambient_sleep"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_daytime",
            "value": false
          },
          {
            "test": "distance_to_nearest_player",
            "operator": ">",
            "value": 16
          }
        ]
      },
      "event": "minecraft:ambient_night"
    },
    {
      "filters": {
        "all_of": [
          {
            "test": "is_sleeping",
            "value": false
          },
          {
            "any_of": [
              {
                "test": "is_daytime",
                "value": true
              },
              {
                "test": "distance_to_nearest_player",
                "operator": "<=",
                "value": 16
              }
            ]
          }
        ]
      },
      "event": "minecraft:ambient_normal"
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Scheduler (minecraft:scheduler)
 * Fires off scheduled mob events at time of day events.
 */
export default interface MinecraftScheduler {

  max_delay_secs?: number;

  min_delay_secs?: number;

  /**
   * @remarks
   * The list of triggers that fire when the conditions match the
   * given filter criteria. Can be an array of event objects or a
   * single event object.
   * 
   * Sample Values:
   * Fox: [{"filters":[{"test":"is_sleeping","value":true}],"event":"minecraft:ambient_sleep"},{"filters":{"all_of":[{"test":"is_daytime","value":false},{"test":"distance_to_nearest_player","operator":">","value":16}]},"event":"minecraft:ambient_night"},{"filters":{"all_of":[{"test":"is_sleeping","value":false},{"any_of":[{"test":"is_daytime","value":true},{"test":"distance_to_nearest_player","operator":"<=","value":16}]}]},"event":"minecraft:ambient_normal"}]
   *
   */
  scheduled_events?: object[];

}