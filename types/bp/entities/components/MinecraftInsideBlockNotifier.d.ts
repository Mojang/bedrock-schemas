// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:inside_block_notifier
 * 
 * minecraft:inside_block_notifier Samples

Boat - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json

"minecraft:inside_block_notifier": {
  "block_list": [
    {
      "block": {
        "name": "minecraft:bubble_column",
        "states": {
          "drag_down": true
        }
      },
      "entered_block_event": {
        "event": "minecraft:entered_bubble_column_down",
        "target": "self"
      },
      "exited_block_event": {
        "event": "minecraft:exited_bubble_column",
        "target": "self"
      }
    },
    {
      "block": {
        "name": "minecraft:bubble_column",
        "states": {
          "drag_down": false
        }
      },
      "entered_block_event": {
        "event": "minecraft:entered_bubble_column_up",
        "target": "self"
      },
      "exited_block_event": {
        "event": "minecraft:exited_bubble_column",
        "target": "self"
      }
    }
  ]
}

 */

import * as jsoncommon from '../../../common';

/**
 * Inside Block Notifier (minecraft:inside_block_notifier)
 * Verifies whether the entity is inside any of the listed 
 * blocks.
 */
export default interface MinecraftInsideBlockNotifier {

  /**
   * @remarks
   * List of blocks, with certain block states, that we are
   * monitoring to see if the entity is inside.
   * 
   * Sample Values:
   * Boat: [{"block":{"name":"minecraft:bubble_column","states":{"drag_down":true}},"entered_block_event":{"event":"minecraft:entered_bubble_column_down","target":"self"},"exited_block_event":{"event":"minecraft:exited_bubble_column","target":"self"}},{"block":{"name":"minecraft:bubble_column","states":{"drag_down":false}},"entered_block_event":{"event":"minecraft:entered_bubble_column_up","target":"self"},"exited_block_event":{"event":"minecraft:exited_bubble_column","target":"self"}}]
   *
   *
   */
  block_list?: MinecraftInsideBlockNotifierBlockList[];

}


/**
 * Block Entry (inside_block_entry)
 */
export interface MinecraftInsideBlockNotifierBlockList {

  /**
   * @remarks
   * The block to monitor, including name and optional states.
   */
  block?: MinecraftInsideBlockNotifierBlockListBlock;

  /**
   * @remarks
   * Event to fire when the entity enters the block.
   */
  entered_block_event?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Event to fire when the entity exits the block.
   */
  exited_block_event?: jsoncommon.MinecraftEventTrigger;

}


/**
 */
export interface MinecraftInsideBlockNotifierBlockListBlock {

  /**
   * @remarks
   * The block identifier.
   */
  name?: string;

  /**
   * @remarks
   * Block states to match.
   */
  states?: { [key: string]: boolean };

}