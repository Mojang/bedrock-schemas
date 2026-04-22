// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.croak
 * 
 * minecraft:behavior.croak Samples

Frog - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json

"minecraft:behavior.croak": {
  "duration": 4.5,
  "filters": {
    "all_of": [
      {
        "test": "in_water",
        "value": false
      },
      {
        "test": "in_lava",
        "value": false
      }
    ]
  },
  "interval": [
    10,
    20
  ],
  "priority": 9
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Croak Behavior (minecraft:behavior.croak)
 * Allows the entity to croak at a random time interval with
 * configurable conditions.
 */
export default interface MinecraftBehaviorCroak {

  control_flags?: string[];

  /**
   * @remarks
   * Random range in seconds after which the croaking stops. Can also
   * be a constant.
   * 
   * Sample Values:
   * Frog: 4.5
   *
   */
  duration?: MinecraftBehaviorCroakDuration;

  /**
   * @remarks
   * Conditions for the behavior to start and keep running. The
   * interval between runs only starts after passing the filters.
   * 
   * Sample Values:
   * Frog: {"all_of":[{"test":"in_water","value":false},{"test":"in_lava","value":false}]}
   *
   */
  filters?: MinecraftBehaviorCroakFilters;

  /**
   * @remarks
   * Random range in seconds between runs of this behavior. Can also
   * be a constant.
   * 
   * Sample Values:
   * Frog: [10,20]
   *
   */
  interval?: MinecraftBehaviorCroakInterval;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Frog: 9
   *
   */
  priority?: number;

}


export enum MinecraftBehaviorCroakControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorCroakDuration {

  max?: number;

  min?: number;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorCroakFilters {

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


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorCroakInterval {

  max?: number;

  min?: number;

}