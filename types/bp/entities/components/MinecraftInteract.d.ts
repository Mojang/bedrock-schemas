// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:interact
 * 
 * minecraft:interact Samples
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Interact (minecraft:interact)
 * Defines interactions with this entity.
 * Note: In 1.26.0, the `swing` field on each interaction entry
 * defaults to `true` (it previously defaulted to `false`). Set it
 * explicitly to `false` to opt out of the player's swing 
 * animation.
 */
export default interface MinecraftInteract {

  /**
   * @remarks
   * Time in seconds before this entity can be interacted with 
   * again.
   */
  cooldown?: number;

  /**
   * @remarks
   * Time in seconds before this entity can be interacted with after
   * being attacked.
   */
  cooldown_after_being_attacked?: number;

  /**
   * @remarks
   * The entity's slot to remove and drop the item from, if any, upon
   * successful interaction. Inventory slots are denoted by positive
   * numbers. Equipment slots are denoted by 'slot.weapon.mainhand',
   * 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs',
   * 'slot.armor.feet' and 'slot.armor.body'.
   */
  drop_item_slot?: string;

  /**
   * @remarks
   * Will offset the item drop position this amount in the y
   * direction. Requires "drop_item_slot" to be specified.
   */
  drop_item_y_offset?: number;

  /**
   * @remarks
   * The entity's slot to equip the item to, if any, upon successful
   * interaction. Inventory slots are denoted by positive numbers.
   * Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand',
   * 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet'
   * and 'slot.armor.body'.
   */
  equip_item_slot?: string;

  /**
   * @remarks
   * The amount of health this entity will recover or lose when
   * interacting with this item. Negative values will harm the
   * entity.
   */
  health_amount?: number;

  /**
   * @remarks
   * The amount of damage the item will take when used to interact with
   * this entity. A value of 0 means the item won't lose 
   * durability.
   */
  hurt_item?: number;

  /**
   * @remarks
   * Text to show when the player is able to interact in this way
   * with this entity when playing with touch-screen controls.
   */
  interact_text?: string;

  /**
   * @remarks
   * The list of interactions for this entity.
   */
  interactions?: MinecraftInteractInteractions[];

}


/**
 * Entity InteractionData (InteractionData)
 */
export interface MinecraftInteractInteractions {

  /**
   * @remarks
   * Loot table with items to add to the player's inventory upon
   * successful interaction.
   */
  add_items?: MinecraftInteractInteractionsAddItems;

  /**
   * @remarks
   * If true, the mob that's interacted with will try to do an
   * admire action after interaction. For this to be successful the
   * mob has to have an Admire component and an Admire goal in
   * place.
   */
  admire?: boolean;

  /**
   * @remarks
   * If true, the mob that's interacted with will try to do a
   * barter action after interaction. For this to be successful the
   * mob has to have a Barter component and a Barter goal in 
   * place.
   */
  barter?: boolean;

  /**
   * @remarks
   * Time in seconds before this entity can be interacted with 
   * again.
   */
  cooldown?: number;

  /**
   * @remarks
   * Time in seconds before this entity can be interacted with after
   * being attacked.
   */
  cooldown_after_being_attacked?: number;

  /**
   * @remarks
   * The entity's slot to remove and drop the item from, if any, upon
   * successful interaction. Inventory slots are denoted by positive
   * numbers. Equipment slots are denoted by 'slot.weapon.mainhand',
   * 'slot.weapon.offhand', 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs',
   * 'slot.armor.feet' and 'slot.armor.body'.
   */
  drop_item_slot?: string;

  /**
   * @remarks
   * Will offset the item drop position this amount in the y
   * direction. Requires "drop_item_slot" to be specified.
   */
  drop_item_y_offset?: number;

  /**
   * @remarks
   * The entity's slot to equip the item to, if any, upon successful
   * interaction. Inventory slots are denoted by positive numbers.
   * Equipment slots are denoted by 'slot.weapon.mainhand', 'slot.weapon.offhand',
   * 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet'
   * and 'slot.armor.body'.
   */
  equip_item_slot?: string;

  /**
   * @remarks
   * If true, the mob that's interacted with will try to replace its
   * current main-hand item with the interactable item after
   * interaction.
   */
  give_item?: boolean;

  /**
   * @remarks
   * The amount of health this entity will recover or lose when
   * interacting with this item. Negative values will harm the
   * entity.
   */
  health_amount?: number;

  /**
   * @remarks
   * The amount of damage the item will take when used to interact with
   * this entity. A value of 0 means the item won't lose 
   * durability.
   */
  hurt_item?: number;

  /**
   * @remarks
   * Text to show when the player is able to interact in this way
   * with this entity when playing with touch-screen controls.
   */
  interact_text?: string;

  /**
   * @remarks
   * Event to fire when the interaction occurs.
   */
  on_interact?: MinecraftInteractInteractionsOnInteract;

  /**
   * @remarks
   * Particle effect that will be triggered at the start of the
   * interaction.
   */
  particle_on_start?: MinecraftInteractInteractionsParticleOnStart;

  /**
   * @remarks
   * List of sounds to play when the interaction occurs.
   */
  play_sounds?: string[];

  /**
   * @remarks
   * Allows to repair one of the entity's items.
   */
  repair_entity_item?: MinecraftInteractInteractionsRepairEntityItem;

  /**
   * @remarks
   * List of entities to spawn when the interaction occurs.
   */
  spawn_entities?: string[];

  /**
   * @remarks
   * Loot table with items to drop on the ground upon successful
   * interaction.
   */
  spawn_items?: MinecraftInteractInteractionsSpawnItems;

  /**
   * @remarks
   * If true, the player will do the 'swing' animation when
   * interacting with this entity.
   */
  swing?: boolean;

  /**
   * @remarks
   * If true, the mob that's interacted with will try to replace its
   * current main-hand item with an empty item, and its current main-hand
   * item will occupy the empty selected slot of the player.
   */
  take_item?: boolean;

  /**
   * @remarks
   * The item used will transform to this item upon successful interaction.
   * Format: itemName:auxValue
   */
  transform_to_item?: string;

  /**
   * @remarks
   * If true, the interaction will use an item.
   */
  use_item?: boolean;

  /**
   * @remarks
   * Vibration to emit when the interaction occurs.
   */
  vibration?: MinecraftInteractInteractionsVibration;

}


/**
 * Entity AddItemsData (AddItemsData)
 */
export interface MinecraftInteractInteractionsAddItems {

  /**
   * @remarks
   * File path, relative to the Behavior Pack's path, to the loot
   * table file.
   */
  table: string;

}


/**
 * Entity ActorDefinitionTrigger (ActorDefinitionTrigger)
 * Triggers an entity event when specified conditions are met.
 * Events activate component groups that change entity
 * behavior—transforming villagers into zombie villagers, switching mobs
 * to aggressive mode, or triggering growth stages. Combine with
 * filters to create conditional state machines that respond to
 * gameplay.
 */
export interface MinecraftInteractInteractionsOnInteract {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftInteractInteractionsOnInteractFilters;

  target?: MinecraftInteractInteractionsOnInteractTarget;

}


/**
 * Filters (filters)
 */
export interface MinecraftInteractInteractionsOnInteractFilters {

  /**
   * @remarks
   * The domain the test should be performed in.
   */
  domain?: object;

  /**
   * @remarks
   * The comparison to apply with 'value'.
   */
  operator?: object;

  /**
   * @remarks
   * The subject of this filter test.
   */
  subject?: object;

  /**
   * @remarks
   * The name of the test to apply.
   */
  test: string;

  /**
   * @remarks
   * The value being compared with the test.
   */
  value?: object;

}


export enum MinecraftInteractInteractionsOnInteractTarget {
  baby = `baby`,
  block = `block`,
  damager = `damager`,
  holder = `holder`,
  item = `item`,
  other = `other`,
  parent = `parent`,
  player = `player`,
  self = `self`,
  target = `target`
}


/**
 * Entity InteractParticleData (InteractParticleData)
 */
export interface MinecraftInteractInteractionsParticleOnStart {

  copper_event?: MinecraftInteractInteractionsParticleOnStartCopperEvent;

  /**
   * @remarks
   * Whether or not the particle will appear closer to who performed the
   * interaction.
   */
  particle_offset_towards_interactor?: boolean;

  /**
   * @remarks
   * The type of particle that will be spawned.
   */
  particle_type?: MinecraftInteractInteractionsParticleOnStartParticleType;

  /**
   * @remarks
   * Will offset the particle this amount in the y direction.
   */
  particle_y_offset?: number;

}


export enum MinecraftInteractInteractionsParticleOnStartCopperEvent {
  none = `none`,
  scrape = `scrape`,
  waxOff = `wax_off`,
  waxOn = `wax_on`
}


export enum MinecraftInteractInteractionsParticleOnStartParticleType {
  balloongas = `balloongas`,
  bleach = `bleach`,
  blockforcefield = `blockforcefield`,
  blueflame = `blueflame`,
  breezewindexplosion = `breezewindexplosion`,
  bubble = `bubble`,
  bubblecolumndown = `bubblecolumndown`,
  bubblecolumnup = `bubblecolumnup`,
  bubblemanual = `bubblemanual`,
  campfiresmoke = `campfiresmoke`,
  campfiresmoketall = `campfiresmoketall`,
  candleflame = `candleflame`,
  carrotboost = `carrotboost`,
  coloredflame = `coloredflame`,
  conduit = `conduit`,
  creakingcrumble = `creakingcrumble`,
  crit = `crit`,
  dragonbreath = `dragonbreath`,
  dragonbreathfire = `dragonbreathfire`,
  dragonbreathtrail = `dragonbreathtrail`,
  dragondestroyblock = `dragondestroyblock`,
  driphoney = `driphoney`,
  driplava = `driplava`,
  dripwater = `dripwater`,
  dustplume = `dustplume`,
  electricspark = `electricspark`,
  enchantingtable = `enchantingtable`,
  endrod = `endrod`,
  evaporation = `evaporation`,
  explode = `explode`,
  eyeblossomclose = `eyeblossomclose`,
  eyeblossomopen = `eyeblossomopen`,
  fallingborderdust = `fallingborderdust`,
  fallingdust = `fallingdust`,
  fireworks = `fireworks`,
  fireworksoverlay = `fireworksoverlay`,
  fireworksstarter = `fireworksstarter`,
  flame = `flame`,
  food = `food`,
  greenflame = `greenflame`,
  heart = `heart`,
  hugeexplosion = `hugeexplosion`,
  iconcrack = `iconcrack`,
  ink = `ink`,
  largeexplode = `largeexplode`,
  largesmoke = `largesmoke`,
  lava = `lava`,
  mobappearance = `mobappearance`,
  mobflame = `mobflame`,
  mobspell = `mobspell`,
  mobspellambient = `mobspellambient`,
  mobspellinstantaneous = `mobspellinstantaneous`,
  myceliumdust = `myceliumdust`,
  none = `none`,
  note = `note`,
  obsidiantear = `obsidiantear`,
  orangepoplarleaves = `orangepoplarleaves`,
  paleoakleaves = `paleoakleaves`,
  pausemobgrowth = `pausemobgrowth`,
  portal = `portal`,
  portalreverse = `portalreverse`,
  rainsplash = `rainsplash`,
  reddust = `reddust`,
  redpoplarleaves = `redpoplarleaves`,
  resetmobgrowth = `resetmobgrowth`,
  risingborderdust = `risingborderdust`,
  sculksoul = `sculksoul`,
  shriek = `shriek`,
  shulkerbullet = `shulkerbullet`,
  slime = `slime`,
  smoke = `smoke`,
  sneeze = `sneeze`,
  snowballpoof = `snowballpoof`,
  snowflake = `snowflake`,
  sonicexplosion = `sonicexplosion`,
  soul = `soul`,
  sparkler = `sparkler`,
  spit = `spit`,
  stalactitedriplava = `stalactitedriplava`,
  stalactitedripwater = `stalactitedripwater`,
  sulfurcube = `sulfurcube`,
  terrain = `terrain`,
  totem = `totem`,
  townaura = `townaura`,
  trackingemitter = `trackingemitter`,
  vaultconnection = `vaultconnection`,
  villagerangry = `villagerangry`,
  villagerhappy = `villagerhappy`,
  watersplash = `watersplash`,
  watersplashmanual = `watersplashmanual`,
  waterwake = `waterwake`,
  wax = `wax`,
  whitesmoke = `whitesmoke`,
  windexplosion = `windexplosion`,
  witchspell = `witchspell`,
  wolfarmorcrack = `wolfarmorcrack`,
  yellowpoplarleaves = `yellowpoplarleaves`
}


/**
 * Entity RepairEntityItemData (RepairEntityItemData)
 */
export interface MinecraftInteractInteractionsRepairEntityItem {

  /**
   * @remarks
   * How much of the item durability should be restored upon
   * interaction.
   */
  amount?: number;

  /**
   * @remarks
   * The entity's slot containing the item to be repaired. Inventory slots
   * are denoted by positive numbers. Equipment slots are denoted by
   * 'slot.weapon.mainhand', 'slot.weapon.offhand', 'slot.armor.head',
   * 'slot.armor.chest', 'slot.armor.legs', 'slot.armor.feet' and
   * 'slot.armor.body'.
   */
  slot?: string;

}


/**
 * Entity SpawnItemsData (SpawnItemsData)
 */
export interface MinecraftInteractInteractionsSpawnItems {

  /**
   * @remarks
   * File path, relative to the Behavior Pack's path, to the loot
   * table file.
   */
  table?: string;

  /**
   * @remarks
   * Will offset the items spawn position this amount in the y
   * direction.
   */
  y_offset?: number;

}


export enum MinecraftInteractInteractionsVibration {
  entityAct = `entity_act`,
  entityDie = `entity_die`,
  entityInteract = `entity_interact`,
  none = `none`,
  shear = `shear`
}