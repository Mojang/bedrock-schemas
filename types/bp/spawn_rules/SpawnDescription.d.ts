// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_description
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Description (Spawn Description)
 * The description block that identifies which entity these spawn
 * rules apply to, via the entity identifier (e.g.,
 * 'minecraft:zombie'). Also specifies the population control group
 * for managing spawn caps.
 */
export default interface SpawnDescription {

  identifier: string;

  population_control?: string;

}