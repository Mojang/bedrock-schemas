// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.hide
 * 
 * minecraft:behavior.hide Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Hide Behavior (minecraft:behavior.hide)
 * Allows a mob with the hide component to attempt to move to -
 * and hide at - an owned or nearby POI.
 * Note: Requires a point of interest to be set in order to work
 * properly.
 */
export default interface MinecraftBehaviorHide {

  control_flags?: string[];

  /**
   * @remarks
   * Amount of time in seconds that the mob reacts.
   */
  duration?: number;

  /**
   * @remarks
   * Tells the goal what POI type it should be looking for
   */
  poi_type?: string;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * The cooldown time in seconds before the goal can be reused after a
   * internal failure or timeout condition.
   */
  timeout_cooldown?: number;

}


export enum MinecraftBehaviorHideControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


export enum MinecraftBehaviorHidePoiType {
  bed = `bed`,
  jobsite = `jobsite`,
  meetingArea = `meeting_area`
}