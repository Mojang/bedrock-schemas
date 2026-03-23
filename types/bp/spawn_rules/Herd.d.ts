// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:herd
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Herd (Herd)
 * Configures group spawning behavior with min/max herd sizes. Allows
 * running events on the first N entities spawned (initial_event) or
 * after skipping M entities (event). Common for pack animals like
 * wolves or swarm mobs like silverfish.
 */
export default interface Herd {

  /**
   * @remarks
   * An event to run after 'event_skip_count' number of entities in
   * the group have spawned
   */
  event?: string;

  /**
   * @remarks
   * Number of entities spawned in the group to skip before running the
   * event
   */
  event_skip_count?: number;

  /**
   * @remarks
   * Event run for the first 'initial_event_count' number of the
   * group are placed.
   */
  initial_event?: string;

  /**
   * @remarks
   * Number of times that 'initial_event' can run
   */
  initial_event_count?: number;

  /**
   * @remarks
   * Maximum number of entities in this group to attempt to spawn
   */
  max?: number;

  /**
   * @remarks
   * Minimum number of entities in this group to attempt to spawn
   */
  min?: number;

}