// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:custom_hit_test
 * 
 * minecraft:custom_hit_test Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Custom Hit Test (minecraft:custom_hit_test)
 * List of hitboxes for melee and ranged hits against the 
 * entity.
 */
export default interface MinecraftCustomHitTest {

  /**
   * @remarks
   * List of hitboxes for melee and ranged hits against the 
   * entity.
   */
  hitboxes?: MinecraftCustomHitTestHitboxes[];

}


/**
 */
export interface MinecraftCustomHitTestHitboxes {

  /**
   * @remarks
   * Height of the hitbox.
   */
  height?: number;

  /**
   * @remarks
   * Pivot point of the hitbox.
   */
  pivot?: number[];

  /**
   * @remarks
   * Width of the hitbox.
   */
  width?: number;

}