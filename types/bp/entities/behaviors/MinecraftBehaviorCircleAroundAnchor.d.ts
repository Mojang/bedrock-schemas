// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.circle_around_anchor
 * 
 * minecraft:behavior.circle_around_anchor Samples

Phantom - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/phantom.json

"minecraft:behavior.circle_around_anchor": {
  "goal_radius": 1,
  "height_offset_range": {
    "min": -4,
    "max": 5
  },
  "height_above_target_range": {
    "min": 20,
    "max": 40
  },
  "priority": 3
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Circle Around Anchor Behavior
 * (minecraft:behavior.circle_around_anchor)
 * Causes an entity to circle around an anchor point placed near a
 * point or target.
 */
export default interface MinecraftBehaviorCircleAroundAnchor {

  /**
   * @remarks
   * Number of degrees to change this entity's facing by, when the
   * entity selects its next anchor point.
   */
  angle_change?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Maximum distance from the anchor-point in which this entity
   * considers itself to have reached the anchor point. This is to
   * prevent the entity from bouncing back and forth trying to reach a
   * specific spot.
   * 
   * Sample Values:
   * Phantom: 1
   *
   */
  goal_radius?: number;

  /**
   * @remarks
   * The number of blocks above the target that the next anchor point
   * can be set. This value is used only when the entity is tracking a
   * target.
   * 
   * Sample Values:
   * Phantom: {"min":20,"max":40}
   *
   */
  height_above_target_range?: MinecraftBehaviorCircleAroundAnchorHeightAboveTargetRange;

  /**
   * @remarks
   * Percent chance to determine how often to increase or decrease the
   * current height around the anchor point. 1 = 100%.
   * "height_change_chance" is deprecated and has been replaced with
   * "height_adjustment_chance".
   */
  height_adjustment_chance?: number;

  /**
   * @remarks
   * Vertical distance from the anchor point this entity must stay
   * within, upon a successful height adjustment.
   * 
   * Sample Values:
   * Phantom: {"min":-4,"max":5}
   *
   */
  height_offset_range?: MinecraftBehaviorCircleAroundAnchorHeightOffsetRange;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Phantom: 3
   *
   */
  priority?: number;

  /**
   * @remarks
   * Percent chance to determine how often to increase the size of
   * the current movement radius around the anchor point. 1 = 100%.
   * "radius_change_chance" is deprecated and has been replaced with
   * "radius_adjustment_chance".
   */
  radius_adjustment_chance?: number;

  /**
   * @remarks
   * The number of blocks to increase the current movement radius by,
   * upon successful "radius_adjustment_chance". If the current radius
   * increases over the range maximum, the current radius will be
   * set back to the range minimum and the entity will change between
   * clockwise and counter-clockwise movement.
   */
  radius_change?: number;

  /**
   * @remarks
   * Horizontal distance from the anchor point this entity must stay
   * within upon a successful radius adjustment.
   */
  radius_range?: MinecraftBehaviorCircleAroundAnchorRadiusRange;

  /**
   * @remarks
   * Multiplies the speed at which this entity travels to its next
   * desired position.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorCircleAroundAnchorControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorCircleAroundAnchorHeightAboveTargetRange {

  max?: number;

  min?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorCircleAroundAnchorHeightOffsetRange {

  max?: number;

  min?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorCircleAroundAnchorRadiusRange {

  max?: number;

  min?: number;

}