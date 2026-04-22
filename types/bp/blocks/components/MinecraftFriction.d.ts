// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:friction
 * 
 * minecraft:friction Samples

Block Palm Leave - Block Palm Leave

"minecraft:friction": 0.38

Block White Sand - Block White Sand

"minecraft:friction": 0.2
 */

import * as jsoncommon from '../../../common';

/**
 * Friction (minecraft:friction)
 * Describes the friction for this block in a range of 0.0 to 0.9.
 * Friction affects an entity's movement speed when it travels on
 * the block. Higher values result in more friction (less sliding). The
 * default value is 0.4, which is used by most blocks. Ice uses 0.02
 * for its slippery surface.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Decimal number`.

 */
export default interface MinecraftFriction {

}