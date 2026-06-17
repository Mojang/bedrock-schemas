// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.beg
 * 
 * minecraft:behavior.beg Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Beg Behavior (minecraft:behavior.beg)
 * Allows this mob to look at and follow the player that holds food
 * they like.
 */
export default interface MinecraftBehaviorBeg {

  control_flags?: string[];

  /**
   * @remarks
   * List of items that this mob likes
   */
  items?: string;

  /**
   * @remarks
   * Distance in blocks the mob will beg from
   */
  look_distance?: number;

  /**
   * @remarks
   * The range of time in seconds this mob will stare at the player
   * holding a food they like, begging for it
   */
  look_time?: MinecraftBehaviorBegLookTime;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


export enum MinecraftBehaviorBegControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item IntRange (IntRange)
 * Specifies an integer range between minimum and maximum values for
 * item properties requiring whole numbers. Used for stack count
 * variations, discrete charge levels, or quantity ranges in loot
 * tables. Ensures values stay within valid bounds for countable item
 * properties.
 */
export interface MinecraftBehaviorBegLookTime {

  max?: number;

  min?: number;

}