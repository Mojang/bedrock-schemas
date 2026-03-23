// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Common types shared across Minecraft Bedrock document schemas.

/**
 * A Minecraft entity/block filter. Can be a single filter test object,
 * an AND/OR group, or an array of filter tests.
 */
export type MinecraftFilter = IFilterTest | IFilterGroup | IFilterTest[];

export interface IFilterTest {
  test?: string;
  subject?: string;
  operator?: string;
  domain?: string;
  value?: string | number | boolean;
}

export interface IFilterGroup {
  all_of?: MinecraftFilter[];
  any_of?: MinecraftFilter[];
  none_of?: MinecraftFilter[];
}

/**
 * A Minecraft event trigger — either a simple event name string
 * or an object with event, target, and optional filters.
 */
export type MinecraftEventTrigger = string | IEventTriggerObject;

export interface IEventTriggerObject {
  event?: string;
  target?: string;
  filters?: MinecraftFilter;
}

/**
 * A Minecraft feature object, used in worldgen feature definitions.
 */
export interface MinecraftFeatureBase {
  description?: { identifier?: string };
}
