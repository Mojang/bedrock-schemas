// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Behavior Pack Manifest Documentation - minecraft:behavior_pack_header_json
 */

import * as jsoncommon from '../../common';

/**
 * Behavior Pack Header
 * Defines the header section of a behavior pack manifest or
 * metadata document.
 */
export default interface BehaviorPackHeader {

  description?: string;

  name?: string;

  version?: string;

}