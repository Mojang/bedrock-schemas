// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:entity_sensor
 * 
 * minecraft:entity_sensor Samples

Parrot - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json

 * At /minecraft:entity/component_groups/minecraft:parrot_not_riding_player/minecraft:entity_sensor/: 
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "event": "minecraft:on_riding_player",
      "event_filters": {
        "all_of": [
          {
            "test": "is_riding",
            "operator": "equals",
            "subject": "self",
            "value": true
          },
          {
            "test": "has_component",
            "operator": "equals",
            "subject": "self",
            "value": "minecraft:behavior.look_at_player"
          }
        ]
      },
      "range": [
        2,
        2
      ]
    }
  ]
}

 * At /minecraft:entity/component_groups/minecraft:parrot_riding_player/minecraft:entity_sensor/: 
"minecraft:entity_sensor": {
  "relative_range": false,
  "subsensors": [
    {
      "event": "minecraft:on_not_riding_player",
      "event_filters": {
        "all_of": [
          {
            "test": "is_riding",
            "operator": "equals",
            "subject": "self",
            "value": false
          },
          {
            "test": "has_component",
            "operator": "not",
            "subject": "self",
            "value": "minecraft:behavior.look_at_player"
          }
        ]
      },
      "range": [
        2,
        2
      ]
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Sensor (minecraft:entity_sensor)
 * A component that owns multiple subsensors, each one firing an
 * event when a set of conditions are met by other entities within the
 * defined range.
 */
export default interface MinecraftEntitySensor {

  /**
   * @remarks
   * Limits the search to Players only for all subsensors.
   */
  find_players_only?: boolean;

  /**
   * @remarks
   * If true the subsensors' range is additive on top of the entity's
   * size.
   */
  relative_range?: boolean;

  /**
   * @remarks
   * The list of subsensors which sense for entities and emit events
   * when all their conditions are met.
   * 
   * Sample Values:
   * Parrot: [{"event":"minecraft:on_riding_player","event_filters":{"all_of":[{"test":"is_riding","operator":"equals","subject":"self","value":true},{"test":"has_component","operator":"equals","subject":"self","value":"minecraft:behavior.look_at_player"}]},"range":[2,2]}], [{"event":"minecraft:on_not_riding_player","event_filters":{"all_of":[{"test":"is_riding","operator":"equals","subject":"self","value":false},{"test":"has_component","operator":"not","subject":"self","value":"minecraft:behavior.look_at_player"}]},"range":[2,2]}]
   *
   */
  subsensors?: MinecraftEntitySensorSubsensors[];

}


/**
 * The list of subsensors which sense for entities and emit events
 * when all their conditions are met.
 */
export interface MinecraftEntitySensorSubsensors {

  /**
   * @remarks
   * How many seconds should elapse before the subsensor can once
   * again sense for entities. The cooldown is applied on top of the
   * base 1 tick (0.05 seconds) delay. Negative values will result in
   * no cooldown being used.
   */
  cooldown?: number;

  /**
   * @remarks
   * Event to fire when the conditions are met.
   */
  event?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * The set of conditions that must be satisfied to fire the 
   * event.
   */
  event_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * The maximum number of entities that must pass the filter conditions for
   * the event to send.
   */
  maximum_count?: number;

  /**
   * @remarks
   * The minimum number of entities that must pass the filter conditions for
   * the event to send.
   */
  minimum_count?: number;

  /**
   * @remarks
   * The maximum horizontal and vertical distance another entity can
   * be from this and have the filters checked against it.
   */
  range?: number[];

  /**
   * @remarks
   * If true requires all nearby entities to pass the filter conditions for
   * the events to send.
   */
  require_all?: boolean;

  /**
   * @remarks
   * Vertical offset applied to the entity's position when computing the
   * distance from other entities.
   */
  y_offset?: number;

}