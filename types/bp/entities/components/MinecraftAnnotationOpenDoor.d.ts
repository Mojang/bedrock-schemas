// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:annotation.open_door
 * 
 * minecraft:annotation.open_door Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Open doors annotation (minecraft:annotation.open_door)
 * Allows the entity to open doors.
 * Note: Requires the entity's `navigation` component to have the
 * parameter `can_open_doors` set to `true`.
 */
export default interface MinecraftAnnotationOpenDoor {

}