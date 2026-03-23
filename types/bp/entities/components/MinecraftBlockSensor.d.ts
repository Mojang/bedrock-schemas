// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:block_sensor
 * 
 * minecraft:block_sensor Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Block Sensor (minecraft:block_sensor)
 * Fires off a specified event when a block in the block list is
 * broken within the sensor range.
 */
export default interface MinecraftBlockSensor {

  /**
   * @remarks
   * List of blocks to watch for being broken to fire off a
   * specified event. If a block is in multiple lists, multiple events
   * will fire.
   */
  on_break?: MinecraftBlockSensorOnBreak[];

  /**
   * @remarks
   * The maximum radial distance in which a specified block can be
   * detected. The biggest radius is 32.0.
   */
  sensor_radius?: number;

  /**
   * @remarks
   * List of sources that break the block to listen for. If none are
   * specified, all block breaks will be detected.
   */
  sources?: jsoncommon.MinecraftFilter;

}


/**
 * Block Break Entry (on_break_item)
 */
export interface MinecraftBlockSensorOnBreak {

  /**
   * @remarks
   * List of blocks that trigger the on_block_broken event.
   */
  block_list?: string[];

  /**
   * @remarks
   * Event to call when a block in block_list is broken.
   */
  on_block_broken?: string;

}