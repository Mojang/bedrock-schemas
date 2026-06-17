// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:random_offset
 */

import * as jsoncommon from '../../../common';

/**
 * Random Offset (minecraft:random_offset)
 * This component defines a random offset for the block, seeded based
 * on the block's position and the specified range and steps. It
 * affects the block's rendered position, outline, and
 * collision.
If the random offset causes the collision box to
 * extend beyond the bounds of a cube, the offset range will
 * automatically adjust to keep the collision box within the
 * cube.
Culling for this block is performed without considering the
 * random offset.
 */
export default interface MinecraftRandomOffset {

  /**
   * @remarks
   * X coordinate
   */
  x?: MinecraftRandomOffsetx;

  /**
   * @remarks
   * Y coordinate
   */
  y?: MinecraftRandomOffsety;

  /**
   * @remarks
   * Z coordinate
   */
  z?: MinecraftRandomOffsetz;

}


/**
 * Block Range And Steps (Range And Steps)
 * Defines an integer block state with a range of valid values and
 * optional step increment. Used for block properties like growth
 * stages (0-7 for crops), signal strength (0-15 for redstone), or
 * rotation angles. The game only allows values within the
 * specified min/max range at the given step intervals.
 */
export interface MinecraftRandomOffsetx {

  /**
   * @remarks
   * The range of the random offset.
   */
  range: MinecraftRandomOffsetxRange;

  /**
   * @remarks
   * The number of steps between the range. Specify 0 for all
   * possible values between the range.
   */
  steps?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftRandomOffsetxRange {

  max?: number;

  min?: number;

}


/**
 * Block Range And Steps (Range And Steps)
 * Defines an integer block state with a range of valid values and
 * optional step increment. Used for block properties like growth
 * stages (0-7 for crops), signal strength (0-15 for redstone), or
 * rotation angles. The game only allows values within the
 * specified min/max range at the given step intervals.
 */
export interface MinecraftRandomOffsety {

  /**
   * @remarks
   * The range of the random offset.
   */
  range: MinecraftRandomOffsetyRange;

  /**
   * @remarks
   * The number of steps between the range. Specify 0 for all
   * possible values between the range.
   */
  steps?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftRandomOffsetyRange {

  max?: number;

  min?: number;

}


/**
 * Block Range And Steps (Range And Steps)
 * Defines an integer block state with a range of valid values and
 * optional step increment. Used for block properties like growth
 * stages (0-7 for crops), signal strength (0-15 for redstone), or
 * rotation angles. The game only allows values within the
 * specified min/max range at the given step intervals.
 */
export interface MinecraftRandomOffsetz {

  /**
   * @remarks
   * The range of the random offset.
   */
  range: MinecraftRandomOffsetzRange;

  /**
   * @remarks
   * The number of steps between the range. Specify 0 for all
   * possible values between the range.
   */
  steps?: number;

}


/**
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftRandomOffsetzRange {

  max?: number;

  min?: number;

}