// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_event_node
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Event Node (particle_event_node)
 * Defines actions triggered by particle events like spawning, collision,
 * or expiration. Event nodes can run Molang expressions to modify
 * variables, spawn nested particle effects, play sounds, or
 * control emitter state. Chain multiple effects together for
 * complex reactions like explosions spawning secondary debris
 * particles.
 */
export default interface ParticleEventNode {

  expression?: { [key: string]: string };

  log?: string;

  particle_effect?: ParticleEventNodeParticleEffect;

  randomize?: ParticleEventNodeRandomize[];

  sequence?: object[];

  sound_effect?: ParticleEventNodeSoundEffect;

}


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
export interface ParticleEventNodeParticleEffect {

  effect: object;

  pre_effect_expression?: { [key: string]: string };

  type: string;

}


export enum ParticleEventNodeParticleEffectType {
  emitter = `emitter`,
  emitterBound = `emitter_bound`,
  particle = `particle`,
  particleWithVelocity = `particle_with_velocity`
}


/**
 * Client Particles Particle Event Random Node
 * (particle_event_random_node)
 * Triggers one of several possible effects randomly when a
 * particle event fires, with weighted probability. Assign weights to
 * different event outcomes for varied responses—like impacts sometimes
 * spawning sparks, sometimes dust, with configurable chances. Adds
 * natural variation to effects without needing complex Molang 
 * logic.
 */
export interface ParticleEventNodeRandomize {

  expression?: { [key: string]: string };

  log?: string;

  particle_effect?: ParticleEventNodeRandomizeParticleEffect;

  randomize?: object[];

  sequence?: object[];

  sound_effect?: ParticleEventNodeRandomizeSoundEffect;

  weight: number;

}


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
export interface ParticleEventNodeRandomizeParticleEffect {

  effect: object;

  pre_effect_expression?: { [key: string]: string };

  type: string;

}


export enum ParticleEventNodeRandomizeParticleEffectType {
  emitter = `emitter`,
  emitterBound = `emitter_bound`,
  particle = `particle`,
  particleWithVelocity = `particle_with_velocity`
}






/**
 * Client Particles Particle Sound Effect Event
 * (particle_sound_effect_event)
 * Plays a sound effect when triggered by particle events like
 * spawning, collision, or expiration. Reference sounds defined in
 * sound_definitions.json using their identifier. Synchronizes audio
 * with visual particle moments—sparks crackling, explosions booming, or
 * magical effects chiming for immersive multi-sensory 
 * feedback.
 */
export interface ParticleEventNodeRandomizeSoundEffect {

  event_name: string;

}




/**
 * Client Particles Particle Sound Effect Event
 * (particle_sound_effect_event)
 * Plays a sound effect when triggered by particle events like
 * spawning, collision, or expiration. Reference sounds defined in
 * sound_definitions.json using their identifier. Synchronizes audio
 * with visual particle moments—sparks crackling, explosions booming, or
 * magical effects chiming for immersive multi-sensory 
 * feedback.
 */
export interface ParticleEventNodeSoundEffect {

  event_name: string;

}