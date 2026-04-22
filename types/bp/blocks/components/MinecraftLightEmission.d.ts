// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:light_emission
 * 
 * minecraft:light_emission Samples

Block Fabricator - Block Fabricator

"minecraft:light_emission": 7

Block Gray Ore - Block Gray Ore

"minecraft:light_emission": 15
 */

import * as jsoncommon from '../../../common';

/**
 * Light Emission (minecraft:light_emission)
 * The amount of light this block will emit in a range of 0-15.
 * Higher value means more light will be emitted. Reference values:
 * torch (14), glowstone (15), redstone torch (7), soul torch (10).
 * Monsters cannot spawn on blocks with light level 8 or 
 * higher.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Integer number`.

 */
export default interface MinecraftLightEmission {

}