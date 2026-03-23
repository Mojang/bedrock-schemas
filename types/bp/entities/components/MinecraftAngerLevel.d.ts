// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:anger_level
 * 
 * minecraft:anger_level Samples

Warden - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json

"minecraft:anger_level": {
  "angry_threshold": 80,
  "angry_boost": 20,
  "anger_decrement_interval": 1,
  "default_annoyingness": 35,
  "default_projectile_annoyingness": 10,
  "max_anger": 150,
  "on_increase_sounds": [
    {
      "condition": "query.anger_level(this) >= 40",
      "sound": "listening_angry"
    },
    {
      "condition": "query.anger_level(this) >= 0",
      "sound": "listening"
    }
  ],
  "nuisance_filter": {
    "all_of": [
      {
        "operator": "not",
        "test": "is_family",
        "subject": "other",
        "value": "warden"
      },
      {
        "operator": "not",
        "test": "is_family",
        "subject": "other",
        "value": "inanimate"
      }
    ]
  },
  "remove_targets_below_angry_threshold": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Anger Level (minecraft:anger_level)
 * Compels the entity to track anger towards a set of 
 * nuisances.
 */
export default interface MinecraftAngerLevel {

  /**
   * @remarks
   * Anger level will decay over time. Defines how often anger towards
   * all nuisances will decrease by one.
   * 
   * Sample Values:
   * Warden: 1
   *
   */
  anger_decrement_interval?: number;

  /**
   * @remarks
   * Anger boost applied to angry threshold when mob gets angry
   * 
   * Sample Values:
   * Warden: 20
   *
   */
  angry_boost?: number;

  /**
   * @remarks
   * Threshold that define when the mob is considered angry at a
   * nuisance
   * 
   * Sample Values:
   * Warden: 80
   *
   */
  angry_threshold?: number;

  /**
   * @remarks
   * If set, other entities of the same entity definition within the
   * broadcastRange will also become angry
   */
  broadcast_anger?: boolean;

  /**
   * @remarks
   * If set, other entities of the same entity definition within the
   * broadcastRange will also become angry whenever this mob 
   * attacks
   */
  broadcast_anger_on_attack?: boolean;

  /**
   * @remarks
   * Conditions that make this entry in the list valid
   */
  broadcast_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Distance in blocks within which other entities of the same entity
   * type will become angry
   */
  broadcast_range?: number;

  /**
   * @remarks
   * A list of entity families to broadcast anger to
   */
  broadcast_targets?: string[];

  /**
   * @remarks
   * Event to fire when this entity is calmed down
   */
  calm_event?: string;

  /**
   * @remarks
   * The default amount of annoyingness for any given nuisance. Specifies
   * how much to raise anger level on each provocation.
   * 
   * Sample Values:
   * Warden: 35
   *
   */
  default_annoyingness?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Warden: 10
   *
   */
  default_projectile_annoyingness?: number;

  /**
   * @remarks
   * The amount of time in seconds that the entity will be angry.
   */
  duration?: number;

  /**
   * @remarks
   * Variance in seconds added to the duration [-delta, delta].
   */
  duration_delta?: number;

  /**
   * @remarks
   * Filter out mob types that it should not attack while angry (other
   * Piglins)
   */
  filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The maximum anger level that can be reached. Applies to any
   * nuisance
   * 
   * Sample Values:
   * Warden: 150
   *
   */
  max_anger?: number;

  /**
   * @remarks
   * Filter that is applied to determine if a mob can be a 
   * nuisance
   * 
   * Sample Values:
   * Warden: {"all_of":[{"operator":"not","test":"is_family","subject":"other","value":"warden"},{"operator":"not","test":"is_family","subject":"other","value":"inanimate"}]}
   *
   */
  nuisance_filter?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Sounds to play when the entity is getting provoked. Evaluated in
   * order. First matching condition wins
   * 
   * Sample Values:
   * Warden: [{"condition":"query.anger_level(this) >= 40","sound":"listening_angry"},{"condition":"query.anger_level(this) >= 0","sound":"listening"}]
   *
   */
  on_increase_sounds?: MinecraftAngerLevelOnIncreaseSounds[];

  /**
   * @remarks
   * Defines if the mob should remove target if it falls below 'angry'
   * threshold
   * 
   * Sample Values:
   * Warden: true
   *
   */
  remove_targets_below_angry_threshold?: boolean;

  /**
   * @remarks
   * Anger boost applied to angry threshold when the entity gets
   * angry.
   */
  sound_interval?: number[];

}


/**
 * Sounds to play when the entity is getting provoked. Evaluated in
 * order. First matching condition wins.
 */
export interface MinecraftAngerLevelOnIncreaseSounds {

  /**
   * @remarks
   * A Molang expression describing under which conditions to play
   * this sound, given that the entity was provoked
   */
  condition?: string;

  /**
   * @remarks
   * The sound to play
   */
  sound?: string;

}