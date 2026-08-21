// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:pushable_by_entity
 * 
 * minecraft:pushable_by_entity Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:pushable_by_entity": {}


Boat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json

"minecraft:pushable_by_entity": {
  "presets": [
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "sulfur_cube"
          },
          {
            "test": "enum_property",
            "subject": "other",
            "domain": "minecraft:sulfur_cube_archetype",
            "operator": "not",
            "value": "none"
          },
          {
            "test": "is_controlling_passenger_family",
            "subject": "self",
            "value": "player"
          }
        ]
      },
      "push_mode": "none"
    },
    {
      "push_mode": "legacy_boat",
      "strength_multiplier": 0.1,
      "min_distance": 0.55,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Pushable By Entity (minecraft:pushable_by_entity)
 * Allows an entity to be pushed by other entities.
 * Note: Added in 1.26.10 as part of the split of
 * `minecraft:pushable` into `minecraft:pushable_by_block` (pistons and
 * Shulker Boxes) and `minecraft:pushable_by_entity` (other entities). The
 * legacy `minecraft:pushable` component is no longer parsed.
 * Note: Released out of beta in format version 1.26.30. The
 * `presets` field replaces the previous flat property layout; the
 * preset field `max_distance` was renamed from
 * `kick_distance_threshold`.
 */
export default interface MinecraftPushableByEntity {

  /**
   * @remarks
   * Defines how this entity behaves when pushed by another entity. The
   * first preset whose "filter" conditions are met will be applied; if
   * none match, a default configuration is used instead.
   * 
   * Sample Values:
   * Boat: [{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"sulfur_cube"},{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","operator":"not","value":"none"},{"test":"is_controlling_passenger_family","subject":"self","value":"player"}]},"push_mode":"none"},{"push_mode":"legacy_boat","strength_multiplier":0.1,"min_distance":0.55,"push_scale_self":0.5,"push_scale_other":0.25}]
   *
   */
  presets?: MinecraftPushableByEntityPresets[];

}


/**
 * Entity PushableByEntityPreset (PushableByEntityPreset)
 */
export interface MinecraftPushableByEntityPresets {

  /**
   * @remarks
   * Conditions that must be met for this preset to be applied.
   */
  filters?: MinecraftPushableByEntityPresetsFilters;

  /**
   * @remarks
   * Multiplier applied to the pushing entity's movement speed to
   * determine kick force. Only used when push_mode is "ball".
   */
  kick_speed_scale?: number;

  /**
   * @remarks
   * Maximum horizontal distance between the center of the pushed entity
   * and the collision of the pushing entity for push forces to be
   * applied. Entities further apart than this will not push each
   * other.
   */
  max_distance?: number;

  /**
   * @remarks
   * Maximum speed the entity can be pushed back at, regardless of
   * how fast the pushing entity is moving. Only used when push_mode is
   * "ball".
   */
  max_kick_speed?: number;

  /**
   * @remarks
   * Minimum horizontal distance between the centers of the two
   * entities for push forces to be applied. Entities closer than this
   * will not push each other.
   */
  min_distance?: number;

  /**
   * @remarks
   * Minimum speed the the entity will be pushed back at, regardless of
   * how slowly the pushing entity is moving. Only used when push_mode is
   * "ball".
   */
  min_kick_speed?: number;

  /**
   * @remarks
   * If the "pushed_by_player" sound should be played when the entity is
   * pushed by any other entity (despite the sound name).
   */
  play_sound?: boolean;

  /**
   * @remarks
   * Cooldown in seconds between sounds. A lower number results in
   * more sounds.
   */
  play_sound_cooldown_in_seconds?: number;

  /**
   * @remarks
   * Minimum change of velocity needed to trigger the push sound. A
   * lower value means higher sensitivity.
   */
  play_sound_impulse_threshold?: number;

  /**
   * @remarks
   * Defines the type of push vector calculation applied to the
   * entity:
- "none": The entity cannot be pushed.
- "default": Standard
   * push calculations used by most entities.
- "legacy_boat": Legacy
   * push calculations historically used by boats. Includes dampened
   * forces and sneak-based cancellation.
- "legacy_minecart": Legacy
   * push calculations historically used by minecarts. Includes
   * alignment-based collision handling and velocity averaging.- "ball":
   * Push calculation resulting in a behavior similar to kicking a
   * ball. The entity is propelled in the direction of the pusher’s
   * movement, with force scaled by their speed.
   */
  push_mode?: string;

  /**
   * @remarks
   * Scales how much push force this entity applies to the other entity
   * when colliding. A value of 1.0 applies full force, 0.5 applies 
   * half.
   */
  push_scale_other?: number;

  /**
   * @remarks
   * Scales how much this entity pushes itself away when colliding with
   * another entity. A value of 1.0 applies full force, 0.5 applies 
   * half.
   */
  push_scale_self?: number;

  /**
   * @remarks
   * When true, entities will not push each other unless their
   * collision boxes overlap.
   */
  require_collision_overlap?: boolean;

  /**
   * @remarks
   * Multiplier applied to the push strength. Higher values result in
   * stronger pushes.
   */
  strength_multiplier?: number;

  /**
   * @remarks
   * Multiplier for the upward force applied when the entity is
   * pushed while on the ground. A value of 0 keeps the entity flat.
   * Only used when push_mode is "ball".
   */
  vertical_kick_multiplier?: number;

}


/**
 * Filters (filters)
 */
export interface MinecraftPushableByEntityPresetsFilters {

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


export enum MinecraftPushableByEntityPresetsPushMode {
  ball = `ball`,
  default = `default`,
  legacyBoat = `legacy_boat`,
  legacyMinecart = `legacy_minecart`,
  none = `none`
}