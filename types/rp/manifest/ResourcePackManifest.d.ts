// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Resource Pack Manifest Documentation - minecraft:resource_pack_manifest
 */

import * as jsoncommon from '../../common';

/**
 * Resource Pack Manifest (resource_pack_manifest)
 * The manifest.json file for a Minecraft Bedrock Edition resource pack.
 * Every resource pack requires a manifest with a unique UUID,
 * version info, and module declarations. Resource packs contain
 * textures, models, sounds, and UI customizations.
 */
export default interface ResourcePackManifest {

  /**
   * @remarks
   * Optional array of special capabilities required by this 
   * pack.
   */
  capabilities?: string[];

  /**
   * @remarks
   * Optional list of other packs this pack depends on, referenced by
   * UUID and version.
   */
  dependencies?: ResourcePackManifestDependencies[];

  /**
   * @remarks
   * The format version of this manifest file. Use 2 for modern 
   * packs.
   */
  format_version: number;

  /**
   * @remarks
   * The header section containing the pack's identity: name,
   * description, unique UUID, and version.
   */
  header: ResourcePackManifestHeader;

  /**
   * @remarks
   * Optional metadata about the pack including author names, license, and
   * URL.
   */
  metadata?: object;

  /**
   * @remarks
   * Declares modules within the pack. For resource packs, use type
   * 'resources'.
   */
  modules: ResourcePackManifestModules[];

  /**
   * @remarks
   * Optional subpack options for different quality levels.
   */
  subpacks?: string[];

}


/**
 */
export interface ResourcePackManifestDependencies {

  /**
   * @remarks
   * Module name of the dependency.
   */
  module_name?: string;

  /**
   * @remarks
   * UUID of the dependency pack.
   */
  uuid?: string;

  /**
   * @remarks
   * Version of the dependency.
   */
  version?: string;

}


/**
 * Behavior Pack Content
 * Defines the non-header content section of a behavior pack
 * document.
 */
export interface ResourcePackManifestHeader {

  dependencies?: { [key: string]: string };

  modules?: ResourcePackManifestHeaderModules[];

}


/**
 */
export interface ResourcePackManifestHeaderModules {

  /**
   * @remarks
   * Description of this module.
   */
  description?: string;

  /**
   * @remarks
   * Script entry point for this behavior pack.
   */
  entry?: string;

  /**
   * @remarks
   * The scripting language of this module (e.g., 'javascript').
   */
  language?: string;

  /**
   * @remarks
   * Type of this module.
   */
  type?: string;

  /**
   * @remarks
   * Unique identifier of this module.
   */
  uuid?: string;

  /**
   * @remarks
   * Version
   */
  version?: string;

}


/**
 */
export interface ResourcePackManifestModules {

  /**
   * @remarks
   * Description of this module.
   */
  description?: string;

  /**
   * @remarks
   * Script entry point for this pack.
   */
  entry?: string;

  /**
   * @remarks
   * The scripting language of this module (e.g., 'javascript').
   */
  language?: string;

  /**
   * @remarks
   * Type of this module.
   */
  type?: string;

  /**
   * @remarks
   * Unique identifier of this module.
   */
  uuid?: string;

  /**
   * @remarks
   * Version of this module.
   */
  version?: string;

}