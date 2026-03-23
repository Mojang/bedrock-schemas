// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:despawn
 * 
 * minecraft:despawn Samples

Bat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json

"minecraft:despawn": {
  "despawn_from_distance": {}
}

 */

import * as jsoncommon from '../../../common';

/**
 * Despawn (minecraft:despawn)
 * Despawns the Actor when the despawn rules or optional filters
 * evaluate to true.
 */
export default interface MinecraftDespawn {

  /**
   * @remarks
   * Determines if "min_range_random_chance" is used in the standard
   * despawn rules
   */
  despawn_from_chance?: boolean;

  /**
   * @remarks
   * Specifies if the 'min_distance' and 'max_distance' are used in
   * the standard despawn rules.
   * 
   * Sample Values:
   * Bat: {}
   *
   *
   */
  despawn_from_distance?: MinecraftDespawnDespawnFromDistance;

  /**
   * @remarks
   * Determines if the "min_range_inactivity_timer" is used in the
   * standard despawn rules.
   */
  despawn_from_inactivity?: boolean;

  /**
   * @remarks
   * Determines if the mob is instantly despawned at the edge of
   * simulation distance in the standard despawn rules.
   */
  despawn_from_simulation_edge?: boolean;

  /**
   * @remarks
   * The list of conditions that must be satisfied before the Actor is
   * despawned. If a filter is defined then standard despawn rules are
   * ignored.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The amount of time in seconds that the mob must be inactive.
   */
  min_range_inactivity_timer?: number;

  /**
   * @remarks
   * A random chance between 1 and the given value.
   */
  min_range_random_chance?: number;

  /**
   * @remarks
   * If true, all entities linked to this entity in a child
   * relationship (eg. leashed) will also be despawned.
   */
  remove_child_entities?: boolean;

}


/**
 * Despawn From Distance (despawn_from_distance)
 */
export interface MinecraftDespawnDespawnFromDistance {

  /**
   * @remarks
   * Maximum distance for standard despawn rules to instantly despawn the
   * mob.
   */
  max_distance?: number;

  /**
   * @remarks
   * Minimum distance for standard despawn rules to try to despawn the
   * mob.
   */
  min_distance?: number;

}