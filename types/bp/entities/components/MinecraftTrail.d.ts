// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:trail
 * 
 * minecraft:trail Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Trail (minecraft:trail)
 * Causes an entity to leave a trail of blocks as it moves about the
 * world. Obeys Mob Griefing rules.
 */
export default interface MinecraftTrail {

  /**
   * @remarks
   * The type of block that is placed. Solid blocks cannot be placed at
   * the entity's position when offset is [0, 0, 0].
   */
  block_type?: string;

  /**
   * @remarks
   * Maximum horizontal distance from the center at which blocks can
   * be placed.
   */
  extent?: number;

  /**
   * @remarks
   * Offset from the entity's position used to determine where trail
   * blocks are placed and placement checks are applied, capped at
   * 16 blocks away. X and Z are relative to the entity's orientation and
   * rotate to its nearest cardinal facing; Y is a vertical 
   * offset.
   */
  offset?: number[];

  /**
   * @remarks
   * When true, trail blocks are only placed on ticks where the
   * bottom of the entity moves into a different block position, or
   * where the entity lands (goes from airborne to grounded). Standing
   * still or moving within the same block does not place blocks.
   * Defaults to false.
   */
  place_only_on_block_position_change?: boolean;

  /**
   * @remarks
   * Controls the checks applied at each trail block placement position
   * before placing the trail block. 'none' applies no placement checks,
   * 'block' applies block placement conditions, and 'standard' applies
   * standard block placement rules, including clearance from entities
   * that obblock placement.
   */
  placement_checks?: MinecraftTrailPlacementChecks;

  /**
   * @remarks
   * Conditions that must all be satisfied relative to the trail block
   * placement position. Block types within one condition are
   * alternatives. When omitted, defaults to [{ "y_offset": 0,
   * "block_types": ["minecraft:air"] }].
   */
  placement_conditions?: object[];

  /**
   * @remarks
   * One or more conditions that must be met in order to cause the
   * chosen block type to be placed.
   */
  placement_filter?: MinecraftTrailPlacementFilter;

  /**
   * @remarks
   * Controls the horizontal placement pattern. 'corners' places four
   * corner blocks, 'square' fills a square, and 'circle' fills a
   * circular disk. Defaults to 'corners'.
   */
  shape?: MinecraftTrailShape;

  /**
   * @remarks
   * Conditions that must be met for the trail block to be 
   * placed.
   */
  spawn_filter?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Offset from the entity's position where the trail block is
   * placed.
   */
  spawn_offset?: number[];

}


export enum MinecraftTrailPlacementChecks {
  block = `block`,
  none = `none`,
  standard = `standard`
}


/**
 * Placement Filter (placement_filter)
 */
export interface MinecraftTrailPlacementFilter {

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


export enum MinecraftTrailShape {
  circle = `circle`,
  corners = `corners`,
  square = `square`
}