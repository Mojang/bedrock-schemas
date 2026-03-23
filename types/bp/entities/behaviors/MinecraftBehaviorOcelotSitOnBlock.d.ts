// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.ocelot_sit_on_block
 * 
 * minecraft:behavior.ocelot_sit_on_block Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Ocelot Sit On Block Behavior
 * (minecraft:behavior.ocelot_sit_on_block)
 * Allows to mob to be able to sit in place like the ocelot.
 */
export default interface MinecraftBehaviorOcelotSitOnBlock {

  control_flags?: string[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

  /**
   * @remarks
   * Movement speed multiplier of the mob when using this goal.
   */
  speed_multiplier?: number;

}


export enum MinecraftBehaviorOcelotSitOnBlockControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}