// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:free_camera_controlled
 * 
 * minecraft:free_camera_controlled Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Free Camera Controlled (minecraft:free_camera_controlled)
 * When configured as a rideable entity, the entity will be
 * controlled using WASD controls and mouse to move in three
 * dimensions.
 */
export default interface MinecraftFreeCameraControlled {

  /**
   * @remarks
   * Modifies speed going backwards.
   */
  backwards_movement_modifier?: number;

  /**
   * @remarks
   * Modifies the strafe speed.
   */
  strafe_speed_modifier?: number;

}