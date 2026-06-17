// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:experience_reward
 * 
 * minecraft:experience_reward Samples

Blaze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json

"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 10 : 0"
}


Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
}


Breeze - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze.json

"minecraft:experience_reward": {
  "on_bred": "Math.Random(1,7)",
  "on_death": "query.last_hit_by_player ? 10 : 0"
}


Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

"minecraft:experience_reward": {
  "on_death": "query.last_hit_by_player ? 5 : 0"
}


Chicken - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json

"minecraft:experience_reward": {
  "on_bred": "Math.Random(1,7)",
  "on_death": "query.last_hit_by_player ? Math.Random(1,3) : 0"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Experience Reward (minecraft:experience_reward)
 * .
 */
export default interface MinecraftExperienceReward {

  /**
   * @remarks
   * A Molang expression defining the amount of experience rewarded when
   * this entity is successfully bred.
   * 
   * Sample Values:
   * Breeze: "Math.Random(1,7)"
   *
   *
   */
  on_bred?: string;

  /**
   * @remarks
   * A Molang expression defining the amount of experience rewarded when
   * this entity dies.
   * 
   * Sample Values:
   * Blaze: "query.last_hit_by_player ? 10 : 0"
   *
   * Bogged: "query.last_hit_by_player ? 5 + (query.equipment_count * Math.Random(1,3)) : 0"
   *
   *
   * Cave Spider: "query.last_hit_by_player ? 5 : 0"
   *
   */
  on_death?: string;

}