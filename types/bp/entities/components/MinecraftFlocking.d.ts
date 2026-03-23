// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:flocking
 * 
 * minecraft:flocking Samples

Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:flocking": {
  "in_water": false,
  "match_variants": false,
  "use_center_of_mass": false,
  "low_flock_limit": 4,
  "high_flock_limit": 8,
  "goal_weight": 2,
  "loner_chance": 0.1,
  "influence_radius": 6,
  "breach_influence": 0,
  "separation_weight": 1.75,
  "separation_threshold": 3,
  "cohesion_weight": 1.85,
  "cohesion_threshold": 6.5,
  "innner_cohesion_threshold": 3.5,
  "min_height": 4,
  "max_height": 4,
  "block_distance": 1,
  "block_weight": 0
}

 */

import * as jsoncommon from '../../../common';

/**
 * Flocking (minecraft:flocking)
 * Allows entities to flock in groups in water or not.
 */
export default interface MinecraftFlocking {

  /**
   * @remarks
   * The amount of blocks away the entity will look at to push away
   * from.
   * 
   * Sample Values:
   * Dolphin: 1
   *
   */
  block_distance?: number;

  /**
   * @remarks
   * The weight of the push back away from blocks.
   */
  block_weight?: number;

  /**
   * @remarks
   * The amount of push back given to a flocker that breaches out of
   * the water.
   */
  breach_influence?: number;

  /**
   * @remarks
   * The threshold in which to start applying cohesion.
   * 
   * Sample Values:
   * Dolphin: 6.5
   *
   */
  cohesion_threshold?: number;

  /**
   * @remarks
   * The weight applied for the cohesion steering of the flock.
   * 
   * Sample Values:
   * Dolphin: 1.85
   *
   */
  cohesion_weight?: number;

  /**
   * @remarks
   * The weight on which to apply on the goal output.
   * 
   * Sample Values:
   * Dolphin: 2
   *
   */
  goal_weight?: number;

  /**
   * @remarks
   * Determines the high bound amount of entities that can be
   * allowed in the flock.
   * 
   * Sample Values:
   * Dolphin: 8
   *
   */
  high_flock_limit?: number;

  /**
   * @remarks
   * Tells the Flocking Component if the entity exists in water.
   */
  in_water?: boolean;

  /**
   * @remarks
   * The area around the entity that allows others to be added to
   * the flock.
   * 
   * Sample Values:
   * Dolphin: 6
   *
   */
  influence_radius?: number;

  /**
   * @remarks
   * The distance in which the flocker will stop applying 
   * cohesion.
   * 
   * Sample Values:
   * Dolphin: 3.5
   *
   */
  innner_cohesion_threshold?: number;

  /**
   * @remarks
   * The percentage chance between 0-1 that a fish will spawn and not
   * want to join flocks. Invalid values will be capped at the end
   * points.
   * 
   * Sample Values:
   * Dolphin: 0.1
   *
   */
  loner_chance?: number;

  /**
   * @remarks
   * Determines the low bound amount of entities that can be allowed in
   * the flock.
   * 
   * Sample Values:
   * Dolphin: 4
   *
   */
  low_flock_limit?: number;

  /**
   * @remarks
   * Tells the flockers that they can only match similar entities that
   * also match the variant, mark variants, and color data of the
   * other potential flockers.
   */
  match_variants?: boolean;

  /**
   * @remarks
   * The max height allowable in the air or water.
   * 
   * Sample Values:
   * Dolphin: 4
   *
   */
  max_height?: number;

  /**
   * @remarks
   * The min height allowable in the air or water.
   * 
   * Sample Values:
   * Dolphin: 4
   *
   */
  min_height?: number;

  /**
   * @remarks
   * The distance that is determined to be to close to another flocking
   * and to start applying separation.
   * 
   * Sample Values:
   * Dolphin: 3
   *
   */
  separation_threshold?: number;

  /**
   * @remarks
   * The weight applied to the separation of the flock.
   * 
   * Sample Values:
   * Dolphin: 1.75
   *
   */
  separation_weight?: number;

  /**
   * @remarks
   * Tells the flockers that they will follow flocks based on the
   * center of mass.
   */
  use_center_of_mass?: boolean;

}