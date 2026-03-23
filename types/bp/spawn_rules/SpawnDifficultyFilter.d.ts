// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_difficultyfilter
 */

import * as jsoncommon from '../../common';

/**
 * Spawn DifficultyFilter (Spawn DifficultyFilter)
 * Restricts mob spawning to specific difficulty levels (Peaceful, Easy,
 * Normal, Hard). For example, hostile mobs don't spawn on
 * Peaceful, and some dangerous variants only appear on Hard
 * difficulty.
 */
export default interface SpawnDifficultyFilter {

  max?: string;

  min?: string;

}


export enum SpawnDifficultyFilterMax {
  easy = `easy`,
  hard = `hard`,
  normal = `normal`,
  peaceful = `peaceful`
}


export enum SpawnDifficultyFilterMin {
  easy = `easy`,
  hard = `hard`,
  normal = `normal`,
  peaceful = `peaceful`
}