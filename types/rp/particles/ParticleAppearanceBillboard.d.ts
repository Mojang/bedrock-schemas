// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_appearance_billboard
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Appearance Billboard
 * (particle_appearance_billboard)
 * Controls how particle sprites render and orient toward the
 * camera. The facing_camera_mode determines billboard behavior:
 * 'lookat_xyz' always faces the camera (classic sprites), 'rotate_y' only
 * rotates vertically (tall flames), and direction modes align with
 * particle velocity (arrows, sparks). Size controls particle dimensions
 * using Molang for dynamic scaling.
 */
export default interface ParticleAppearanceBillboard {

  direction?: object;

  /**
   * @remarks
   * The facing mode of the billboard. Controls how the particle faces
   * the camera.
   */
  facing_camera_mode?: string;

  /**
   * @remarks
   * The size of the particle billboard, as [width, height] using
   * Molang expressions or numbers.
   */
  size: string[];

  uv?: object;

}


export enum ParticleAppearanceBillboardFacingCameraMode {
  lookatXyz = `lookat_xyz`,
  lookatY = `lookat_y`,
  lookatDirection = `lookat_direction`,
  rotateXyz = `rotate_xyz`,
  rotateY = `rotate_y`,
  directionX = `direction_x`,
  directionY = `direction_y`,
  directionZ = `direction_z`,
  emitterTransformXy = `emitter_transform_xy`,
  emitterTransformXz = `emitter_transform_xz`,
  emitterTransformYz = `emitter_transform_yz`
}