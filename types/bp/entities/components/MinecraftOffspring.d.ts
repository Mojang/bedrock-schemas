// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:offspring
 * 
 * minecraft:offspring Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:offspring": {
  "offspring_pairs": {
    "minecraft:chicken": "minecraft:chicken"
  },
  "property_inheritance": {
    "minecraft:climate_variant": {}
  }
}


Cow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json

"minecraft:offspring": {
  "offspring_pairs": {
    "minecraft:cow": "minecraft:cow"
  },
  "property_inheritance": {
    "minecraft:climate_variant": {}
  }
}


Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:offspring": {
  "offspring_pairs": {
    "minecraft:dolphin": "minecraft:dolphin"
  }
}


Drowned - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json

"minecraft:offspring": {
  "offspring_pairs": {
    "minecraft:drowned": "minecraft:drowned"
  }
}


Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

"minecraft:offspring": {
  "offspring_pairs": {
    "minecraft:fox": "minecraft:fox"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Offspring (minecraft:offspring)
 * Defines the way an entity can create a born offspring.
 */
export default interface MinecraftOffspring {

  /**
   * @remarks
   * If true, the entities will blend their attributes in the
   * offspring after they breed.
   */
  blend_attributes?: boolean;

  /**
   * @remarks
   * Determines how likely the baby of parents with the same variant will
   * deny that variant and take a random variant within the given range
   * instead.
   */
  deny_parents_variant?: MinecraftOffspringDenyParentsVariant[];

  /**
   * @remarks
   * If true, the babies will be automatically tamed if its parents 
   * are
   */
  inherit_tamed?: boolean;

  /**
   * @remarks
   * Determines how likely the babies are to NOT inherit one of
   * their parent's variances. Values are between 0.0 and 1.0, with a
   * higher number meaning more likely to mutate.
   */
  mutation_factor?: MinecraftOffspringMutationFactor[];

  /**
   * @remarks
   * The map of entity to offspring definitions that this entity can
   * make offspring with.
   * 
   * Sample Values:
   * Chicken: {"minecraft:chicken":"minecraft:chicken"}
   *
   * Cow: {"minecraft:cow":"minecraft:cow"}
   *
   * Dolphin: {"minecraft:dolphin":"minecraft:dolphin"}
   *
   */
  offspring_pairs?: string[];

  /**
   * @remarks
   * List of attributes that should benefit from parent centric attribute
   * blending. For example, horses blend their health, movement, and
   * jump_strength in their offspring.
   */
  parent_centric_attribute_blending?: string[];

  /**
   * @remarks
   * List of Entity Properties that should be inherited from the
   * parent entities and potentially mutated.
   * 
   * Sample Values:
   * Chicken: {"minecraft:climate_variant":{}}
   *
   *
   */
  property_inheritance?: string[];

  /**
   * @remarks
   * Range used to determine random extra variant.
   */
  random_extra_variant_mutation_interval?: number[];

  /**
   * @remarks
   * Range used to determine random variant.
   */
  random_variant_mutation_interval?: number[];

}


/**
 * Determines how likely the baby of parents with the same variant will
 * deny that variant and take a random variant within the given range
 * instead.
 */
export interface MinecraftOffspringDenyParentsVariant {

  /**
   * @remarks
   * The percentage chance of denying the parents' variant.
   */
  chance?: number;

  /**
   * @remarks
   * The inclusive maximum of the variant range.
   */
  max_variant?: number;

  /**
   * @remarks
   * The inclusive minimum of the variant range.
   */
  min_variant?: number;

}


/**
 * Determines how likely the babies are to NOT inherit one of
 * their parent's variances. Values are between 0.0 and 1.0, with a
 * higher number meaning more likely to mutate.
 */
export interface MinecraftOffspringMutationFactor {

  /**
   * @remarks
   * The percentage chance of the offspring getting its color as if
   * spawned rather than inheriting color from its parents.
   */
  color?: number;

  /**
   * @remarks
   * The percentage chance of a mutation on the entity's extra variant
   * type.
   */
  extra_variant?: number;

  /**
   * @remarks
   * The percentage chance of a mutation on the entity's variant 
   * type.
   */
  variant?: number;

}