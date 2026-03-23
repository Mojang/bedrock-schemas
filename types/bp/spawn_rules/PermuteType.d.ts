// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:permutetype
 */

import * as jsoncommon from '../../common';

/**
 * Spawn PermuteType (PermuteType)
 * Defines a weighted spawn variant that may be selected when the
 * spawn rule triggers. Configure the entity to spawn and its
 * weight relative to other permutations—higher weights mean that
 * variant spawns more frequently. Enables mob variety like zombie
 * villagers occasionally replacing regular zombies.
 */
export default interface PermuteType {

  /**
   * @remarks
   * Specifies the entity type to spawn when selected
   */
  entity_type?: object;

  /**
   * @remarks
   * The minimum number of this permutation's entity to spawn
   */
  min_guaranteed?: number;

  /**
   * @remarks
   * The likelihood of this to be selected over the combined weight of
   * all the entities in the permutation
   */
  weight: number;

}