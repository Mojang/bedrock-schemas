// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:spell_effects
 * 
 * minecraft:spell_effects Samples

Player - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json

 * At /minecraft:entity/component_groups/minecraft:add_raid_omen/minecraft:spell_effects/: 
"minecraft:spell_effects": {
  "add_effects": [
    {
      "display_on_screen_animation": true,
      "duration": 30,
      "effect": "raid_omen"
    }
  ],
  "remove_effects": "bad_omen"
}

 * At /minecraft:entity/component_groups/minecraft:clear_raid_omen_spell_effect/minecraft:spell_effects/: 
"minecraft:spell_effects": {}

 */

import * as jsoncommon from '../../../common';

/**
 * Spell Effects (minecraft:spell_effects)
 * Allows an entity to add or remove status effects from itself.
 * Similarly to `addrider`, this component performs a one-time operation
 * on the entity when added. Removing the component will not change
 * the entity's current effects. Adding different versions of the
 * component multiple times will perform each one in turn. Once the
 * component has been added, it will not provide any further
 * functionality. There is one exception to this behavior: if this
 * component is present on a player, its effects will be
 * re-applied every time the player enters the world. To avoid this,
 * remove the component shortly after adding it, or add an empty
 * component to replace it.
 */
export default interface MinecraftSpellEffects {

  /**
   * @remarks
   * List of effects to add to this entity.
   * 
   * Sample Values:
   * Player: [{"display_on_screen_animation":true,"duration":30,"effect":"raid_omen"}]
   *
   */
  add_effects?: MinecraftSpellEffectsAddEffects[];

  /**
   * @remarks
   * List of identifiers of effects to be removed from this entity after
   * adding this component
   * 
   * Sample Values:
   * Player: "bad_omen"
   *
   */
  remove_effects?: string;

}


/**
 * List of effects to add to this entity after adding this
 * component.
 */
export interface MinecraftSpellEffectsAddEffects {

  /**
   * @remarks
   * Whether to show a screen animation when this effect is 
   * applied.
   */
  display_on_screen_animation?: boolean;

  duration?: number;

  /**
   * @remarks
   * Effect to add to this entity. Includes 'duration' in seconds,
   * 'amplifier' level, 'ambient' if it is to be considered an
   * ambient effect, and 'visible' if the effect should be 
   * visible
   */
  effect?: string;

}