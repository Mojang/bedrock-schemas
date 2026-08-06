// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:apply_knockback_rules
 * 
 * minecraft:apply_knockback_rules Samples

Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "horizontal_power": 0.6,
      "vertical_power": -0.6,
      "vertical_velocity_cap": -0.4,
      "check_if_target_is_immersed_in_water": true
    }
  ]
}


Egg - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/egg.json

"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "vertical_power": 0.1,
      "vertical_velocity_cap": 0.1
    }
  ]
}


Iron Golem - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json

"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "horizontal_power": 0.52,
      "vertical_power": 0.39,
      "vertical_velocity_cap": 0.8
    }
  ]
}


Player - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json

"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "bouncy"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "regular"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_bouncy"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.24,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_flat"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_flat"
      },
      "horizontal_power": 0.365,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "light"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.18,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_sliding"
      },
      "horizontal_power": 0.265,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_sliding"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "sticky"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "high_resistance"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "explosive"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.09,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "hot"
      },
      "horizontal_power": 0.165,
      "vertical_power": 0.105,
      "vertical_velocity_cap": 8,
      "slowdown_scale": 1,
      "scale_with_damage": true,
      "knockback_mode": "hit_direction",
      "extra_knockback_approach": "multiply_reduced"
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Apply Knockback Rules 
 * (minecraft:apply_knockback_rules)
 * Defines how an entity applies knockback.
 * Note: Released out of beta in format version 1.26.30. The preset
 * field `extra_knockback_approach` controls how knockback from
 * enchantments, sprinting, and swimming combines with the preset's
 * power (`reapply_default` preserves the prior behavior; `multiply`
 * multiplies the preset's power by the extra-knockback 
 * factor).
 */
export default interface MinecraftApplyKnockbackRules {

  /**
   * @remarks
   * Array of rules instances defining how knockback should be
   * applied to the entity.
   * 
   * Sample Values:
   * Drowned: [{"horizontal_power":0.6,"vertical_power":-0.6,"vertical_velocity_cap":-0.4,"check_if_target_is_immersed_in_water":true}]
   *
   * Egg: [{"vertical_power":0.1,"vertical_velocity_cap":0.1}]
   *
   * Iron Golem: [{"horizontal_power":0.52,"vertical_power":0.39,"vertical_velocity_cap":0.8}]
   *
   */
  presets?: MinecraftApplyKnockbackRulesPresets[];

}


/**
 * Entity Apply Knockback Rules Instance
 * (minecraft:apply_knockback_rules_instance)
 * Intance of rules definition.
 */
export interface MinecraftApplyKnockbackRulesPresets {

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
  filter?: MinecraftApplyKnockbackRulesPresetsFilter;

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


export enum MinecraftApplyKnockbackRulesPresetsExtraKnockbackApproach {
  multiplyReduced = `multiply_reduced`,
  reapplyDefault = `reapply_default`
}


/**
 * Filter (filter)
 */
export interface MinecraftApplyKnockbackRulesPresetsFilter {

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


export enum MinecraftApplyKnockbackRulesPresetsKnockbackMode {
  hitDirection = `hit_direction`,
  relativeHorizontal = `relative_horizontal`
}