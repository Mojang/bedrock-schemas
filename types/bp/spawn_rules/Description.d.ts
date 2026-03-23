// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:description
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Description (Description)
 * Contains the entity identifier that these spawn rules apply to.
 * The identifier must match an entity defined in a behavior pack
 * (e.g., 'minecraft:creeper' or 'mypack:custom_mob').
 */
export default interface Description {

  identifier: string;

}