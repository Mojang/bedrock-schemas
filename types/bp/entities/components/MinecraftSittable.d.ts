// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:sittable
 * 
 * minecraft:sittable Samples

Parrot - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json

"minecraft:sittable": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Sittable (minecraft:sittable)
 * Defines the entity's 'sit' state.
 */
export default interface MinecraftSittable {

  /**
   * @remarks
   * Event to run when the entity enters the 'sit' state. Can be an
   * object with event and target properties, or a simple event 
   * string.
   */
  sit_event?: object;

  /**
   * @remarks
   * Event to run when the entity exits the 'sit' state. Can be an
   * object with event and target properties, or a simple event 
   * string.
   */
  stand_event?: object;

}