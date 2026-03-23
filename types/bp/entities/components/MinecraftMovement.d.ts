// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:movement
 * 
 * minecraft:movement Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Movement (minecraft:movement)
 * Defines the base movement speed of an entity. Typical values:
 * creeper (0.2), cow (0.25), zombie baby (0.35).
 */
export default interface MinecraftMovement {

  /**
   * @remarks
   * Maximum movement speed this entity can have.
   */
  max?: number;

  /**
   * @remarks
   * The base movement speed value. Higher values result in faster
   * movement. Can be a single number or a range object with range_min and
   * range_max properties.
   */
  value?: number;

}