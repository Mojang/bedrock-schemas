// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:block_light_absorption
 */

import * as jsoncommon from '../../../common';

/**
 * Block Light Absorption (Legacy) 
 * (minecraft:block_light_absorption)
 * Legacy component (format_version < 1.19.40). The amount light is
 * dampened when passing through this block (0-15). Use
 * minecraft:light_dampening in newer format versions.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Integer number`.

 */
export default interface MinecraftBlockLightAbsorption {

}