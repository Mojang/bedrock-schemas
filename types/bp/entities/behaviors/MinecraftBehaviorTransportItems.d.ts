// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.transport_items
 * 
 * minecraft:behavior.transport_items Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Transport Items Behavior 
 * (minecraft:behavior.transport_items)
 * A behavior that enables a mob to transport items from and to
 * containers.
 */
export default interface MinecraftBehaviorTransportItems {

  /**
   * @remarks
   * When true the mob will wait until a container is not used by
   * other entities before starting to interact with it.
   */
  allow_simultaneous_interaction?: boolean;

  /**
   * @remarks
   * A list of item descriptors that are the only items the mob is
   * allowed to transport. If this and "disallowed_items" are both
   * empty, then all items are allowed. If non-empty "disallowed_items" must
   * be empty.
   */
  allowed_items?: string;

  control_flags?: string[];

  /**
   * @remarks
   * A list of block descriptors that should be container types to
   * put items in. Can be simple block identifier strings or objects with
   * name, states, and tags.
   */
  destination_container_types?: string[];

  /**
   * @remarks
   * A list of item descriptors that are the mob is not allowed to
   * transport. If non-empty "allowed_items" must be empty.
   */
  disallowed_items?: string;

  /**
   * @remarks
   * When the mob cannot find a container in which to get or put
   * items, the goal will stop being active for this amount of time in
   * seconds.
   */
  idle_cooldown?: number;

  /**
   * @remarks
   * How long the mob will wait after spawning or getting the goal
   * added before the goal can start.
   */
  initial_cooldown?: number;

  /**
   * @remarks
   * The amount of time in seconds spent interacting with the
   * containers.
   */
  interaction_time?: number;

  /**
   * @remarks
   * The maximum stack size that the mob will try to take from a
   * container.
   */
  max_stack_size?: number;

  /**
   * @remarks
   * The maximum number of containers that the mob will try to
   * take/place items from before going on cooldown and starting 
   * over.
   */
  max_visited_containers?: number;

  /**
   * @remarks
   * The strategy to use for placing the transported item. Any -
   * always place if there is room, With matching - place if there is
   * a matching item in the container, With matching or empty -
   * like With matching but will also place in empty containers
   */
  place_strategy?: string;

  priority?: number;

  /**
   * @remarks
   * The maximum search distance horizontally and vertically at
   * which to find containers for taking or placing items.
   */
  search_distance?: number[];

  /**
   * @remarks
   * The strategy to use for finding source or destination containers. The
   * nearest valid container or a random valid container in 
   * range.
   */
  search_strategy?: string;

  /**
   * @remarks
   * A list of block descriptors that should be container types to
   * take items from. Can be simple block identifier strings or
   * objects with name, states, and tags.
   */
  source_container_types?: string[];

}


export enum MinecraftBehaviorTransportItemsControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Destination Container Types (destination_container_types)
 */
export interface MinecraftBehaviorTransportItemsDestinationContainerTypes {

  name?: string;

  states?: number;

  tags?: string;

}


export enum MinecraftBehaviorTransportItemsPlaceStrategy {
  any = `any`,
  withMatching = `with_matching`,
  withMatchingOrEmpty = `with_matching_or_empty`
}


export enum MinecraftBehaviorTransportItemsSearchStrategy {
  nearest = `nearest`,
  random = `random`
}


/**
 * Source Container Types (source_container_types)
 */
export interface MinecraftBehaviorTransportItemsSourceContainerTypes {

  name?: string;

  states?: number;

  tags?: string;

}