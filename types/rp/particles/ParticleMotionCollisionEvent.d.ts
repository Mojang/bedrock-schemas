// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_motion_collision_event
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Motion Collision Event
 * (particle_motion_collision_event)
 * Defines the event triggered when a particle collides with a
 * block or surface. Reference particle events by name to spawn
 * secondary effects, play sounds, or modify particle state on
 * impact. Creates reactive effects like sparks bouncing off walls,
 * water droplets splashing, or projectile impacts spawning 
 * debris.
 */
export default interface ParticleMotionCollisionEvent {

  event: object;

  min_speed?: number;

}