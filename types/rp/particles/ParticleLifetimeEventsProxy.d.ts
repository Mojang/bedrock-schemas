// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particlelifetimeevents_proxy
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles ParticleLifetimeEvents Proxy
 * (ParticleLifetimeEvents Proxy)
 * Controls particle lifetime events like creation and 
 * expiration.
 */
export default interface ParticleLifetimeEventsProxy {

  creation_event?: object[];

  expiration_event?: object[];

  timeline?: object[];

}