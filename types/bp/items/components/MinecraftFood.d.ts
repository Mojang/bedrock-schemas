// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:food
 * 
 * minecraft:food Samples

Apple - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json

"minecraft:food": {
  "nutrition": 4,
  "saturation_modifier": 0.3
}


Baked Potato - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/baked_potato.json

"minecraft:food": {
  "nutrition": 5,
  "saturation_modifier": "normal"
}


Beef - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/beef.json

"minecraft:food": {
  "nutrition": 3,
  "saturation_modifier": "low"
}


Beetroot - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/beetroot.json

"minecraft:food": {
  "nutrition": 1,
  "saturation_modifier": "normal"
}


Beetroot Soup - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/beetroot_soup.json

"minecraft:food": {
  "nutrition": 6,
  "saturation_modifier": "normal",
  "using_converts_to": "bowl"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Food (minecraft:food)
 * When an item has a food component, it becomes edible to the
 * player. Must have the 'minecraft:use_duration' component in
 * order to function properly.
 */
export default interface MinecraftFood {

  /**
   * @remarks
   * If true you can always eat this item (even when not hungry). Default
   * is set to false.
   */
  can_always_eat?: boolean;

  /**
   * @remarks
   * Value that is added to the entity's nutrition when the item is
   * used. Default is set to 0.
   * 
   * Sample Values:
   * Apple: 4
   *
   * Baked Potato: 5
   *
   * Beef: 3
   *
   */
  nutrition?: number;

  /**
   * @remarks
   * saturation_modifier is used in this formula: (nutrition *
   * saturation_modifier * 2) when applying the saturation buff.
   * Default is set to 0.6.
   * 
   * Sample Values:
   * Apple: 0.3
   *
   * Baked Potato: "normal"
   *
   * Beef: "low"
   *
   */
  saturation_modifier?: number;

  /**
   * @remarks
   * When used, converts to the item specified by the string in this
   * field. Default does not convert item.
   * 
   * Sample Values:
   * Beetroot Soup: "bowl"
   *
   */
  using_converts_to?: string;

}