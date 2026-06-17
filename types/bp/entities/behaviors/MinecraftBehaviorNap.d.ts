// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.nap
 * 
 * minecraft:behavior.nap Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Nap Behavior (minecraft:behavior.nap)
 * Allows mobs to occassionally stop and take a nap under certain
 * conditions.
 */
export default interface MinecraftBehaviorNap {

  /**
   * @remarks
   * Conditions that need to be met for the entity to nap.
   */
  can_nap_filters?: jsoncommon.MinecraftFilter;

  control_flags?: string[];

  /**
   * @remarks
   * Maximum time in seconds the mob has to wait before using the
   * goal again
   */
  cooldown_max?: number;

  /**
   * @remarks
   * Minimum time in seconds the mob has to wait before using the
   * goal again
   */
  cooldown_min?: number;

  /**
   * @remarks
   * The block distance in x and z that will be checked for mobs that
   * this mob detects
   */
  mob_detect_dist?: number;

  /**
   * @remarks
   * The block distance in y that will be checked for mobs that this
   * mob detects
   */
  mob_detect_height?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Filters for mobs that will not wake this entity from 
   * napping.
   */
  wake_mob_exceptions?: jsoncommon.MinecraftFilter;

}


/**
 * Can Nap Filters (can_nap_filters)
 */
export interface MinecraftBehaviorNapCanNapFilters {

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


export enum MinecraftBehaviorNapControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Wake Mob Exceptions (wake_mob_exceptions)
 */
export interface MinecraftBehaviorNapWakeMobExceptions {

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