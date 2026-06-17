// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:projectile
 * 
 * minecraft:projectile Samples
"minecraft:projectile": {
  "minimum_critical_power": 1.25,
  "projectile_entity": "arrow"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Projectile (minecraft:projectile)
 * Defines an item as a projectile that can be shot from dispensers or
 * used as ammunition with minecraft:shooter. When combined with
 * minecraft:throwable, this component specifies which entity is
 * spawned when the item is thrown.
 */
export default interface MinecraftProjectile {

  /**
   * @remarks
   * Specifies how long a player must charge a projectile for it to
   * critically hit.
   */
  minimum_critical_power?: number;

  /**
   * @remarks
   * Which entity is to be fired as a projectile.
   */
  projectile_entity: string;

}