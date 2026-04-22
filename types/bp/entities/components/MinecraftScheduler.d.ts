// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:scheduler
 * 
 * minecraft:scheduler Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Scheduler (minecraft:scheduler)
 * Fires off scheduled mob events at time of day events.
 */
export default interface MinecraftScheduler {

  max_delay_secs?: number;

  min_delay_secs?: number;

  /**
   * @remarks
   * The list of triggers that fire when the conditions match the
   * given filter criteria. Can be an array of event objects or a
   * single event object.
   */
  scheduled_events?: object[];

}