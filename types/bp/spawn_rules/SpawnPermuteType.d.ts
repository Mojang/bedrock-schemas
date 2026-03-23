// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_permutetype
 */

import * as jsoncommon from '../../common';

/**
 * Spawn PermuteType (Spawn PermuteType)
 * Weighted spawn permutation that selects which entity variant to
 * spawn. Each permutation has an entity identifier and weight—the game
 * randomly chooses between permutations based on relative weights when
 * the spawn rule activates. Creates natural mob variety in spawn
 * distributions.
 */
export default interface SpawnPermuteType {

  /**
   * @remarks
   * Permutation to spawn when selected
   */
  entity_type?: object;

  /**
   * @remarks
   * The minimum number of this permutation to spawn
   */
  min_guaranteed?: number;

  /**
   * @remarks
   * The ratio of all of the entities that are in the permutation
   */
  weight: number;

}