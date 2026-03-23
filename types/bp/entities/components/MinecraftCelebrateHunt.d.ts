// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:celebrate_hunt
 * 
 * minecraft:celebrate_hunt Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Celebrate Hunt (minecraft:celebrate_hunt)
 * Specifies hunt celebration behaviour.
 */
export default interface MinecraftCelebrateHunt {

  /**
   * @remarks
   * If true, celebration will be broadcasted to other entities in
   * the radius.
   */
  broadcast?: boolean;

  /**
   * @remarks
   * The list of conditions that target of hunt must satisfy to
   * initiate celebration.
   */
  celeberation_targets?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The sound event to play when the mob is celebrating
   */
  celebrate_sound?: string;

  /**
   * @remarks
   * Duration, in seconds, of celebration
   */
  duration?: number;

  /**
   * @remarks
   * If broadcast is enabled, specifies the radius in which it will
   * notify other entities for celebration.
   */
  radius?: number;

  /**
   * @remarks
   * The range of time in seconds to randomly wait before playing the
   * sound again
   */
  sound_interval?: number[];

}