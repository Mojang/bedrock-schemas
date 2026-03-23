// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:spawn_egg_interaction
 * 
 * minecraft:spawn_egg_interaction Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:spawn_egg_interaction": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Spawn Egg Interaction (minecraft:spawn_egg_interaction)
 * Enables interacting with this entity using its own spawn egg to
 * spawn a born child. Runs the "minecraft:entity_born" event on
 * the created entity as well as the defined "on_spawn" event.
 */
export default interface MinecraftSpawnEggInteraction {

}