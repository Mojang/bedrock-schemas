// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:health
 */

import * as jsoncommon from '../../../common';

/**
 * Health
 * Defines the health pool for an entity, measured in health points (1
 * point = half a heart). Typical values: cow (10), zombie (20), iron
 * golem (100), wither (600).
 */
export default interface Health {

  /**
   * @remarks
   * Maximum health this entity can have. Can be higher than the
   * starting value to allow healing beyond initial health.
   */
  max?: number;

  /**
   * @remarks
   * Starting health for this entity in health points (1 point =
   * half a heart).
   */
  value?: number;

}