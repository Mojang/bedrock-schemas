// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_lifetime_events_travel_distance_events
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Lifetime Events Travel Distance Events
 * (emitter_lifetime_events travel_distance_events)
 * Triggers particle events when the emitter has traveled a
 * specified distance. Useful for trail effects that change
 * behavior—such as a projectile leaving a smoke trail that
 * intensifies as it travels, or a mob's footsteps spawning dust
 * particles at regular intervals as it walks.
 */
export default interface EmitterLifetimeEventsTravelDistanceEvents {

  distance: number;

  effects: object[];

}