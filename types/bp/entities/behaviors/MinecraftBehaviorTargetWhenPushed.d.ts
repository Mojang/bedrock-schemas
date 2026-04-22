// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.target_when_pushed
 * 
 * minecraft:behavior.target_when_pushed Samples

Iron Golem - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json

"minecraft:behavior.target_when_pushed": {
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "subject": "other",
            "test": "is_family",
            "value": "monster"
          },
          {
            "operator": "not",
            "test": "is_family",
            "subject": "other",
            "value": "creeper"
          }
        ]
      }
    }
  ],
  "percent_chance": 5,
  "priority": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Target When Pushed Behavior
 * (minecraft:behavior.target_when_pushed)
 * Allows the mob to target another mob when it is pushed by that
 * mob.
 */
export default interface MinecraftBehaviorTargetWhenPushed {

  control_flags?: string[];

  /**
   * @remarks
   * List of entity types that can trigger this mob to begin 
   * targeting
   * 
   * Sample Values:
   * Iron Golem: [{"filters":{"all_of":[{"subject":"other","test":"is_family","value":"monster"},{"operator":"not","test":"is_family","subject":"other","value":"creeper"}]}}]
   *
   */
  entity_types?: object[];

  /**
   * @remarks
   * The probability that the mob will target another mob when pushed. A
   * value of 100 is 100%
   * 
   * Sample Values:
   * Iron Golem: 5
   *
   */
  percent_chance?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Iron Golem: 1
   *
   */
  priority?: number;

}


export enum MinecraftBehaviorTargetWhenPushedControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}