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

Egg - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/egg.json

"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "vertical_power": 0.12,
      "vertical_velocity_cap": 0.12
    }
  ]
}


Iron Golem - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json

"minecraft:apply_knockback_rules": {
  "presets": [
    {
      "horizontal_power": 1.3,
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
      "horizontal_power": 0.33,
      "vertical_power": 0.07,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "regular"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.07,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:ball_archetype",
        "value": "slow_bouncy"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.16,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_flat"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.07,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_flat"
      },
      "horizontal_power": 0.73,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "light"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.12,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "fast_sliding"
      },
      "horizontal_power": 0.53,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "slow_sliding"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "sticky"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "high_resistance"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "explosive"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    },
    {
      "filter": {
        "test": "enum_property",
        "subject": "other",
        "domain": "minecraft:sulfur_cube_archetype",
        "value": "hot"
      },
      "horizontal_power": 0.33,
      "vertical_power": 0.06,
      "vertical_velocity_cap": 8,
      "scale_previous_velocity": 1,
      "horizontal_hit_angle_scale": 1.6,
      "vertical_hit_angle_scale": 0.5,
      "vertical_position_angle_scale": 0.8,
      "scale_with_damage": true
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Apply Knockback Rules 
 * (minecraft:apply_knockback_rules)
 * Defines how an entity applies knockback.
 */
export default interface MinecraftApplyKnockbackRules {

  /**
   * @remarks
   * Array of rules instances defining how knockback should be
   * applied to the entity.
   * 
   * Sample Values:
   * Egg: [{"vertical_power":0.12,"vertical_velocity_cap":0.12}]
   *
   * Iron Golem: [{"horizontal_power":1.3,"vertical_power":0.39,"vertical_velocity_cap":0.8}]
   *
   * Player: [{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"bouncy"},"horizontal_power":0.33,"vertical_power":0.07,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"regular"},"horizontal_power":0.33,"vertical_power":0.07,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:ball_archetype","value":"slow_bouncy"},"horizontal_power":0.33,"vertical_power":0.16,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"slow_flat"},"horizontal_power":0.33,"vertical_power":0.07,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"fast_flat"},"horizontal_power":0.73,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"light"},"horizontal_power":0.33,"vertical_power":0.12,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"fast_sliding"},"horizontal_power":0.53,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"slow_sliding"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"sticky"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"high_resistance"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"explosive"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"hot"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true}]
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
   * Filter for the entity type that will be affected by these
   * knockback rules.
   */
  filter?: MinecraftApplyKnockbackRulesPresetsFilter;

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