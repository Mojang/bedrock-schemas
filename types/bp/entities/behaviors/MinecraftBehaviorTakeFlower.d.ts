// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.take_flower
 * 
 * minecraft:behavior.take_flower Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Take Flower Behavior (minecraft:behavior.take_flower)
 * Allows the mob to accept flowers from another mob with the
 * minecraft:offer_flower behavior.
 */
export default interface MinecraftBehaviorTakeFlower {

  control_flags?: string[];

  /**
   * @remarks
   * Conditions that need to be met for the behavior to start.
   */
  filters?: MinecraftBehaviorTakeFlowerFilters;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the Y-axis, this entity can
   * rotate its head while trying to look at the target.
   */
  max_head_rotation_y?: number;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the X-axis, this entity can
   * rotate while trying to look at the target.
   */
  max_rotation_x?: number;

  /**
   * @remarks
   * The maximum amount of time (in seconds) for the mob to randomly wait
   * for before taking the flower.
   */
  max_wait_time?: number;

  /**
   * @remarks
   * Minimum distance (in blocks) for the entity to be considered having
   * reached its target.
   */
  min_distance_to_target?: number;

  /**
   * @remarks
   * The minimum amount of time (in seconds) for the mob to randomly wait
   * for before taking the flower.
   */
  min_wait_time?: number;

  /**
   * @remarks
   * Event triggered when the entity takes a flower from another 
   * entity.
   */
  on_take_flower?: MinecraftBehaviorTakeFlowerOnTakeFlower;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The dimensions of the AABB used to search for a potential mob to
   * take a flower from.
   */
  search_area?: number[];

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI 
   * Goal.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorTakeFlowerControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorTakeFlowerFilters {

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


/**
 * Entity ActorDefinitionTrigger (ActorDefinitionTrigger)
 * Triggers an entity event when specified conditions are met.
 * Events activate component groups that change entity
 * behavior—transforming villagers into zombie villagers, switching mobs
 * to aggressive mode, or triggering growth stages. Combine with
 * filters to create conditional state machines that respond to
 * gameplay.
 */
export interface MinecraftBehaviorTakeFlowerOnTakeFlower {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorTakeFlowerOnTakeFlowerFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorTakeFlowerOnTakeFlowerFilters {

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


export enum MinecraftBehaviorTakeFlowerOnTakeFlowerTarget {
  baby = `baby`,
  block = `block`,
  damager = `damager`,
  holder = `holder`,
  item = `item`,
  other = `other`,
  parent = `parent`,
  player = `player`,
  self = `self`,
  target = `target`
}