// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:flower_pottable
 */

import * as jsoncommon from '../../../common';

/**
 * Flower Pottable (minecraft:flower_pottable)
 * When added to a block type, indicates that this block can be
 * placed inside a flower pot.
 * Note: In format version 1.26.20, validation enforces that
 * `minecraft:flower_pottable` may only appear in the root
 * `components` object; placing it under `permutations` is
 * rejected.
 */
export default interface MinecraftFlowerPottable {

}