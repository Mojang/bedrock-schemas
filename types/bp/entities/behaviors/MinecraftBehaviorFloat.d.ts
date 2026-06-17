// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.float
 * 
 * minecraft:behavior.float Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:behavior.float": {
  "priority": 7
}


Bat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json

"minecraft:behavior.float": {
  "priority": 0
}


Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

"minecraft:behavior.float": {
  "priority": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Float Behavior (minecraft:behavior.float)
 * Allows the mob to stay afloat while swimming. Passengers will be
 * kicked out the moment the mob's head goes underwater, which may
 * not happen for tall mobs.
 */
export default interface MinecraftBehaviorFloat {

  /**
   * @remarks
   * Probability per tick (0-1) that the entity will attempt to
   * float when in water. Lower values produce slower, more deliberate
   * floating behavior.
   */
  chance_per_tick_to_float?: number;

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Allay: 7
   *
   * Cave Spider: 1
   *
   */
  priority?: number;

  /**
   * @remarks
   * If true, the mob will keep sinking as long as it has 
   * passengers.
   */
  sink_with_passengers?: boolean;

  /**
   * @remarks
   * Time in seconds the entity must spend with its head underwater before
   * any passengers are dismounted. A value of 0 dismounts passengers as
   * soon as the entity's head submerges.
   */
  time_under_water_to_dismount_passengers?: number;

}


export enum MinecraftBehaviorFloatControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}