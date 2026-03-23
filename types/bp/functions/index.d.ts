// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definition for tick.json — the list of functions that run every tick.

/**
 * tick.json defines which .mcfunction files run every game tick (20 times per second).
 * Place this file at `<behavior_pack>/functions/tick.json`.
 */
export default interface TickJson {
  /** Array of function paths to execute every tick (e.g., ["functions/my_function"]). */
  values: string[];
}
