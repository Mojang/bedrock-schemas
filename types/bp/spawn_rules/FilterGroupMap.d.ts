// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:filter_group_map
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Filter Group Map (Filter Group Map)
 * Filters allow data objects to specify test criteria which allows
 * their use. Filters can be defined by a single object of type
 * (Filter Test), an array of tests, collection groups, or a
 * combination of these objects.
 */
export default interface FilterGroupMap {

  /**
   * @remarks
   * Evaluates all tests in the group, all must pass in order for the
   * group to pass.
   */
  all?: FilterGroupMapAll;

  /**
   * @remarks
   * Evaluates all tests in the group, all must pass in order for the
   * group to pass.
   */
  all_of?: FilterGroupMapAllOf;

  /**
   * @remarks
   * Evaluates all tests in the group, all must pass in order for the
   * group to pass.
   */
  AND?: FilterGroupMapAND;

  /**
   * @remarks
   * Evaluates tests in the group, one or more must pass in order for
   * the group to pass.
   */
  any?: FilterGroupMapAny;

  /**
   * @remarks
   * Evaluates tests in the group, one or more must pass in order for
   * the group to pass.
   */
  any_of?: FilterGroupMapAnyOf;

  /**
   * @remarks
   * Evaluates all tests in the group, all must fail in order for the
   * group to pass.
   */
  none_of?: FilterGroupMapNoneOf;

  /**
   * @remarks
   * Evaluates all tests in the group, all must fail in order for the
   * group to pass.
   */
  NOT?: FilterGroupMapNOT;

  /**
   * @remarks
   * Evaluates tests in the group, one or more must pass in order for
   * the group to pass.
   */
  OR?: FilterGroupMapOR;

}


/**
 * All (all)
 */
export interface FilterGroupMapAll {

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
 * All Of (all_of)
 */
export interface FilterGroupMapAllOf {

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
 * AND (AND)
 */
export interface FilterGroupMapAND {

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
 * Any (any)
 */
export interface FilterGroupMapAny {

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
 * Any Of (any_of)
 */
export interface FilterGroupMapAnyOf {

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
 * None Of (none_of)
 */
export interface FilterGroupMapNoneOf {

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
 * NOT (NOT)
 */
export interface FilterGroupMapNOT {

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
 * OR (OR)
 */
export interface FilterGroupMapOR {

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