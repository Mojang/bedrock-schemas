// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:is_dyeable
 * 
 * minecraft:is_dyeable Samples

Sheep - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sheep.json

"minecraft:is_dyeable": {
  "interact_text": "action.interact.dye"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Is Dyeable (minecraft:is_dyeable)
 * Allows dyes to be used on this entity to change its color.
 */
export default interface MinecraftIsDyeable {

  /**
   * @remarks
   * The text that will display when interacting with this entity with
   * a dye when playing with Touch-screen controls.
   * 
   * Sample Values:
   * Sheep: "action.interact.dye"
   *
   */
  interact_text?: string;

}