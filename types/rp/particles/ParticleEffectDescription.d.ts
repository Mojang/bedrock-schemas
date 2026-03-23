// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_effect_description
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Effect Description (particle_effect 
 * description)
 * The description MUST contain an identifier and
 * basic_render_parameters.
 */
export default interface ParticleEffectDescription {

  /**
   * @remarks
   * The parameters MUST contain a material and texture.
   */
  basic_render_parameters: ParticleEffectDescriptionBasicRenderParameters;

  identifier: string;

}


/**
 * Client Particles Particle Effect Basic Render Parameters
 * (particle_effect basic_render_parameters)
 * The parameters MUST contain a material and texture.
 */
export interface ParticleEffectDescriptionBasicRenderParameters {

  /**
   * @remarks
   * The material used for rendering the particle effect.
   */
  material: string;

  /**
   * @remarks
   * The texture path used for the particle effect.
   */
  texture: string;

}