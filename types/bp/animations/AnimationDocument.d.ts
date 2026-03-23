// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Animations Documentation - minecraft:animation_document
 */

import * as jsoncommon from '../../common';

/**
 * Animation Document (animation_document)
 * A Minecraft Bedrock Edition animation definition document. Animations
 * define bone transformations (position, rotation, scale) over time
 * for entities. They can be used in both behavior packs (for
 * server-side animations) and resource packs (for client-side visual
 * animations).
 */
export default interface AnimationDocument {

  /**
   * @remarks
   * A dictionary of animation definitions. Keys are animation identifiers
   * like 'animation.entity.anim_name', values are animation objects with
   * loop, animation_length, timeline, and bones properties.
   */
  animations: object;

  /**
   * @remarks
   * The format version of this animation file. Use '1.8.0' or
   * later.
   */
  format_version: string | number[];

}