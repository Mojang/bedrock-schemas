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

Sulfur Cube - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sulfur_cube.json

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_ai/minecraft:variable_max_auto_step/: 
"minecraft:variable_max_auto_step": {
  "base_value": 0.5625,
  "controlled_value": 0.5625,
  "jump_prevented_value": 0.5625
}

 * At /minecraft:entity/component_groups/minecraft:sulfur_cube_medium_with_block/minecraft:variable_max_auto_step/: 
"minecraft:variable_max_auto_step": {
  "base_value": 0,
  "controlled_value": 0,
  "jump_prevented_value": 0
}

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
   * 
   * Sample Values:
   * Sulfur Cube: 0.5625
   *
   */
  base_value?: number;

  /**
   * @remarks
   * The maximum auto step height when on any other block and
   * controlled by the player.
   * 
   * Sample Values:
   * Sulfur Cube: 0.5625
   *
   */
  controlled_value?: number;

  /**
   * @remarks
   * The maximum auto step height when on a block that prevents 
   * jumping.
   * 
   * Sample Values:
   * Sulfur Cube: 0.5625
   *
   */
  jump_prevented_value?: number;

}