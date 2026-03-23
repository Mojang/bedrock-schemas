// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_initialization
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Initialization 
 * (particle_initialization)
 * Runs Molang expressions when each individual particle spawns to
 * initialize per-particle variables. Unlike emitter_initialization which
 * runs once per emitter, this executes for every particle—enabling randomized
 * properties, unique trajectories, or per-particle state that
 * persists through the particle's lifetime.
 */
export default interface ParticleInitialization {

  per_render_expression?: { [key: string]: string };

  per_update_expression?: { [key: string]: string };

}