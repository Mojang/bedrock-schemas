// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:equipment
 * 
 * minecraft:equipment Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Equipment (minecraft:equipment)
 * Sets the Equipment table to use for this Entity.
 */
export default interface MinecraftEquipment {

  /**
   * @remarks
   * A list of slots with the chance to drop an equipped item from
   * that slot. Can be an array of slot name strings or an array of
   * objects with slot and drop_chance properties.
   */
  slot_drop_chance?: string[];

  /**
   * @remarks
   * The file path to the equipment table, relative to the behavior pack's
   * root.
   */
  table?: string;

}