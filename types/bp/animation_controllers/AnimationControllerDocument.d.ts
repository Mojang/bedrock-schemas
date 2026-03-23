// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Animation Controllers Documentation - minecraft:animation_controller_document
 */

import * as jsoncommon from '../../common';

/**
 * Animation Controller Document 
 * (animation_controller_document)
 * A Minecraft Bedrock Edition animation controller definition document.
 * Animation controllers use a state machine to control which
 * animations play based on conditions. They can transition between
 * states based on Molang queries.
 */
export default interface AnimationControllerDocument {

  /**
   * @remarks
   * A dictionary of animation controller definitions. Keys are
   * controller identifiers like
   * 'controller.animation.entity.controller_name', values are
   * controller objects with initial_state and states properties.
   */
  animation_controllers: object;

  /**
   * @remarks
   * The format version of this animation controller file. Use
   * '1.10.0' or later.
   */
  format_version: string | number[];

}