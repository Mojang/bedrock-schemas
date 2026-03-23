// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:nameable
 * 
 * minecraft:nameable Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:nameable": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Nameable (minecraft:nameable)
 * Allows this entity to be named (e.g. using a name tag).
 */
export default interface MinecraftNameable {

  /**
   * @remarks
   * If true, this entity can be renamed with name tags
   */
  allow_name_tag_renaming?: boolean;

  /**
   * @remarks
   * If true, the name will always be shown
   */
  always_show?: boolean;

  /**
   * @remarks
   * Trigger to run when the entity gets named
   */
  default_trigger?: string;

  /**
   * @remarks
   * Describes the special names for this entity and the events to
   * call when the entity acquires those names
   */
  name_actions?: MinecraftNameableNameActions[];

}


/**
 * Describes the special names for this entity and the events to
 * call when the entity acquires those names.
 */
export interface MinecraftNameableNameActions {

  /**
   * @remarks
   * List of special names that will cause the events defined in
   * 'on_named' to fire
   */
  name_filter?: string;

  /**
   * @remarks
   * Event to be called when this entity acquires the name specified in
   * 'name_filter'
   */
  on_named?: jsoncommon.MinecraftEventTrigger;

}