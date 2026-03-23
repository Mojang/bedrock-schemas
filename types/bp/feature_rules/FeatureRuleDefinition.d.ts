// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Feature Rules Documentation - minecraft:feature_rule_definition
 */

import * as jsoncommon from '../../common';

/**
 * Feature Rule Definition
 * Feature Rule Definition.
 */
export default interface FeatureRuleDefinition {

  /**
   * @remarks
   * Parameters to control where and when the feature will be
   * placed.
   */
  conditions?: object;

  /**
   * @remarks
   * Identifier for the Feature Rule and Feture to place.
   */
  description?: object;

  /**
   * @remarks
   * Parameters controlling the initial scatter of the feature.
   */
  distribution?: FeatureRuleDefinitionDistribution;

}


/**
 * Distribution
 * Controls the scatter distribution of features during world
 * generation.
 */
export interface FeatureRuleDefinitionDistribution {

  /**
   * @remarks
   * The order in which coordinates will be evaluated. Should be
   * used when a coordinate depends on another. Defaults to 
   * 'xzy'.
   */
  coordinate_eval_order?: FeatureRuleDefinitionDistributionCoordinateEvalOrder| string;

  /**
   * @remarks
   * Number of scattered positions to generate. Can be an integer or
   * a Molang expression.
   */
  iterations?: number;

  /**
   * @remarks
   * Probability that this scatter will occur (0.0 to 1.0 or Molang
   * expression). If not triggered, no iterations will run.
   */
  scatter_chance?: number;

  /**
   * @remarks
   * Distribution for the X coordinate (evaluated each iteration). Can
   * be an integer, range object, or Molang expression.
   */
  x?: number;

  /**
   * @remarks
   * Distribution for the Y coordinate (evaluated each iteration). Can
   * be an integer, range object, or Molang expression.
   */
  y?: number;

  /**
   * @remarks
   * Distribution for the Z coordinate (evaluated each iteration). Can
   * be an integer, range object, or Molang expression.
   */
  z?: number;

}


export enum FeatureRuleDefinitionDistributionCoordinateEvalOrder {
  xyz = `xyz`,
  xzy = `xzy`,
  yxz = `yxz`,
  yzx = `yzx`,
  zxy = `zxy`,
  zyx = `zyx`
}