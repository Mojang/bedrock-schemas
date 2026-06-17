// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:weapon
 */

import * as jsoncommon from '../../../common';

/**
 * Weapon
 * Deprecated weapon item component. This component is
 * automatically added to vanilla weapon items like swords, axes, and
 * bows.
 * Note: This component is deprecated. For custom weapons, use
 * minecraft:damage to set attack damage, minecraft:cooldown for
 * attack speed, and minecraft:durability for durability.
 * IMPORTANT
 * This type is now deprecated, and no longer in use in the latest versions of Minecraft.
 * 
 */
export default interface Weapon {

  /**
   * @remarks
   * An event trigger that fires when this item is used to strike a
   * block.
   */
  on_hit_block?: object;

  /**
   * @remarks
   * An event trigger that fires when this item successfully damages
   * another entity.
   */
  on_hurt_entity?: object;

  /**
   * @remarks
   * An event trigger that fires when this item hits an entity but
   * deals no damage (e.g., due to invincibility frames or
   * immunity).
   */
  on_not_hurt_entity?: object;

}