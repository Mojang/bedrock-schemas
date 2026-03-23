// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.hold_ground
 * 
 * minecraft:behavior.hold_ground Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Hold Ground Behavior (minecraft:behavior.hold_ground)
 * Compels an entity to stop at their current location, turn to
 * face a mob they are targeting, and react with an event.
 */
export default interface MinecraftBehaviorHoldGround {

  /**
   * @remarks
   * Whether to broadcast out the mob's target to other mobs of the
   * same type.
   */
  broadcast?: boolean;

  /**
   * @remarks
   * Range in blocks for how far to broadcast.
   */
  broadcast_range?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Minimum distance the target must be for the mob to run this 
   * goal.
   */
  min_radius?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Event to run when target is within the radius. This event is
   * broadcasted if broadcast is true.
   */
  within_radius_event?: string;

}


export enum MinecraftBehaviorHoldGroundControlFlags {
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
export interface MinecraftBehaviorHoldGroundWithinRadiusEvent {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorHoldGroundWithinRadiusEventFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorHoldGroundWithinRadiusEventFilters {

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


export enum MinecraftBehaviorHoldGroundWithinRadiusEventTarget {
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