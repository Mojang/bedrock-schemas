// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.defend_village_target
 * 
 * minecraft:behavior.defend_village_target Samples

Iron Golem - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json

"minecraft:behavior.defend_village_target": {
  "must_reach": true,
  "entity_types": [
    {
      "filters": {
        "AND": [
          {
            "OR": [
              {
                "test": "is_family",
                "subject": 1,
                "operator": 0,
                "value": "mob"
              },
              {
                "test": "is_family",
                "subject": 1,
                "operator": 0,
                "value": "player"
              }
            ]
          }
        ]
      }
    }
  ],
  "priority": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Defend Village Target Behavior
 * (minecraft:behavior.defend_village_target)
 * Allows the entity to stay in a village and defend the village from
 * aggressors. If a player is in bad standing with the village this
 * goal will cause the entity to attack the player regardless of
 * filter conditions.
 * Note: This behavior is typically used with the minecraft:dweller component
 * which defines the entity's role in a village. See
 * iron_golem.json for a complete example.
 */
export default interface MinecraftBehaviorDefendVillageTarget {

  /**
   * @remarks
   * The percentage chance that the entity has to attack aggressors of
   * its village, where 1.0 = 100%.
   */
  attack_chance?: number;

  /**
   * @remarks
   * If true, this entity can attack its owner.
   */
  attack_owner?: boolean;

  control_flags?: string[];

  /**
   * @remarks
   * Filters which types of targets are valid for this entity.
   * 
   * Sample Values:
   * Iron Golem: [{"filters":{"AND":[{"OR":[{"test":"is_family","subject":1,"operator":0,"value":"mob"},{"test":"is_family","subject":1,"operator":0,"value":"player"}]}]}}]
   *
   */
  entity_types?: object[];

  /**
   * @remarks
   * If true, this entity requires a path to the target.
   * 
   * Sample Values:
   * Iron Golem: true
   *
   */
  must_reach?: boolean;

  /**
   * @remarks
   * Determines if target-validity requires this entity to be in
   * range only, or both in range and in sight.
   */
  must_see?: boolean;

  /**
   * @remarks
   * Time (in seconds) the target must not be seen by this entity to
   * become invalid. Used only if "must_see" is true.
   */
  must_see_forget_duration?: number;

  /**
   * @remarks
   * Time (in seconds) this entity can continue attacking the target
   * after the target is no longer valid.
   */
  persist_time?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Iron Golem: 1
   *
   */
  priority?: number;

  /**
   * @remarks
   * Maximum distance this entity can be from the target when
   * following it, otherwise the target becomes invalid. This value is
   * only used if the entity doesn't declare 
   * "minecraft:follow_range".
   */
  within_radius?: number;

}


export enum MinecraftBehaviorDefendVillageTargetControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}