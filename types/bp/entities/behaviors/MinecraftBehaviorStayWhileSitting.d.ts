// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.stay_while_sitting
 * 
 * minecraft:behavior.stay_while_sitting Samples

Parrot - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json

"minecraft:behavior.stay_while_sitting": {
  "priority": 2
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Stay While Sitting Behavior
 * (minecraft:behavior.stay_while_sitting)
 * Allows the mob to stay put while it is in a sitting state instead of
 * doing something else.
 * Note: This behavior works with the minecraft:sittable component. When
 * the entity is commanded to sit, this goal prevents other behaviors
 * from moving the entity.
 */
export default interface MinecraftBehaviorStayWhileSitting {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Parrot: 2
   *
   */
  priority?: number;

}


export enum MinecraftBehaviorStayWhileSittingControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}