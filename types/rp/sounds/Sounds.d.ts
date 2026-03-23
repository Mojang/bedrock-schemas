// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Sounds Documentation - minecraft:sounds
 */

import * as jsoncommon from '../../common';

/**
 * Sounds (sounds)
 * The sounds.json file defines sound events, entity sounds, block
 * sounds, and interactive sounds for a resource pack. This is the
 * legacy sound configuration file; for newer projects, consider using
 * sound_definitions.json instead.
 * Note: The sounds.json file is a comprehensive sound configuration file
 * that has been used since early versions of Bedrock Edition. For
 * newer sound definitions with format versioning, consider using
 * sound_definitions.json instead.
 */
export default interface Sounds {

  /**
   * @remarks
   * Defines sounds that play when interacting with blocks (breaking,
   * placing, stepping).
   */
  block_sounds?: { [key: string]: SoundsBlockSounds };

  /**
   * @remarks
   * Defines sounds for entities, including defaults and
   * entity-specific overrides.
   */
  entity_sounds?: SoundsEntitySounds;

  /**
   * @remarks
   * Defines individual sound events that can be triggered by
   * various game actions.
   */
  individual_event_sounds?: SoundsIndividualEventSounds;

  /**
   * @remarks
   * Defines named sounds that can be referenced directly.
   */
  individual_named_sounds?: SoundsIndividualNamedSounds;

  /**
   * @remarks
   * Defines sounds for interactive elements like UI and special 
   * blocks.
   */
  interactive_sounds?: SoundsInteractiveSounds;

}


/**
 */
export interface SoundsBlockSounds {

  /**
   * @remarks
   * Parent sound category to inherit sound settings from.
   */
  base?: string;

  /**
   * @remarks
   * Sound events for this block type (break, place, step, hit, fall,
   * etc.).
   */
  events?: { [key: string]: SoundsBlockSoundsEvents };

  /**
   * @remarks
   * Pitch multiplier for block sounds. Can be a single value or a
   * range [min, max].
   */
  pitch?: number[];

  /**
   * @remarks
   * Volume multiplier for block sounds.
   */
  volume?: number[];

}


/**
 */
export interface SoundsBlockSoundsEvents {

  /**
   * @remarks
   * Pitch for this event.
   */
  pitch?: number[];

  /**
   * @remarks
   * The sound identifier to play for this event.
   */
  sound?: string;

  /**
   * @remarks
   * Volume for this event.
   */
  volume?: number[];

}


/**
 */
export interface SoundsEntitySounds {

  /**
   * @remarks
   * Default sound settings that apply to all entities unless
   * overridden.
   */
  defaults?: SoundsEntitySoundsDefaults;

  /**
   * @remarks
   * Entity-specific sound configurations that override defaults.
   */
  entities?: { [key: string]: SoundsEntitySoundsEntities };

}


/**
 */
export interface SoundsEntitySoundsDefaults {

  /**
   * @remarks
   * Default sounds for various entity events.
   */
  events?: { [key: string]: SoundsEntitySoundsDefaultsEvents };

  /**
   * @remarks
   * Default pitch for entity sounds.
   */
  pitch?: number[];

  /**
   * @remarks
   * Default volume for entity sounds.
   */
  volume?: number[];

}


/**
 */
export interface SoundsEntitySoundsDefaultsEvents {

  /**
   * @remarks
   * Pitch for this event sound.
   */
  pitch?: number[];

  /**
   * @remarks
   * The sound to play for this event.
   */
  sound?: string;

  /**
   * @remarks
   * Volume for this event sound.
   */
  volume?: number[];

}


/**
 * Entity Sound Configuration (entity_sound_config)
 * Sound configuration for a specific entity type.
 */
export interface SoundsEntitySoundsEntities {

  /**
   * @remarks
   * Sound events for this entity, which can have material-based 
   * variations.
   */
  events?: { [key: string]: SoundsEntitySoundsEntitiesEvents };

  /**
   * @remarks
   * Pitch multiplier for this entity's sounds. Can be a single value
   * or a range [min, max].
   */
  pitch?: number[];

  /**
   * @remarks
   * Volume multiplier for this entity's sounds.
   */
  volume?: number[];

}


/**
 */
export interface SoundsEntitySoundsEntitiesEvents {

  /**
   * @remarks
   * The default sound to play if no material-specific sound 
   * matches.
   */
  default?: string;

  /**
   * @remarks
   * Sound to play when on grass material.
   */
  grass?: string;

  /**
   * @remarks
   * Sound to play when on gravel material.
   */
  gravel?: string;

  /**
   * @remarks
   * Sound to play when on sand material.
   */
  sand?: string;

  /**
   * @remarks
   * Sound to play when on snow material.
   */
  snow?: string;

  /**
   * @remarks
   * The sound to play for this event.
   */
  sound?: string;

  /**
   * @remarks
   * Sound to play when on stone material.
   */
  stone?: string;

  /**
   * @remarks
   * Sound to play when on wood material.
   */
  wood?: string;

}


/**
 */
export interface SoundsIndividualEventSounds {

  /**
   * @remarks
   * A collection of event sound definitions keyed by event name.
   */
  events?: { [key: string]: SoundsIndividualEventSoundsEvents };

}


/**
 * Event Sound (event_sound)
 * Defines a sound for a specific event.
 */
export interface SoundsIndividualEventSoundsEvents {

  /**
   * @remarks
   * Pitch multiplier for this sound. Can be a single value or a
   * range [min, max].
   */
  pitch?: number[];

  /**
   * @remarks
   * The sound identifier to play for this event.
   */
  sound: string;

  /**
   * @remarks
   * Volume multiplier for this sound. Can be a single value or a
   * range [min, max].
   */
  volume?: number[];

}


/**
 */
export interface SoundsIndividualNamedSounds {

  /**
   * @remarks
   * A collection of named sound definitions.
   */
  sounds?: { [key: string]: SoundsIndividualNamedSoundsSounds };

}


/**
 */
export interface SoundsIndividualNamedSoundsSounds {

  /**
   * @remarks
   * Pitch for this sound.
   */
  pitch?: number[];

  /**
   * @remarks
   * The sound identifier.
   */
  sound: string;

  /**
   * @remarks
   * Volume for this sound.
   */
  volume?: number[];

}


/**
 */
export interface SoundsInteractiveSounds {

  /**
   * @remarks
   * Sounds for interactive block types.
   */
  block_sounds?: { [key: string]: SoundsInteractiveSoundsBlockSounds };

  /**
   * @remarks
   * Sounds for interactive entity types.
   */
  entity_sounds?: { [key: string]: object };

}


/**
 */
export interface SoundsInteractiveSoundsBlockSounds {

  /**
   * @remarks
   * Parent sound category to inherit from.
   */
  base?: string;

  /**
   * @remarks
   * Sound events for this interactive block.
   */
  events?: { [key: string]: SoundsInteractiveSoundsBlockSoundsEvents };

  /**
   * @remarks
   * Pitch for this block's sounds.
   */
  pitch?: number[];

  /**
   * @remarks
   * Volume for this block's sounds.
   */
  volume?: number[];

}


/**
 */
export interface SoundsInteractiveSoundsBlockSoundsEvents {

  /**
   * @remarks
   * Pitch for this event.
   */
  pitch?: number[];

  /**
   * @remarks
   * The sound identifier to play.
   */
  sound?: string;

  /**
   * @remarks
   * Volume for this event.
   */
  volume?: number[];

}