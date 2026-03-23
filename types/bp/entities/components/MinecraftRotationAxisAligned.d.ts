// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:rotation_axis_aligned
 * 
 * minecraft:rotation_axis_aligned Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Rotation Axis Aligned (minecraft:rotation_axis_aligned)
 * Causes the entity to automatically rotate to align with the
 * nearest cardinal direction based on its current facing
 * direction.
Combining this with the
 * "minecraft:body_rotation_blocked" component will cause the
 * entity's body to align with the nearest cardinal direction and
 * remain fixed in that orientation, regardless of changes in its
 * facing direction.
 */
export default interface MinecraftRotationAxisAligned {

}