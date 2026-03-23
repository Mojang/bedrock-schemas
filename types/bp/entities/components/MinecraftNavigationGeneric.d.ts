// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:navigation.generic
 * 
 * minecraft:navigation.generic Samples

Elder Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/elder_guardian.json

"minecraft:navigation.generic": {
  "can_breach": true,
  "can_walk": false,
  "can_path_over_water": false,
  "can_swim": true,
  "is_amphibious": true,
  "using_door_annotation": true
}


Frog - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json

"minecraft:navigation.generic": {
  "avoid_damage_blocks": true,
  "can_path_over_water": true,
  "can_sink": false,
  "can_swim": true,
  "can_walk": true,
  "is_amphibious": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Generic Navigation (minecraft:navigation.generic)
 * Allows this entity to generate paths by walking, swimming, flying
 * and/or climbing around and jumping up and down a block.
 */
export default interface MinecraftNavigationGeneric {

  /**
   * @remarks
   * Tells the pathfinder to avoid blocks that cause damage when
   * finding a path
   * 
   * Sample Values:
   * Frog: true
   *
   */
  avoid_damage_blocks?: boolean;

  /**
   * @remarks
   * Tells the pathfinder to avoid portals (like nether portals) when
   * finding a path
   */
  avoid_portals?: boolean;

  /**
   * @remarks
   * Whether or not the pathfinder should avoid tiles that are
   * exposed to the sun when creating paths
   */
  avoid_sun?: boolean;

  /**
   * @remarks
   * Tells the pathfinder to avoid water when creating a path
   */
  avoid_water?: boolean;

  /**
   * @remarks
   * Tells the pathfinder which blocks to avoid when creating a
   * path
   */
  blocks_to_avoid?: string[];

  /**
   * @remarks
   * Tells the pathfinder whether or not it can jump out of water (like
   * a dolphin)
   * 
   * Sample Values:
   * Elder Guardian: true
   *
   *
   */
  can_breach?: boolean;

  /**
   * @remarks
   * Tells the pathfinder that it can path through a closed door and
   * break it
   */
  can_break_doors?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can jump up blocks
   */
  can_jump?: boolean;

  /**
   * @remarks
   * Tells the pathfinder that it can path through a closed door
   * assuming the AI will open the door
   */
  can_open_doors?: boolean;

  /**
   * @remarks
   * Tells the pathfinder that it can path through a closed iron door
   * assuming the AI will open the door
   */
  can_open_iron_doors?: boolean;

  /**
   * @remarks
   * Whether a path can be created through a door
   */
  can_pass_doors?: boolean;

  /**
   * @remarks
   * Tells the pathfinder that it can start pathing when in the 
   * air
   */
  can_path_from_air?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can travel on the surface of
   * the lava
   */
  can_path_over_lava?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can travel on the surface of
   * the water
   * 
   * Sample Values:
   * Frog: true
   *
   */
  can_path_over_water?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it will be pulled down by
   * gravity while in water
   */
  can_sink?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can path anywhere through
   * water and plays swimming animation along that path
   * 
   * Sample Values:
   * Elder Guardian: true
   *
   *
   */
  can_swim?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can walk on the ground
   * outside water
   * 
   * Sample Values:
   * Frog: true
   *
   */
  can_walk?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can travel in lava like
   * walking on ground
   */
  can_walk_in_lava?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can walk on the ground
   * underwater
   * 
   * Sample Values:
   * Elder Guardian: true
   *
   *
   */
  is_amphibious?: boolean;

  /**
   * @remarks
   * 
   * Sample Values:
   * Elder Guardian: true
   *
   *
   */
  using_door_annotation?: string;

}