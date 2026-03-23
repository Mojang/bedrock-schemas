// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:redstone_consumer
 */

import * as jsoncommon from '../../../common';

/**
 * Redstone Consumer (minecraft:redstone_consumer)
 * A component describing how a block can consume and potentially propogate
 * a redstone signal. This component is not available for block
 * permutations.
Experimental toggles required: Upcoming Creator
 * Features (in format versions before 1.26.0).
 */
export default interface MinecraftRedstoneConsumer {

  /**
   * @remarks
   * Optional minimum value for incoming signal strength. If signal
   * strength is greater than or equal to this value then the
   * 'onRedstoneUpdate' event is sent to Scripts. Defaults to 0
   * meaning event is always emitted.
   */
  min_power?: number;

  /**
   * @remarks
   * Optional Boolean to control whether a signal can pass through this
   * block or not, defaults to false.
   */
  propagates_power?: boolean;

}