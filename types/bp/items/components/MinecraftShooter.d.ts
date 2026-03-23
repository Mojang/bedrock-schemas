// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:shooter
 * 
 * minecraft:shooter Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Item Shooter (minecraft:shooter)
 * Shooter Item Component.
 */
export default interface MinecraftShooter {

  /**
   * @remarks
   * Ammunition.
   */
  ammunition?: MinecraftShooterAmmunition[];

  /**
   * @remarks
   * Charge on draw? Default is set to false.
   */
  charge_on_draw?: boolean;

  /**
   * @remarks
   * Draw Duration. Default is set to 0.
   */
  max_draw_duration?: number;

  /**
   * @remarks
   * Scale power by draw duration? Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;

}


/**
 * Item Components Ammunition (Ammunition)
 * Is ammunition for a shooter item.
 */
export interface MinecraftShooterAmmunition {

  /**
   * @remarks
   * Ammunition item description identifier.
   */
  item: string;

  /**
   * @remarks
   * Can search inventory? Default is set to false.
   */
  search_inventory?: boolean;

  /**
   * @remarks
   * Can use in creative mode? Default is set to false.
   */
  use_in_creative?: boolean;

  /**
   * @remarks
   * Can use off-hand? Default is set to false.
   */
  use_offhand?: boolean;

}