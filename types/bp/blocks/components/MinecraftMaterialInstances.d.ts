// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Block Components Documentation - minecraft:material_instances
 * 
 * minecraft:material_instances Samples

Block Fabricator - Block Fabricator

"minecraft:material_instances": {
  "*": {
    "texture": "mikeamm_gwve_fabricator",
    "render_method": "alpha_test",
    "ambient_occlusion": 1
  }
}


Block Gray Ore - Block Gray Ore

"minecraft:material_instances": {
  "*": {
    "texture": "mikeamm_gwve_gray_ore",
    "render_method": "alpha_test",
    "face_dimming": false
  }
}


Block Frond Top - Block Frond Top

"minecraft:material_instances": {
  "*": {
    "texture": "frond_top",
    "render_method": "alpha_test"
  }
}


Block Palm Leave - Block Palm Leave

"minecraft:material_instances": {
  "*": {
    "texture": "palm_leave",
    "render_method": "alpha_test"
  }
}


Block White Sand - Block White Sand

"minecraft:material_instances": {
  "*": {
    "texture": "white_sand",
    "render_method": "alpha_test"
  }
}


Block Leaf Pile - Block Leaf Pile

"minecraft:material_instances": {
  "*": {
    "texture": "leaf_pile",
    "render_method": "alpha_test",
    "tint_method": "default_foliage"
  }
}


Tuna Roll - Tuna Roll

"minecraft:material_instances": {
  "north": "sushi_side",
  "south": "sushi_side",
  "*": {
    "texture": "sushi_wrap"
  },
  "sushi_side": {
    "texture": "tuna_roll"
  }
}


Blue Bubble Fish - Blue Bubble Fish

"minecraft:material_instances": {
  "*": {
    "texture": "bubble_fish_blue",
    "render_method": "blend",
    "face_dimming": true,
    "ambient_occlusion": 1
  }
}

 */

import * as jsoncommon from '../../../common';

/**
 * Material Instances (minecraft:material_instances)
 * The material instances for a block. Maps face or
 * material_instance names in a geometry file to an actual material
 * instance. You can assign a material instance object to any of
 * these faces: "up", "down", "north", "south", "east", "west", or
 * "*". You can also give an instance the name of your choosing such
 * as "my_instance", and then assign it to a face by doing
 * "north":"my_instance".
 * Note: From 1.21.80 onward, when using a minecraft:geometry component
 * or minecraft:material_instances component, you must include 
 * both.
 */
export default interface MinecraftMaterialInstances {

  down?: MinecraftMaterialInstancesDown;

  east?: MinecraftMaterialInstancesEast;

  north?: MinecraftMaterialInstancesNorth;

  south?: MinecraftMaterialInstancesSouth;

  up?: MinecraftMaterialInstancesUp;

  west?: MinecraftMaterialInstancesWest;

}


/**
 * Material Instance Face (material_instance_face)
 * Configures how a block face renders its texture, including
 * transparency, culling, and lighting. Set the texture reference, choose
 * render method (opaque, alpha_test, blend, or double_sided), control
 * face culling, and configure ambient occlusion. Enables glass-like
 * transparency, leaf rendering, and custom visual effects.
 */
export interface MinecraftMaterialInstancesDown {

  /**
   * @remarks
   * If this material has ambient occlusion applied when lighting, shadows
   * will be created around and underneath the block. Decimal value
   * controls exponent applied to a value after lighting.
   */
  ambient_occlusion?: number;

  /**
   * @remarks
   * This material should be dimmed by the direction its facing.
   * 
   * Sample Values:
   * Blue Bubble Fish: true
   *
   */
  face_dimming?: string;

  /**
   * @remarks
   * Should the faces that this material is applied to randomize their
   * UVs?
   */
  isotropic?: boolean;

  /**
   * @remarks
   * The render method to use.
   * 
   * Sample Values:
   * Blue Bubble Fish: "blend"
   *
   * Block Orange Ore: "opaque"
   *
   *
   * Block Frond Top: "alpha_test"
   *
   */
  render_method?: string;

  /**
   * @remarks
   * Texture name for the material.
   * 
   * Sample Values:
   * Blue Bubble Fish: "bubble_fish_blue"
   *
   * California Roll: "sushi_wrap"
   *
   * Green Bubble Fish: "bubble_fish_green"
   *
   */
  texture?: string;

  /**
   * @remarks
   * Tint multiplied to the color. Tint method logic varies, but
   * often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint. Supported tint methods are
   * "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage",
   * "grass" and "water"
   */
  tint_method?: boolean;

}


export enum MinecraftMaterialInstancesDownRenderMethod {
  /**
   * @remarks
   * Used for a regular block texture without an alpha layer. Does not
   * allow for transparency or translucency
   */
  opaque = `opaque`,
  /**
   * @remarks
   * Used for completely disabling backface culling.
   */
  doubleSided = `double_sided`,
  /**
   * @remarks
   * Used for a block like stained glass. Allows for transparency and
   * translucency (slightly transparent textures).
   */
  blend = `blend`,
  /**
   * @remarks
   * Used for a block like the monster spawner. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * disabled backface culling.
   */
  alphaTest = `alpha_test`,
  /**
   * @remarks
   * Used for a block like the (unstained) glass. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * enables backface culling.
   */
  alphaTestSingleSided = `alpha_test_single_sided`,
  /**
   * @remarks
   * Will blend like stained glass in the near render and turn opaque on
   * the far render.
   */
  blendToOpaque = `blend_to_opaque`,
  /**
   * @remarks
   * Used for a block like the leaves. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * disabled backface culling.
   */
  alphaTestToOpaque = `alpha_test_to_opaque`,
  /**
   * @remarks
   * Used for a block like the sugar cane. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * enables backface culling.
   */
  alphaTestSingleSidedToOpaque = `alpha_test_single_sided_to_opaque`
}


/**
 * Material Instance Face (material_instance_face)
 * Configures how a block face renders its texture, including
 * transparency, culling, and lighting. Set the texture reference, choose
 * render method (opaque, alpha_test, blend, or double_sided), control
 * face culling, and configure ambient occlusion. Enables glass-like
 * transparency, leaf rendering, and custom visual effects.
 */
export interface MinecraftMaterialInstancesEast {

  /**
   * @remarks
   * If this material has ambient occlusion applied when lighting, shadows
   * will be created around and underneath the block. Decimal value
   * controls exponent applied to a value after lighting.
   */
  ambient_occlusion?: number;

  /**
   * @remarks
   * This material should be dimmed by the direction its facing.
   * 
   * Sample Values:
   * Blue Bubble Fish: true
   *
   */
  face_dimming?: string;

  /**
   * @remarks
   * Should the faces that this material is applied to randomize their
   * UVs?
   */
  isotropic?: boolean;

  /**
   * @remarks
   * The render method to use.
   * 
   * Sample Values:
   * Blue Bubble Fish: "blend"
   *
   * Block Orange Ore: "opaque"
   *
   *
   * Block Frond Top: "alpha_test"
   *
   */
  render_method?: string;

  /**
   * @remarks
   * Texture name for the material.
   * 
   * Sample Values:
   * Blue Bubble Fish: "bubble_fish_blue"
   *
   * California Roll: "sushi_wrap"
   *
   * Green Bubble Fish: "bubble_fish_green"
   *
   */
  texture?: string;

  /**
   * @remarks
   * Tint multiplied to the color. Tint method logic varies, but
   * often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint. Supported tint methods are
   * "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage",
   * "grass" and "water"
   */
  tint_method?: boolean;

}


export enum MinecraftMaterialInstancesEastRenderMethod {
  /**
   * @remarks
   * Used for a regular block texture without an alpha layer. Does not
   * allow for transparency or translucency
   */
  opaque = `opaque`,
  /**
   * @remarks
   * Used for completely disabling backface culling.
   */
  doubleSided = `double_sided`,
  /**
   * @remarks
   * Used for a block like stained glass. Allows for transparency and
   * translucency (slightly transparent textures).
   */
  blend = `blend`,
  /**
   * @remarks
   * Used for a block like the monster spawner. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * disabled backface culling.
   */
  alphaTest = `alpha_test`,
  /**
   * @remarks
   * Used for a block like the (unstained) glass. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * enables backface culling.
   */
  alphaTestSingleSided = `alpha_test_single_sided`,
  /**
   * @remarks
   * Will blend like stained glass in the near render and turn opaque on
   * the far render.
   */
  blendToOpaque = `blend_to_opaque`,
  /**
   * @remarks
   * Used for a block like the leaves. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * disabled backface culling.
   */
  alphaTestToOpaque = `alpha_test_to_opaque`,
  /**
   * @remarks
   * Used for a block like the sugar cane. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * enables backface culling.
   */
  alphaTestSingleSidedToOpaque = `alpha_test_single_sided_to_opaque`
}


/**
 * Material Instance Face (material_instance_face)
 * Configures how a block face renders its texture, including
 * transparency, culling, and lighting. Set the texture reference, choose
 * render method (opaque, alpha_test, blend, or double_sided), control
 * face culling, and configure ambient occlusion. Enables glass-like
 * transparency, leaf rendering, and custom visual effects.
 */
export interface MinecraftMaterialInstancesNorth {

  /**
   * @remarks
   * If this material has ambient occlusion applied when lighting, shadows
   * will be created around and underneath the block. Decimal value
   * controls exponent applied to a value after lighting.
   */
  ambient_occlusion?: number;

  /**
   * @remarks
   * This material should be dimmed by the direction its facing.
   * 
   * Sample Values:
   * Blue Bubble Fish: true
   *
   */
  face_dimming?: string;

  /**
   * @remarks
   * Should the faces that this material is applied to randomize their
   * UVs?
   */
  isotropic?: boolean;

  /**
   * @remarks
   * The render method to use.
   * 
   * Sample Values:
   * Blue Bubble Fish: "blend"
   *
   * Block Orange Ore: "opaque"
   *
   *
   * Block Frond Top: "alpha_test"
   *
   */
  render_method?: string;

  /**
   * @remarks
   * Texture name for the material.
   * 
   * Sample Values:
   * Blue Bubble Fish: "bubble_fish_blue"
   *
   * California Roll: "sushi_wrap"
   *
   * Green Bubble Fish: "bubble_fish_green"
   *
   */
  texture?: string;

  /**
   * @remarks
   * Tint multiplied to the color. Tint method logic varies, but
   * often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint. Supported tint methods are
   * "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage",
   * "grass" and "water"
   */
  tint_method?: boolean;

}


export enum MinecraftMaterialInstancesNorthRenderMethod {
  /**
   * @remarks
   * Used for a regular block texture without an alpha layer. Does not
   * allow for transparency or translucency
   */
  opaque = `opaque`,
  /**
   * @remarks
   * Used for completely disabling backface culling.
   */
  doubleSided = `double_sided`,
  /**
   * @remarks
   * Used for a block like stained glass. Allows for transparency and
   * translucency (slightly transparent textures).
   */
  blend = `blend`,
  /**
   * @remarks
   * Used for a block like the monster spawner. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * disabled backface culling.
   */
  alphaTest = `alpha_test`,
  /**
   * @remarks
   * Used for a block like the (unstained) glass. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * enables backface culling.
   */
  alphaTestSingleSided = `alpha_test_single_sided`,
  /**
   * @remarks
   * Will blend like stained glass in the near render and turn opaque on
   * the far render.
   */
  blendToOpaque = `blend_to_opaque`,
  /**
   * @remarks
   * Used for a block like the leaves. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * disabled backface culling.
   */
  alphaTestToOpaque = `alpha_test_to_opaque`,
  /**
   * @remarks
   * Used for a block like the sugar cane. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * enables backface culling.
   */
  alphaTestSingleSidedToOpaque = `alpha_test_single_sided_to_opaque`
}


/**
 * Material Instance Face (material_instance_face)
 * Configures how a block face renders its texture, including
 * transparency, culling, and lighting. Set the texture reference, choose
 * render method (opaque, alpha_test, blend, or double_sided), control
 * face culling, and configure ambient occlusion. Enables glass-like
 * transparency, leaf rendering, and custom visual effects.
 */
export interface MinecraftMaterialInstancesSouth {

  /**
   * @remarks
   * If this material has ambient occlusion applied when lighting, shadows
   * will be created around and underneath the block. Decimal value
   * controls exponent applied to a value after lighting.
   */
  ambient_occlusion?: number;

  /**
   * @remarks
   * This material should be dimmed by the direction its facing.
   * 
   * Sample Values:
   * Blue Bubble Fish: true
   *
   */
  face_dimming?: string;

  /**
   * @remarks
   * Should the faces that this material is applied to randomize their
   * UVs?
   */
  isotropic?: boolean;

  /**
   * @remarks
   * The render method to use.
   * 
   * Sample Values:
   * Blue Bubble Fish: "blend"
   *
   * Block Orange Ore: "opaque"
   *
   *
   * Block Frond Top: "alpha_test"
   *
   */
  render_method?: string;

  /**
   * @remarks
   * Texture name for the material.
   * 
   * Sample Values:
   * Blue Bubble Fish: "bubble_fish_blue"
   *
   * California Roll: "sushi_wrap"
   *
   * Green Bubble Fish: "bubble_fish_green"
   *
   */
  texture?: string;

  /**
   * @remarks
   * Tint multiplied to the color. Tint method logic varies, but
   * often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint. Supported tint methods are
   * "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage",
   * "grass" and "water"
   */
  tint_method?: boolean;

}


export enum MinecraftMaterialInstancesSouthRenderMethod {
  /**
   * @remarks
   * Used for a regular block texture without an alpha layer. Does not
   * allow for transparency or translucency
   */
  opaque = `opaque`,
  /**
   * @remarks
   * Used for completely disabling backface culling.
   */
  doubleSided = `double_sided`,
  /**
   * @remarks
   * Used for a block like stained glass. Allows for transparency and
   * translucency (slightly transparent textures).
   */
  blend = `blend`,
  /**
   * @remarks
   * Used for a block like the monster spawner. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * disabled backface culling.
   */
  alphaTest = `alpha_test`,
  /**
   * @remarks
   * Used for a block like the (unstained) glass. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * enables backface culling.
   */
  alphaTestSingleSided = `alpha_test_single_sided`,
  /**
   * @remarks
   * Will blend like stained glass in the near render and turn opaque on
   * the far render.
   */
  blendToOpaque = `blend_to_opaque`,
  /**
   * @remarks
   * Used for a block like the leaves. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * disabled backface culling.
   */
  alphaTestToOpaque = `alpha_test_to_opaque`,
  /**
   * @remarks
   * Used for a block like the sugar cane. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * enables backface culling.
   */
  alphaTestSingleSidedToOpaque = `alpha_test_single_sided_to_opaque`
}


/**
 * Material Instance Face (material_instance_face)
 * Configures how a block face renders its texture, including
 * transparency, culling, and lighting. Set the texture reference, choose
 * render method (opaque, alpha_test, blend, or double_sided), control
 * face culling, and configure ambient occlusion. Enables glass-like
 * transparency, leaf rendering, and custom visual effects.
 */
export interface MinecraftMaterialInstancesUp {

  /**
   * @remarks
   * If this material has ambient occlusion applied when lighting, shadows
   * will be created around and underneath the block. Decimal value
   * controls exponent applied to a value after lighting.
   */
  ambient_occlusion?: number;

  /**
   * @remarks
   * This material should be dimmed by the direction its facing.
   * 
   * Sample Values:
   * Blue Bubble Fish: true
   *
   */
  face_dimming?: string;

  /**
   * @remarks
   * Should the faces that this material is applied to randomize their
   * UVs?
   */
  isotropic?: boolean;

  /**
   * @remarks
   * The render method to use.
   * 
   * Sample Values:
   * Blue Bubble Fish: "blend"
   *
   * Block Orange Ore: "opaque"
   *
   *
   * Block Frond Top: "alpha_test"
   *
   */
  render_method?: string;

  /**
   * @remarks
   * Texture name for the material.
   * 
   * Sample Values:
   * Blue Bubble Fish: "bubble_fish_blue"
   *
   * California Roll: "sushi_wrap"
   *
   * Green Bubble Fish: "bubble_fish_green"
   *
   */
  texture?: string;

  /**
   * @remarks
   * Tint multiplied to the color. Tint method logic varies, but
   * often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint. Supported tint methods are
   * "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage",
   * "grass" and "water"
   */
  tint_method?: boolean;

}


export enum MinecraftMaterialInstancesUpRenderMethod {
  /**
   * @remarks
   * Used for a regular block texture without an alpha layer. Does not
   * allow for transparency or translucency
   */
  opaque = `opaque`,
  /**
   * @remarks
   * Used for completely disabling backface culling.
   */
  doubleSided = `double_sided`,
  /**
   * @remarks
   * Used for a block like stained glass. Allows for transparency and
   * translucency (slightly transparent textures).
   */
  blend = `blend`,
  /**
   * @remarks
   * Used for a block like the monster spawner. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * disabled backface culling.
   */
  alphaTest = `alpha_test`,
  /**
   * @remarks
   * Used for a block like the (unstained) glass. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * enables backface culling.
   */
  alphaTestSingleSided = `alpha_test_single_sided`,
  /**
   * @remarks
   * Will blend like stained glass in the near render and turn opaque on
   * the far render.
   */
  blendToOpaque = `blend_to_opaque`,
  /**
   * @remarks
   * Used for a block like the leaves. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * disabled backface culling.
   */
  alphaTestToOpaque = `alpha_test_to_opaque`,
  /**
   * @remarks
   * Used for a block like the sugar cane. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * enables backface culling.
   */
  alphaTestSingleSidedToOpaque = `alpha_test_single_sided_to_opaque`
}


/**
 * Material Instance Face (material_instance_face)
 * Configures how a block face renders its texture, including
 * transparency, culling, and lighting. Set the texture reference, choose
 * render method (opaque, alpha_test, blend, or double_sided), control
 * face culling, and configure ambient occlusion. Enables glass-like
 * transparency, leaf rendering, and custom visual effects.
 */
export interface MinecraftMaterialInstancesWest {

  /**
   * @remarks
   * If this material has ambient occlusion applied when lighting, shadows
   * will be created around and underneath the block. Decimal value
   * controls exponent applied to a value after lighting.
   */
  ambient_occlusion?: number;

  /**
   * @remarks
   * This material should be dimmed by the direction its facing.
   * 
   * Sample Values:
   * Blue Bubble Fish: true
   *
   */
  face_dimming?: string;

  /**
   * @remarks
   * Should the faces that this material is applied to randomize their
   * UVs?
   */
  isotropic?: boolean;

  /**
   * @remarks
   * The render method to use.
   * 
   * Sample Values:
   * Blue Bubble Fish: "blend"
   *
   * Block Orange Ore: "opaque"
   *
   *
   * Block Frond Top: "alpha_test"
   *
   */
  render_method?: string;

  /**
   * @remarks
   * Texture name for the material.
   * 
   * Sample Values:
   * Blue Bubble Fish: "bubble_fish_blue"
   *
   * California Roll: "sushi_wrap"
   *
   * Green Bubble Fish: "bubble_fish_green"
   *
   */
  texture?: string;

  /**
   * @remarks
   * Tint multiplied to the color. Tint method logic varies, but
   * often refers to the "rain" and "temperature" of the biome the
   * block is placed in to compute the tint. Supported tint methods are
   * "none", "default_foliage", "birch_foliage", "evergreen_foliage", "dry_foliage",
   * "grass" and "water"
   */
  tint_method?: boolean;

}


export enum MinecraftMaterialInstancesWestRenderMethod {
  /**
   * @remarks
   * Used for a regular block texture without an alpha layer. Does not
   * allow for transparency or translucency
   */
  opaque = `opaque`,
  /**
   * @remarks
   * Used for completely disabling backface culling.
   */
  doubleSided = `double_sided`,
  /**
   * @remarks
   * Used for a block like stained glass. Allows for transparency and
   * translucency (slightly transparent textures).
   */
  blend = `blend`,
  /**
   * @remarks
   * Used for a block like the monster spawner. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * disabled backface culling.
   */
  alphaTest = `alpha_test`,
  /**
   * @remarks
   * Used for a block like the (unstained) glass. Does not allow for
   * translucency, only fully opaque or fully transparent textures. Also
   * enables backface culling.
   */
  alphaTestSingleSided = `alpha_test_single_sided`,
  /**
   * @remarks
   * Will blend like stained glass in the near render and turn opaque on
   * the far render.
   */
  blendToOpaque = `blend_to_opaque`,
  /**
   * @remarks
   * Used for a block like the leaves. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * disabled backface culling.
   */
  alphaTestToOpaque = `alpha_test_to_opaque`,
  /**
   * @remarks
   * Used for a block like the sugar cane. Does not allow for
   * translucency, only fully opaque or fully transparent textures in
   * the near render and turn only opaque on the far render. Also
   * enables backface culling.
   */
  alphaTestSingleSidedToOpaque = `alpha_test_single_sided_to_opaque`
}