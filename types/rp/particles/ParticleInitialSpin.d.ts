// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_initial_spin
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Initial Spin 
 * (particle_initial_spin)
 * Sets the starting rotation angle and spin velocity for each
 * particle. Initial rotation provides random orientation variety, while
 * spin_rate creates continuous rotation during the particle's lifetime.
 * Use for debris that tumbles, leaves spinning as they fall, sparks
 * that twist, or any particle needing rotational motion.
 */
export default interface ParticleInitialSpin {

  rotation?: { [key: string]: string };

  rotation_rate?: { [key: string]: string };

}