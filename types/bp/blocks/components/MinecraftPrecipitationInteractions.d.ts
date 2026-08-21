// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:precipitation_interactions
 * 
 * minecraft:precipitation_interactions Samples

Block Red Shrub - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/red_shrub.block.json

"minecraft:precipitation_interactions": {
  "precipitation_behavior": "snowlogging"
}


Shelf Mushroom Block - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/shelf_mushroom_block.json

"minecraft:precipitation_interactions": {
  "precipitation_behavior": "none"
}

 */

import * as jsoncommon from '../../../common';

/**
 * Block Precipitation Interactions 
 * (minecraft:precipitation_interactions)
 * Determines interactions the block will have with different
 * precipitations. Three possible values: obrain,
 * obstruct_rain_accumulate_snow and none.
 * Note: In format version 1.26.30, the `snow_log_no_collision` value
 * for `precipitation_behavior` was renamed to `snowlogging` (the
 * legacy value still parses but is deprecated). Snow logging itself
 * requires `format_version` 1.21.120 or newer.
 * Note: The `snow_log_no_collision` value for
 * `precipitation_behavior` (which lets custom blocks be covered by
 * snow) was first added in 1.26.20 under the Upcoming Creator Features
 * experiment, then renamed to `snowlogging` in 1.26.30.
 */
export default interface MinecraftPrecipitationInteractions {

  /**
   * @remarks
   * What behavior should the block have. Possible values: obrain,
   * obstruct_rain_accumulate_snow, snowlogging, and none
   * 
   * Sample Values:
   * Block Red Shrub: "snowlogging"
   *
   * Shelf Mushroom Block: "none"
   *
   */
  precipitation_behavior: MinecraftPrecipitationInteractionsPrecipitationBehavior;

}


export enum MinecraftPrecipitationInteractionsPrecipitationBehavior {
  none = `none`,
  obstructRain = `obstruct_rain`,
  obstructRainAccumulateSnow = `obstruct_rain_accumulate_snow`,
  snowlogging = `snowlogging`
}