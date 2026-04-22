// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:annotation.break_door
 * 
 * minecraft:annotation.break_door Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Break doors annotation (minecraft:annotation.break_door)
 * Allows an entity to break doors, assuming that that flags set up
 * for the component to use in navigation.
 * Note: Requires the entity's `navigation` component to have the
 * parameter `can_break_doors` set to `true`.
 */
export default interface MinecraftAnnotationBreakDoor {

  /**
   * @remarks
   * The time in seconds required to break through doors.
   */
  break_time?: number;

  /**
   * @remarks
   * The minimum difficulty that the world must be on for this entity to
   * break doors.
   */
  min_difficulty?: string;

}