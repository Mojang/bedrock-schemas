// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:emitter_local_space_proxy
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Emitter Local Space Proxy (emitter_local_space 
 * proxy)
 * Controls whether particles inherit emitter position and
 * rotation.
 */
export default interface EmitterLocalSpaceProxy {

  position?: boolean;

  rotation?: boolean;

  velocity?: boolean;

}