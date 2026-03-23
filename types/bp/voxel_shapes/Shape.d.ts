// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Voxel Shapes Documentation - minecraft:shape
 */

import * as jsoncommon from '../../common';

/**
 * Voxel Shapes Shape (Shape)
 * Defines a voxel shape with boxes.
 */
export default interface Shape {

  boxes: ShapeBoxes[];

}


/**
 * Voxel Shapes Box (Box)
 * Defines a bounding box with min and max coordinates.
 */
export interface ShapeBoxes {

  max: number[];

  min: number[];

}