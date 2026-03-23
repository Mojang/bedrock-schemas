// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * UI Documentation - minecraft:ui_screen
 */

import * as jsoncommon from '../../common';

/**
 * UI Screen (ui_screen)
 * A UI screen definition file for Minecraft Bedrock Edition. UI
 * screens define complete interface layouts including namespaces, element
 * definitions, and global variables.
 * Note: UI screen files use a namespace-based structure where each
 * JSON key (except 'namespace') defines a UI element. Elements can
 * inherit from other elements using the '@' syntax (e.g.,
 * 'my_button@common.button'). Variables are defined with '$'
 * prefix and can be overridden.
 */
export default interface UiScreen {

  /**
   * @remarks
   * The namespace for this UI screen. Used to reference elements from
   * other UI files using the 'namespace.element_name' syntax.
   */
  namespace?: string;

}