// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:looked_at
 * 
 * minecraft:looked_at Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Looked At (minecraft:looked_at)
 * Defines the behavior when another entity looks at the owner
 * entity.
 */
export default interface MinecraftLookedAt {

  /**
   * @remarks
   * Defines, in degrees, the width of the field of view for entities
   * looking at the owner entity. If "scale_fov_by_distance" is set
   * to true, this value corresponds to the field of view at a
   * distance of one block between the entities.
   */
  field_of_view?: number;

  /**
   * @remarks
   * Defines which entities are considered when searching for
   * entities looking at the owner entity.
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Limits the search to only the nearest Player that meets the
   * specified "filters" rather than all nearby entities.
   */
  find_players_only?: boolean;

  /**
   * @remarks
   * Defines the type of block shape used to check for line of sight
   * obstructions. Valid values: "outline", "collision",
   * "collision_for_camera".
   */
  line_of_sight_obstruction_type?: string;

  /**
   * @remarks
   * A list of locations on the owner entity towards which line of
   * sight checks are performed. At least one location must be
   * unobstructed for the entity to be considered as looked at.
   */
  look_at_locations?: string[];

  /**
   * @remarks
   * Specifies the range for the random number of seconds that must
   * pass before the owner entity can check again for entities looking at
   * it, after detecting an entity looking at it.
   */
  looked_at_cooldown?: number[];

  /**
   * @remarks
   * Defines the event to trigger when an entity is detected looking at
   * the owner entity.
   */
  looked_at_event?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Defines the minimum, continuous time the owner entity has to be
   * looked at before being considered as such. Defaults to 0 if not
   * explicitly specified.
   */
  min_looked_at_duration?: number;

  /**
   * @remarks
   * Defines the event to trigger when no entity is found looking at
   * the owner entity.
   */
  not_looked_at_event?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * When true, the field of view narrows as the distance between the
   * owner entity and the entity looking at it increases. This ensures
   * that the width of the view cone remains somewhat constant towards
   * the owner entity position, regardless of distance.
   */
  scale_fov_by_distance?: boolean;

  /**
   * @remarks
   * Maximum distance the owner entity will search for entities looking
   * at it.
   */
  search_radius?: number;

  /**
   * @remarks
   * Defines if and how the owner entity will set entities that are
   * looking at it as its combat targets. Valid values: 'never',
   * 'once_and_stop_scanning', 'once_and_keep_scanning'.
   */
  set_target?: string;

}


export enum MinecraftLookedAtSetTarget {
  never = `never`,
  onceAndStopScanning = `once_and_stop_scanning`,
  onceAndKeepScanning = `once_and_keep_scanning`
}