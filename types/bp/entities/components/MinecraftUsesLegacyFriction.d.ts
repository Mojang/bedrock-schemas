// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:uses_legacy_friction
 * 
 * minecraft:uses_legacy_friction Samples

Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:uses_legacy_friction": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Uses Legacy Friction (minecraft:uses_legacy_friction)
 * When set, legacy calculations are used when applying
 * "minecraft:friction_modifier". This component is automatically added
 * to legacy content to preserve existing behavior. The legacy
 * calculations are incorrect and should not be used for new
 * content.
 * Note: Added in 1.26.20 alongside the
 * `minecraft:friction_modifier` behavior fix. Adding this component opts
 * an entity back into the legacy (pre-1.26.20) friction calculations, which
 * also partially affected air and liquid drag. Entities whose
 * `format_version` is older than 1.26.20 receive this component
 * automatically so that existing content keeps its prior 
 * behavior.
 */
export default interface MinecraftUsesLegacyFriction {

}