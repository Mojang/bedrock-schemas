// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:use_modifiers
 * 
 * minecraft:use_modifiers Samples

Apple - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json

"minecraft:use_modifiers": {
  "start_using": "always",
  "use_duration": 1.6,
  "movement_modifier": 0.35
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Use Modifiers (minecraft:use_modifiers)
 * Determines how long an item takes to use in combination with
 * components such as Shooter, Throwable, or Food.
 * Note: Renamed from `chargeable` in 1.20.50 and available without an
 * experimental toggle.
 */
export default interface MinecraftUseModifiers {

  /**
   * @remarks
   * Whether vibrations are emitted when the item starts or stops being
   * used.
   */
  emit_vibrations?: boolean;

  /**
   * @remarks
   * Multiplier applied to the player's movement speed while the item
   * is in use.
   * 
   * Sample Values:
   * Apple: 0.35
   *
   */
  movement_modifier?: number;

  /**
   * @remarks
   * Sound played when the item starts being used. Accepts the name of
   * any sound event defined in `sound_definitions.json`, including the
   * built-in vanilla sound events.
   */
  start_sound?: string;

  /**
   * @remarks
   * When the player begins using the item. Use `always` to start as
   * soon as the use action is triggered (default), or `on_attack` to
   * start using only when an attack input is received while the item
   * is selected.
   * 
   * Sample Values:
   * Apple: "always"
   *
   */
  start_using?: string;

  /**
   * @remarks
   * Time, in seconds, that the item takes to use.
   * 
   * Sample Values:
   * Apple: 1.6
   *
   */
  use_duration?: number;

}


export enum MinecraftUseModifiersStartUsing {
  always = `always`,
  ifFirst = `if_first`
}