// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Voxel Shapes Documentation - minecraft:voxel_shape_document
 */

import * as jsoncommon from '../../common';

/**
 * Voxel Shape Document (voxel_shape_document)
 * A behavior pack voxel shape document for Minecraft Bedrock Edition.
 * This describes the complete JSON file structure including
 * format_version and the minecraft:voxel_shape wrapper.
 */
export default interface VoxelShapeDocument {

  /**
   * @remarks
   * The format version of this voxel shape file. Currently 
   * 1.21.110.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The voxel shape definition container with description and shape
   * data.
   */
  "minecraft:voxel_shape": VoxelShapeDocumentMinecraftVoxelShape;

}


/**
 * Voxel Shapes VoxelShapeFile (VoxelShapeFile)
 * Defines a complete voxel shape file.
 */
export interface VoxelShapeDocumentMinecraftVoxelShape {

  description: VoxelShapeDocumentMinecraftVoxelShapeDescription;

  shape: VoxelShapeDocumentMinecraftVoxelShapeShape;

}


/**
 * Voxel Shapes Description (Description)
 * Defines voxel shape identifier.
 */
export interface VoxelShapeDocumentMinecraftVoxelShapeDescription {

  identifier: object;

}


/**
 * Voxel Shapes Shape (Shape)
 * Defines a voxel shape with boxes.
 */
export interface VoxelShapeDocumentMinecraftVoxelShapeShape {

  boxes: VoxelShapeDocumentMinecraftVoxelShapeShapeBoxes[];

}


/**
 * Voxel Shapes Box (Box)
 * Defines a bounding box with min and max coordinates.
 */
export interface VoxelShapeDocumentMinecraftVoxelShapeShapeBoxes {

  max: number[];

  min: number[];

}