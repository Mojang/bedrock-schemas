// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Model Geometry Documentation - minecraft:geometry.v1.8.0
 */

import * as jsoncommon from '../../common';

/**
 * Geometry (v1.8.0) (geometry)
 * Legacy geometry format using box-mapped UVs. This format uses the
 * 'geometry.<name>' pattern for model definitions. For newer
 * projects, consider using format version 1.12.0 or later which
 * supports per-face UV mapping.
 */
export default interface Geometry {

  /**
   * @remarks
   * Expands or shrinks the bone's cubes. This property has been
   * deprecated in newer geometry format versions.
   */
  bonesinflate?: number;

  /**
   * @remarks
   * When true, resets the bone to its bind pose before applying
   * animations. This property has been deprecated in newer geometry
   * format versions.
   */
  bonesreset?: boolean;

  debug?: boolean;

  format_version: string | number[];

  "geometryazAZ09_:": GeometryGeometryazAZ09;

}


/**
 */
export interface GeometryGeometryazAZ09 {

  bones?: GeometryGeometryazAZ09Bones[];

  cape?: string;

  debug?: boolean;

  textureheight?: number;

  texturewidth?: number;

  visible_bounds_offset?: string[];

}


/**
 */
export interface GeometryGeometryazAZ09Bones {

  bind_pose_rotation?: string[];

  cubes?: GeometryGeometryazAZ09BonesCubes[];

  debug?: boolean;

  locators?: { [key: string]: GeometryGeometryazAZ09BonesLocators };

  mirror?: boolean;

  name: string;

  neverRender?: boolean;

  parent?: string;

  pivot?: string[];

  poly_mesh?: { [key: string]: GeometryGeometryazAZ09BonesPolyMesh };

  render_group_id?: number;

  reset?: boolean;

  rotation?: string[];

  texture_meshes?: GeometryGeometryazAZ09BonesTextureMeshes[];

}


/**
 */
export interface GeometryGeometryazAZ09BonesCubes {

  mirror?: boolean;

  origin?: string[];

  size?: string[];

  uv?: string[];

}


/**
 */
export interface GeometryGeometryazAZ09BonesLocators {

}


/**
 */
export interface GeometryGeometryazAZ09BonesPolyMesh {

  normalized_uvs?: boolean;

  normals?: string[];

  polys: string[];

  positions?: string[];

  uvs?: string[];

}


/**
 */
export interface GeometryGeometryazAZ09BonesTextureMeshes {

  local_pivot?: string[];

  position?: string[];

  rotation?: string[];

  scale?: string[];

  texture: string;

  use_pixel_depth?: boolean;

}