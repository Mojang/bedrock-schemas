// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Render Controllers Documentation - minecraft:render_controller_set_textures
 */

import * as jsoncommon from '../../common';

/**
 * Render Controller Set
 * Defines texture selection logic for entity rendering.
 */
export default interface RenderControllerSet {

  render_controllers?: { [key: string]: RenderControllerSetRenderControllers };

}


/**
 */
export interface RenderControllerSetRenderControllers {

  arrays?: RenderControllerSetRenderControllersArrays;

  /**
   * @remarks
   * A name or expression that expresses logic for which texture to
   * select
   */
  textures?: string[];

}


/**
 */
export interface RenderControllerSetRenderControllersArrays {

  /**
   * @remarks
   * Lists of textures that can be used in selection calculations
   */
  textures?: { [key: string]: string[] };

}