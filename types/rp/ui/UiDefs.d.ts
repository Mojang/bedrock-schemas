// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * UI Documentation - minecraft:ui_defs
 * 
 * minecraft:ui_defs Samples

Basic - basic

{
  "ui_defs": [
    "ui/my_screen.json",
    "ui/my_common_elements.json"
  ]
}

 */

import * as jsoncommon from '../../common';

/**
 * UI Definitions (ui_defs)
 * The _ui_defs.json file that lists all UI screen files that should
 * be loaded by Minecraft. This file is required for custom UI
 * screens to be recognized.
 */
export default interface UiDefs {

  /**
   * @remarks
   * An array of paths to UI JSON files that should be loaded. Paths
   * are relative to the resource pack root and typically start with
   * 'ui/'.
   * 
   * Sample Values:
   * Basic: ["ui/my_screen.json","ui/my_common_elements.json"]
   *
   */
  ui_defs: string[];

}