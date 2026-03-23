// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Event Actions Documentation - minecraft:play_sound
 * 
 * minecraft:play_sound Samples
{
	"play_sound": {
		"sound": "death"
	}
}
 */

import * as jsoncommon from '../../../common';

/**
 * Play Sound (play_sound)
 * Plays a sound as part of an entity event response.
 */
export default interface PlaySound {

  /**
   * @remarks
   * The identifier of the sound to play.
   */
  sound?: string;

}