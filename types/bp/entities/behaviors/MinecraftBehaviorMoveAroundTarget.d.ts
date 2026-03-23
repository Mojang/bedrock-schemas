// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_around_target
 * 
 * minecraft:behavior.move_around_target Samples

Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:behavior.move_around_target": {
  "destination_pos_spread_degrees": 360,
  "destination_position_range": [
    4,
    8
  ],
  "priority": 3,
  "filters": {
    "all_of": [
      {
        "test": "on_ground",
        "value": true
      },
      {
        "operator": "<=",
        "test": "target_distance",
        "subject": "self",
        "value": 24
      }
    ]
  },
  "movement_speed": 1.2
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Move Around Target Behavior
 * (minecraft:behavior.move_around_target)
 * Allows an entity to move around a target.If the entity is too
 * close(i.e.closer than destination range min and height difference
 * limit) it will try to move away from its target.If the entity is
 * too far away from its target it will try to move closer to a
 * random position within the destination range.A randomized amount of
 * those positions will be behind the target, and the spread can be
 * tweaked with 'destination_pos_spread_degrees'.
 */
export default interface MinecraftBehaviorMoveAroundTarget {

  control_flags?: string[];

  /**
   * @remarks
   * This angle (in degrees) is used for controlling the spread when
   * picking a destination position behind the target. A zero spread
   * angle means the destination position will be straight behind the
   * target with no variance. A 90 degree spread angle means the
   * destination position can be up to 45 degrees to the left and to
   * the right of the position straight behind the target's view
   * direction.
   * 
   * Sample Values:
   * Breeze: 360
   *
   */
  destination_pos_spread_degrees?: number;

  /**
   * @remarks
   * The range of distances from the target entity within which the
   * goal should look for a position to move the owner entity to.
   * 
   * Sample Values:
   * Breeze: [4,8]
   *
   */
  destination_position_range?: MinecraftBehaviorMoveAroundTargetDestinationPositionRange;

  /**
   * @remarks
   * Conditions that need to be met for the behavior to start.
   * 
   * Sample Values:
   * Breeze: {"all_of":[{"test":"on_ground","value":true},{"operator":"<=","test":"target_distance","subject":"self","value":24}]}
   *
   */
  filters?: MinecraftBehaviorMoveAroundTargetFilters;

  /**
   * @remarks
   * Distance in height (in blocks) between the owner entity and the
   * target has to be less than this value when owner checks if it
   * is too close and should move away from the target. This value
   * needs to be bigger than zero for the move away logic to
   * trigger.
   */
  height_difference_limit?: number;

  /**
   * @remarks
   * Horizontal search distance (in blocks) when searching for a
   * position to move away from target.
   */
  horizontal_search_distance?: number;

  /**
   * @remarks
   * The speed with which the entity should move to its target 
   * position.
   * 
   * Sample Values:
   * Breeze: 1.2
   *
   */
  movement_speed?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Breeze: 3
   *
   */
  priority?: number;

  /**
   * @remarks
   * Vertical search distance (in blocks) when searching for a
   * position to move away from target.
   */
  vertical_search_distance?: number;

}


export enum MinecraftBehaviorMoveAroundTargetControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorMoveAroundTargetDestinationPositionRange {

  max?: number;

  min?: number;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorMoveAroundTargetFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}