// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:light_dampening
 */

import * as jsoncommon from '../../../common';

/**
 * Light Dampening (minecraft:light_dampening)
 * The amount that light will be dampened when it passes through the
 * block, in a range of 0-15. Higher value means the light will be
 * dampened more. A value of 15 means fully opaque (like stone), while
 * 0 means fully transparent (like glass). Leaves use 1, water uses
 * 2.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Integer number`.

 */
export default interface MinecraftLightDampening {

}