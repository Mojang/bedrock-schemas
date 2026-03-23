// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.owner_hurt_by_target
 * 
 * minecraft:behavior.owner_hurt_by_target Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Owner Hurt By Target Behavior
 * (minecraft:behavior.owner_hurt_by_target)
 * Allows the mob to target another mob that hurts their owner.
 */
export default interface MinecraftBehaviorOwnerHurtByTarget {

  /**
   * @remarks
   * List of entity types that this mob can target if they hurt their
   * owner
   */
  entity_types?: MinecraftBehaviorOwnerHurtByTargetEntityTypes[];

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   */
  priority?: number;

}


/**
 * List of entity types that this mob can target if they hurt their
 * owner.
 */
export interface MinecraftBehaviorOwnerHurtByTargetEntityTypes {

  /**
   * @remarks
   * If true, the targeting entity will continuously reevaluate the
   * target and stop attacking if the target no longer meets the
   * filter conditions.
   */
  reevaluate_description?: boolean;

}