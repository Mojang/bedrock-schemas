// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Voxel Shapes Documentation - minecraft:box
 */

import * as jsoncommon from '../../common';

/**
 * Voxel Shapes Box (Box)
 * Defines a bounding box with min and max coordinates.
 */
export default interface Box {

  max: number[];

  min: number[];

}