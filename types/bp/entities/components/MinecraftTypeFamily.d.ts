// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:type_family
 * 
 * minecraft:type_family Samples

Allay - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json

"minecraft:type_family": {
  "family": [
    "allay",
    "mob"
  ]
}


Armor Stand - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armor_stand.json

"minecraft:type_family": {
  "family": [
    "armor_stand",
    "inanimate",
    "mob"
  ]
}


Bat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bat.json

"minecraft:type_family": {
  "family": [
    "bat",
    "mob"
  ]
}


Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:type_family": {
  "family": [
    "blaze",
    "monster",
    "mob"
  ]
}


Boat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json

"minecraft:type_family": {
  "family": [
    "boat",
    "inanimate"
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Type Family (minecraft:type_family)
 * Defines the family categories this entity belongs to. Type
 * families are used by filters and other game systems to group
 * entities (e.g., 'mob', 'monster', 'undead', 'zombie').
 */
export default interface MinecraftTypeFamily {

  /**
   * @remarks
   * A set of tags that describe the categories of this entity. In
   * addition to typically having a tag for the type of mob, entities
   * frequently have additional type family tags that modify how the
   * rest of the Minecraft world reacts to them.
   * 
   * Sample Values:
   * Allay: ["allay","mob"]
   *
   * Armor Stand: ["armor_stand","inanimate","mob"]
   *
   * Bat: ["bat","mob"]
   *
   */
  family?: string[];

}


export enum MinecraftTypeFamilyFamily {
  mob = `mob`,
  inanimate = `inanimate`,
  aquatic = `aquatic`,
  monster = `monster`,
  undead = `undead`,
  skeleton = `skeleton`,
  arthropod = `arthropod`,
  zombie = `zombie`,
  lightweight = `lightweight`,
  fish = `fish`,
  player = `player`
}