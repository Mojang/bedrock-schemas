// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:uses_legacy_friction
 */

import * as jsoncommon from '../../../common';

/**
 * Uses Legacy Friction (minecraft:uses_legacy_friction)
 * When set, legacy calculations are used when applying
 * "minecraft:friction_modifier". This component is automatically added
 * to legacy content to preserve existing behavior. The legacy
 * calculations are incorrect and should not be used for new
 * content.
 */
export default interface MinecraftUsesLegacyFriction {

}