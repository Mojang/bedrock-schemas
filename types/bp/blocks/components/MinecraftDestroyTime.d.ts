// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:destroy_time
 */

import * as jsoncommon from '../../../common';

/**
 * Destroy Time (Legacy) (minecraft:destroy_time)
 * Legacy component (format_version < 1.19.40). Time in seconds to
 * destroy the block with base equipment. Use
 * minecraft:destructible_by_mining in newer format versions.
 * NOTE: Alternate Simple Representations

 * This can also be represent as a simple `Boolean true/false`.

 */
export default interface MinecraftDestroyTime {

}