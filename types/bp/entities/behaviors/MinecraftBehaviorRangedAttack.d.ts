// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.ranged_attack
 * 
 * minecraft:behavior.ranged_attack Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:behavior.ranged_attack": {
  "charge_shoot_trigger": 4,
  "attack_interval": {
    "min": 3,
    "max": 5
  },
  "attack_range": {
    "min": 0,
    "max": 48
  },
  "burst_interval": 0.3,
  "burst_shots": 3,
  "priority": 3
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

 * At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:behavior.ranged_attack/: 
"minecraft:behavior.ranged_attack": {
  "attack_interval": 3.5,
  "attack_radius": 15,
  "priority": 0
}

 * At /minecraft:entity/component_groups/minecraft:ranged_attack_hard/minecraft:behavior.ranged_attack/: 
"minecraft:behavior.ranged_attack": {
  "attack_interval": 2.5,
  "attack_radius": 15,
  "priority": 0
}


Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:behavior.ranged_attack": {
  "attack_interval": {
    "min": 1,
    "max": 3
  },
  "attack_range": {
    "min": 0,
    "max": 10
  },
  "priority": 3,
  "swing": true
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

 * At /minecraft:entity/component_groups/minecraft:llama_angry/minecraft:behavior.ranged_attack/: 
"minecraft:behavior.ranged_attack": {
  "priority": 2,
  "attack_range": {
    "max": 64
  },
  "charge_shoot_trigger": 2,
  "charge_charged_trigger": 1
}


Parched - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json

 * At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:behavior.ranged_attack/: 
"minecraft:behavior.ranged_attack": {
  "attack_interval": 3.5,
  "attack_radius": 15,
  "priority": 1
}

 * At /minecraft:entity/component_groups/minecraft:ranged_attack_hard/minecraft:behavior.ranged_attack/: 
"minecraft:behavior.ranged_attack": {
  "attack_interval": 2.5,
  "attack_radius": 15,
  "priority": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Ranged Attack Behavior 
 * (minecraft:behavior.ranged_attack)
 * Allows an entity to attack by using ranged shots.
 * "charge_shoot_trigger" must be greater than 0 to enable charged up
 * burst-shot attacks. Requires minecraft:shooter to define projectile
 * behaviour.
 */
export default interface MinecraftBehaviorRangedAttack {

  /**
   * @remarks
   * Reload-time range (in seconds), when not using a charged shot.
   * Reload-time range scales with target-distance.
   * 
   * Sample Values:
   * Blaze: {"min":3,"max":5}
   *
   * Bogged: 3.5, 2.5
   *
   */
  attack_interval?: object;

  /**
   * @remarks
   * Maximum bound for reload-time range (in seconds), when not using a
   * charged shot. Reload-time range scales with target-distance.
   */
  attack_interval_max?: number;

  /**
   * @remarks
   * Minimum bound for reload-time range (in seconds), when not using a
   * charged shot. Reload-time range scales with target-distance.
   */
  attack_interval_min?: number;

  /**
   * @remarks
   * Minimum distance to target before this entity will attempt to
   * shoot.
   * 
   * Sample Values:
   * Bogged: 15
   *
   */
  attack_radius?: number;

  /**
   * @remarks
   * Minimum distance the target can be for this mob to fire. If the
   * target is closer, this mob will move first before firing
   */
  attack_radius_min?: number;

  /**
   * @remarks
   * Range of distances from the target within which the entity can
   * perform a ranged attack.
   * 
   * Sample Values:
   * Blaze: {"min":0,"max":48}
   *
   * Drowned: {"min":0,"max":10}
   *
   * Llama: {"max":64}
   *
   */
  attack_range?: object;

  /**
   * @remarks
   * Time (in seconds) between each individual shot when firing a
   * burst of shots from a charged up attack.
   * 
   * Sample Values:
   * Blaze: 0.3
   *
   */
  burst_interval?: number;

  /**
   * @remarks
   * Number of shots fired every time the attacking entity uses a
   * charged up attack.
   * 
   * Sample Values:
   * Blaze: 3
   *
   */
  burst_shots?: number;

  /**
   * @remarks
   * Time (in seconds, then add "charge_shoot_trigger"), before a
   * charged up attack is done charging. Charge-time decays while
   * target is not in sight.
   * 
   * Sample Values:
   * Llama: 1
   *
   */
  charge_charged_trigger?: number;

  /**
   * @remarks
   * Amount of time (in seconds, then doubled) a charged shot must be
   * charging before reloading burst shots. Charge-time decays while
   * target is not in sight.
   * 
   * Sample Values:
   * Blaze: 4
   *
   * Llama: 2
   *
   */
  charge_shoot_trigger?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Controls how the entity moves while its target is within the
   * configured attack range. "hold_position" makes the entity stop
   * and hold its position while facing and attacking the target.
   * "follow_target" makes the entity continue moving toward the
   * target while attacking, stopping just outside the minimum attack
   * range.
   */
  in_range_movement_mode?: MinecraftBehaviorRangedAttackInRangeMovementMode;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Blaze: 3
   *
   *
   * Llama: 2
   *
   * Parched: 1
   *
   */
  priority?: number;

  /**
   * @remarks
   * Field of view (in degrees) when using sensing to detect a
   * target for attack.
   */
  ranged_fov?: number;

  /**
   * @remarks
   * Allows the actor to be set to persist upon targeting a 
   * player
   */
  set_persistent?: boolean;

  /**
   * @remarks
   * During attack behavior, this multiplier modifies the entity's speed
   * when moving toward the target.
   */
  speed_multiplier?: number;

  /**
   * @remarks
   * If a swing animation (using variable.attack_time) exists, this
   * causes the actor to swing their arm(s) upon firing the ranged
   * attack.
   * 
   * Sample Values:
   * Drowned: true
   *
   */
  swing?: boolean;

  /**
   * @remarks
   * Minimum amount of time (in seconds) the attacking entity needs to
   * see the target before moving toward it.
   */
  target_in_sight_time?: number;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the X-axis, this entity can
   * rotate while trying to look at the target.
   */
  x_max_rotation?: number;

  /**
   * @remarks
   * Maximum rotation (in degrees), on the Y-axis, this entity can
   * rotate its head while trying to look at the target.
   */
  y_max_head_rotation?: number;

}


export enum MinecraftBehaviorRangedAttackControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


export enum MinecraftBehaviorRangedAttackInRangeMovementMode {
  followTarget = `follow_target`,
  holdPosition = `hold_position`
}