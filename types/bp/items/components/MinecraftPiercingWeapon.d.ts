// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:piercing_weapon
 * 
 * minecraft:piercing_weapon Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Piercing Weapon (minecraft:piercing_weapon)
 * Allows an item to deal damage to all entities detected in a
 * straight line along the user's view vector. Items with this
 * component cannot destroy blocks, as the attack action always takes
 * priority, regardless of what the user is looking at.
 */
export default interface MinecraftPiercingWeapon {

  /**
   * @remarks
   * Defines the reach used when the user is in Creative Mode. Defaults to
   * "reach" if unspecified.
   */
  creative_reach?: MinecraftPiercingWeaponCreativeReach;

  /**
   * @remarks
   * Added tolerance to the view vector raycast for detecting entity
   * collisions.
   */
  hitbox_margin?: number;

  /**
   * @remarks
   * Defines the range (in blocks) along the user's view vector where
   * entities can be hit. Only targets within this distance are
   * considered. Block collisions between the user and target block
   * damage and its effects.
   */
  reach?: MinecraftPiercingWeaponReach;

}


/**
 * Item FloatRange (FloatRange)
 * Specifies a numeric range between minimum and maximum values for
 * randomized item properties. Used for variable durability, damage
 * ranges, or timing intervals. The game picks a random value within
 * the range when the property is evaluated, adding natural variation to
 * item behavior.
 */
export interface MinecraftPiercingWeaponCreativeReach {

  max?: number;

  min?: number;

}


/**
 * Item FloatRange (FloatRange)
 * Specifies a numeric range between minimum and maximum values for
 * randomized item properties. Used for variable durability, damage
 * ranges, or timing intervals. The game picks a random value within
 * the range when the property is evaluated, adding natural variation to
 * item behavior.
 */
export interface MinecraftPiercingWeaponReach {

  max?: number;

  min?: number;

}