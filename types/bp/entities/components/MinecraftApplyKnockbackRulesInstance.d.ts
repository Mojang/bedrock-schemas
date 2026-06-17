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
   * Defines the approach for combining extra knockback from
   * enchantments or sprinting:
- "reapply_default": Reapplies knockback
   * again with default knockback parameters, i.e. values not defined by
   * this component.
- "multiply_reduced": Multiplies the extra
   * knockback with the base knockback and a reduction factor, and
   * adds it to the base knockback.
   */
  extra_knockback_approach?: string;

  /**
   * @remarks
   * Filter for the entity type that will be affected by these
   * knockback rules.
   */
  filter?: MinecraftApplyKnockbackRulesInstanceFilter;

  /**
   * @remarks
   * Power with which a target should be knocked backwards.
   */
  horizontal_power?: number;

  /**
   * @remarks
   * Defines how knockback is applied to the target:
-
   * "relative_horizontal": Applies knockback along the horizontal direction
   * from the attacker to the target.
- "hit_direction": Applies
   * knockback based on the hit direction and the point of impact (e.g.
   * hits to the bottom of the entity or from below push it upward, hits
   * on the left side of the entity push it to the right).
   */
  knockback_mode?: string;

  /**
   * @remarks
   * Scaling factor to the magnitude of knockback based on the
   * inverse square of the damage.
   */
  scale_with_damage?: boolean;

  /**
   * @remarks
   * Scaling factor to apply to the target's velocity before applying
   * knockback.
   */
  slowdown_scale?: number;

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


export enum MinecraftApplyKnockbackRulesInstanceExtraKnockbackApproach {
  multiplyReduced = `multiply_reduced`,
  reapplyDefault = `reapply_default`
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


export enum MinecraftApplyKnockbackRulesInstanceKnockbackMode {
  hitDirection = `hit_direction`,
  relativeHorizontal = `relative_horizontal`
}