// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:variable_max_auto_step
 * 
 * minecraft:variable_max_auto_step Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Variable Max Auto Step (minecraft:variable_max_auto_step)
 * Entities with this component will have a maximum auto step height
 * that is different depending on whether they are on a block that
 * prevents jumping. Incompatible with "runtime_identifier": 
 * "minecraft:horse".
 */
export default interface MinecraftVariableMaxAutoStep {

  /**
   * @remarks
   * The maximum auto step height when on any other block.
   */
  base_value?: number;

  /**
   * @remarks
   * The maximum auto step height when on any other block and
   * controlled by the player.
   */
  controlled_value?: number;

  /**
   * @remarks
   * The maximum auto step height when on a block that prevents 
   * jumping.
   */
  jump_prevented_value?: number;

}