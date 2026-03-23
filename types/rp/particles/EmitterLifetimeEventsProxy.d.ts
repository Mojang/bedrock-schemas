// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_lifetime_events_proxy
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Lifetime Events Proxy
 * (emitter_lifetime_events proxy)
 * Controls emitter lifetime events like creation and 
 * expiration.
 */
export default interface EmitterLifetimeEventsProxy {

  creation_event?: object[];

  expiration_event?: object[];

  looping_travel_distance_events?: EmitterLifetimeEventsProxyLoopingTravelDistanceEvents[];

  timeline?: object[];

  travel_distance_events?: object[];

}


/**
 * Client Particles Emitter Lifetime Events Travel Distance Events
 * (emitter_lifetime_events travel_distance_events)
 * Triggers particle events when the emitter has traveled a
 * specified distance. Useful for trail effects that change
 * behavior—such as a projectile leaving a smoke trail that
 * intensifies as it travels, or a mob's footsteps spawning dust
 * particles at regular intervals as it walks.
 */
export interface EmitterLifetimeEventsProxyLoopingTravelDistanceEvents {

  distance: number;

  effects: object[];

}