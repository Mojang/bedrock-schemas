// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:dash_action
 * 
 * minecraft:dash_action Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Dash Action (minecraft:dash_action)
 * Ability for a rideable entity to dash.
 */
export default interface MinecraftDashAction {

  /**
   * @remarks
   * Whether the entity can dash underwater
   */
  can_dash_underwater?: boolean;

  /**
   * @remarks
   * The dash cooldown in seconds
   */
  cooldown_time?: number;

  /**
   * @remarks
   * Should the momentum be applied in the direction of the 'entity' or
   * 'passenger'. When 'entity' is used the momentum is applied
   * horizontally according to the direction the entity is looking, using
   * only the entity's yaw. When 'passenger' is used the momentum will
   * be applied in the direction the controlling passenger is
   * looking, using the passenger's pitch and yaw.
   */
  direction?: MinecraftDashActionDirection;

  /**
   * @remarks
   * Horizontal momentum of the dash.
   */
  horizontal_momentum?: number;

  /**
   * @remarks
   * Vertical momentum of the dash.
   */
  vertical_momentum?: number;

}


export enum MinecraftDashActionDirection {
  entity = `entity`,
  passenger = `passenger`
}