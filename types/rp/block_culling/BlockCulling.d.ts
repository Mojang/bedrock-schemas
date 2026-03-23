// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Culling Documentation - minecraft:blockculling
 */

import * as jsoncommon from '../../common';

/**
 * BlockCulling
 * BlockCulling.
 */
export default interface BlockCulling {

  /**
   * @remarks
   * format_version
   */
  format_version?: string;

  /**
   * @remarks
   * minecraft:block_culling_rules
   */
  "minecraft:block_culling_rules"?: BlockCullingMinecraftBlockCullingRules;

}


/**
 * Block Culling Rules
 * Block Culling Rules.
 */
export interface BlockCullingMinecraftBlockCullingRules {

  /**
   * @remarks
   * description
   */
  description?: BlockCullingMinecraftBlockCullingRulesDescription;

  /**
   * @remarks
   * rules
   */
  rules?: object[];

}


/**
 * Description
 * Description.
 */
export interface BlockCullingMinecraftBlockCullingRulesDescription {

  /**
   * @remarks
   * identifier
   */
  identifier?: string;

}