// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:jump.dynamic
 * 
 * minecraft:jump.dynamic Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Dynamic Jump (minecraft:jump.dynamic)
 * Defines a dynamic type jump control that will change jump
 * properties based on the speed modifier of the mob. Requires
 * `minecraft:movement.skip` to be used.
 */
export default interface MinecraftJumpDynamic {

  /**
   * @remarks
   * The jump data used for the fast skip.
   */
  fast_skip_data?: string;

  /**
   * @remarks
   * The jump data used for the regular skip.
   */
  regular_skip_data?: string;

}


export enum MinecraftJumpDynamicFastSkipData {
  /**
   * @remarks
   * Duration of the jump animation.
   */
  animationDuration = `animation_duration`,
  /**
   * @remarks
   * The multiplier applied to horizontal velocity when jumping.
   */
  distanceScale = `distance_scale`,
  /**
   * @remarks
   * The force applied vertically when jumping.
   */
  height = `height`,
  /**
   * @remarks
   * Amount of ticks between sequential jumps.
   */
  jumpDelay = `jump_delay`
}


export enum MinecraftJumpDynamicRegularSkipData {
  /**
   * @remarks
   * Duration of the jump animation.
   */
  animationDuration = `animation_duration`,
  /**
   * @remarks
   * The multiplier applied to horizontal velocity when jumping.
   */
  distanceScale = `distance_scale`,
  /**
   * @remarks
   * The force applied vertically when jumping.
   */
  height = `height`,
  /**
   * @remarks
   * Amount of ticks between sequential jumps.
   */
  jumpDelay = `jump_delay`
}