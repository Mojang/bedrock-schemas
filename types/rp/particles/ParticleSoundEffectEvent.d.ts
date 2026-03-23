// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_sound_effect_event
 */

import * as jsoncommon from '../../common';

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
export default interface ParticleSoundEffectEvent {

  event_name: string;

}