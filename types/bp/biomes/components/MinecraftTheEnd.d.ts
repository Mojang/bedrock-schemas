// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Biome Components Documentation - minecraft:the_end
 */

import * as jsoncommon from '../../../common';

/**
 * Biome The End (minecraft:the_end)
 * Marks a biome as using End dimension terrain generation. Biomes
 * with this component will use the characteristic End terrain style
 * with end stone and void generation.
 */
export default interface MinecraftTheEnd {

  /**
   * @remarks
   * Use default Minecraft End terrain generation.
   */
  type: string;

}


export enum MinecraftTheEndType {
  minecraftCapped = `minecraft:capped`,
  minecraftFrozenOcean = `minecraft:frozen_ocean`,
  minecraftMesa = `minecraft:mesa`,
  minecraftOverworld = `minecraft:overworld`,
  minecraftSwamp = `minecraft:swamp`,
  minecraftTheEnd = `minecraft:the_end`
}