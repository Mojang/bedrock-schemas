// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Visuals Documentation - minecraft:chance_information.v1.14.0
 */

import * as jsoncommon from '../../common';

/**
 * Chance Information (v1.14.0) (chance_information)
 * Specifies a probability as a fraction with numerator and
 * denominator (format_version 1.14.0).
 */
export default interface ChanceInformation {

  denominator: number;

  numerator: number;

}