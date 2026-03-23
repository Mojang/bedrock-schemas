// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_motion_collision
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Motion Collision 
 * (particle_motion_collision)
 * Enables particle collision with world geometry. Configure collision
 * radius, bounce coefficient (how much velocity is retained), friction
 * to slow sliding, and whether to expire on impact. Essential for
 * physical particles like rain hitting ground, debris bouncing off
 * surfaces, or arrows embedding in blocks.
 */
export default interface ParticleMotionCollision {

  coefficient_of_restitution?: number;

  collision_drag?: number;

  collision_radius: number;

  enabled?: { [key: string]: string };

  events?: ParticleMotionCollisionEvents[];

  expire_on_contact?: boolean;

}


/**
 */
export interface ParticleMotionCollisionEvents {

  event?: string;

  min_speed?: number;

}