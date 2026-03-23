// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:breedable
 * 
 * minecraft:breedable Samples

Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:breedable": {
  "require_tame": false,
  "breeds_with": {
    "minecraft:chicken": {}
  },
  "breed_items": [
    "wheat_seeds",
    "beetroot_seeds",
    "melon_seeds",
    "pumpkin_seeds",
    "pitcher_pod",
    "torchflower_seeds"
  ]
}


Cow - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json

"minecraft:breedable": {
  "require_tame": false,
  "breed_items": [
    "wheat"
  ],
  "breeds_with": {
    "minecraft:cow": {}
  }
}


Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

"minecraft:breedable": {
  "require_tame": false,
  "breed_items": [
    "sweet_berries",
    "glow_berries"
  ],
  "breeds_with": {
    "minecraft:fox": {}
  }
}


Frog - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/frog.json

"minecraft:breedable": {
  "breed_items": [
    "slime_ball"
  ],
  "breeds_with": {
    "minecraft:frog": {
      "event": "become_pregnant",
      "target": "self"
    }
  },
  "causes_pregnancy": true,
  "require_tame": false
}


Goat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json

"minecraft:breedable": {
  "require_tame": false,
  "breed_items": [
    "wheat"
  ],
  "breeds_with": {
    "minecraft:goat": {}
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Breedable (minecraft:breedable)
 * Allows an entity to establish a way to get into the love state
 * used for breeding.
 * Note: This component is commonly used in conjunction with the
 * 'minecraft:behavior.breed' component.
 */
export default interface MinecraftBreedable {

  /**
   * @remarks
   * If true, entities can breed while sitting
   */
  allow_sitting?: boolean;

  /**
   * @remarks
   * If true, the entities will blend their attributes in the
   * offspring after they breed. For example, horses blend their
   * health, movement, and jump_strength in their offspring.
   */
  blend_attributes?: boolean;

  /**
   * @remarks
   * Time in seconds before the Entity can breed again.
   */
  breed_cooldown?: number;

  /**
   * @remarks
   * The list of items that can be used to get the entity into the
   * 'love' state. Can be a single item or an array.
   * 
   * Sample Values:
   * Chicken: ["wheat_seeds","beetroot_seeds","melon_seeds","pumpkin_seeds","pitcher_pod","torchflower_seeds"]
   *
   * Cow: ["wheat"]
   *
   * Fox: ["sweet_berries","glow_berries"]
   *
   */
  breed_items?: string[];

  /**
   * @remarks
   * The entity definitions that this entity can breed with. Can be
   * a single object or an array.
   * 
   * Sample Values:
   * Chicken: {"minecraft:chicken":{}}
   *
   * Cow: {"minecraft:cow":{}}
   *
   * Fox: {"minecraft:fox":{}}
   *
   */
  breeds_with?: MinecraftBreedableBreedsWith[];

  /**
   * @remarks
   * If true, the entity will become pregnant instead of spawning a
   * baby.
   * 
   * Sample Values:
   * Frog: true
   *
   */
  causes_pregnancy?: boolean;

  /**
   * @remarks
   * Determines how likely the baby of parents with the same variant will
   * deny that variant and take a random variant within the given range
   * instead.
   */
  deny_parents_variant?: MinecraftBreedableDenyParentsVariant;

  /**
   * @remarks
   * The list of nearby block requirements to get the entity into the
   * 'love' state.
   */
  environment_requirements?: MinecraftBreedableEnvironmentRequirements[];

  /**
   * @remarks
   * Chance that up to 16 babies will spawn.
   */
  extra_baby_chance?: number[];

  /**
   * @remarks
   * If true, the babies will be automatically tamed if its parents 
   * are.
   */
  inherit_tamed?: boolean;

  /**
   * @remarks
   * The filters to run when attempting to fall in love.
   */
  love_filters?: jsoncommon.MinecraftFilter;

  /**
   * @remarks
   * Determines how likely the babies are to NOT inherit one of
   * their parent's variances.
   */
  mutation_factor?: MinecraftBreedableMutationFactor;

  /**
   * @remarks
   * If true, the entity needs to be at full health before it can
   * breed.
   */
  require_full_health?: boolean;

  /**
   * @remarks
   * If true, the entities need to be tamed first before they can
   * breed.
   */
  require_tame?: boolean;

}


/**
 */
export interface MinecraftBreedableBreedsWith {

  /**
   * @remarks
   * The entity definition of this entity's babies.
   */
  baby_type?: string;

  /**
   * @remarks
   * Event to run when this entity breeds. Can be a simple event name
   * string or a trigger object with event and optional filters.
   */
  breed_event?: string;

  /**
   * @remarks
   * The entity definition that this entity can mate with.
   */
  mate_type?: string;

}


/**
 */
export interface MinecraftBreedableDenyParentsVariant {

  /**
   * @remarks
   * The percentage chance of denying the parents' variant.
   */
  chance?: number;

  /**
   * @remarks
   * The inclusive maximum of the variant range.
   */
  max_variant?: string;

  /**
   * @remarks
   * The inclusive minimum of the variant range.
   */
  min_variant?: string;

}


/**
 */
export interface MinecraftBreedableEnvironmentRequirements {

  /**
   * @remarks
   * The block types required nearby for the entity to breed.
   */
  block_types?: string[];

  /**
   * @remarks
   * The number of the required block types nearby for the entity to
   * breed.
   */
  count?: number;

  /**
   * @remarks
   * How many blocks radius from the mob's center to search in for
   * the required blocks. Bounded between 0 and 16.
   */
  radius?: number;

}


/**
 */
export interface MinecraftBreedableMutationFactor {

  /**
   * @remarks
   * The percentage chance of denying the parents' variant.
   */
  color?: number[];

  /**
   * @remarks
   * The percentage chance of a mutation on the entity's extra variant
   * type.
   */
  extra_variant?: number[];

  /**
   * @remarks
   * The percentage chance of a mutation on the entity's variant 
   * type.
   */
  variant?: number[];

}