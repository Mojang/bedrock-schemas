// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:kinetic_weapon
 * 
 * minecraft:kinetic_weapon Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Kinetic Weapon (minecraft:kinetic_weapon)
 * Allows an item to deal kinetic damage and its effects. This
 * happens every tick while in use, in a straight line along the
 * user's view vector, with damage computed based on both the
 * user's and the target's velocity projected onto the view vector
 * (via a dot product). The more the user and target move toward each
 * other, and the more this movement is aligned with the user's view
 * vector, the higher the damage. After "damage_multiplier" and
 * "damage_modifier" are applied, the resulting damage is floored to
 * the nearest lower integer.
 */
export default interface MinecraftKineticWeapon {

  /**
   * @remarks
   * Defines the reach used when the user is in Creative Mode. Defaults to
   * "reach" if unspecified.
   */
  creative_reach?: MinecraftKineticWeaponCreativeReach;

  /**
   * @remarks
   * Conditions that need to be satisfied for damage to be applied. If
   * not specified, damage is not applied.
   */
  damage_conditions?: MinecraftKineticWeaponDamageConditions;

  /**
   * @remarks
   * Value added to the the scaled dot product (after applying
   * "damage_multiplier").
   */
  damage_modifier?: number;

  /**
   * @remarks
   * Value multiplied to sum of the dot products of the user and
   * target's velocity vectors projected onto the view vector.
   */
  damage_multiplier?: number;

  /**
   * @remarks
   * Time, in ticks, after which kinetic damage and its effects start
   * being applied.
   */
  delay?: number;

  /**
   * @remarks
   * Conditions that need to be satisfied for riders to be
   * dismounted. If not specified, riders cannot be dismounted.
   */
  dismount_conditions?: MinecraftKineticWeaponDismountConditions;

  /**
   * @remarks
   * Added tolerance to the view vector raycast for detecting entity
   * collisions.
   */
  hitbox_margin?: number;

  /**
   * @remarks
   * Conditions that need to be satisfied for knockback to be
   * applied. If not specified, knockback is not applied.
   */
  knockback_conditions?: MinecraftKineticWeaponKnockbackConditions;

  /**
   * @remarks
   * Defines the range (in blocks) along the user's view vector where
   * entities can be hit. Only targets within this distance are
   * considered. Block collisions between the user and target block
   * damage and its effects.
   */
  reach?: MinecraftKineticWeaponReach;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftKineticWeaponCreativeReach {

  max?: number;

  min?: number;

}


/**
 * Item Components Kinetic Weapon Kinetic Effect Conditions
 * (minecraft:kinetic_weapon kinetic_effect_conditions)
 * Conditions that need to be satisfied for a specific effect of a
 * kinetic weapon to be applied.
 */
export interface MinecraftKineticWeaponDamageConditions {

  /**
   * @remarks
   * Time, in ticks, during which the effect can be applied after
   * "delay" elapses. If negative, the effect is applied 
   * indefinitely.
   */
  max_duration?: number;

  /**
   * @remarks
   * Minimum relative speed of the user with respect to the target
   * (projected onto the view vector via a dot product) required for
   * the effect to be applied.
   */
  min_relative_speed?: number;

  /**
   * @remarks
   * Minimum user's speed (projected onto the view vector via a dot
   * product) required for the effect to be applied.
   */
  min_speed?: number;

}


/**
 * Item Components Kinetic Weapon Kinetic Effect Conditions
 * (minecraft:kinetic_weapon kinetic_effect_conditions)
 * Conditions that need to be satisfied for a specific effect of a
 * kinetic weapon to be applied.
 */
export interface MinecraftKineticWeaponDismountConditions {

  /**
   * @remarks
   * Time, in ticks, during which the effect can be applied after
   * "delay" elapses. If negative, the effect is applied 
   * indefinitely.
   */
  max_duration?: number;

  /**
   * @remarks
   * Minimum relative speed of the user with respect to the target
   * (projected onto the view vector via a dot product) required for
   * the effect to be applied.
   */
  min_relative_speed?: number;

  /**
   * @remarks
   * Minimum user's speed (projected onto the view vector via a dot
   * product) required for the effect to be applied.
   */
  min_speed?: number;

}


/**
 * Item Components Kinetic Weapon Kinetic Effect Conditions
 * (minecraft:kinetic_weapon kinetic_effect_conditions)
 * Conditions that need to be satisfied for a specific effect of a
 * kinetic weapon to be applied.
 */
export interface MinecraftKineticWeaponKnockbackConditions {

  /**
   * @remarks
   * Time, in ticks, during which the effect can be applied after
   * "delay" elapses. If negative, the effect is applied 
   * indefinitely.
   */
  max_duration?: number;

  /**
   * @remarks
   * Minimum relative speed of the user with respect to the target
   * (projected onto the view vector via a dot product) required for
   * the effect to be applied.
   */
  min_relative_speed?: number;

  /**
   * @remarks
   * Minimum user's speed (projected onto the view vector via a dot
   * product) required for the effect to be applied.
   */
  min_speed?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftKineticWeaponReach {

  max?: number;

  min?: number;

}