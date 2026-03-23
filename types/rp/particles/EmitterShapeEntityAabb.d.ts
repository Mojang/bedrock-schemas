// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_shape_entity_aabb
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Shape Entity Aabb
 * (emitter_shape_entity_aabb)
 * Emits particles from random positions within the attached entity's
 * axis-aligned bounding box. The emission volume automatically scales
 * with entity size, making it perfect for body-covering effects like
 * burning, freezing, poison clouds, healing auras, or damage feedback
 * that should wrap around creatures of any size.
 */
export default interface EmitterShapeEntityAabb {

  /**
   * @remarks
   * The direction of particle emission. Can be a string ('inwards' or
   * 'outwards'), or an array of [x, y, z] Molang expressions.
   */
  direction?: string;

  surface_only?: boolean;

}