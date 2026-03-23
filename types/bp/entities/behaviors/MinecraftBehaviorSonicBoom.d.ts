// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.sonic_boom
 * 
 * minecraft:behavior.sonic_boom Samples

Warden - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json

"minecraft:behavior.sonic_boom": {
  "duration": 3,
  "speed_multiplier": 1.2,
  "attack_damage": 10,
  "attack_cooldown": 2,
  "knockback_vertical_strength": 0.5,
  "knockback_horizontal_strength": 2.5,
  "knockback_height_cap": 0.5,
  "attack_sound": "sonic_boom",
  "charge_sound": "sonic_charge",
  "priority": 3
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Sonic Boom Behavior (minecraft:behavior.sonic_boom)
 * Allows this entity to perform a 'sonic boom' ranged attack.
 */
export default interface MinecraftBehaviorSonicBoom {

  /**
   * @remarks
   * Cooldown in seconds required after using this attack until the
   * entity can use sonic boom again.
   * 
   * Sample Values:
   * Warden: 2
   *
   */
  attack_cooldown?: number;

  /**
   * @remarks
   * Attack damage of the sonic boom.
   * 
   * Sample Values:
   * Warden: 10
   *
   */
  attack_damage?: number;

  /**
   * @remarks
   * Horizontal range (in blocks) at which the sonic boom can damage the
   * target.
   */
  attack_range_horizontal?: number;

  /**
   * @remarks
   * Vertical range (in blocks) at which the sonic boom can damage the
   * target.
   */
  attack_range_vertical?: number;

  /**
   * @remarks
   * Sound event for the attack.
   * 
   * Sample Values:
   * Warden: "sonic_boom"
   *
   */
  attack_sound?: string;

  /**
   * @remarks
   * Sound event for the charge up.
   * 
   * Sample Values:
   * Warden: "sonic_charge"
   *
   */
  charge_sound?: string;

  control_flags?: string[];

  /**
   * @remarks
   * Goal duration in seconds
   * 
   * Sample Values:
   * Warden: 3
   *
   */
  duration?: number;

  /**
   * @remarks
   * Duration in seconds until the attack sound is played.
   */
  duration_until_attack_sound?: number;

  /**
   * @remarks
   * Height cap of the attack knockback's vertical delta.
   * 
   * Sample Values:
   * Warden: 0.5
   *
   */
  knockback_height_cap?: number;

  /**
   * @remarks
   * Horizontal strength of the attack's knockback applied to the
   * attack target.
   * 
   * Sample Values:
   * Warden: 2.5
   *
   */
  knockback_horizontal_strength?: number;

  /**
   * @remarks
   * Vertical strength of the attack's knockback applied to the
   * attack target.
   * 
   * Sample Values:
   * Warden: 0.5
   *
   */
  knockback_vertical_strength?: number;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Warden: 3
   *
   */
  priority?: number;

  /**
   * @remarks
   * This multiplier modifies the attacking entity's speed when moving
   * toward the target.
   * 
   * Sample Values:
   * Warden: 1.2
   *
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorSonicBoomControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}