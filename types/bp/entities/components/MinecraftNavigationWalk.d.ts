// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:navigation.walk
 * 
 * minecraft:navigation.walk Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:navigation.walk": {
  "avoid_damage_blocks": true,
  "avoid_water": true,
  "can_path_over_water": true,
  "using_door_annotation": true
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:navigation.walk": {
  "avoid_sun": true,
  "is_amphibious": true,
  "avoid_water": true
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:navigation.walk": {
  "blocks_to_avoid": [
    {
      "tags": "query.any_tag('trapdoors')"
    }
  ],
  "using_door_annotation": true
}


Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "avoid_damage_blocks": true
}


Cow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json

"minecraft:navigation.walk": {
  "can_path_over_water": true,
  "avoid_water": true,
  "avoid_damage_blocks": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Walk navigation (minecraft:navigation.walk)
 * Walking style of the mob.
 */
export default interface MinecraftNavigationWalk {

  /**
   * @remarks
   * Tells the pathfinder to avoid blocks that cause damage when
   * finding a path
   * 
   * Sample Values:
   * Blaze: true
   *
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
   * 
   * Sample Values:
   * Bogged: true
   *
   */
  avoid_sun?: boolean;

  /**
   * @remarks
   * Tells the pathfinder to avoid water when creating a path
   * 
   * Sample Values:
   * Blaze: true
   *
   *
   */
  avoid_water?: boolean;

  /**
   * @remarks
   * List of block descriptors that the pathfinder should avoid. Items
   * can be block identifier strings or objects with name/tags 
   * properties.
   * 
   * Sample Values:
   * Breeze: [{"tags":"query.any_tag('trapdoors')"}]
   *
   */
  blocks_to_avoid?: string[];

  /**
   * @remarks
   * Tells the pathfinder whether or not it can jump out of water (like
   * a dolphin)
   */
  can_breach?: boolean;

  /**
   * @remarks
   * Tells the pathfinder that it can path through a closed door and
   * break it
   */
  can_break_doors?: boolean;

  can_float?: boolean;

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
   * Blaze: true
   *
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
   */
  can_swim?: boolean;

  /**
   * @remarks
   * Tells the pathfinder whether or not it can walk on the ground
   * outside water
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
   * Bogged: true
   *
   */
  is_amphibious?: boolean;

  /**
   * @remarks
   * 
   * Sample Values:
   * Blaze: true
   *
   *
   */
  using_door_annotation?: string;

}