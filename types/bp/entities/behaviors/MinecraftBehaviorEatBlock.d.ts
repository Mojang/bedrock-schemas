// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.eat_block
 * 
 * minecraft:behavior.eat_block Samples

Sheep - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/sheep.json

"minecraft:behavior.eat_block": {
  "priority": 6,
  "success_chance": "query.is_baby ? 0.02 : 0.001",
  "time_until_eat": 1.8,
  "eat_and_replace_block_pairs": [
    {
      "eat_block": "grass",
      "replace_block": "dirt"
    },
    {
      "eat_block": "tallgrass",
      "replace_block": "air"
    },
    {
      "eat_block": "short_dry_grass",
      "replace_block": "air"
    },
    {
      "eat_block": "tall_dry_grass",
      "replace_block": "air"
    }
  ],
  "on_eat": {
    "event": "minecraft:on_eat_block",
    "target": "self"
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Eat Block Behavior (minecraft:behavior.eat_block)
 * Allows the entity to consume a block, replace the eaten block with
 * another block, and trigger an event as a result.
 */
export default interface MinecraftBehaviorEatBlock {

  control_flags?: string[];

  /**
   * @remarks
   * A collection of pairs of blocks; the first ("eat_block") is the
   * block the entity should eat, the second ("replace_block") is
   * the block that should replace the eaten block.
   * 
   * Sample Values:
   * Sheep: [{"eat_block":"grass","replace_block":"dirt"},{"eat_block":"tallgrass","replace_block":"air"},{"eat_block":"short_dry_grass","replace_block":"air"},{"eat_block":"tall_dry_grass","replace_block":"air"}]
   *
   */
  eat_and_replace_block_pairs?: MinecraftBehaviorEatBlockEatAndReplaceBlockPairs[];

  /**
   * @remarks
   * The event to trigger when the block eating animation has
   * completed.
   * 
   * Sample Values:
   * Sheep: {"event":"minecraft:on_eat_block","target":"self"}
   *
   */
  on_eat?: MinecraftBehaviorEatBlockOnEat;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Sheep: 6
   *
   */
  priority?: number;

  /**
   * @remarks
   * A molang expression defining the success chance the entity has
   * to consume a block.
   * 
   * Sample Values:
   * Sheep: "query.is_baby ? 0.02 : 0.001"
   *
   */
  success_chance?: { [key: string]: string };

  /**
   * @remarks
   * The amount of time (in seconds) it takes for the block to be
   * eaten upon a successful eat attempt.
   * 
   * Sample Values:
   * Sheep: 1.8
   *
   */
  time_until_eat?: number;

}


export enum MinecraftBehaviorEatBlockControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Entity EatAndReplaceBlockPair (EatAndReplaceBlockPair)
 */
export interface MinecraftBehaviorEatBlockEatAndReplaceBlockPairs {

  /**
   * @remarks
   * The block the entity should eat.
   */
  eat_block?: string;

  /**
   * @remarks
   * The block that should replace the eaten block.
   */
  replace_block?: string;

}


/**
 * Entity ActorDefinitionTrigger (ActorDefinitionTrigger)
 * Triggers an entity event when specified conditions are met.
 * Events activate component groups that change entity
 * behavior—transforming villagers into zombie villagers, switching mobs
 * to aggressive mode, or triggering growth stages. Combine with
 * filters to create conditional state machines that respond to
 * gameplay.
 */
export interface MinecraftBehaviorEatBlockOnEat {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorEatBlockOnEatFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorEatBlockOnEatFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


export enum MinecraftBehaviorEatBlockOnEatTarget {
  baby = `baby`,
  block = `block`,
  damager = `damager`,
  holder = `holder`,
  item = `item`,
  other = `other`,
  parent = `parent`,
  player = `player`,
  self = `self`,
  target = `target`
}