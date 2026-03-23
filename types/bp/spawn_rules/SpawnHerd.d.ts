// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_herd
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Herd (Spawn Herd)
 * Configures group spawning behavior, including minimum and
 * maximum herd size. Mobs like wolves, chickens, and zombies spawn
 * in groups rather than individually. Also allows running events on
 * the first N spawns or after M spawns.
 */
export default interface SpawnHerd {

  /**
   * @remarks
   * An event to run after M number of the herd have spawned
   */
  event?: string;

  /**
   * @remarks
   * Number of the herd to skip before running the event
   */
  event_skip_count?: number;

  /**
   * @remarks
   * Event run for the first N of the herd are placed.
   */
  initial_event?: string;

  /**
   * @remarks
   * Number of times that the initial event will run
   */
  initial_event_count?: number;

  /**
   * @remarks
   * Maximum number in this group to attempt to spawn
   */
  max_size?: number;

  /**
   * @remarks
   * Minimum number in this group to attempt to spawn
   */
  min_size?: number;

}