// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Attachables Documentation - minecraft:attachable
 * 
 * minecraft:attachable Samples

Armor - armor

{
  "format_version": "1.8.0",
  "minecraft:attachable": {
    "description": {
      "identifier": "minecraft:iron_chestplate",
      "materials": {
        "default": "armor",
        "enchanted": "armor_enchanted"
      },
      "textures": {
        "default": "textures/models/armor/iron_1",
        "enchanted": "textures/misc/enchanted_actor_glint"
      },
      "geometry": {
        "default": "geometry.humanoid.armor.chestplate"
      },
      "scripts": {
        "parent_setup": "variable.chest_layer_visible = 0.0;"
      },
      "render_controllers": [
        "controller.render.armor"
      ]
    }
  }
}


Elytra - elytra

{
  "format_version": "1.10.0",
  "minecraft:attachable": {
    "description": {
      "identifier": "minecraft:elytra",
      "materials": {
        "default": "elytra",
        "enchanted": "elytra_glint"
      },
      "textures": {
        "default": "textures/models/armor/elytra",
        "enchanted": "textures/misc/enchanted_actor_glint"
      },
      "geometry": {
        "default": "geometry.elytra"
      },
      "animations": {
        "default_controller": "controller.animation.elytra.default",
        "gliding": "animation.elytra.gliding"
      },
      "scripts": {
        "parent_setup": "variable.chest_layer_visible = 0.0;",
        "animate": [
          "default_controller"
        ]
      },
      "render_controllers": [
        "controller.render.armor"
      ]
    }
  }
}

 */

import * as jsoncommon from '../../common';

/**
 * Attachable (attachable)
 * An attachable definition for Minecraft Bedrock Edition. Attachables
 * define how items render when equipped or held by entities, including
 * armor, weapons, tools, and other wearable/holdable items.
 * Note: Attachables are used to define how items render when
 * equipped. They reference materials, textures, geometry, and
 * optionally animations and render controllers defined in other
 * resource pack files.
 */
export default interface Attachable {

  /**
   * @remarks
   * The format version of this attachable file. Common versions include
   * '1.8.0' and '1.10.0'.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The attachable definition container.
   */
  "minecraft:attachable": AttachableMinecraftAttachable;

}


/**
 */
export interface AttachableMinecraftAttachable {

  /**
   * @remarks
   * The attachable description containing all configuration.
   */
  description: AttachableMinecraftAttachableDescription;

}


/**
 */
export interface AttachableMinecraftAttachableDescription {

  /**
   * @remarks
   * Animation and animation controller definitions. Keys are short
   * names used in scripts, values are full animation/controller 
   * identifiers.
   */
  animations?: { [key: string]: AttachableMinecraftAttachableDescriptionAnimations };

  /**
   * @remarks
   * Whether to allow child attachables on this attachable.
   */
  enable_attachables?: boolean;

  /**
   * @remarks
   * Geometry definitions for the attachable. Keys are geometry names
   * (e.g., 'default'), values are geometry identifiers.
   */
  geometry?: { [key: string]: AttachableMinecraftAttachableDescriptionGeometry };

  /**
   * @remarks
   * The unique identifier for this attachable. Should match the item
   * identifier it attaches to (e.g., 
   * 'minecraft:iron_chestplate').
   */
  identifier: string;

  /**
   * @remarks
   * The item identifier this attachable is associated with. If not
   * specified, uses the attachable identifier.
   */
  item?: string;

  /**
   * @remarks
   * Material definitions for rendering the attachable. Keys are
   * material names (e.g., 'default', 'enchanted'), values are
   * material identifiers.
   */
  materials?: { [key: string]: AttachableMinecraftAttachableDescriptionMaterials };

  /**
   * @remarks
   * The minimum engine version required for this attachable.
   */
  min_engine_version?: number;

  /**
   * @remarks
   * Particle effect definitions for the attachable.
   */
  particle_effects?: { [key: string]: AttachableMinecraftAttachableDescriptionParticleEffects };

  /**
   * @remarks
   * List of render controller identifiers or conditional render
   * controllers.
   */
  render_controllers?: string[];

  /**
   * @remarks
   * Script definitions for the attachable, including initialization and
   * animation triggers.
   */
  scripts?: AttachableMinecraftAttachableDescriptionScripts;

  /**
   * @remarks
   * Sound effect definitions for the attachable.
   */
  sound_effects?: { [key: string]: AttachableMinecraftAttachableDescriptionSoundEffects };

  /**
   * @remarks
   * Spawn egg configuration for this attachable, if applicable.
   */
  spawn_egg?: AttachableMinecraftAttachableDescriptionSpawnEgg;

  /**
   * @remarks
   * Texture definitions for the attachable. Keys are texture names
   * (e.g., 'default', 'enchanted'), values are texture paths.
   */
  textures?: { [key: string]: AttachableMinecraftAttachableDescriptionTextures };

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionAnimations {

  /**
   * @remarks
   * An animation or animation controller identifier (e.g.,
   * 'animation.elytra.gliding', 
   * 'controller.animation.elytra.default').
   */
  azAZ09_: string;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionGeometry {

  /**
   * @remarks
   * A geometry identifier (e.g., 
   * 'geometry.humanoid.armor.chestplate').
   */
  azAZ09_: string;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionMaterials {

  /**
   * @remarks
   * A material identifier (e.g., 'armor', 'armor_enchanted', 
   * 'elytra').
   */
  azAZ09_: string;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionParticleEffects {

  /**
   * @remarks
   * A particle effect identifier.
   */
  azAZ09_: string;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionScripts {

  /**
   * @remarks
   * List of animations to play. Can be animation short names or
   * objects with conditional playback.
   */
  animate?: AttachableMinecraftAttachableDescriptionScriptsAnimate[];

  /**
   * @remarks
   * Molang script executed when the attachable is set up on the
   * parent entity. Used to set variables like
   * 'variable.chest_layer_visible = 0.0;'.
   */
  parent_setup?: string;

  /**
   * @remarks
   * Molang script executed before animations are processed.
   */
  pre_animation?: string;

  /**
   * @remarks
   * Molang expression for the scale of the attachable.
   */
  scale?: string;

  /**
   * @remarks
   * Whether bones and effects should be updated when the entity is
   * offscreen.
   */
  should_update_bones_and_effects_offscreen?: boolean;

  /**
   * @remarks
   * Whether effects should be updated when the entity is 
   * offscreen.
   */
  should_update_effects_offscreen?: boolean;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionScriptsAnimate {

  /**
   * @remarks
   * Short name of an animation defined in the animations 
   * section.
   */
  animation_name: string;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionSoundEffects {

  /**
   * @remarks
   * A sound effect identifier.
   */
  azAZ09_: string;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionSpawnEgg {

  /**
   * @remarks
   * Texture path for the spawn egg.
   */
  texture?: string;

  /**
   * @remarks
   * Index into the spawn egg texture atlas.
   */
  texture_index?: number;

}


/**
 */
export interface AttachableMinecraftAttachableDescriptionTextures {

  /**
   * @remarks
   * A texture path relative to the resource pack (e.g.,
   * 'textures/models/armor/iron_1').
   */
  azAZ09_: string;

}