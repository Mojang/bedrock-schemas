// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:pushable_by_block
 * 
 * minecraft:pushable_by_block Samples

Armor Stand - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json

"minecraft:pushable_by_block": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Pushable By Block (minecraft:pushable_by_block)
 * Allows the entity to be pushed by certain blocks, like Shulker Boxes
 * and Pistons.
 * Note: Added in 1.26.10 as part of the split of
 * `minecraft:pushable` into `minecraft:pushable_by_block` (pistons and
 * Shulker Boxes) and `minecraft:pushable_by_entity` (other entities). The
 * legacy `minecraft:pushable` component is no longer parsed.
 */
export default interface MinecraftPushableByBlock {

}