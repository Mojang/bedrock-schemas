// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_visual_effect_event
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Visual Effect Event
 * (particle_visual_effect_event)
 * Spawns another particle effect when triggered by particle events,
 * enabling cascading visual sequences. Reference other particle effects
 * by identifier to create chains like explosions spawning embers,
 * impacts creating dust clouds, or magical projectiles trailing
 * sparkles. Builds complex layered effects from simpler reusable
 * components.
 */
export default interface ParticleVisualEffectEvent {

  effect: object;

  pre_effect_expression?: { [key: string]: string };

  type: string;

}


export enum ParticleVisualEffectEventType {
  emitter = `emitter`,
  emitterBound = `emitter_bound`,
  particle = `particle`,
  particleWithVelocity = `particle_with_velocity`
}