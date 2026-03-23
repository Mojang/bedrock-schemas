// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:rail_sensor
 * 
 * minecraft:rail_sensor Samples

Command Block Minecart - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/command_block_minecart.json

 * At /minecraft:entity/component_groups/minecraft:command_block_active/minecraft:rail_sensor/: 
"minecraft:rail_sensor": {
  "check_block_types": true,
  "on_deactivate": {
    "event": "minecraft:command_block_deactivate"
  },
  "eject_on_activate": false,
  "eject_on_deactivate": false,
  "tick_command_block_on_activate": true,
  "tick_command_block_on_deactivate": false
}

 * At /minecraft:entity/component_groups/minecraft:command_block_inactive/minecraft:rail_sensor/: 
"minecraft:rail_sensor": {
  "check_block_types": false,
  "eject_on_activate": false,
  "eject_on_deactivate": false,
  "on_activate": {
    "event": "minecraft:command_block_activate"
  },
  "tick_command_block_on_activate": true,
  "tick_command_block_on_deactivate": false
}


Hopper Minecart - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hopper_minecart.json

 * At /minecraft:entity/component_groups/minecraft:hopper_active/minecraft:rail_sensor/: 
"minecraft:rail_sensor": {
  "on_activate": {
    "event": "minecraft:hopper_deactivate"
  }
}

 * At /minecraft:entity/component_groups/minecraft:hopper_inactive/minecraft:rail_sensor/: 
"minecraft:rail_sensor": {
  "on_deactivate": {
    "event": "minecraft:hopper_activate"
  }
}


Minecart - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/minecart.json

"minecraft:rail_sensor": {
  "eject_on_activate": true
}


Tnt Minecart - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tnt_minecart.json

 * At /minecraft:entity/component_groups/minecraft:inactive/minecraft:rail_sensor/: 
"minecraft:rail_sensor": {
  "on_activate": {
    "event": "minecraft:on_prime",
    "filters": {
      "all_of": [
        {
          "domain": "tntexplodes",
          "operator": "==",
          "test": "is_game_rule",
          "value": true
        }
      ]
    }
  }
}

 * At /minecraft:entity/component_groups/minecraft:instant_explode_tnt/minecraft:rail_sensor/: 
"minecraft:rail_sensor": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Rail Sensor (minecraft:rail_sensor)
 * Enables minecart-type entities to detect powered rails and
 * respond to activation state changes. Triggers events when the
 * entity passes over activated or deactivated rails, enabling custom
 * minecart behaviors like launching at boosted speed, stopping at
 * braking rails, or triggering special effects at detector 
 * rails.
 */
export default interface MinecraftRailSensor {

  /**
   * @remarks
   * If true, on tick this entity will trigger its on_deactivate 
   * behavior
   * 
   * Sample Values:
   * Command Block Minecart: true
   *
   */
  check_block_types?: boolean;

  /**
   * @remarks
   * If true, this entity will eject all of its riders when it
   * passes over an activated rail
   * 
   * Sample Values:
   * Minecart: true
   *
   */
  eject_on_activate?: boolean;

  /**
   * @remarks
   * If true, this entity will eject all of its riders when it
   * passes over a deactivated rail
   */
  eject_on_deactivate?: boolean;

  /**
   * @remarks
   * Event to call when the rail is activated
   * 
   * Sample Values:
   * Command Block Minecart: {"event":"minecraft:command_block_activate"}
   *
   * Hopper Minecart: {"event":"minecraft:hopper_deactivate"}
   *
   * Tnt Minecart: {"event":"minecraft:on_prime","filters":{"all_of":[{"domain":"tntexplodes","operator":"==","test":"is_game_rule","value":true}]}}
   *
   */
  on_activate?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Event to call when the rail is deactivated
   * 
   * Sample Values:
   * Command Block Minecart: {"event":"minecraft:command_block_deactivate"}
   *
   * Hopper Minecart: {"event":"minecraft:hopper_activate"}
   *
   */
  on_deactivate?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * If true, command blocks will start ticking when passing over an
   * activated rail
   * 
   * Sample Values:
   * Command Block Minecart: true
   *
   */
  tick_command_block_on_activate?: boolean;

  /**
   * @remarks
   * If false, command blocks will stop ticking when passing over a
   * deactivated rail
   */
  tick_command_block_on_deactivate?: boolean;

}