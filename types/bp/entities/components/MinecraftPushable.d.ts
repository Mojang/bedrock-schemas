// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:pushable
 * 
 * minecraft:pushable Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:pushable": {
  "is_pushable": true,
  "is_pushable_by_piston": true
}


Armor Stand - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json

"minecraft:pushable": {
  "is_pushable": false,
  "is_pushable_by_piston": true
}

 */

import * as jsoncommon from '../../../common';

/**
 * Pushable (minecraft:pushable)
 * Defines what can push an entity between other entities and
 * pistons.
 * Note: In 1.26.10 this component was split into
 * `minecraft:pushable_by_block` (pistons and Shulker Boxes,
 * equivalent to `is_pushable_by_piston: true`) and
 * `minecraft:pushable_by_entity` (other entities, equivalent to
 * `is_pushable: true`). The original `minecraft:pushable` component is
 * no longer parsed.
 */
export default interface MinecraftPushable {

  /**
   * @remarks
   * Whether the entity can be pushed by other entities.
   * 
   * Sample Values:
   * Allay: true
   *
   *
   */
  is_pushable?: boolean;

  /**
   * @remarks
   * Whether the entity can be pushed by pistons safely.
   * 
   * Sample Values:
   * Allay: true
   *
   *
   */
  is_pushable_by_piston?: boolean;

}