// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:rideable
 * 
 * minecraft:rideable Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_undead"
  ],
  "seats": {
    "position": [
      0,
      0.48,
      0
    ]
  }
}


Cow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json

 * At /minecraft:entity/component_groups/minecraft:cow_baby/minecraft:rideable/: 
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_undead"
  ],
  "seats": {
    "position": [
      0,
      1,
      0
    ]
  }
}

 * At /minecraft:entity/component_groups/minecraft:cow_adult/minecraft:rideable/: 
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_undead"
  ],
  "seats": {
    "position": [
      0,
      1.15,
      0
    ]
  }
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

 * At /minecraft:entity/component_groups/minecraft:llama_wild/minecraft:rideable/: 
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "player"
  ],
  "interact_text": "action.interact.mount",
  "seats": {
    "position": [
      0,
      1.17,
      -0.3
    ]
  }
}

 * At /minecraft:entity/component_groups/minecraft:llama_tamed/minecraft:rideable/: 
"minecraft:rideable": {
  "seat_count": 1,
  "crouching_skip_interact": true,
  "family_types": [
    "player"
  ],
  "interact_text": "action.interact.ride.horse",
  "seats": {
    "position": [
      0,
      1.17,
      -0.3
    ]
  }
}


Minecart - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/minecart.json

"minecraft:rideable": {
  "interact_text": "action.interact.ride.minecart",
  "pull_in_entities": true,
  "seat_count": 1,
  "seats": {
    "position": [
      0,
      -0.2,
      0
    ]
  }
}


Pig - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json

 * At /minecraft:entity/component_groups/minecraft:pig_unsaddled/minecraft:rideable/: 
"minecraft:rideable": {
  "seat_count": 1,
  "family_types": [
    "baby_undead"
  ],
  "seats": {
    "position": [
      0,
      0.7,
      0
    ]
  }
}

 * At /minecraft:entity/component_groups/minecraft:pig_saddled/minecraft:rideable/: 
"minecraft:rideable": {
  "seat_count": 1,
  "interact_text": "action.interact.ride.horse",
  "family_types": [
    "player"
  ],
  "seats": {
    "position": [
      0,
      0.63,
      0
    ]
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Rideable (minecraft:rideable)
 * This entity can be ridden.
 */
export default interface MinecraftRideable {

  /**
   * @remarks
   * The seat that designates the driver of the entity. Entities with
   * the "minecraft:behavior.controlled_by_player" goal ignore this
   * field and give control to any player in any seat.
   */
  controlling_seat?: number;

  /**
   * @remarks
   * If true, this entity can't be interacted with if the entity
   * interacting with it is crouching.
   * 
   * Sample Values:
   * Llama: true
   *
   */
  crouching_skip_interact?: boolean;

  /**
   * @remarks
   * Defines where riders are placed when dismounting this entity:
-
   * "default", riders are placed on a valid ground position around the
   * entity, or at the center of the entity's collision box if none is
   * found.
- "on_top_center", riders are placed at the center of
   * the top of the entity's collision box.
   */
  dismount_mode?: string;

  /**
   * @remarks
   * List of entities that can ride this entity.
   * 
   * Sample Values:
   * Chicken: ["baby_undead"]
   *
   *
   * Llama: ["player"]
   *
   */
  family_types?: string[];

  /**
   * @remarks
   * The text to display when the player can interact with the entity
   * when playing with touch-screen controls.
   * 
   * Sample Values:
   * Llama: "action.interact.mount", "action.interact.ride.horse"
   *
   * Minecart: "action.interact.ride.minecart"
   *
   */
  interact_text?: string;

  /**
   * @remarks
   * Event to execute on the owner entity when an entity starts riding
   * it.
   */
  on_rider_enter_event?: string;

  /**
   * @remarks
   * Event to execute on the owner entity when an entity stops riding
   * it.
   */
  on_rider_exit_event?: string;

  /**
   * @remarks
   * The max width a mob can have to be a rider. A value of 0
   * ignores this parameter.
   */
  passenger_max_width?: number;

  /**
   * @remarks
   * This field may exist in old data but isn't used by
   * "minecraft:rideable".
   */
  priority?: number;

  /**
   * @remarks
   * If true, this entity will pull entities matching the specified
   * "family_types" into any available seats. Entities that are
   * leashed will only be pulled in if their distance to their leash
   * holder is less than the "hard_distance" defined in their own
   * "minecraft:leashable" component.
   * 
   * Sample Values:
   * Minecart: true
   *
   */
  pull_in_entities?: boolean;

  pulls_in_entities?: boolean;

  /**
   * @remarks
   * If true, this entity will be picked when looked at by the 
   * rider.
   */
  rider_can_interact?: boolean;

  /**
   * @remarks
   * The number of entities that can ride this entity at the same
   * time.
   * 
   * Sample Values:
   * Chicken: 1
   *
   *
   */
  seat_count?: number;

  /**
   * @remarks
   * The list of positions and number of riders for each position for
   * entities riding this entity.
   * 
   * Sample Values:
   * Chicken: {"position":[0,0.48,0]}
   *
   * Cow: {"position":[0,1,0]}, {"position":[0,1.15,0]}
   *
   */
  seats?: MinecraftRideableSeats[];

}


export enum MinecraftRideableDismountMode {
  default = `default`,
  onTopCenter = `on_top_center`
}


/**
 */
export interface MinecraftRideableSeats {

  camera_relax_distance_smoothing?: string;

  /**
   * @remarks
   * Angle in degrees to rotate the rider by. Can be a number or a
   * Molang expression.
   */
  lock_rider_rotation?: string;

  /**
   * @remarks
   * Offset to rotate riders by. Can be a number or a Molang 
   * expression.
   */
  rotate_rider_by?: string;

  third_person_camera_radius?: string;

}