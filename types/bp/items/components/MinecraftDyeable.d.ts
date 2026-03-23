// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:dyeable
 */

import * as jsoncommon from '../../../common';

/**
 * Item Dyeable (minecraft:dyeable)
 * Enables players to dye this item using dyes in a crafting grid,
 * like leather armor. Configure the default color when undyed. The
 * item stores its color in NBT data and renders with the
 * player-chosen tint, enabling customizable cosmetic appearances for
 * armor and equipment.
 */
export default interface MinecraftDyeable {

  default_color?: string;

}