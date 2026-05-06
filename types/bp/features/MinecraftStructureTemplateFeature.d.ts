// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Features Documentation - minecraft:structure_template_feature
 * 
 * minecraft:structure_template_feature Samples

Example - example

"minecraft:structure_template_feature": {
  "format_version": "1.13.0",
  "minecraft:aggregate_feature": {
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
      "description": {
        "identifier": "example:hot_air_balloon_feature"
      },
      "structure_name": "example:hot_air_balloon",
      "adjustment_radius": 8,
      "facing_direction": "random",
      "constraints": {
        "unburied": {},
        "block_intersection": {
          "block_allowlist": [
            "minecraft:air"
          ]
        }
      }
    }
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Structure Template Feature 
 * (minecraft:structure_template_feature)
 * Places a structure in the world. The structure must be stored as
 * a .mcstructure file in the `structures` subdirectory of a
 * behavior pack. It is possible to reference structures that are
 * part of other behavior packs, they do not need to come from the
 * same behavior pack as this feature. Constraints can be defined to
 * specify where the structure is allowed to be placed. During
 * placement, the feature will search for a position within the
 * adjustment_radius that satisfies all constraints. If none are
 * found, the structure will not be placed. Succeeds if the
 * structure is placed in the world. Fails if the structure fails to
 * be placed within the world.
 */
export default interface MinecraftStructureTemplateFeature {

  /**
   * @remarks
   * How far the structure is allowed to move when searching for a
   * valid placement position. Search is radial, stopping when the
   * nearest valid position is found. Defaults to 0 if omitted.
   */
  adjustment_radius?: number;

  /**
   * @remarks
   * Specific constraints that must be satisfied when placing this
   * structure.
   */
  constraints: MinecraftStructureTemplateFeatureConstraints;

  description: MinecraftStructureTemplateFeatureDescription;

  /**
   * @remarks
   * Direction the structure will face when placed in the world.
   * Defaults to "random" if omitted.
   */
  facing_directionLessThannorthsoutheastwestrandom?: string;

  format_version?: string;

  /**
   * @remarks
   * Specifies which Y coordinate of the structure is considered its
   * ground level. This value determines which layer of the structure is
   * checked by the "grounded" and "leveled" constraints and is used
   * as a downward vertical offset during placement. If the value
   * exceeds the structure's height, it is clamped to the maximum valid
   * value and a content warning is emitted. Defaults to 0.
   */
  ground_level?: number;

  /**
   * @remarks
   * If true, centers and rotates the structure around the placement
   * position, overriding any specified horizontal "offset". Defaults to
   * "false" if omitted.
   */
  rotate_around_center?: boolean;

}


/**
 */
export interface MinecraftStructureTemplateFeatureConstraints {

  /**
   * @remarks
   * When specified, ensures the structure only intersects with
   * allowlisted blocks.
   */
  block_intersection?: MinecraftStructureTemplateFeatureConstraintsBlockIntersection;

  /**
   * @remarks
   * When specified, ensures the structure's ground level touches the
   * ground.
   */
  grounded?: object;

  /**
   * @remarks
   * When specified, ensures the structure's ground level is placed on
   * mostly flat terrain.
   */
  leveled?: MinecraftStructureTemplateFeatureConstraintsLeveled;

  /**
   * @remarks
   * When specified, ensures the structure has air above it.
   */
  unburied?: object;

}


/**
 */
export interface MinecraftStructureTemplateFeatureConstraintsBlockIntersection {

  block_allowlistblock_whitelist: string[];

  /**
   * @remarks
   * If true, only motion-blocking blocks within the structure are
   * checked for intersections with blocks in
   * "block_allowlist|block_whitelist". If false, all blocks in the
   * structure except empty ones are checked for intersections, including
   * air.
   */
  only_check_intersection_for_motion_blocking_blocks: boolean;

}


/**
 */
export interface MinecraftStructureTemplateFeatureConstraintsLeveled {

  /**
   * @remarks
   * Maximum allowed height difference between the placement position and
   * terrain samples taken halfway along each side of the structure. A
   * valid terrain sample consists of a solid block with a
   * non‑solid block above it. Defaults to 2.
   */
  max_steepness?: number;

}


/**
 */
export interface MinecraftStructureTemplateFeatureDescription {

  /**
   * @remarks
   * The name of this feature in the form
   * 'namespace_name:feature_name'. 'feature_name' must match the
   * filename.
   */
  identifier: string;

}