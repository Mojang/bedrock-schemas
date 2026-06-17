// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:body_rotation_locked_to_vehicle
 * 
 * minecraft:body_rotation_locked_to_vehicle Samples

Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:body_rotation_locked_to_vehicle": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Body Rotation Locked To Vehicle
 * (minecraft:body_rotation_locked_to_vehicle)
 * Causes the entity's body rotation to match their vehicle's facing
 * direction.
 * Note: In 1.21.130 this component was renamed to
 * `minecraft:rotation_locked_to_vehicle`, which now locks both body
 * and overall entity rotation to the vehicle. Existing usages should
 * migrate to the new identifier.
 */
export default interface MinecraftBodyRotationLockedToVehicle {

}