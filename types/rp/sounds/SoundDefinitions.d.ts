// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Sounds Documentation - minecraft:sound_definitions
 * 
 * minecraft:sound_definitions Samples

Sound Definitions - vanilla_data/resource_packs/vanilla_1.21.120/sounds/sound_definitions.json

 * At sound_definitions/mob.imitate.blaze: 
{
  "category": "neutral",
  "sounds": [
    {
      "name": "sounds/mob/blaze/breathe1",
      "volume": 0.2
    },
    {
      "name": "sounds/mob/blaze/breathe2",
      "volume": 0.2
    }
  ]
}

 * At sound_definitions/mob.imitate.bogged: 
{
  "category": "neutral",
  "sounds": [
    "sounds/mob/bogged/ambient1",
    "sounds/mob/bogged/ambient2",
    "sounds/mob/bogged/ambient3"
  ]
}

 */

import * as jsoncommon from '../../common';

/**
 * Sound Definitions (sound_definitions)
 * Defines sound events and their associated audio files. This file
 * maps sound event identifiers to one or more sound files that can
 * play when that event is triggered. Located at
 * sounds/sound_definitions.json in resource packs.
 */
export default interface SoundDefinitions {

  /**
   * @remarks
   * 
   * Sample Values:
   * Sound Definitions: "neutral"
   *
   */
  category?: string;

  /**
   * @remarks
   * The format version of the sound definitions file. Should be
   * '1.14.0' or higher.
   */
  format_version: string | number[];

  /**
   * @remarks
   * A collection of sound event definitions, where each key is a
   * sound event identifier (e.g., 'mob.zombie.say') and the value
   * defines which sounds can play for that event.
   */
  sound_definitions: { [key: string]: SoundDefinitionsSoundDefinitions };

  /**
   * @remarks
   * 
   * Sample Values:
   * Sound Definitions: [{"name":"sounds/mob/blaze/breathe1","volume":0.2},{"name":"sounds/mob/blaze/breathe2","volume":0.2}], ["sounds/mob/bogged/ambient1","sounds/mob/bogged/ambient2","sounds/mob/bogged/ambient3"]
   *
   */
  sounds?: SoundDefinitionsSounds[];

}


/**
 * Sound Definition Entry (sound_definition_entry)
 * Defines a single sound event with its category and associated sound
 * files.
 */
export interface SoundDefinitionsSoundDefinitions {

  /**
   * @remarks
   * The audio category this sound belongs to. Controls which volume
   * slider affects this sound in settings.
   */
  category?: string;

  /**
   * @remarks
   * The maximum distance in blocks at which the sound can be 
   * heard.
   */
  max_distance?: number;

  /**
   * @remarks
   * The minimum distance in blocks at which the sound starts to
   * attenuate.
   */
  min_distance?: number;

  /**
   * @remarks
   * Array of sound files or sound objects that can play for this
   * event. When multiple sounds are defined, one is chosen 
   * randomly.
   */
  sounds: SoundDefinitionsSoundDefinitionsSounds[];

}


/**
 * Sound Entry (sound_entry)
 * A sound file reference with optional playback properties.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `String`.

 */
export interface SoundDefinitionsSoundDefinitionsSounds {

  /**
   * @remarks
   * If true, this sound is positional and will have 3D audio
   * properties.
   */
  is3D?: boolean;

  /**
   * @remarks
   * If true, this sound will be loaded even on devices with low
   * memory. Use sparingly for critical sounds.
   */
  load_on_low_memory?: boolean;

  /**
   * @remarks
   * Path to the sound file relative to the sounds folder, without the
   * file extension (e.g., 'sounds/mob/zombie/say1').
   */
  name: string;

  /**
   * @remarks
   * Pitch multiplier for this sound. Can be a single value or a
   * range [min, max]. Default is 1.0.
   */
  pitch?: number[];

  /**
   * @remarks
   * If true, the sound will be streamed from disk rather than loaded
   * into memory. Recommended for long sounds like music.
   */
  stream?: boolean;

  /**
   * @remarks
   * Volume multiplier for this sound. Can be a single value or a
   * range [min, max]. Default is 1.0.
   */
  volume?: number[];

  /**
   * @remarks
   * Relative probability weight for this sound when multiple sounds are
   * defined. Higher values make this sound more likely to be
   * chosen.
   */
  weight?: number;

}


/**
 * Sounds (sounds)
 */
export interface SoundDefinitionsSounds {

  /**
   * @remarks
   * 
   * Sample Values:
   * Sound Definitions: "sounds/mob/blaze/breathe1"
   *
   */
  name?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Sound Definitions: 0.2
   *
   */
  volume?: number;

}