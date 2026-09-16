// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:instrument_sound
 * 
 * minecraft:instrument_sound Samples

Instrument Defined For Both Faces - Instrument defined for both faces

"minecraft:instrument_sound": {
  "up": "note.bassattack",
  "down": "note.bit"
}


Instrument Defined For Up Face - Instrument defined for up face

"minecraft:instrument_sound": {
  "up": "note.xylophone"
}


Instrument Defined For Down Face - Instrument defined for down face

"minecraft:instrument_sound": {
  "down": "note.banjo"
}


Instrument Defined With No Sound For Up Face - Instrument defined with no sound for up face

"minecraft:instrument_sound": {
  "up": "note.none",
  "down": "note.banjo"
}


Block Black Concrete Double Slab - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_double_slab.block.json

"minecraft:instrument_sound": {
  "up": "note.bd"
}


Block Black Wool Double Slab - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_wool_double_slab.block.json

"minecraft:instrument_sound": {
  "up": "note.guitar"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Instrument Sound (minecraft:instrument_sound)
 * [Note: This component is currently experimental]. This defines what
 * sound will play based on above or below relative position to a
 * note block. An instrument can be assigned to the "up" and "down"
 * block faces. If either face is undefined, or the component is
 * omitted, it will use its default value ("up" = "note.harp" and
 * "down" = "note.none"). While both faces do not need to be
 * defined, at least one face needs to be defined for the component to
 * be valid. "note.none" can be used to specify no sound for a
 * face.
 */
export default interface MinecraftInstrumentSound {

  /**
   * @remarks
   * The instrument sound that plays when the note block is above this
   * block (the block's down face is exposed to the note block). Use
   * "note.none" to specify no sound for this face.
   */
  down?: string;

  /**
   * @remarks
   * The instrument sound that plays when the note block is below this
   * block (the block's up face is exposed to the note block). Use
   * "note.none" to specify no sound for this face.
   * 
   * Sample Values:
   * Block Black Concrete Double Slab: "note.bd"
   *
   *
   * Block Black Wool Double Slab: "note.guitar"
   *
   *
   */
  up?: string;

}