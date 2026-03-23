// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.drop_item_for
 * 
 * minecraft:behavior.drop_item_for Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Drop Item For Behavior 
 * (minecraft:behavior.drop_item_for)
 * Allows the entity to move toward a target, and drop an item near
 * the target.
 */
export default interface MinecraftBehaviorDropItemFor {

  control_flags?: string[];

  /**
   * @remarks
   * Total time that the goal is on cooldown before it can be used
   * again.
   */
  cooldown?: number;

  /**
   * @remarks
   * The percent chance the entity will drop an item when using this
   * goal.
   */
  drop_item_chance?: number;

  /**
   * @remarks
   * The list of conditions another entity must meet to be a valid
   * target to drop an item for.
   */
  entity_types?: object[];

  /**
   * @remarks
   * Distance in blocks within the mob considers it has reached the
   * goal. This is the "wiggle room" to stop the AI from bouncing back
   * and forth trying to reach a specific spot.
   */
  goal_radius?: number;

  /**
   * @remarks
   * The loot table that contains the possible loot the entity can
   * drop with this goal.
   */
  loot_table?: string;

  /**
   * @remarks
   * The maximum height the entities head will look at when dropping the
   * item. The entity will always be looking at its target.
   */
  max_head_look_at_height?: number;

  /**
   * @remarks
   * If the target position is farther away than this distance on
   * any tick, the entity will teleport to the target position.
   */
  minimum_teleport_distance?: number;

  /**
   * @remarks
   * The preferred distance the entity tries to be from the target it
   * is dropping an item for.
   */
  offering_distance?: number;

  /**
   * @remarks
   * The event to trigger when the entity attempts to drop an 
   * item.
   */
  on_drop_attempt?: MinecraftBehaviorDropItemForOnDropAttempt;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * The number of randomly selected blocks each tick that the mob
   * will check within its search range and height for a valid block to
   * move to. A value of 0 will have the mob check every block within
   * range in one tick.
   */
  search_count?: number;

  /**
   * @remarks
   * The height in blocks the entity will search within to find a
   * valid target position.
   */
  search_height?: number;

  /**
   * @remarks
   * The distance in blocks the entity will search within to find a
   * valid target position.
   */
  search_range?: number;

  /**
   * @remarks
   * The numbers of seconds that will pass before the dropped entity can
   * be picked up from the ground.
   */
  seconds_before_pickup?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * The range in blocks within which the entity searches to find a
   * target to drop an item for.
   */
  target_range?: number[];

  /**
   * @remarks
   * When the entity teleports, offset the teleport position by this
   * many blocks in the X, Y, and Z coordinate.
   */
  teleport_offset?: number[];

  /**
   * @remarks
   * The valid times of day that this goal can be used. For
   * reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and
   * sunrise is 0.75, and back to noon for 1.0.
   */
  time_of_day_range?: MinecraftBehaviorDropItemForTimeOfDayRange;

}


export enum MinecraftBehaviorDropItemForControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
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
export interface MinecraftBehaviorDropItemForOnDropAttempt {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorDropItemForOnDropAttemptFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorDropItemForOnDropAttemptFilters {

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


export enum MinecraftBehaviorDropItemForOnDropAttemptTarget {
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


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorDropItemForTimeOfDayRange {

  max?: number;

  min?: number;

}