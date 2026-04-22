// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:shooter
 * 
 * minecraft:shooter Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:shooter": {
  "def": "minecraft:small_fireball"
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

 * At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:shooter/: 
"minecraft:shooter": {
  "aux_val": 26,
  "def": "minecraft:arrow",
  "sound": "bow"
}


Ender Dragon - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json

"minecraft:shooter": {
  "def": "minecraft:dragon_fireball"
}


Llama - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json

"minecraft:shooter": {
  "def": "minecraft:llama_spit"
}


Parched - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json

 * At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:shooter/: 
"minecraft:shooter": {
  "aux_val": 35,
  "def": "minecraft:arrow",
  "sound": "bow"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Shooter (minecraft:shooter)
 * Defines the entity's ranged attack behavior. The
 * "minecraft:behavior.ranged_attack" goal uses this component to
 * determine which projectiles to shoot.
 * Note: Ammunition used by minecraft:shooter must have the
 * minecraft:projectile component in order to function 
 * properly.
 */
export default interface MinecraftShooter {

  /**
   * @remarks
   * ID of the Potion effect for the default projectile to be
   * applied on hit.
   * 
   * Sample Values:
   * Bogged: 26
   *
   * Parched: 35
   *
   */
  aux_val?: number;

  /**
   * @remarks
   * Actor definition to use as the default projectile for the ranged
   * attack. The actor definition must have the projectile component to
   * be able to be shot as a projectile.
   * 
   * Sample Values:
   * Blaze: "minecraft:small_fireball"
   *
   * Bogged: "minecraft:arrow"
   *
   * Ender Dragon: "minecraft:dragon_fireball"
   *
   */
  def?: string;

  /**
   * @remarks
   * Sets whether the projectiles being used are flagged as magic. If
   * set, the ranged attack goal will not be used at the same time as
   * other magic goals, such as minecraft:behavior.drink_potion
   */
  magic?: boolean;

  /**
   * @remarks
   * Velocity in which the projectiles will be shot at. A power of 0
   * will be overwritten by the default projectile throw power.
   */
  power?: number;

  /**
   * @remarks
   * List of projectiles that can be used by the shooter. Projectiles are
   * evaluated in the order of the list; After a projectile is
   * chosen, the rest of the list is ignored.
   */
  projectiles?: string[];

  /**
   * @remarks
   * Sound that is played when the shooter shoots a projectile.
   * 
   * Sample Values:
   * Bogged: "bow"
   *
   */
  sound?: string;

}