// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.hurt_by_target
 * 
 * minecraft:behavior.hurt_by_target Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:behavior.hurt_by_target": {
  "priority": 1
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:behavior.hurt_by_target": {
  "entity_types": [
    {
      "filters": {
        "operator": "!=",
        "test": "is_family",
        "subject": "other",
        "value": "breeze"
      }
    }
  ],
  "priority": 1
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:behavior.hurt_by_target": {
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "skeleton"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "stray"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "zombie"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "husk"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "spider"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "cavespider"
          },
          {
            "operator": "!=",
            "test": "is_family",
            "subject": "other",
            "value": "slime"
          }
        ]
      }
    }
  ],
  "priority": 4
}

 */

import * as jsoncommon from '../../../common';

/**
 * Hurt By Target Behavior (minecraft:behavior.hurt_by_target)
 * Allows the mob to target another mob that hurts them.
 */
export default interface MinecraftBehaviorHurtByTarget {

  /**
   * @remarks
   * If true, nearby mobs of the same type will be alerted about the
   * damage
   */
  alert_same_type?: boolean;

  /**
   * @remarks
   * List of entity types that this mob can target when hurt by 
   * them
   * 
   * Sample Values:
   * Bogged: [{"filters":{"operator":"!=","test":"is_family","subject":"other","value":"breeze"}}]
   *
   * Breeze: [{"filters":{"all_of":[{"operator":"!=","test":"is_family","subject":"other","value":"skeleton"},{"operator":"!=","test":"is_family","subject":"other","value":"stray"},{"operator":"!=","test":"is_family","subject":"other","value":"zombie"},{"operator":"!=","test":"is_family","subject":"other","value":"husk"},{"operator":"!=","test":"is_family","subject":"other","value":"spider"},{"operator":"!=","test":"is_family","subject":"other","value":"cavespider"},{"operator":"!=","test":"is_family","subject":"other","value":"slime"}]}}]
   *
   */
  entity_types?: MinecraftBehaviorHurtByTargetEntityTypes[];

  /**
   * @remarks
   * If true, the mob will hurt its owner and other mobs with the
   * same owner as itself
   */
  hurt_owner?: boolean;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


/**
 * List of entity types that this mob can target when hurt by
 * them.
 */
export interface MinecraftBehaviorHurtByTargetEntityTypes {

  /**
   * @remarks
   * The amount of time in seconds that the mob has to wait before
   * selecting a target of the same type again
   */
  cooldown?: number;

  /**
   * @remarks
   * Conditions that make this entry in the list valid
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Maximum distance this mob can be away to be a valid choice
   */
  max_dist?: number;

  /**
   * @remarks
   * If true, the mob has to be visible to be a valid choice
   */
  must_see?: boolean;

  /**
   * @remarks
   * Determines the amount of time in seconds that this mob will look
   * for a target before forgetting about it and looking for a new
   * one when the target isn't visible any more
   */
  must_see_forget_duration?: number;

  /**
   * @remarks
   * If true, the mob will stop being targeted if it stops meeting any
   * conditions.
   */
  reevaluate_description?: boolean;

  /**
   * @remarks
   * Multiplier for the running speed. A value of 1.0 means the speed
   * is unchanged
   */
  sprint_speed_multiplier?: number;

  /**
   * @remarks
   * Multiplier for the walking speed. A value of 1.0 means the speed
   * is unchanged
   */
  walk_speed_multiplier?: number;

}