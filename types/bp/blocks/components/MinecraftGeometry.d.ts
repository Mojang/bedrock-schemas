// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:geometry
 * 
 * minecraft:geometry Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Geometry (minecraft:geometry)
 * The description identifier of the geometry to use to render this
 * block. This identifier must either match an existing geometry
 * identifier in any of the loaded resource packs or be one of the
 * currently supported Vanilla identifiers: "minecraft:geometry.full_block" or
 * "minecraft:geometry.cross".
 * Note: From 1.21.80 onward, when using a minecraft:geometry component
 * or minecraft:material_instances component, you must include 
 * both.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `String`.

 */
export default interface MinecraftGeometry {

  /**
   * @remarks
   * An optional list of true/false values that define the visibility of
   * individual bones in the geometry file.
   */
  bone_visibility?: { [key: string]: boolean };

  /**
   * @remarks
   * An optional identifer of a culling definition. The culling
   * definition is used to determine which faces of the block should be
   * culled when rendering. The culling definition can be used to
   * optimize rendering performance by reducing the number of faces
   * that need to be rendered.
   */
  culling?: string;

  /**
   * @remarks
   * [Experimental] - A string that allows culling rule to group
   * multiple blocks together when comparing them. When using the
   * minecraft namespace, the only allowed culling layer identifiers are
   * : "minecraft:culling_layer.undefined" or
   * "minecraft:culling_layer.leaves". Additionally, the feature is
   * currently only usable behind the "upcoming creator features" 
   * toggle.
   */
  culling_layer?: string;

  /**
   * @remarks
   * Currently only available with the VoxelShape experiment on. The
   * voxel shape used for culling adjacent block faces. Voxel shapes
   * work together with culling rules and will not function if there is
   * no culling rule defined for the block. Only adjacent blocks with
   * voxel shapes will occlude using this shape. Blocks using
   * "minecraft:geometry.full_block" always use the unit cube shape and
   * will ignore custom shapes if specified. When using the minecraft
   * namespace, the only currently available culling shape identifiers are
   * : "minecraft:empty" or "minecraft:unit_cube". When using no
   * namespaces or a custom one, the names must start and end with an
   * alpha-numeric character.
   */
  culling_shape?: string;

  /**
   * @remarks
   * Specifies the geometry description identifier to use to render this
   * block.
   */
  identifier?: string;

  /**
   * @remarks
   * A Boolean locking UV orientation of all bones in the geometry, or
   * an array of strings locking UV orientation of specific bones in
   * the geometry. For performance reasons it is recommended to use
   * the Boolean. Note that for cubes using Box UVs, rather than
   * Per-face UVs, 'uv_lock' is only supported if the cube faces are
   * square.
   */
  uv_lock?: string;

}