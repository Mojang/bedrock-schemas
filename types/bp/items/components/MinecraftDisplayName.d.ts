// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:display_name
 * 
 * minecraft:display_name Samples

Apple - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/apple.json

"minecraft:display_name": {
  "value": "item.apple.name"
}


Breeze Rod - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/breeze_rod.json

"minecraft:display_name": {
  "value": "item.breeze_rod.name"
}


Ominous Trial Key - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/ominous_trial_key.json

"minecraft:display_name": {
  "value": "item.ominous_trial_key.name"
}


Trial Key - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/trial_key.json

"minecraft:display_name": {
  "value": "item.trial_key.name"
}


Wind Charge - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/wind_charge.json

"minecraft:display_name": {
  "value": "item.wind_charge.name"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Item Display Name (minecraft:display_name)
 * The display_name item component specifies the text shown whenever an
 * item's name is displayed, like in hover text.
 */
export default interface MinecraftDisplayName {

  /**
   * @remarks
   * Name shown for an item.
   * 
   * Sample Values:
   * Apple: "item.apple.name"
   *
   * Breeze Rod: "item.breeze_rod.name"
   *
   * Ominous Trial Key: "item.ominous_trial_key.name"
   *
   */
  value?: string;

}