// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Dialogue Documentation - minecraft:dialogue_document
 */

import * as jsoncommon from '../../common';

/**
 * NPC Dialogue Document (dialogue_document)
 * A Minecraft Bedrock Edition NPC dialogue definition document. Dialogue
 * files define conversation scenes for NPCs, including dialogue text,
 * buttons, and commands that execute when players interact with
 * NPCs.
 */
export default interface DialogueDocument {

  /**
   * @remarks
   * The format version of this dialogue file. Use '1.20.80' or
   * later.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The NPC dialogue definition containing scenes.
   */
  "minecraft:npc_dialogue": DialogueDocumentMinecraftNpcDialogue;

}


/**
 * NPC Dialogue (npc_dialogue_wrapper)
 */
export interface DialogueDocumentMinecraftNpcDialogue {

  /**
   * @remarks
   * Array of dialogue scene definitions. Each scene has a
   * scene_tag, optional text, npc_name, buttons, and commands.
   */
  scenes: string[];

}