// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Voxel Shapes Documentation - minecraft:voxelshapefile
 */

import * as jsoncommon from '../../common';

/**
 * Voxel Shapes VoxelShapeFile (VoxelShapeFile)
 * Defines a complete voxel shape file.
 */
export default interface VoxelShapeFile {

  description: VoxelShapeFileDescription;

  shape: VoxelShapeFileShape;

}


/**
 * Voxel Shapes Description (Description)
 * Defines voxel shape identifier.
 */
export interface VoxelShapeFileDescription {

  identifier: object;

}


/**
 * Voxel Shapes Shape (Shape)
 * Defines a voxel shape with boxes.
 */
export interface VoxelShapeFileShape {

  boxes: VoxelShapeFileShapeBoxes[];

}


/**
 * Voxel Shapes Box (Box)
 * Defines a bounding box with min and max coordinates.
 */
export interface VoxelShapeFileShapeBoxes {

  max: number[];

  min: number[];

}