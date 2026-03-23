// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:placement
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Placement (Placement)
 * Placement rule defintions.
 */
export default interface Placement {

  /**
   * @remarks
   * Defines the heightmap filter for initial entity placement during
   * chunk loading.
   */
  heightmap?: string;

  /**
   * @remarks
   * Checks for obstructions that might prevent entity spawning.
   */
  spawn_obstruction_predicate?: string;

  /**
   * @remarks
   * Determines if an entity is valid to spawn based on specific
   * conditions.
   */
  spawn_predicate?: string;

  /**
   * @remarks
   * Specifies the environment where the entity can spawn (e.g., on
   * ground, in water, etc.).
   */
  type?: string;

}