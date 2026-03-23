// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Behavior Pack Manifest Documentation - minecraft:behavior_pack_rest_of_file
 */

import * as jsoncommon from '../../common';

/**
 * Behavior Pack Content
 * Defines the non-header content section of a behavior pack
 * document.
 */
export default interface BehaviorPackContent {

  dependencies?: { [key: string]: string };

  modules?: BehaviorPackContentModules[];

}


/**
 */
export interface BehaviorPackContentModules {

  /**
   * @remarks
   * Description of this module.
   */
  description?: string;

  /**
   * @remarks
   * Script entry point for this behavior pack.
   */
  entry?: string;

  /**
   * @remarks
   * The scripting language of this module (e.g., 'javascript').
   */
  language?: string;

  /**
   * @remarks
   * Type of this module.
   */
  type?: string;

  /**
   * @remarks
   * Unique identifier of this module.
   */
  uuid?: string;

  /**
   * @remarks
   * Version
   */
  version?: string;

}