// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.panic
 * 
 * minecraft:behavior.panic Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 2
}


Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.5
}


Cow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json

"minecraft:behavior.panic": {
  "priority": 1,
  "speed_multiplier": 1.25
}


Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

 * At /minecraft:entity/component_groups/minecraft:defending_fox/minecraft:behavior.panic/: 
"minecraft:behavior.panic": {
  "priority": 2,
  "speed_multiplier": 1.25
}

 */

import * as jsoncommon from '../../../common';

/**
 * Panic Behavior (minecraft:behavior.panic)
 * Allows the mob to enter the panic state, which makes it run
 * around and away from the damage source that made it enter this
 * state.
 */
export default interface MinecraftBehaviorPanic {

  /**
   * @remarks
   * The list of Entity Damage Sources that will cause this mob to
   * panic
   */
  damage_sources?: string[];

  /**
   * @remarks
   * If true, this mob will not stop panicking until it can't move
   * anymore or the goal is removed from it
   */
  force?: boolean;

  /**
   * @remarks
   * If true, the mob will not panic in response to damage from other
   * mobs. This overrides the damage types in "damage_sources"
   */
  ignore_mob_damage?: boolean;

  /**
   * @remarks
   * If true, the mob will prefer water over land
   */
  prefer_water?: boolean;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Allay: 1
   *
   *
   * Fox: 2
   *
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this AI Goal
   * 
   * Sample Values:
   * Allay: 2
   *
   * Chicken: 1.5
   *
   * Cow: 1.25
   *
   */
  speed_multiplier?: number;

}