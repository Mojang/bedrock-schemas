// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.offer_flower
 * 
 * minecraft:behavior.offer_flower Samples

Iron Golem - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json

"minecraft:behavior.offer_flower": {
  "filters": {
    "test": "is_daytime"
  },
  "priority": 5
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Offer Flower Behavior 
 * (minecraft:behavior.offer_flower)
 * Allows the mob to offer a flower to another mob with the
 * minecraft:take_flower behavior.
 * Note: Requires a flower item to be held by the entity.
 */
export default interface MinecraftBehaviorOfferFlower {

  /**
   * @remarks
   * Percent chance that the mob will start this goal from 0.0 to
   * 1.0 (where 1.0 = 100%).
   */
  chance_to_start?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Conditions that need to be met for the behavior to start.
   * 
   * Sample Values:
   * Iron Golem: {"test":"is_daytime"}
   *
   */
  filters?: MinecraftBehaviorOfferFlowerFilters;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the Y-axis, this entity can
   * rotate its head while trying to look at the target.
   */
  max_head_rotation_y?: number;

  /**
   * @remarks
   * The max amount of time (in seconds) that the mob will offer the
   * flower for before exiting the Goal.
   */
  max_offer_flower_duration?: number;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the X-axis, this entity can
   * rotate while trying to look at the target.
   */
  max_rotation_x?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Iron Golem: 5
   *
   */
  priority?: number;

  /**
   * @remarks
   * The dimensions of the AABB used to search for a potential mob to
   * offer flower to.
   */
  search_area?: number[];

}


export enum MinecraftBehaviorOfferFlowerControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorOfferFlowerFilters {

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