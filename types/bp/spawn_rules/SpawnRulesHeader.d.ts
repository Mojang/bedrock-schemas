// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Spawn Rules Documentation - minecraft:spawn_rules_header
 */

import * as jsoncommon from '../../common';

/**
 * Spawn Rules Header (spawn_rules_header)
 * Defines the header fields for a spawn_rules document.
 */
export default interface SpawnRulesHeader {

  identifier?: string;

  /**
   * @remarks
   * Specifies a group that this mob is connected with, of which only
   * so many mobs in the group can be spawned
   */
  population_control?: string;

}