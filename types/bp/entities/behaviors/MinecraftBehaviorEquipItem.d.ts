// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.equip_item
 * 
 * minecraft:behavior.equip_item Samples

Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:behavior.equip_item": {
  "priority": 3
}


Parched - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json

"minecraft:behavior.equip_item": {
  "priority": 4
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Equip Item Behavior (minecraft:behavior.equip_item)
 * The entity puts on the desired equipment.
 */
export default interface MinecraftBehaviorEquipItem {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Bogged: 3
   *
   * Parched: 4
   *
   *
   */
  priority?: number;

}


export enum MinecraftBehaviorEquipItemControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}