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
        "value": "regular"
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
        "value": "slow_flat"
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
        "value": "fast_flat"
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
        "value": "light"
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
        "value": "fast_sliding"
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
   * Player: [{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"bouncy"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"regular"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"slow_flat"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"fast_flat"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"light"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"fast_sliding"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"slow_sliding"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"sticky"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"high_resistance"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true},{"filter":{"test":"enum_property","subject":"other","domain":"minecraft:sulfur_cube_archetype","value":"explosive"},"horizontal_power":0.33,"vertical_power":0.06,"vertical_velocity_cap":8,"scale_previous_velocity":1,"horizontal_hit_angle_scale":1.6,"vertical_hit_angle_scale":0.5,"vertical_position_angle_scale":0.8,"scale_with_damage":true}]
   *
   */
  presets?: object[];

}