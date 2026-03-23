// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:color_proxy
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Color Proxy (Color Proxy)
 * Defines color gradients with smooth interpolation for particle
 * effects. Use this to create particles that change color over
 * their lifetime—from bright flames fading to smoke, magical auras
 * shifting hues, or explosion flashes dimming over time. The
 * gradient maps time points to colors, while the interpolant expression
 * controls which color to sample.
 */
export default interface ColorProxy {

  gradient: { [key: string]: string };

  interpolant: { [key: string]: string };

}