// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:apply_knockback_rules_instance
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Apply Knockback Rules Instance
 * (minecraft:apply_knockback_rules_instance)
 * Intance of rules definition.
 */
export default interface MinecraftApplyKnockbackRulesInstance {

  /**
   * @remarks
   * Whether or not the target should be fully immersed in water for
   * the knockback rules to apply.
   */
  check_if_target_is_immersed_in_water?: boolean;

  /**
   * @remarks
   * Filter for the entity type that will be affected by these
   * knockback rules.
   */
  filter?: MinecraftApplyKnockbackRulesInstanceFilter;

  /**
   * @remarks
   * Scaling factor to angle the knockback horizontally based on the
   * attacker's aim direction.
   */
  horizontal_hit_angle_scale?: number;

  /**
   * @remarks
   * Power with which a target should be knocked backwards.
   */
  horizontal_power?: number;

  /**
   * @remarks
   * Scaling factor to apply to the target's velocity before applying
   * knockback.
   */
  scale_previous_velocity?: number;

  /**
   * @remarks
   * Scaling factor to the magnitude of knockback based on the
   * inverse square of the damage.
   */
  scale_with_damage?: boolean;

  /**
   * @remarks
   * Scaling factor to angle the knockback vertically based on the
   * attacker's aim direction.
   */
  vertical_hit_angle_scale?: number;

  /**
   * @remarks
   * Scaling factor to angle the knockback vertically based on the
   * difference in the attacker's feet position to the target's feet
   * position.
   */
  vertical_position_angle_scale?: number;

  /**
   * @remarks
   * Power with which a target should be knocked upwards.
   */
  vertical_power?: number;

  /**
   * @remarks
   * Maximum allowed Y velocity after target's knockback rules have
   * been evaluated.
   */
  vertical_velocity_cap?: number;

}


/**
 * Filter (filter)
 */
export interface MinecraftApplyKnockbackRulesInstanceFilter {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}