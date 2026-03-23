// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:water_movement
 * 
 * minecraft:water_movement Samples

Polar Bear - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json

"minecraft:water_movement": {
  "drag_factor": 0.98
}

 */

import * as jsoncommon from '../../../common';

/**
 * Water Movement (minecraft:water_movement)
 * Customizes how the entity moves through water by adjusting drag
 * coefficient. Lower values let entities glide through water easily
 * like fish, while higher values create resistance for entities that
 * struggle in water. Essential for aquatic mobs, boats, and any
 * entity needing custom underwater physics.
 */
export default interface MinecraftWaterMovement {

  /**
   * @remarks
   * Drag factor to determine movement speed when in water.
   * 
   * Sample Values:
   * Polar Bear: 0.98
   *
   */
  drag_factor?: number;

}