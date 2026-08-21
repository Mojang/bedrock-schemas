// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:conditional_bandwidth_optimization
 * 
 * minecraft:conditional_bandwidth_optimization Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:conditional_bandwidth_optimization": {}


Arrow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/arrow.json

"minecraft:conditional_bandwidth_optimization": {
  "default_values": {
    "max_dropped_ticks": 7,
    "max_optimized_distance": 80,
    "use_motion_prediction_hints": true
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Conditional Bandwidth Optimization
 * (minecraft:conditional_bandwidth_optimization)
 * Defines the Conditional Spatial Update Bandwidth Optimizations of
 * this entity.
 */
export default interface MinecraftConditionalBandwidthOptimization {

  /**
   * @remarks
   * The object containing the conditional bandwidth optimization 
   * values.
   */
  conditional_values?: MinecraftConditionalBandwidthOptimizationConditionalValues[];

  /**
   * @remarks
   * The object containing the default bandwidth optimization 
   * values.
   * 
   * Sample Values:
   * Arrow: {"max_dropped_ticks":7,"max_optimized_distance":80,"use_motion_prediction_hints":true}
   *
   */
  default_values?: MinecraftConditionalBandwidthOptimizationDefaultValues;

}


/**
 * The object containing the conditional bandwidth optimization 
 * values.
 */
export interface MinecraftConditionalBandwidthOptimizationConditionalValues {

  /**
   * @remarks
   * Conditions that must be met for these optimization values to be
   * used.
   */
  conditional_values?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * In relation to the optimization value, determines the maximum ticks
   * spatial update packets can be not sent.
   */
  max_dropped_ticks?: number;

  /**
   * @remarks
   * The maximum distance considered during bandwidth optimizations. Any
   * value below the max is interpolated to find optimization, and
   * any value greater than or equal to this max results in max
   * optimization.
   */
  max_optimized_distance?: number;

  /**
   * @remarks
   * When set to true, smaller motion packets will be sent during drop
   * packet intervals, resulting in the same amount of packets being
   * sent as without optimizations but with much less data being sent.
   * This should be used when actors are travelling very quickly or
   * teleporting to prevent visual oddities.
   */
  use_motion_prediction_hints?: boolean;

}


/**
 * Default Values (default_values)
 */
export interface MinecraftConditionalBandwidthOptimizationDefaultValues {

  /**
   * @remarks
   * Determines the maximum ticks spatial update packets can be not
   * sent.
   */
  max_dropped_ticks?: number;

  /**
   * @remarks
   * The maximum distance considered during bandwidth 
   * optimizations.
   */
  max_optimized_distance?: number;

  /**
   * @remarks
   * When true, smaller motion packets will be sent during drop packet
   * intervals.
   */
  use_motion_prediction_hints?: boolean;

}