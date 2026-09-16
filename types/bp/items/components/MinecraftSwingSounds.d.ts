// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:swing_sounds
 * 
 * minecraft:swing_sounds Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Swing Sounds (minecraft:swing_sounds)
 * Overrides the swing sounds emitted by the user. Each field accepts
 * the name of any sound event defined in
 * `sound_definitions.json`, including the built-in vanilla sound
 * events.
 */
export default interface MinecraftSwingSounds {

  /**
   * @remarks
   * Sound played when an attack hits and deals critical damage.
   */
  attack_critical_hit?: string;

  /**
   * @remarks
   * Sound played when an attack hits.
   */
  attack_hit?: string;

  /**
   * @remarks
   * Sound played when an attack misses or deals no damage due to
   * invulnerability.
   */
  attack_miss?: string;

}