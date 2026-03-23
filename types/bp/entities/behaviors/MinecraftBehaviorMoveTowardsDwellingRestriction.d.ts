// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.move_towards_dwelling_restriction
 * 
 * minecraft:behavior.move_towards_dwelling_restriction Samples

Iron Golem - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json

"minecraft:behavior.move_towards_dwelling_restriction": {
  "priority": 4
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Move Towards Dwelling Restriction Behavior
 * (minecraft:behavior.move_towards_dwelling_restriction)
 * Allows entities with the "minecraft:dweller" component to move
 * toward their village area that the entity should be restricted 
 * to.
 */
export default interface MinecraftBehaviorMoveTowardsDwellingRestriction {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Iron Golem: 4
   *
   */
  priority?: number;

  /**
   * @remarks
   * This multiplier modifies the entity's speed when moving towards its
   * restriction.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorMoveTowardsDwellingRestrictionControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}