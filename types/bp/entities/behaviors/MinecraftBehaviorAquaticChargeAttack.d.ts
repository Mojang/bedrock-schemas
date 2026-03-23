// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.aquatic_charge_attack
 * 
 * minecraft:behavior.aquatic_charge_attack Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Aquatic Charge Attack Behavior
 * (minecraft:behavior.aquatic_charge_attack)
 * Enables an aquatic mob to dash at its target with knockback; includes
 * overshoot and cooldown settings.
 */
export default interface MinecraftBehaviorAquaticChargeAttack {

  /**
   * @remarks
   * Horizontal reach grown around the mob's AABB to register a
   * hit.
   */
  attack_reach?: number;

  /**
   * @remarks
   * Range of time in seconds to wait before starting another 
   * charge.
   */
  charge_cooldown_time?: MinecraftBehaviorAquaticChargeAttackChargeCooldownTime;

  /**
   * @remarks
   * Distance beyond the target the mob aims during a charge.
   */
  charge_overshoot_distance?: number;

  /**
   * @remarks
   * Absolute speed used during the charge attack.
   */
  charge_speed?: number;

  control_flags?: string[];

  /**
   * @remarks
   * Knockback force applied to the target on hit.
   */
  knockback_force?: number;

  /**
   * @remarks
   * Maximum distance at which the mob attempts a charge.
   */
  max_charge_distance?: number;

  priority?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorAquaticChargeAttackChargeCooldownTime {

  max?: number;

  min?: number;

}


export enum MinecraftBehaviorAquaticChargeAttackControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}