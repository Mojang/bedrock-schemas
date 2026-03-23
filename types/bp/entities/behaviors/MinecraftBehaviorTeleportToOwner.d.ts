// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.teleport_to_owner
 * 
 * minecraft:behavior.teleport_to_owner Samples

Parrot - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json

"minecraft:behavior.teleport_to_owner": {
  "filters": {
    "all_of": [
      {
        "test": "owner_distance",
        "operator": ">",
        "value": 12
      },
      {
        "test": "is_panicking"
      }
    ]
  },
  "priority": 0
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Teleport To Owner Behavior
 * (minecraft:behavior.teleport_to_owner)
 * Allows an entity to teleport to its owner.
 */
export default interface MinecraftBehaviorTeleportToOwner {

  control_flags?: string[];

  /**
   * @remarks
   * The time in seconds that must pass for the entity to be able to
   * try to teleport again.
   */
  cooldown?: number;

  /**
   * @remarks
   * Conditions to be satisfied for the entity to teleport to its
   * owner.
   * 
   * Sample Values:
   * Parrot: {"all_of":[{"test":"owner_distance","operator":">","value":12},{"test":"is_panicking"}]}
   *
   */
  filters?: MinecraftBehaviorTeleportToOwnerFilters;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


export enum MinecraftBehaviorTeleportToOwnerControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorTeleportToOwnerFilters {

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