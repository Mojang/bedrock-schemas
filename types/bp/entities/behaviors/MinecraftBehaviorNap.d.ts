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
 * Nap Behavior (minecraft:behavior.nap)
 * Allows mobs to occassionally stop and take a nap under certain
 * conditions.
 */
export default interface MinecraftBehaviorNap {

  /**
   * @remarks
   * Conditions that need to be met for the entity to nap.
   */
  can_nap_filters?: jsoncommon.MinecraftFilter;

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