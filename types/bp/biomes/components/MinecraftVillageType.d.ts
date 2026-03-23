// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biome Components Documentation - minecraft:village_type
 */

import * as jsoncommon from '../../../common';

/**
 * Biome Village Type (minecraft:village_type)
 * Determines the type of village for the Biome.
 */
export default interface MinecraftVillageType {

  type: string;

}


export enum MinecraftVillageTypeType {
  default = `default`,
  desert = `desert`,
  ice = `ice`,
  savanna = `savanna`,
  taiga = `taiga`
}