// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:transformation
 * 
 * minecraft:transformation Samples

Hoglin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json

"minecraft:transformation": {
  "into": "minecraft:zoglin",
  "transformation_sound": "mob.hoglin.converted_to_zombified",
  "keep_level": true
}


Pig - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json

"minecraft:transformation": {
  "into": "minecraft:pig_zombie",
  "transformation_sound": "mob.pig.death",
  "delay": 0.5
}


Skeleton - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton.json

"minecraft:transformation": {
  "drop_inventory": true,
  "into": "minecraft:stray",
  "keep_level": true,
  "preserve_equipment": true,
  "transformation_sound": "convert_to_stray"
}


Stray - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/stray.json

"minecraft:transformation": {
  "delay": 0.5,
  "into": "minecraft:skeleton"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Transformation (minecraft:transformation)
 * Defines an entity's transformation from the current definition into
 * another.
 */
export default interface MinecraftTransformation {

  /**
   * @remarks
   * List of components to add to the entity after the 
   * transformation
   */
  add?: MinecraftTransformationAdd[];

  /**
   * @remarks
   * Sound to play when the transformation starts
   */
  begin_transform_sound?: string;

  /**
   * @remarks
   * Defines the properties of the delay for the transformation. Can
   * be a simple number (seconds) or a complex object.
   * 
   * Sample Values:
   * Pig: 0.5
   *
   *
   */
  delay?: MinecraftTransformationDelay;

  /**
   * @remarks
   * Cause the entity to drop all equipment upon transformation
   */
  drop_equipment?: boolean;

  /**
   * @remarks
   * Cause the entity to drop all items in inventory upon
   * transformation
   * 
   * Sample Values:
   * Skeleton: true
   *
   */
  drop_inventory?: boolean;

  /**
   * @remarks
   * Entity Definition that this entity will transform into
   * 
   * Sample Values:
   * Hoglin: "minecraft:zoglin"
   *
   * Pig: "minecraft:pig_zombie"
   *
   * Skeleton: "minecraft:stray"
   *
   */
  into?: string;

  /**
   * @remarks
   * If this entity has trades and has leveled up, it should maintain that
   * level after transformation.
   * 
   * Sample Values:
   * Hoglin: true
   *
   *
   */
  keep_level?: boolean;

  /**
   * @remarks
   * If this entity is owned by another entity, it should remain owned
   * after transformation.
   */
  keep_owner?: boolean;

  /**
   * @remarks
   * Cause the entity to keep equipment after going through
   * transformation
   * 
   * Sample Values:
   * Skeleton: true
   *
   */
  preserve_equipment?: boolean;

  /**
   * @remarks
   * Sound to play when the entity is done transforming
   * 
   * Sample Values:
   * Hoglin: "mob.hoglin.converted_to_zombified"
   *
   * Pig: "mob.pig.death"
   *
   * Skeleton: "convert_to_stray"
   *
   */
  transformation_sound?: string;

}


/**
 * List of components to add to the entity after the
 * transformation.
 */
export interface MinecraftTransformationAdd {

  /**
   * @remarks
   * Names of component groups to add
   */
  component_groups?: string[];

}


/**
 * Defines the properties of the delay for the transformation.
 */
export interface MinecraftTransformationDelay {

  /**
   * @remarks
   * Chance that the entity will look for nearby blocks that can
   * speed up the transformation. Value must be between 0.0 and 
   * 1.0
   */
  block_assist_chance?: number;

  /**
   * @remarks
   * Chance that, once a block is found, will help speed up the
   * transformation
   */
  block_chance?: number;

  /**
   * @remarks
   * Maximum number of blocks the entity will look for to aid in the
   * transformation. If not defined or set to 0, it will be set to
   * the block radius
   */
  block_max?: number;

  /**
   * @remarks
   * Distance in Blocks that the entity will search for blocks that
   * can help the transformation
   */
  block_radius?: number;

  /**
   * @remarks
   * List of blocks that can help the transformation of this 
   * entity
   */
  block_types?: string[];

  /**
   * @remarks
   * Time in seconds to be added to value to have the maximum random
   * time range value until the entity transforms (if non-zero then
   * the time in seconds before the entity transforms will be random
   * between value+range_min and value+range_max)
   */
  range_max?: number;

  /**
   * @remarks
   * Time in seconds to be added to value to have the minimum random
   * time range value until the entity transforms (if non-zero then
   * the time in seconds before the entity transforms will be random
   * between value+range_min and value+range_max)
   */
  range_min?: number;

  /**
   * @remarks
   * Time in seconds before the entity transforms
   */
  value?: number;

}