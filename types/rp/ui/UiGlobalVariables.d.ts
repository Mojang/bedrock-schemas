// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * UI Documentation - minecraft:ui_global_variables
 * 
 * minecraft:ui_global_variables Samples

Colors - colors

{
  "$button_text_color": [
    1,
    1,
    1
  ],
  "$background_color": [
    0.2,
    0.2,
    0.2,
    0.8
  ],
  "$highlight_color": [
    1,
    0.84,
    0
  ]
}

 */

import * as jsoncommon from '../../common';

/**
 * UI Global Variables (ui_global_variables)
 * The _global_variables.json file that defines global variables used
 * across all UI screens in Minecraft. Variables are defined with
 * '$' prefix and can include colors, sizes, and other values.
 * Note: Variable names must start with '$'. Colors are typically
 * specified as [r, g, b] or [r, g, b, a] arrays with values between
 * 0.0 and 1.0.
 */
export default interface UiGlobalVariables {

  /**
   * @remarks
   * 
   * Sample Values:
   * Colors: [0.2,0.2,0.2,0.8]
   *
   */
  $background_color?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Colors: [1,1,1]
   *
   */
  $button_text_color?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * Colors: [1,0.84,0]
   *
   */
  $highlight_color?: string;

}