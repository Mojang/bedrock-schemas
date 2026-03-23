// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:filter_test
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Filter Test (Filter Test)
 * A single filter condition used to test entity or world properties.
 * Filters check things like biome type, weather, time of day, or
 * entity attributes. Multiple filters can be combined with all_of,
 * any_of, and none_of operators.
 */
export default interface FilterTest {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: string;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: string;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: string;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: number;

}