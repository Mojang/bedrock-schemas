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

Boat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json

"minecraft:pushable_by_entity": {
  "presets": [
    {
      "push_mode": "legacy_boat",
      "strength_multiplier": 0.1,
      "min_distance": 0.3,
      "push_scale_self": 0.5,
      "push_scale_other": 0.25
    }
  ]
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:pushable_by_entity": {}


Chest Minecart - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chest_minecart.json

"minecraft:pushable_by_entity": {
  "presets": [
    {
      "push_mode": "legacy_minecart",
      "strength_multiplier": 0.1,
      "min_distance": 0.0001,
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
 */
export default interface MinecraftPushableByEntity {

  /**
   * @remarks
   * Defines how this entity behaves when pushed by another entity. The
   * first preset whose "filter" conditions are met will be applied; if
   * none match, a default configuration is used instead.
   * 
   * Sample Values:
   * Boat: [{"push_mode":"legacy_boat","strength_multiplier":0.1,"min_distance":0.3,"push_scale_self":0.5,"push_scale_other":0.25}]
   *
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
   * Maximum horizontal distance at which another entity can kick this
   * entity. Only used when push_mode is "ball".
   */
  kick_distance_threshold?: number;

  /**
   * @remarks
   * Multiplier applied to the pushing entity's movement speed to
   * determine kick force. Only used when push_mode is "ball".
   */
  kick_speed_scale?: number;

  /**
   * @remarks
   * Maximum speed the ball can be kicked at, regardless of how fast
   * the pushing entity is moving. Only used when push_mode is
   * "ball".
   */
  max_kick_speed?: number;

  /**
   * @remarks
   * Minimum distance between two entities for push forces to be
   * applied. Entities closer than this will not push each other.
   */
  min_distance?: number;

  /**
   * @remarks
   * Minimum speed the ball will be kicked at, regardless of how
   * slowly the pushing entity is moving. Only used when push_mode is
   * "ball".
   */
  min_kick_speed?: number;

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
- "default": Standard push calculation used by most
   * entities.
- "legacy_boat": Legacy push calculation historically used
   * by boats. Includes dampened forces and sneak-based cancellation.
-
   * "legacy_minecart": Legacy push calculation historically used by
   * minecarts. Includes alignment-based collision handling and
   * velocity averaging.- "ball": Push calculation for ball-like entities.
   * The ball is kicked in the direction of the pushing entity's movement,
   * with force based on their movement speed.
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
   * Multiplier applied to the push strength. Higher values result in
   * stronger pushes.
   */
  strength_multiplier?: number;

  /**
   * @remarks
   * Multiplier for the upward force applied when the ball is kicked
   * while on the ground. A value of 0 keeps the ball flat. Only used
   * when push_mode is "ball".
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
  legacyMinecart = `legacy_minecart`
}