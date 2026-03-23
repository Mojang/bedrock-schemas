// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:item_v1_26_0
 */

import * as jsoncommon from '../../../common';

/**
 * Item 26.0 Item v1 (minecraft:item v1.26.0)
 * Item definition includes the "description" and "components" 
 * sections.
 */
export default interface MinecraftItemV1260 {

  /**
   * @remarks
   * List of all components used in this item.
   */
  components?: MinecraftItemV1260Components;

  /**
   * @remarks
   * Contains the required identifier for the item. May contain optional
   * fields like menu_category.
   */
  description: MinecraftItemV1260Description;

}


/**
 * Item 21.80 Components v1 (components v1.21.80)
 * List of all components used in this item.
 */
export interface MinecraftItemV1260Components {

  /**
   * @remarks
   * The allow_off_hand component determines whether the item can be
   * placed in the off hand slot of the inventory.
   */
  "minecraft:allow_off_hand"?: boolean;

  /**
   * @remarks
   * Items with the block_placer component will place a block when
   * used. 
This component can also be used instead of the
   * "minecraft:icon" component to render the referenced block as
   * the item icon.
   */
  "minecraft:block_placer"?: MinecraftItemV1260ComponentsMinecraftBlockPlacer;

  /**
   * @remarks
   * [EXPERIMENTAL] Adds bundle-specific interactions and tooltip to
   * the item. Requires a "minecraft:storage_item" component.
   */
  "minecraft:bundle_interaction"?: MinecraftItemV1260ComponentsMinecraftBundleInteraction;

  /**
   * @remarks
   * The can_destroy_in_creative component determines if the item can
   * be used by a player to break blocks when in creative mode.
   */
  "minecraft:can_destroy_in_creative"?: boolean;

  /**
   * @remarks
   * Specifies that an item is compostable and provides the chance of
   * creating a composting layer in the composter
   */
  "minecraft:compostable"?: MinecraftItemV1260ComponentsMinecraftCompostable;

  /**
   * @remarks
   * Adds a cooldown to the item so that, after performing an action of
   * the specified "type", all items with a "minecraft:cooldown" component
   * in the same "category" become unable to perform that same type of
   * action for the number of seconds defined in "duration".
   */
  "minecraft:cooldown"?: MinecraftItemV1260ComponentsMinecraftCooldown;

  /**
   * @remarks
   * Specifies an array of custom components defined in a script that
   * should be added to this item.
   */
  "minecraft:custom_components"?: object;

  /**
   * @remarks
   * The damage component determines how much extra damage the item
   * does on attack.
   */
  "minecraft:damage"?: number;

  /**
   * @remarks
   * It allows an item to absorb damage that would otherwise be
   * dealt to its wearer. For this to happen, the item needs to be
   * equipped in an armor slot. The absorbed damage reduces the
   * item's durability, with any excess damage being ignored. Because of
   * this, the item also needs a `minecraft:durability` 
   * component.
   */
  "minecraft:damage_absorption"?: MinecraftItemV1260ComponentsMinecraftDamageAbsorption;

  /**
   * @remarks
   * Digger item component specifies how quickly this item can dig
   * specific blocks.
   */
  "minecraft:digger"?: MinecraftItemV1260ComponentsMinecraftDigger;

  /**
   * @remarks
   * The display_name item component specifies the text shown whenever an
   * item's name is displayed, like in hover text.
   */
  "minecraft:display_name"?: MinecraftItemV1260ComponentsMinecraftDisplayName;

  /**
   * @remarks
   * The durability item component specifies how much damage the item
   * takes before breaking, and allows the item to be combined to
   * repair or augment them.
   */
  "minecraft:durability"?: MinecraftItemV1260ComponentsMinecraftDurability;

  /**
   * @remarks
   * Enables an item to emit effects when it receives damage. Because of
   * this, the item also needs a `minecraft:durability` 
   * component.
   */
  "minecraft:durability_sensor"?: MinecraftItemV1260ComponentsMinecraftDurabilitySensor;

  "minecraft:dyeable"?: MinecraftItemV1260ComponentsMinecraftDyeable;

  /**
   * @remarks
   * The enchantable component specifies what enchantments can be
   * applied to the item. Not all enchantments will have an effect on
   * all item components.
   */
  "minecraft:enchantable"?: MinecraftItemV1260ComponentsMinecraftEnchantable;

  /**
   * @remarks
   * The entity_placer item component specifies the blocks that the
   * item can be placed on.
   */
  "minecraft:entity_placer"?: MinecraftItemV1260ComponentsMinecraftEntityPlacer;

  /**
   * @remarks
   * When an item has a food component, it becomes edible to the
   * player. Must have the 'minecraft:use_duration' component in
   * order to function properly.
   */
  "minecraft:food"?: MinecraftItemV1260ComponentsMinecraftFood;

  /**
   * @remarks
   * Fuel item component allows this item to be used as fuel in a
   * furnace to 'cook' other items.
   */
  "minecraft:fuel"?: number;

  /**
   * @remarks
   * The glint component determines whether the item has the
   * enchanted glint render effect on it.
   */
  "minecraft:glint"?: boolean;

  /**
   * @remarks
   * The hand_equipped component determines if an item is rendered like
   * a tool while it is in a player's hand.
   */
  "minecraft:hand_equipped"?: boolean;

  /**
   * @remarks
   * The hover_text_color component specifies the color of the item
   * name when the players hovers the cursor over the item.
   */
  "minecraft:hover_text_color"?: string;

  /**
   * @remarks
   * Icon item component determines which icon graphic will be used to
   * represent the item in the UI and elsewhere.
   */
  "minecraft:icon"?: string;

  /**
   * @remarks
   * This component is a boolean or string that determines if the
   * interact button is shown in touch controls and what text is
   * displayed on the button. When set as true, default "Use Item" text
   * will be displayed.
   */
  "minecraft:interact_button"?: boolean;

  /**
   * @remarks
   * The liquid_clipped component determines whether the item
   * interacts with liquid blocks on use.
   */
  "minecraft:liquid_clipped"?: boolean;

  /**
   * @remarks
   * The max_stack_size component specifies how many of the item can
   * be stacked together.
   */
  "minecraft:max_stack_size"?: number;

  /**
   * @remarks
   * Projectile items shoot out, like an arrow.
   */
  "minecraft:projectile"?: MinecraftItemV1260ComponentsMinecraftProjectile;

  /**
   * @remarks
   * Specifies the base rarity and subsequently color of the item name
   * when the player hovers the cursor over the item.
   */
  "minecraft:rarity"?: string;

  /**
   * @remarks
   * Record Item Component. Used by record items to play music.
   */
  "minecraft:record"?: MinecraftItemV1260ComponentsMinecraftRecord;

  /**
   * @remarks
   * The repairable item component specifies which items can be used
   * to repair this item, along with how much durability is 
   * gained.
   */
  "minecraft:repairable"?: MinecraftItemV1260ComponentsMinecraftRepairable;

  /**
   * @remarks
   * Shooter Item Component.
   */
  "minecraft:shooter"?: MinecraftItemV1260ComponentsMinecraftShooter;

  /**
   * @remarks
   * Should_despawn component determines if the item should eventually
   * despawn while floating in the world
   */
  "minecraft:should_despawn"?: boolean;

  /**
   * @remarks
   * The stacked_by_data component determines whether the same items
   * with different aux values can stack. Also defines whether the
   * item entities can merge while floating in the world.
   */
  "minecraft:stacked_by_data"?: boolean;

  /**
   * @remarks
   * [EXPERIMENTAL] Storage Items can be used by other components to
   * store other items within this item.
   */
  "minecraft:storage_item"?: MinecraftItemV1260ComponentsMinecraftStorageItem;

  /**
   * @remarks
   * Specifies the maximum weight limit that a storage item can 
   * hold
   */
  "minecraft:storage_weight_limit"?: MinecraftItemV1260ComponentsMinecraftStorageWeightLimit;

  /**
   * @remarks
   * Specifies the maximum weight limit that a storage item can 
   * hold
   */
  "minecraft:storage_weight_modifier"?: MinecraftItemV1260ComponentsMinecraftStorageWeightModifier;

  /**
   * @remarks
   * The tags component specifies which tags an item has on it.
   */
  "minecraft:tags"?: MinecraftItemV1260ComponentsMinecraftTags;

  /**
   * @remarks
   * Throwable items can be thrown by the player, such as a
   * snowball.
   */
  "minecraft:throwable"?: MinecraftItemV1260ComponentsMinecraftThrowable;

  /**
   * @remarks
   * Use_animation specifies which animation is played when the
   * player uses the item.
   */
  "minecraft:use_animation"?: string;

  /**
   * @remarks
   * Modifies use behavior, including how long the item takes to use
   * and the player's movement speed.
   */
  "minecraft:use_modifiers"?: MinecraftItemV1260ComponentsMinecraftUseModifiers;

  /**
   * @remarks
   * Wearable items can be worn by a player in the head, chest, legs,
   * feet, or off-hand slots.
   */
  "minecraft:wearable"?: MinecraftItemV1260ComponentsMinecraftWearable;

}


/**
 * Item Components Block Placer (minecraft:block_placer)
 * Sets the item as a placer item component for blocks. Items with
 * this component will place a block when used.
 * Note: This component can also be used instead of the
 * minecraft:icon component to render the block this item will place
 * as the icon.
 */
export interface MinecraftItemV1260ComponentsMinecraftBlockPlacer {

  /**
   * @remarks
   * If true, block placement through this item will be aligned while
   * holding the interaction button down. Defaults to false.
   */
  aligned_placement?: boolean;

  /**
   * @remarks
   * Defines the block that will be placed.
   * 
   * Sample Values:
   * My Sword Singing: "minecraft:dirt"
   *
   */
  block: object;

  /**
   * @remarks
   * If true, the item will be registered as the item for this block.
   * This item will be returned by default when the block is
   * broken/picked. Note: the identifier for this item must match the
   * block's identifier for this field to be valid. Defaults to
   * false.
   */
  replace_block_item?: boolean;

  /**
   * @remarks
   * List of block descriptors of the blocks that this item can be
   * used on. If left empty, all blocks will be allowed.
   * 
   * Sample Values:
   * My Sword Singing: ["dirt","grass","anvil"]
   *
   */
  use_on?: MinecraftItemV1260ComponentsMinecraftBlockPlacerUseOn[];

}


/**
 * Use On (use_on)
 */
export interface MinecraftItemV1260ComponentsMinecraftBlockPlacerUseOn {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Item Components Bundle Interaction 
 * (minecraft:bundle_interaction)
 * Enables the bundle-specific interaction scheme and tooltip for
 * an item.
 * Note: To use this component, the item must have a
 * minecraft:storage_item item component defined.
 * Note: In `/textures/textures_list.json`, the following code needs
 * to be added for an item named `my_custom_bundle`: [ '<resource
 * pack>/textures/items/my_custom_bundle.png', '<resource
 * pack>/textures/items/my_custom_bundle_open_front.png','<resource pack>/textures/items/my_custom_bundle_open_back.png'].
 * The respective icon textures would need to be added:
 * my_custom_bundle.png, my_custom_bundle_open_front.png, my_custom_bundle_open_back.png. Note
 * that it's important that the filenames are the item name, plus
 * `_open_front` and `_open_back` respectively.
 */
export interface MinecraftItemV1260ComponentsMinecraftBundleInteraction {

  /**
   * @remarks
   * The maximum number of slots in the bundle viewable by the
   * plater. Can be from 1 to 64. Default is 12.
   * 
   * Sample Values:
   * Black Bundle: 12
   *
   *
   */
  num_viewable_slots?: number;

}


/**
 * Item Components Compostable (minecraft:compostable)
 * Specifies that an item is compostable and provides the chance of
 * creating a composting layer in the composter.
 */
export interface MinecraftItemV1260ComponentsMinecraftCompostable {

  /**
   * @remarks
   * The chance of this item to create a layer upon composting with
   * the composter. Valid value range is 1 - 100 inclusive
   */
  composting_chance: number;

}


/**
 * Item Components Cooldown (minecraft:cooldown)
 * Adds a cooldown to an item, preventing it from being used again
 * for a specified duration. Items sharing the same category will
 * enter cooldown together when any one of them is used.
 */
export interface MinecraftItemV1260ComponentsMinecraftCooldown {

  /**
   * @remarks
   * A string identifier that groups items together. When an item with
   * a cooldown is used, all items sharing the same category also
   * enter cooldown.
   * 
   * Sample Values:
   * Wind Charge: "wind_charge"
   *
   */
  category: string;

  /**
   * @remarks
   * The duration of time in seconds that items with the matching category
   * will spend cooling down before becoming usable again.
   * 
   * Sample Values:
   * Wind Charge: 0.5
   *
   */
  duration: number;

  /**
   * @remarks
   * The type of action that triggers the cooldown. Use 'use' for
   * items consumed on use, or 'attack' for weapons. Default is
   * 'use'.
   */
  type?: string;

}


export enum MinecraftItemV1260ComponentsMinecraftCooldownType {
  attack = `attack`,
  use = `use`
}


/**
 * Item Components Damage Absorption 
 * (minecraft:damage_absorption)
 * It allows an item to absorb damage that would otherwise be
 * dealt to its wearer. For this to happen, the item needs to be
 * equipped in an armor slot. The absorbed damage reduces the
 * item's durability, with any excess damage being ignored. Because of
 * this, the item also needs a `minecraft:durability` 
 * component.
 */
export interface MinecraftItemV1260ComponentsMinecraftDamageAbsorption {

  /**
   * @remarks
   * List of damage causes that can be absorbed by the item. By
   * default, no damage cause is absorbed.
   */
  absorbable_causes: string[];

}


/**
 * Item Components Digger (minecraft:digger)
 * Configures an item as a digging tool, allowing it to break
 * specific blocks faster than normal. Define which blocks are
 * affected and the speed multiplier for each.
 */
export interface MinecraftItemV1260ComponentsMinecraftDigger {

  /**
   * @remarks
   * An array of objects that define which blocks this item can dig
   * and at what speed. Each entry specifies a block (by ID or tag
   * query) and a speed multiplier.
   */
  destroy_speeds?: MinecraftItemV1260ComponentsMinecraftDiggerDestroySpeeds[];

  /**
   * @remarks
   * When true, the Efficiency enchantment will increase the dig
   * speed of this item. Default is false.
   */
  use_efficiency?: boolean;

}


/**
 * Item Components BlockInfo (BlockInfo)
 * Has block and digging speed configuration.
 */
export interface MinecraftItemV1260ComponentsMinecraftDiggerDestroySpeeds {

  /**
   * @remarks
   * Block to be dug.
   */
  block: MinecraftItemV1260ComponentsMinecraftDiggerDestroySpeedsBlock;

  /**
   * @remarks
   * Digging speed for the correlating block(s).
   */
  speed: number;

}


/**
 * Block (block)
 */
export interface MinecraftItemV1260ComponentsMinecraftDiggerDestroySpeedsBlock {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Item Components Display Name (minecraft:display_name)
 * Sets the item display name within Minecraft: Bedrock Edition. This
 * component may also be used to pull from the localization file by
 * referencing a key from it.
 */
export interface MinecraftItemV1260ComponentsMinecraftDisplayName {

  /**
   * @remarks
   * Name shown for an item.
   * 
   * Sample Values:
   * Apple: "item.apple.name"
   *
   * Breeze Rod: "item.breeze_rod.name"
   *
   * Ominous Trial Key: "item.ominous_trial_key.name"
   *
   */
  value?: string;

}


/**
 * Item Components Durability (minecraft:durability)
 * Sets how much damage the item can take before breaking, and
 * allows the item to be combined at an anvil, grindstone, or
 * crafting table.
 */
export interface MinecraftItemV1260ComponentsMinecraftDurability {

  /**
   * @remarks
   * Specifies the percentage chance of this item losing durability. Default
   * is set to 100. Defined as an int range with min and max 
   * value.
   * 
   * Sample Values:
   * My Sword Chuck: {"min":10,"max":50}
   *
   *
   * My Sword Singing: {"min":0,"max":0}
   *
   * My Sword Weak: {"min":100,"max":100}
   *
   */
  damage_chance?: MinecraftItemV1260ComponentsMinecraftDurabilityDamageChance;

  /**
   * @remarks
   * Max durability is the amount of damage that this item can take
   * before breaking. This is a required parameter and has a
   * minimum of 0.
   * 
   * Sample Values:
   * Chestplate: 200
   *
   *
   * My Sword Chuck: 10
   *
   *
   * My Sword Singing: 1000
   *
   */
  max_durability: number;

}


/**
 * Item Components IntRange (IntRange)
 * Has minimum and maximum integer values.
 */
export interface MinecraftItemV1260ComponentsMinecraftDurabilityDamageChance {

  max?: number;

  min?: number;

}


/**
 * Item Components Durability Sensor 
 * (minecraft:durability_sensor)
 * Enables an item to emit effects when it receives damage. Because of
 * this, the item also needs a `minecraft:durability` 
 * component.
 */
export interface MinecraftItemV1260ComponentsMinecraftDurabilitySensor {

  /**
   * @remarks
   * The effects are emitted when the item durability value is less
   * than or equal to this value.
   */
  durability?: number;

  /**
   * @remarks
   * The list of both durability thresholds and effects emitted when
   * each threshold is met. When multiple thresholds are met, only the
   * threshold with the lowest durability after applying the damage is
   * considered.
   */
  durability_thresholds: MinecraftItemV1260ComponentsMinecraftDurabilitySensorDurabilityThresholds[];

  /**
   * @remarks
   * Particle effect to emit when the threshold is met.
   */
  particle_type?: string;

  /**
   * @remarks
   * Sound effect to emit when the threshold is met.
   */
  sound_event?: string;

}


/**
 * Item Components Durability Sensor Durability Threshold
 * (minecraft:durability_sensor durability_threshold)
 * Defines both the durability threshold, and the effects emitted when
 * that threshold is met.
 */
export interface MinecraftItemV1260ComponentsMinecraftDurabilitySensorDurabilityThresholds {

  /**
   * @remarks
   * The effects are emitted when the item durability value is less
   * than or equal to this value.
   */
  durability?: number;

  /**
   * @remarks
   * Particle effect to emit when the threshold is met.
   */
  particle_type?: string;

  /**
   * @remarks
   * Sound effect to emit when the threshold is met.
   */
  sound_event?: string;

}


export enum MinecraftItemV1260ComponentsMinecraftDurabilitySensorDurabilityThresholdsParticleType {
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
  paleoakleaves = `paleoakleaves`,
  pausemobgrowth = `pausemobgrowth`,
  portal = `portal`,
  portalreverse = `portalreverse`,
  rainsplash = `rainsplash`,
  reddust = `reddust`,
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
  wolfarmorcrack = `wolfarmorcrack`
}


export enum MinecraftItemV1260ComponentsMinecraftDurabilitySensorDurabilityThresholdsSoundEvent {
  activate = `activate`,
  addChest = `add.chest`,
  admire = `admire`,
  agitated = `agitated`,
  ambient = `ambient`,
  ambientAggressive = `ambient.aggressive`,
  ambientBaby = `ambient.baby`,
  ambientBasaltDeltasAdditions = `ambient.basalt_deltas.additions`,
  ambientBasaltDeltasLoop = `ambient.basalt_deltas.loop`,
  ambientBasaltDeltasMood = `ambient.basalt_deltas.mood`,
  ambientCandle = `ambient.candle`,
  ambientCave = `ambient.cave`,
  ambientCrimsonForestAdditions = `ambient.crimson_forest.additions`,
  ambientCrimsonForestLoop = `ambient.crimson_forest.loop`,
  ambientCrimsonForestMood = `ambient.crimson_forest.mood`,
  ambientInAir = `ambient.in.air`,
  ambientInRaid = `ambient.in.raid`,
  ambientInWater = `ambient.in.water`,
  ambientNetherWastesAdditions = `ambient.nether_wastes.additions`,
  ambientNetherWastesLoop = `ambient.nether_wastes.loop`,
  ambientNetherWastesMood = `ambient.nether_wastes.mood`,
  ambientPollinate = `ambient.pollinate`,
  ambientScreamer = `ambient.screamer`,
  ambientSoulsandValleyAdditions = `ambient.soulsand_valley.additions`,
  ambientSoulsandValleyLoop = `ambient.soulsand_valley.loop`,
  ambientSoulsandValleyMood = `ambient.soulsand_valley.mood`,
  ambientTame = `ambient.tame`,
  ambientUnderwaterEnter = `ambient.underwater.enter`,
  ambientUnderwaterExit = `ambient.underwater.exit`,
  ambientWarpedForestAdditions = `ambient.warped_forest.additions`,
  ambientWarpedForestLoop = `ambient.warped_forest.loop`,
  ambientWarpedForestMood = `ambient.warped_forest.mood`,
  ambientWeatherTheEndLightFlash = `ambient.weather.the_end_light_flash`,
  ambientWorried = `ambient.worried`,
  angry = `angry`,
  applyEffectBadOmen = `apply_effect.bad_omen`,
  applyEffectRaidOmen = `apply_effect.raid_omen`,
  applyEffectTrialOmen = `apply_effect.trial_omen`,
  armor = `armor`,
  armorBreakWolf = `armor.break_wolf`,
  armorCrackWolf = `armor.crack_wolf`,
  armorEquipChain = `armor.equip_chain`,
  armorEquipCopper = `armor.equip_copper`,
  armorEquipDiamond = `armor.equip_diamond`,
  armorEquipElytra = `armor.equip_elytra`,
  armorEquipGeneric = `armor.equip_generic`,
  armorEquipGold = `armor.equip_gold`,
  armorEquipIron = `armor.equip_iron`,
  armorEquipLeather = `armor.equip_leather`,
  armorEquipNetherite = `armor.equip_netherite`,
  armorEquipWolf = `armor.equip_wolf`,
  armorRepairWolf = `armor.repair_wolf`,
  armorUnequipGeneric = `armor.unequip_generic`,
  armorUnequipWolf = `armor.unequip_wolf`,
  attach = `attach`,
  attack = `attack`,
  attackCritical = `attack.critical`,
  attackNodamage = `attack.nodamage`,
  attackStrong = `attack.strong`,
  balloonpop = `balloonpop`,
  beaconActivate = `beacon.activate`,
  beaconAmbient = `beacon.ambient`,
  beaconDeactivate = `beacon.deactivate`,
  beaconPower = `beacon.power`,
  blast = `blast`,
  blockBambooSaplingPlace = `block.bamboo_sapling.place`,
  blockBarrelClose = `block.barrel.close`,
  blockBarrelOpen = `block.barrel.open`,
  blockBeehiveDrip = `block.beehive.drip`,
  blockBeehiveEnter = `block.beehive.enter`,
  blockBeehiveExit = `block.beehive.exit`,
  blockBeehiveShear = `block.beehive.shear`,
  blockBeehiveWork = `block.beehive.work`,
  blockBellHit = `block.bell.hit`,
  blockBlastfurnaceFireCrackle = `block.blastfurnace.fire_crackle`,
  blockCampfireCrackle = `block.campfire.crackle`,
  blockCartographyTableUse = `block.cartography_table.use`,
  blockClick = `block.click`,
  blockClickFail = `block.click.fail`,
  blockComposterEmpty = `block.composter.empty`,
  blockComposterFill = `block.composter.fill`,
  blockComposterFillSuccess = `block.composter.fill_success`,
  blockComposterReady = `block.composter.ready`,
  blockCopperBulbTurnOff = `block.copper_bulb.turn_off`,
  blockCopperBulbTurnOn = `block.copper_bulb.turn_on`,
  blockCreakingHeartTrail = `block.creaking_heart.trail`,
  blockDecoratedPotInsert = `block.decorated_pot.insert`,
  blockDecoratedPotInsertFail = `block.decorated_pot.insert_fail`,
  blockEnchantingTableUse = `block.enchanting_table.use`,
  blockEndPortalSpawn = `block.end_portal.spawn`,
  blockEndPortalFrameFill = `block.end_portal_frame.fill`,
  blockFletchingTableUse = `block.fletching_table.use`,
  blockFrogSpawnBreak = `block.frog_spawn.break`,
  blockFrogSpawnHatch = `block.frog_spawn.hatch`,
  blockFurnaceLit = `block.furnace.lit`,
  blockGrindstoneUse = `block.grindstone.use`,
  blockLoomUse = `block.loom.use`,
  blockScaffoldingClimb = `block.scaffolding.climb`,
  blockSculkSpread = `block.sculk.spread`,
  blockSculkCatalystBloom = `block.sculk_catalyst.bloom`,
  blockSculkSensorPlace = `block.sculk_sensor.place`,
  blockSculkShriekerPlace = `block.sculk_shrieker.place`,
  blockSculkShriekerShriek = `block.sculk_shrieker.shriek`,
  blockSignWaxedInteractFail = `block.sign.waxed_interact_fail`,
  blockSmithingTableUse = `block.smithing_table.use`,
  blockSmokerSmoke = `block.smoker.smoke`,
  blockSnifferEggCrack = `block.sniffer_egg.crack`,
  blockSnifferEggHatch = `block.sniffer_egg.hatch`,
  blockStonecutterUse = `block.stonecutter.use`,
  blockSweetBerryBushHurt = `block.sweet_berry_bush.hurt`,
  blockSweetBerryBushPick = `block.sweet_berry_bush.pick`,
  blockTurtleEggAttack = `block.turtle_egg.attack`,
  blockTurtleEggBreak = `block.turtle_egg.break`,
  blockTurtleEggCrack = `block.turtle_egg.crack`,
  blockTurtleEggHatch = `block.turtle_egg.hatch`,
  boost = `boost`,
  born = `born`,
  bottleDragonbreath = `bottle.dragonbreath`,
  bottleEmpty = `bottle.empty`,
  bottleFill = `bottle.fill`,
  bow = `bow`,
  bowHit = `bow.hit`,
  break = `break`,
  breakBlock = `break.block`,
  breakPot = `break_pot`,
  breathe = `breathe`,
  breezeWindChargeBurst = `breeze_wind_charge.burst`,
  brush = `brush`,
  brushCompleted = `brush_completed`,
  bubbleDown = `bubble.down`,
  bubbleDowninside = `bubble.downinside`,
  bubblePop = `bubble.pop`,
  bubbleUp = `bubble.up`,
  bubbleUpinside = `bubble.upinside`,
  bucketEmptyFish = `bucket.empty.fish`,
  bucketEmptyLava = `bucket.empty.lava`,
  bucketEmptyPowderSnow = `bucket.empty.powder_snow`,
  bucketEmptyWater = `bucket.empty.water`,
  bucketFillFish = `bucket.fill.fish`,
  bucketFillLava = `bucket.fill.lava`,
  bucketFillPowderSnow = `bucket.fill.powder_snow`,
  bucketFillWater = `bucket.fill.water`,
  bulletHit = `bullet.hit`,
  bundleDropContents = `bundle.drop_contents`,
  bundleInsert = `bundle.insert`,
  bundleInsertFail = `bundle.insert_fail`,
  bundleRemoveOne = `bundle.remove_one`,
  burp = `burp`,
  buttonClickOff = `button.click_off`,
  buttonClickOn = `button.click_on`,
  cakeAddCandle = `cake.add_candle`,
  cameraTakePicture = `camera.take_picture`,
  cantBreed = `cant_breed`,
  castSpell = `cast.spell`,
  cauldronDripLavaPointedDripstone = `cauldron_drip.lava.pointed_dripstone`,
  cauldronDripWaterPointedDripstone = `cauldron_drip.water.pointed_dripstone`,
  celebrate = `celebrate`,
  charge = `charge`,
  chargeSculk = `charge.sculk`,
  chestClosed = `chest.closed`,
  chestOpen = `chest.open`,
  chimeAmethystBlock = `chime.amethyst_block`,
  chorusdeath = `chorusdeath`,
  chorusgrow = `chorusgrow`,
  close = `close`,
  closeLong = `close_long`,
  conduitActivate = `conduit.activate`,
  conduitAmbient = `conduit.ambient`,
  conduitAttack = `conduit.attack`,
  conduitDeactivate = `conduit.deactivate`,
  conduitShort = `conduit.short`,
  convertMooshroom = `convert_mooshroom`,
  convertToDrowned = `convert_to_drowned`,
  convertToFrog = `convert_to_frog`,
  convertToStray = `convert_to_stray`,
  convertedToZombified = `converted_to_zombified`,
  copperWaxOff = `copper.wax.off`,
  copperWaxOn = `copper.wax.on`,
  crafterCraft = `crafter.craft`,
  crafterDisableSlot = `crafter.disable_slot`,
  crafterFail = `crafter.fail`,
  creakingHeartSpawn = `creaking_heart_spawn`,
  crossbowLoadingEnd = `crossbow.loading.end`,
  crossbowLoadingMiddle = `crossbow.loading.middle`,
  crossbowLoadingStart = `crossbow.loading.start`,
  crossbowQuickChargeEnd = `crossbow.quick_charge.end`,
  crossbowQuickChargeMiddle = `crossbow.quick_charge.middle`,
  crossbowQuickChargeStart = `crossbow.quick_charge.start`,
  crossbowShoot = `crossbow.shoot`,
  dashReady = `dash_ready`,
  deactivate = `deactivate`,
  death = `death`,
  deathBaby = `death.baby`,
  deathInWater = `death.in.water`,
  deathMidVolume = `death.mid.volume`,
  deathMinVolume = `death.min.volume`,
  deathScreamer = `death.screamer`,
  deathToZombie = `death.to.zombie`,
  default = `default`,
  deny = `deny`,
  detach = `detach`,
  disappeared = `disappeared`,
  doorClose = `door.close`,
  doorOpen = `door.open`,
  drink = `drink`,
  drinkHoney = `drink.honey`,
  drinkMilk = `drink.milk`,
  dripLavaPointedDripstone = `drip.lava.pointed_dripstone`,
  dripWaterPointedDripstone = `drip.water.pointed_dripstone`,
  dropSlot = `drop.slot`,
  eat = `eat`,
  elderguardianCurse = `elderguardian.curse`,
  elemconstructOpen = `elemconstruct.open`,
  enderchestClosed = `enderchest.closed`,
  enderchestOpen = `enderchest.open`,
  explode = `explode`,
  extinguishCandle = `extinguish.candle`,
  extinguishFire = `extinguish.fire`,
  fall = `fall`,
  fallBig = `fall.big`,
  fallSmall = `fall.small`,
  fang = `fang`,
  fenceGateClose = `fence_gate.close`,
  fenceGateOpen = `fence_gate.open`,
  fire = `fire`,
  fizz = `fizz`,
  flap = `flap`,
  flop = `flop`,
  fly = `fly`,
  freeze = `freeze`,
  fuse = `fuse`,
  gallop = `gallop`,
  glass = `glass`,
  glowSquidInkSquirt = `glow_squid.ink_squirt`,
  glowstickUse = `glowstick.use`,
  growl = `growl`,
  haggle = `haggle`,
  haggleIdle = `haggle.idle`,
  haggleNo = `haggle.no`,
  haggleYes = `haggle.yes`,
  heartbeat = `heartbeat`,
  heavyStep = `heavy.step`,
  hit = `hit`,
  hornBreak = `horn_break`,
  hornCall0 = `horn_call0`,
  hornCall1 = `horn_call1`,
  hornCall2 = `horn_call2`,
  hornCall3 = `horn_call3`,
  hornCall4 = `horn_call4`,
  hornCall5 = `horn_call5`,
  hornCall6 = `horn_call6`,
  hornCall7 = `horn_call7`,
  hurt = `hurt`,
  hurtBaby = `hurt.baby`,
  hurtInWater = `hurt.in.water`,
  hurtReduced = `hurt.reduced`,
  hurtScreamer = `hurt.screamer`,
  icebombHit = `icebomb.hit`,
  ignite = `ignite`,
  imitateBlaze = `imitate.blaze`,
  imitateBogged = `imitate.bogged`,
  imitateBreeze = `imitate.breeze`,
  imitateCamelHusk = `imitate.camel_husk`,
  imitateCaveSpider = `imitate.cave_spider`,
  imitateCreaking = `imitate.creaking`,
  imitateCreeper = `imitate.creeper`,
  imitateDrowned = `imitate.drowned`,
  imitateElderGuardian = `imitate.elder_guardian`,
  imitateEnderDragon = `imitate.ender_dragon`,
  imitateEnderman = `imitate.enderman`,
  imitateEndermite = `imitate.endermite`,
  imitateEvocationIllager = `imitate.evocation_illager`,
  imitateGhast = `imitate.ghast`,
  imitateGuardian = `imitate.guardian`,
  imitateHappyGhast = `imitate.happy_ghast`,
  imitateHusk = `imitate.husk`,
  imitateMagmaCube = `imitate.magma_cube`,
  imitateParched = `imitate.parched`,
  imitatePhantom = `imitate.phantom`,
  imitatePillager = `imitate.pillager`,
  imitatePolarBear = `imitate.polar_bear`,
  imitateRavager = `imitate.ravager`,
  imitateShulker = `imitate.shulker`,
  imitateSilverfish = `imitate.silverfish`,
  imitateSkeleton = `imitate.skeleton`,
  imitateSlime = `imitate.slime`,
  imitateSpider = `imitate.spider`,
  imitateStray = `imitate.stray`,
  imitateVex = `imitate.vex`,
  imitateVindicationIllager = `imitate.vindication_illager`,
  imitateWarden = `imitate.warden`,
  imitateWitch = `imitate.witch`,
  imitateWither = `imitate.wither`,
  imitateWitherSkeleton = `imitate.wither_skeleton`,
  imitateWolf = `imitate.wolf`,
  imitateZoglin = `imitate.zoglin`,
  imitateZombie = `imitate.zombie`,
  imitateZombiePigman = `imitate.zombie_pigman`,
  imitateZombieVillager = `imitate.zombie_villager`,
  insert = `insert`,
  insertEnchanted = `insert_enchanted`,
  irongolemCrack = `irongolem.crack`,
  irongolemRepair = `irongolem.repair`,
  itemBookPut = `item.book.put`,
  itemCopperSpearAttackHit = `item.copper_spear.attack_hit`,
  itemCopperSpearAttackMiss = `item.copper_spear.attack_miss`,
  itemCopperSpearUse = `item.copper_spear.use`,
  itemDiamondSpearAttackHit = `item.diamond_spear.attack_hit`,
  itemDiamondSpearAttackMiss = `item.diamond_spear.attack_miss`,
  itemDiamondSpearUse = `item.diamond_spear.use`,
  itemEnchantLunge1 = `item.enchant.lunge1`,
  itemEnchantLunge2 = `item.enchant.lunge2`,
  itemEnchantLunge3 = `item.enchant.lunge3`,
  itemFizz = `item.fizz`,
  itemGoldenSpearAttackHit = `item.golden_spear.attack_hit`,
  itemGoldenSpearAttackMiss = `item.golden_spear.attack_miss`,
  itemGoldenSpearUse = `item.golden_spear.use`,
  itemIronSpearAttackHit = `item.iron_spear.attack_hit`,
  itemIronSpearAttackMiss = `item.iron_spear.attack_miss`,
  itemIronSpearUse = `item.iron_spear.use`,
  itemNetheriteSpearAttackHit = `item.netherite_spear.attack_hit`,
  itemNetheriteSpearAttackMiss = `item.netherite_spear.attack_miss`,
  itemNetheriteSpearUse = `item.netherite_spear.use`,
  itemShieldBlock = `item.shield.block`,
  itemSpearAttackHit = `item.spear.attack_hit`,
  itemSpearAttackMiss = `item.spear.attack_miss`,
  itemSpearUse = `item.spear.use`,
  itemSpyglassStopUsing = `item.spyglass.stop_using`,
  itemSpyglassUse = `item.spyglass.use`,
  itemStoneSpearAttackHit = `item.stone_spear.attack_hit`,
  itemStoneSpearAttackMiss = `item.stone_spear.attack_miss`,
  itemStoneSpearUse = `item.stone_spear.use`,
  itemTridentHit = `item.trident.hit`,
  itemTridentHitGround = `item.trident.hit_ground`,
  itemTridentReturn = `item.trident.return`,
  itemTridentRiptide1 = `item.trident.riptide_1`,
  itemTridentRiptide2 = `item.trident.riptide_2`,
  itemTridentRiptide3 = `item.trident.riptide_3`,
  itemTridentThrow = `item.trident.throw`,
  itemTridentThunder = `item.trident.thunder`,
  itemUseOn = `item.use.on`,
  itemWoodenSpearAttackHit = `item.wooden_spear.attack_hit`,
  itemWoodenSpearAttackMiss = `item.wooden_spear.attack_miss`,
  itemWoodenSpearUse = `item.wooden_spear.use`,
  itemGiven = `item_given`,
  itemTaken = `item_taken`,
  itemThrown = `item_thrown`,
  jump = `jump`,
  jumpPrevent = `jump.prevent`,
  jumpToBlock = `jump_to_block`,
  land = `land`,
  largeBlast = `large.blast`,
  launch = `launch`,
  lava = `lava`,
  lavaPop = `lava.pop`,
  layEgg = `lay_egg`,
  laySpawn = `lay_spawn`,
  leadBreak = `lead.break`,
  leadLeash = `lead.leash`,
  leadUnleash = `lead.unleash`,
  leashknotBreak = `leashknot.break`,
  leashknotPlace = `leashknot.place`,
  levelup = `levelup`,
  listening = `listening`,
  listeningAngry = `listening_angry`,
  lodestoneCompassLinkCompassToLodestone = `lodestone_compass.link_compass_to_lodestone`,
  ltReactionBleach = `lt.reaction.bleach`,
  ltReactionEpaste = `lt.reaction.epaste`,
  ltReactionEpaste2 = `lt.reaction.epaste2`,
  ltReactionFertilizer = `lt.reaction.fertilizer`,
  ltReactionFire = `lt.reaction.fire`,
  ltReactionFireball = `lt.reaction.fireball`,
  ltReactionIcebomb = `lt.reaction.icebomb`,
  ltReactionMgsalt = `lt.reaction.mgsalt`,
  ltReactionMiscexplosion = `lt.reaction.miscexplosion`,
  ltReactionMiscfire = `lt.reaction.miscfire`,
  ltReactionMiscmystical = `lt.reaction.miscmystical`,
  ltReactionMiscmystical2 = `lt.reaction.miscmystical2`,
  ltReactionProduct = `lt.reaction.product`,
  maceHeavySmashGround = `mace.heavy_smash_ground`,
  maceSmashAir = `mace.smash_air`,
  maceSmashGround = `mace.smash_ground`,
  mad = `mad`,
  milk = `milk`,
  milkScreamer = `milk.screamer`,
  milkSuspiciously = `milk_suspiciously`,
  mobArmadilloBrush = `mob.armadillo.brush`,
  mobArmadilloScuteDrop = `mob.armadillo.scute_drop`,
  mobArmorStandPlace = `mob.armor_stand.place`,
  mobHoglinConvertedToZombified = `mob.hoglin.converted_to_zombified`,
  mobHuskConvertToZombie = `mob.husk.convert_to_zombie`,
  mobPigDeath = `mob.pig.death`,
  mobPlayerHurtDrown = `mob.player.hurt_drown`,
  mobPlayerHurtFreeze = `mob.player.hurt_freeze`,
  mobPlayerHurtOnFire = `mob.player.hurt_on_fire`,
  mobWarning = `mob.warning`,
  mobWarningBaby = `mob.warning.baby`,
  multiSwap = `multi_swap`,
  nearbyClose = `nearby_close`,
  nearbyCloser = `nearby_closer`,
  nearbyClosest = `nearby_closest`,
  note = `note`,
  noteBass = `note.bass`,
  ominousBottleEndUse = `ominous_bottle.end_use`,
  ominousItemSpawnerAboutToSpawnItem = `ominous_item_spawner.about_to_spawn_item`,
  ominousItemSpawnerSpawnItem = `ominous_item_spawner.spawn_item`,
  ominousItemSpawnerSpawnItemBegin = `ominous_item_spawner.spawn_item_begin`,
  open = `open`,
  openLong = `open_long`,
  panic = `panic`,
  pant = `pant`,
  particleSoulEscapeLoud = `particle.soul_escape.loud`,
  particleSoulEscapeQuiet = `particle.soul_escape.quiet`,
  pauseGrowth = `pause_growth`,
  pickBerriesCaveVines = `pick_berries.cave_vines`,
  pickup = `pickup`,
  pickupEnchanted = `pickup_enchanted`,
  pistonIn = `piston.in`,
  pistonOut = `piston.out`,
  place = `place`,
  placeInWater = `place_in_water`,
  placeItem = `place_item`,
  plop = `plop`,
  pop = `pop`,
  portal = `portal`,
  portalTravel = `portal.travel`,
  potionBrewed = `potion.brewed`,
  powerOff = `power.off`,
  powerOffSculkSensor = `power.off.sculk_sensor`,
  powerOn = `power.on`,
  powerOnSculkSensor = `power.on.sculk_sensor`,
  preRam = `pre_ram`,
  preRamScreamer = `pre_ram.screamer`,
  prepareAttack = `prepare.attack`,
  prepareSummon = `prepare.summon`,
  prepareWololo = `prepare.wololo`,
  presneeze = `presneeze`,
  pressurePlateClickOff = `pressure_plate.click_off`,
  pressurePlateClickOn = `pressure_plate.click_on`,
  pumpkinCarve = `pumpkin.carve`,
  purr = `purr`,
  purreow = `purreow`,
  raidHorn = `raid.horn`,
  ramImpact = `ram_impact`,
  ramImpactScreamer = `ram_impact.screamer`,
  randomAnvilUse = `random.anvil_use`,
  reappeared = `reappeared`,
  record11 = `record.11`,
  record13 = `record.13`,
  record5 = `record.5`,
  recordBlocks = `record.blocks`,
  recordCat = `record.cat`,
  recordChirp = `record.chirp`,
  recordCreator = `record.creator`,
  recordCreatorMusicBox = `record.creator_music_box`,
  recordFar = `record.far`,
  recordLavaChicken = `record.lava_chicken`,
  recordMall = `record.mall`,
  recordMellohi = `record.mellohi`,
  recordOtherside = `record.otherside`,
  recordPigstep = `record.pigstep`,
  recordPrecipice = `record.precipice`,
  recordRelic = `record.relic`,
  recordStal = `record.stal`,
  recordStrad = `record.strad`,
  recordTears = `record.tears`,
  recordWait = `record.wait`,
  recordWard = `record.ward`,
  reflect = `reflect`,
  remedy = `remedy`,
  resetGrowth = `reset_growth`,
  respawnAnchorAmbient = `respawn_anchor.ambient`,
  respawnAnchorCharge = `respawn_anchor.charge`,
  respawnAnchorDeplete = `respawn_anchor.deplete`,
  respawnAnchorSetSpawn = `respawn_anchor.set_spawn`,
  retreat = `retreat`,
  roar = `roar`,
  saddle = `saddle`,
  saddleInWater = `saddle_in_water`,
  scared = `scared`,
  scrape = `scrape`,
  screech = `screech`,
  shake = `shake`,
  shatterPot = `shatter_pot`,
  shear = `shear`,
  shoot = `shoot`,
  shulkerClose = `shulker.close`,
  shulkerOpen = `shulker.open`,
  shulkerboxClosed = `shulkerbox.closed`,
  shulkerboxOpen = `shulkerbox.open`,
  singleSwap = `single_swap`,
  sleep = `sleep`,
  smithingTableUse = `smithing_table.use`,
  sneeze = `sneeze`,
  sonicBoom = `sonic_boom`,
  sonicCharge = `sonic_charge`,
  sparklerActive = `sparkler.active`,
  sparklerUse = `sparkler.use`,
  spawn = `spawn`,
  splash = `splash`,
  spongeAbsorb = `sponge.absorb`,
  squidInkSquirt = `squid.ink_squirt`,
  squishBig = `squish.big`,
  squishSmall = `squish.small`,
  stare = `stare`,
  stateChange = `state_change`,
  step = `step`,
  stepBaby = `step.baby`,
  stepLava = `step_lava`,
  stepSand = `step_sand`,
  stun = `stun`,
  swim = `swim`,
  swoop = `swoop`,
  takeoff = `takeoff`,
  teleport = `teleport`,
  tempt = `tempt`,
  thorns = `thorns`,
  throw = `throw`,
  thunder = `thunder`,
  tiltDownBigDripleaf = `tilt_down.big_dripleaf`,
  tiltUpBigDripleaf = `tilt_up.big_dripleaf`,
  tongue = `tongue`,
  trapdoorClose = `trapdoor.close`,
  trapdoorOpen = `trapdoor.open`,
  trialSpawnerAmbient = `trial_spawner.ambient`,
  trialSpawnerAmbientOminous = `trial_spawner.ambient_ominous`,
  trialSpawnerChargeActivate = `trial_spawner.charge_activate`,
  trialSpawnerCloseShutter = `trial_spawner.close_shutter`,
  trialSpawnerDetectPlayer = `trial_spawner.detect_player`,
  trialSpawnerEjectItem = `trial_spawner.eject_item`,
  trialSpawnerOpenShutter = `trial_spawner.open_shutter`,
  trialSpawnerSpawnMob = `trial_spawner.spawn_mob`,
  tripod = `tripod`,
  twinkle = `twinkle`,
  uiCartographyTableTakeResult = `ui.cartography_table.take_result`,
  uiLoomTakeResult = `ui.loom.take_result`,
  uiStonecutterTakeResult = `ui.stonecutter.take_result`,
  undefined = `undefined`,
  unfect = `unfect`,
  unfreeze = `unfreeze`,
  unsaddle = `unsaddle`,
  vaultActivate = `vault.activate`,
  vaultAmbient = `vault.ambient`,
  vaultCloseShutter = `vault.close_shutter`,
  vaultDeactivate = `vault.deactivate`,
  vaultEjectItem = `vault.eject_item`,
  vaultInsertItem = `vault.insert_item`,
  vaultInsertItemFail = `vault.insert_item_fail`,
  vaultOpenShutter = `vault.open_shutter`,
  vaultRejectRewardedPlayer = `vault.reject_rewarded_player`,
  warn = `warn`,
  water = `water`,
  whine = `whine`,
  windChargeBurst = `wind_charge.burst`
}


/**
 * Item Components Dyeable (minecraft:dyeable)
 * Enables custom items to be dyed in cauldrons. To use the dyeable
 * component, the format version on the item and the attachable needs
 * to have a format_version of 1.21.30 or greater.
 */
export interface MinecraftItemV1260ComponentsMinecraftDyeable {

  /**
   * @remarks
   * default_color
   */
  default_color?: string;

}


/**
 * Item Components Enchantable (minecraft:enchantable)
 * Determines what enchantments can be applied to the item. Not all
 * enchantments will have an effect on all item components.
 * Note: The following enchantment slot types that can be set for
 * the value of `slot`: sword, bow, pickaxe, armor_head, armor_torso,
 * armor_legs, armor_feet.
 */
export interface MinecraftItemV1260ComponentsMinecraftEnchantable {

  /**
   * @remarks
   * Specifies which types of enchantments can be applied. For
   * example, `bow` would allow this item to be enchanted as if it
   * were a bow.
   * 
   * Sample Values:
   * Chestplate: "armor_torso"
   *
   * My Boots: "armor_feet"
   *
   * My Helm: "armor_head"
   *
   */
  slot: string;

  /**
   * @remarks
   * Specifies the value of the enchantment (minimum of 0).
   * 
   * Sample Values:
   * Chestplate: 10
   *
   *
   */
  value: number;

}


/**
 * Item Components Entity Placer (minecraft:entity_placer)
 * Allows an item to place entities into the world. Additionally, in
 * version 1.19.80 and above, the component allows the item to set
 * the spawn type of a monster spawner.
 */
export interface MinecraftItemV1260ComponentsMinecraftEntityPlacer {

  /**
   * @remarks
   * List of block descriptors of the blocks that this item can be
   * dispensed on. If left empty, all blocks will be allowed.
   */
  dispense_on?: MinecraftItemV1260ComponentsMinecraftEntityPlacerDispenseOn[];

  /**
   * @remarks
   * The entity to be placed in the world.
   * 
   * Sample Values:
   * My Sword Turtle: "minecraft:turtle"
   *
   */
  entity?: object;

  /**
   * @remarks
   * List of block descriptors of the blocks that this item can be
   * used on. If left empty, all blocks will be allowed.
   * 
   * Sample Values:
   * My Sword Turtle: ["minecraft:sand"]
   *
   */
  use_on?: MinecraftItemV1260ComponentsMinecraftEntityPlacerUseOn[];

}


/**
 * Dispense On (dispense_on)
 */
export interface MinecraftItemV1260ComponentsMinecraftEntityPlacerDispenseOn {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Use On (use_on)
 */
export interface MinecraftItemV1260ComponentsMinecraftEntityPlacerUseOn {

  name?: string;

  states?: number;

  tags?: string;

}


/**
 * Item Components Food (minecraft:food)
 * Sets the item as a food component, allowing it to be edible to
 * the player.
 */
export interface MinecraftItemV1260ComponentsMinecraftFood {

  /**
   * @remarks
   * If true you can always eat this item (even when not hungry). Default
   * is set to false.
   * 
   * Sample Values:
   * AppleEnchanted: true
   *
   *
   */
  can_always_eat?: boolean;

  cooldown_time?: number;

  cooldown_type?: string;

  /**
   * @remarks
   * 
   * Sample Values:
   * AppleEnchanted: [{"name":"regeneration","chance":1,"duration":30,"amplifier":1},{"name":"absorption","chance":1,"duration":120,"amplifier":3},{"name":"resistance","chance":1,"duration":300,"amplifier":0},{"name":"fire_resistance","chance":1,"duration":300,"amplifier":0}]
   *
   * Chicken: [{"name":"hunger","chance":0.3,"duration":30,"amplifier":0}]
   *
   */
  effects?: MinecraftItemV1260ComponentsMinecraftFoodEffects[];

  is_meat?: string;

  /**
   * @remarks
   * Value that is added to the entity's nutrition when the item is
   * used. Default is set to 0.
   * 
   * Sample Values:
   * Apple: 4
   *
   *
   * Baked Potato: 5
   *
   * Beef: 3
   *
   */
  nutrition?: number;

  on_use_action?: jsoncommon.MinecraftEventTrigger;

  on_use_range?: jsoncommon.MinecraftEventTrigger;

  /**
   * @remarks
   * Array of effect names to remove when eating this food. This
   * property was deprecated and is no longer supported in newer
   * versions.
   */
  remove_effects?: string[];

  /**
   * @remarks
   * saturation_modifier is used in this formula: (nutrition *
   * saturation_modifier * 2) when applying the saturation buff.
   * Default is set to 0.6.
   * 
   * Sample Values:
   * Apple: 0.3
   *
   * AppleEnchanted: "supernatural"
   *
   * Baked Potato: "normal"
   *
   */
  saturation_modifier?: number;

  /**
   * @remarks
   * When used, converts to the item specified by the string in this
   * field. Default does not convert item.
   * 
   * Sample Values:
   * Beetroot Soup: "bowl"
   *
   * Honey Bottle: "glass_bottle"
   *
   *
   */
  using_converts_to?: string;

}


/**
 * Effects (effects)
 */
export interface MinecraftItemV1260ComponentsMinecraftFoodEffects {

  /**
   * @remarks
   * 
   * Sample Values:
   * AppleEnchanted: 1
   *
   */
  amplifier?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * AppleEnchanted: 1
   *
   */
  chance?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * AppleEnchanted: 30
   *
   */
  duration?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * AppleEnchanted: "regeneration"
   *
   */
  name?: string;

}


/**
 * Using Converts To
 * Using Converts To.
 */
export interface MinecraftItemV1260ComponentsMinecraftFoodUsingConvertsTo {

}


/**
 * Item Components Projectile (minecraft:projectile)
 * Defines an item as a projectile that can be shot from dispensers or
 * used as ammunition with minecraft:shooter. When combined with
 * minecraft:throwable, this component specifies which entity is
 * spawned when the item is thrown.
 */
export interface MinecraftItemV1260ComponentsMinecraftProjectile {

  /**
   * @remarks
   * Specifies how long a player must charge a projectile for it to
   * critically hit.
   * 
   * Sample Values:
   * My Sword Chuck: 1.25
   *
   *
   */
  minimum_critical_power?: number;

  /**
   * @remarks
   * Which entity is to be fired as a projectile.
   * 
   * Sample Values:
   * Wind Charge: "wind_charge_projectile"
   *
   * My Sword Chuck: "minecraft:snowball"
   *
   *
   */
  projectile_entity: string;

}


/**
 * Item Components Record (minecraft:record)
 * Used by record items to play music.
 */
export interface MinecraftItemV1260ComponentsMinecraftRecord {

  /**
   * @remarks
   * Specifies signal strength for comparator blocks to use, from 1
   * - 13.
   * 
   * Sample Values:
   * My Sword Singing: 1
   *
   */
  comparator_signal?: number;

  /**
   * @remarks
   * Specifies duration of sound event in seconds, float value.
   * 
   * Sample Values:
   * My Sword Singing: 5
   *
   */
  duration?: number;

  /**
   * @remarks
   * Sound event type: 13, cat, blocks, chirp, far, mall, mellohi, stal,
   * strad, ward, 11, wait, pigstep, otherside, 5, relic.
   * 
   * Sample Values:
   * My Sword Singing: "pre_ram.screamer"
   *
   */
  sound_event?: string;

}


export enum MinecraftItemV1260ComponentsMinecraftRecordSoundEvent {
  activate = `activate`,
  addChest = `add.chest`,
  admire = `admire`,
  agitated = `agitated`,
  ambient = `ambient`,
  ambientAggressive = `ambient.aggressive`,
  ambientBaby = `ambient.baby`,
  ambientBasaltDeltasAdditions = `ambient.basalt_deltas.additions`,
  ambientBasaltDeltasLoop = `ambient.basalt_deltas.loop`,
  ambientBasaltDeltasMood = `ambient.basalt_deltas.mood`,
  ambientCandle = `ambient.candle`,
  ambientCave = `ambient.cave`,
  ambientCrimsonForestAdditions = `ambient.crimson_forest.additions`,
  ambientCrimsonForestLoop = `ambient.crimson_forest.loop`,
  ambientCrimsonForestMood = `ambient.crimson_forest.mood`,
  ambientInAir = `ambient.in.air`,
  ambientInRaid = `ambient.in.raid`,
  ambientInWater = `ambient.in.water`,
  ambientNetherWastesAdditions = `ambient.nether_wastes.additions`,
  ambientNetherWastesLoop = `ambient.nether_wastes.loop`,
  ambientNetherWastesMood = `ambient.nether_wastes.mood`,
  ambientPollinate = `ambient.pollinate`,
  ambientScreamer = `ambient.screamer`,
  ambientSoulsandValleyAdditions = `ambient.soulsand_valley.additions`,
  ambientSoulsandValleyLoop = `ambient.soulsand_valley.loop`,
  ambientSoulsandValleyMood = `ambient.soulsand_valley.mood`,
  ambientTame = `ambient.tame`,
  ambientUnderwaterEnter = `ambient.underwater.enter`,
  ambientUnderwaterExit = `ambient.underwater.exit`,
  ambientWarpedForestAdditions = `ambient.warped_forest.additions`,
  ambientWarpedForestLoop = `ambient.warped_forest.loop`,
  ambientWarpedForestMood = `ambient.warped_forest.mood`,
  ambientWeatherTheEndLightFlash = `ambient.weather.the_end_light_flash`,
  ambientWorried = `ambient.worried`,
  angry = `angry`,
  applyEffectBadOmen = `apply_effect.bad_omen`,
  applyEffectRaidOmen = `apply_effect.raid_omen`,
  applyEffectTrialOmen = `apply_effect.trial_omen`,
  armor = `armor`,
  armorBreakWolf = `armor.break_wolf`,
  armorCrackWolf = `armor.crack_wolf`,
  armorEquipChain = `armor.equip_chain`,
  armorEquipCopper = `armor.equip_copper`,
  armorEquipDiamond = `armor.equip_diamond`,
  armorEquipElytra = `armor.equip_elytra`,
  armorEquipGeneric = `armor.equip_generic`,
  armorEquipGold = `armor.equip_gold`,
  armorEquipIron = `armor.equip_iron`,
  armorEquipLeather = `armor.equip_leather`,
  armorEquipNetherite = `armor.equip_netherite`,
  armorEquipWolf = `armor.equip_wolf`,
  armorRepairWolf = `armor.repair_wolf`,
  armorUnequipGeneric = `armor.unequip_generic`,
  armorUnequipWolf = `armor.unequip_wolf`,
  attach = `attach`,
  attack = `attack`,
  attackCritical = `attack.critical`,
  attackNodamage = `attack.nodamage`,
  attackStrong = `attack.strong`,
  balloonpop = `balloonpop`,
  beaconActivate = `beacon.activate`,
  beaconAmbient = `beacon.ambient`,
  beaconDeactivate = `beacon.deactivate`,
  beaconPower = `beacon.power`,
  blast = `blast`,
  blockBambooSaplingPlace = `block.bamboo_sapling.place`,
  blockBarrelClose = `block.barrel.close`,
  blockBarrelOpen = `block.barrel.open`,
  blockBeehiveDrip = `block.beehive.drip`,
  blockBeehiveEnter = `block.beehive.enter`,
  blockBeehiveExit = `block.beehive.exit`,
  blockBeehiveShear = `block.beehive.shear`,
  blockBeehiveWork = `block.beehive.work`,
  blockBellHit = `block.bell.hit`,
  blockBlastfurnaceFireCrackle = `block.blastfurnace.fire_crackle`,
  blockCampfireCrackle = `block.campfire.crackle`,
  blockCartographyTableUse = `block.cartography_table.use`,
  blockClick = `block.click`,
  blockClickFail = `block.click.fail`,
  blockComposterEmpty = `block.composter.empty`,
  blockComposterFill = `block.composter.fill`,
  blockComposterFillSuccess = `block.composter.fill_success`,
  blockComposterReady = `block.composter.ready`,
  blockCopperBulbTurnOff = `block.copper_bulb.turn_off`,
  blockCopperBulbTurnOn = `block.copper_bulb.turn_on`,
  blockCreakingHeartTrail = `block.creaking_heart.trail`,
  blockDecoratedPotInsert = `block.decorated_pot.insert`,
  blockDecoratedPotInsertFail = `block.decorated_pot.insert_fail`,
  blockEnchantingTableUse = `block.enchanting_table.use`,
  blockEndPortalSpawn = `block.end_portal.spawn`,
  blockEndPortalFrameFill = `block.end_portal_frame.fill`,
  blockFletchingTableUse = `block.fletching_table.use`,
  blockFrogSpawnBreak = `block.frog_spawn.break`,
  blockFrogSpawnHatch = `block.frog_spawn.hatch`,
  blockFurnaceLit = `block.furnace.lit`,
  blockGrindstoneUse = `block.grindstone.use`,
  blockLoomUse = `block.loom.use`,
  blockScaffoldingClimb = `block.scaffolding.climb`,
  blockSculkSpread = `block.sculk.spread`,
  blockSculkCatalystBloom = `block.sculk_catalyst.bloom`,
  blockSculkSensorPlace = `block.sculk_sensor.place`,
  blockSculkShriekerPlace = `block.sculk_shrieker.place`,
  blockSculkShriekerShriek = `block.sculk_shrieker.shriek`,
  blockSignWaxedInteractFail = `block.sign.waxed_interact_fail`,
  blockSmithingTableUse = `block.smithing_table.use`,
  blockSmokerSmoke = `block.smoker.smoke`,
  blockSnifferEggCrack = `block.sniffer_egg.crack`,
  blockSnifferEggHatch = `block.sniffer_egg.hatch`,
  blockStonecutterUse = `block.stonecutter.use`,
  blockSweetBerryBushHurt = `block.sweet_berry_bush.hurt`,
  blockSweetBerryBushPick = `block.sweet_berry_bush.pick`,
  blockTurtleEggAttack = `block.turtle_egg.attack`,
  blockTurtleEggBreak = `block.turtle_egg.break`,
  blockTurtleEggCrack = `block.turtle_egg.crack`,
  blockTurtleEggHatch = `block.turtle_egg.hatch`,
  boost = `boost`,
  born = `born`,
  bottleDragonbreath = `bottle.dragonbreath`,
  bottleEmpty = `bottle.empty`,
  bottleFill = `bottle.fill`,
  bow = `bow`,
  bowHit = `bow.hit`,
  break = `break`,
  breakBlock = `break.block`,
  breakPot = `break_pot`,
  breathe = `breathe`,
  breezeWindChargeBurst = `breeze_wind_charge.burst`,
  brush = `brush`,
  brushCompleted = `brush_completed`,
  bubbleDown = `bubble.down`,
  bubbleDowninside = `bubble.downinside`,
  bubblePop = `bubble.pop`,
  bubbleUp = `bubble.up`,
  bubbleUpinside = `bubble.upinside`,
  bucketEmptyFish = `bucket.empty.fish`,
  bucketEmptyLava = `bucket.empty.lava`,
  bucketEmptyPowderSnow = `bucket.empty.powder_snow`,
  bucketEmptyWater = `bucket.empty.water`,
  bucketFillFish = `bucket.fill.fish`,
  bucketFillLava = `bucket.fill.lava`,
  bucketFillPowderSnow = `bucket.fill.powder_snow`,
  bucketFillWater = `bucket.fill.water`,
  bulletHit = `bullet.hit`,
  bundleDropContents = `bundle.drop_contents`,
  bundleInsert = `bundle.insert`,
  bundleInsertFail = `bundle.insert_fail`,
  bundleRemoveOne = `bundle.remove_one`,
  burp = `burp`,
  buttonClickOff = `button.click_off`,
  buttonClickOn = `button.click_on`,
  cakeAddCandle = `cake.add_candle`,
  cameraTakePicture = `camera.take_picture`,
  cantBreed = `cant_breed`,
  castSpell = `cast.spell`,
  cauldronDripLavaPointedDripstone = `cauldron_drip.lava.pointed_dripstone`,
  cauldronDripWaterPointedDripstone = `cauldron_drip.water.pointed_dripstone`,
  celebrate = `celebrate`,
  charge = `charge`,
  chargeSculk = `charge.sculk`,
  chestClosed = `chest.closed`,
  chestOpen = `chest.open`,
  chimeAmethystBlock = `chime.amethyst_block`,
  chorusdeath = `chorusdeath`,
  chorusgrow = `chorusgrow`,
  close = `close`,
  closeLong = `close_long`,
  conduitActivate = `conduit.activate`,
  conduitAmbient = `conduit.ambient`,
  conduitAttack = `conduit.attack`,
  conduitDeactivate = `conduit.deactivate`,
  conduitShort = `conduit.short`,
  convertMooshroom = `convert_mooshroom`,
  convertToDrowned = `convert_to_drowned`,
  convertToFrog = `convert_to_frog`,
  convertToStray = `convert_to_stray`,
  convertedToZombified = `converted_to_zombified`,
  copperWaxOff = `copper.wax.off`,
  copperWaxOn = `copper.wax.on`,
  crafterCraft = `crafter.craft`,
  crafterDisableSlot = `crafter.disable_slot`,
  crafterFail = `crafter.fail`,
  creakingHeartSpawn = `creaking_heart_spawn`,
  crossbowLoadingEnd = `crossbow.loading.end`,
  crossbowLoadingMiddle = `crossbow.loading.middle`,
  crossbowLoadingStart = `crossbow.loading.start`,
  crossbowQuickChargeEnd = `crossbow.quick_charge.end`,
  crossbowQuickChargeMiddle = `crossbow.quick_charge.middle`,
  crossbowQuickChargeStart = `crossbow.quick_charge.start`,
  crossbowShoot = `crossbow.shoot`,
  dashReady = `dash_ready`,
  deactivate = `deactivate`,
  death = `death`,
  deathBaby = `death.baby`,
  deathInWater = `death.in.water`,
  deathMidVolume = `death.mid.volume`,
  deathMinVolume = `death.min.volume`,
  deathScreamer = `death.screamer`,
  deathToZombie = `death.to.zombie`,
  default = `default`,
  deny = `deny`,
  detach = `detach`,
  disappeared = `disappeared`,
  doorClose = `door.close`,
  doorOpen = `door.open`,
  drink = `drink`,
  drinkHoney = `drink.honey`,
  drinkMilk = `drink.milk`,
  dripLavaPointedDripstone = `drip.lava.pointed_dripstone`,
  dripWaterPointedDripstone = `drip.water.pointed_dripstone`,
  dropSlot = `drop.slot`,
  eat = `eat`,
  elderguardianCurse = `elderguardian.curse`,
  elemconstructOpen = `elemconstruct.open`,
  enderchestClosed = `enderchest.closed`,
  enderchestOpen = `enderchest.open`,
  explode = `explode`,
  extinguishCandle = `extinguish.candle`,
  extinguishFire = `extinguish.fire`,
  fall = `fall`,
  fallBig = `fall.big`,
  fallSmall = `fall.small`,
  fang = `fang`,
  fenceGateClose = `fence_gate.close`,
  fenceGateOpen = `fence_gate.open`,
  fire = `fire`,
  fizz = `fizz`,
  flap = `flap`,
  flop = `flop`,
  fly = `fly`,
  freeze = `freeze`,
  fuse = `fuse`,
  gallop = `gallop`,
  glass = `glass`,
  glowSquidInkSquirt = `glow_squid.ink_squirt`,
  glowstickUse = `glowstick.use`,
  growl = `growl`,
  haggle = `haggle`,
  haggleIdle = `haggle.idle`,
  haggleNo = `haggle.no`,
  haggleYes = `haggle.yes`,
  heartbeat = `heartbeat`,
  heavyStep = `heavy.step`,
  hit = `hit`,
  hornBreak = `horn_break`,
  hornCall0 = `horn_call0`,
  hornCall1 = `horn_call1`,
  hornCall2 = `horn_call2`,
  hornCall3 = `horn_call3`,
  hornCall4 = `horn_call4`,
  hornCall5 = `horn_call5`,
  hornCall6 = `horn_call6`,
  hornCall7 = `horn_call7`,
  hurt = `hurt`,
  hurtBaby = `hurt.baby`,
  hurtInWater = `hurt.in.water`,
  hurtReduced = `hurt.reduced`,
  hurtScreamer = `hurt.screamer`,
  icebombHit = `icebomb.hit`,
  ignite = `ignite`,
  imitateBlaze = `imitate.blaze`,
  imitateBogged = `imitate.bogged`,
  imitateBreeze = `imitate.breeze`,
  imitateCamelHusk = `imitate.camel_husk`,
  imitateCaveSpider = `imitate.cave_spider`,
  imitateCreaking = `imitate.creaking`,
  imitateCreeper = `imitate.creeper`,
  imitateDrowned = `imitate.drowned`,
  imitateElderGuardian = `imitate.elder_guardian`,
  imitateEnderDragon = `imitate.ender_dragon`,
  imitateEnderman = `imitate.enderman`,
  imitateEndermite = `imitate.endermite`,
  imitateEvocationIllager = `imitate.evocation_illager`,
  imitateGhast = `imitate.ghast`,
  imitateGuardian = `imitate.guardian`,
  imitateHappyGhast = `imitate.happy_ghast`,
  imitateHusk = `imitate.husk`,
  imitateMagmaCube = `imitate.magma_cube`,
  imitateParched = `imitate.parched`,
  imitatePhantom = `imitate.phantom`,
  imitatePillager = `imitate.pillager`,
  imitatePolarBear = `imitate.polar_bear`,
  imitateRavager = `imitate.ravager`,
  imitateShulker = `imitate.shulker`,
  imitateSilverfish = `imitate.silverfish`,
  imitateSkeleton = `imitate.skeleton`,
  imitateSlime = `imitate.slime`,
  imitateSpider = `imitate.spider`,
  imitateStray = `imitate.stray`,
  imitateVex = `imitate.vex`,
  imitateVindicationIllager = `imitate.vindication_illager`,
  imitateWarden = `imitate.warden`,
  imitateWitch = `imitate.witch`,
  imitateWither = `imitate.wither`,
  imitateWitherSkeleton = `imitate.wither_skeleton`,
  imitateWolf = `imitate.wolf`,
  imitateZoglin = `imitate.zoglin`,
  imitateZombie = `imitate.zombie`,
  imitateZombiePigman = `imitate.zombie_pigman`,
  imitateZombieVillager = `imitate.zombie_villager`,
  insert = `insert`,
  insertEnchanted = `insert_enchanted`,
  irongolemCrack = `irongolem.crack`,
  irongolemRepair = `irongolem.repair`,
  itemBookPut = `item.book.put`,
  itemCopperSpearAttackHit = `item.copper_spear.attack_hit`,
  itemCopperSpearAttackMiss = `item.copper_spear.attack_miss`,
  itemCopperSpearUse = `item.copper_spear.use`,
  itemDiamondSpearAttackHit = `item.diamond_spear.attack_hit`,
  itemDiamondSpearAttackMiss = `item.diamond_spear.attack_miss`,
  itemDiamondSpearUse = `item.diamond_spear.use`,
  itemEnchantLunge1 = `item.enchant.lunge1`,
  itemEnchantLunge2 = `item.enchant.lunge2`,
  itemEnchantLunge3 = `item.enchant.lunge3`,
  itemFizz = `item.fizz`,
  itemGoldenSpearAttackHit = `item.golden_spear.attack_hit`,
  itemGoldenSpearAttackMiss = `item.golden_spear.attack_miss`,
  itemGoldenSpearUse = `item.golden_spear.use`,
  itemIronSpearAttackHit = `item.iron_spear.attack_hit`,
  itemIronSpearAttackMiss = `item.iron_spear.attack_miss`,
  itemIronSpearUse = `item.iron_spear.use`,
  itemNetheriteSpearAttackHit = `item.netherite_spear.attack_hit`,
  itemNetheriteSpearAttackMiss = `item.netherite_spear.attack_miss`,
  itemNetheriteSpearUse = `item.netherite_spear.use`,
  itemShieldBlock = `item.shield.block`,
  itemSpearAttackHit = `item.spear.attack_hit`,
  itemSpearAttackMiss = `item.spear.attack_miss`,
  itemSpearUse = `item.spear.use`,
  itemSpyglassStopUsing = `item.spyglass.stop_using`,
  itemSpyglassUse = `item.spyglass.use`,
  itemStoneSpearAttackHit = `item.stone_spear.attack_hit`,
  itemStoneSpearAttackMiss = `item.stone_spear.attack_miss`,
  itemStoneSpearUse = `item.stone_spear.use`,
  itemTridentHit = `item.trident.hit`,
  itemTridentHitGround = `item.trident.hit_ground`,
  itemTridentReturn = `item.trident.return`,
  itemTridentRiptide1 = `item.trident.riptide_1`,
  itemTridentRiptide2 = `item.trident.riptide_2`,
  itemTridentRiptide3 = `item.trident.riptide_3`,
  itemTridentThrow = `item.trident.throw`,
  itemTridentThunder = `item.trident.thunder`,
  itemUseOn = `item.use.on`,
  itemWoodenSpearAttackHit = `item.wooden_spear.attack_hit`,
  itemWoodenSpearAttackMiss = `item.wooden_spear.attack_miss`,
  itemWoodenSpearUse = `item.wooden_spear.use`,
  itemGiven = `item_given`,
  itemTaken = `item_taken`,
  itemThrown = `item_thrown`,
  jump = `jump`,
  jumpPrevent = `jump.prevent`,
  jumpToBlock = `jump_to_block`,
  land = `land`,
  largeBlast = `large.blast`,
  launch = `launch`,
  lava = `lava`,
  lavaPop = `lava.pop`,
  layEgg = `lay_egg`,
  laySpawn = `lay_spawn`,
  leadBreak = `lead.break`,
  leadLeash = `lead.leash`,
  leadUnleash = `lead.unleash`,
  leashknotBreak = `leashknot.break`,
  leashknotPlace = `leashknot.place`,
  levelup = `levelup`,
  listening = `listening`,
  listeningAngry = `listening_angry`,
  lodestoneCompassLinkCompassToLodestone = `lodestone_compass.link_compass_to_lodestone`,
  ltReactionBleach = `lt.reaction.bleach`,
  ltReactionEpaste = `lt.reaction.epaste`,
  ltReactionEpaste2 = `lt.reaction.epaste2`,
  ltReactionFertilizer = `lt.reaction.fertilizer`,
  ltReactionFire = `lt.reaction.fire`,
  ltReactionFireball = `lt.reaction.fireball`,
  ltReactionIcebomb = `lt.reaction.icebomb`,
  ltReactionMgsalt = `lt.reaction.mgsalt`,
  ltReactionMiscexplosion = `lt.reaction.miscexplosion`,
  ltReactionMiscfire = `lt.reaction.miscfire`,
  ltReactionMiscmystical = `lt.reaction.miscmystical`,
  ltReactionMiscmystical2 = `lt.reaction.miscmystical2`,
  ltReactionProduct = `lt.reaction.product`,
  maceHeavySmashGround = `mace.heavy_smash_ground`,
  maceSmashAir = `mace.smash_air`,
  maceSmashGround = `mace.smash_ground`,
  mad = `mad`,
  milk = `milk`,
  milkScreamer = `milk.screamer`,
  milkSuspiciously = `milk_suspiciously`,
  mobArmadilloBrush = `mob.armadillo.brush`,
  mobArmadilloScuteDrop = `mob.armadillo.scute_drop`,
  mobArmorStandPlace = `mob.armor_stand.place`,
  mobHoglinConvertedToZombified = `mob.hoglin.converted_to_zombified`,
  mobHuskConvertToZombie = `mob.husk.convert_to_zombie`,
  mobPigDeath = `mob.pig.death`,
  mobPlayerHurtDrown = `mob.player.hurt_drown`,
  mobPlayerHurtFreeze = `mob.player.hurt_freeze`,
  mobPlayerHurtOnFire = `mob.player.hurt_on_fire`,
  mobWarning = `mob.warning`,
  mobWarningBaby = `mob.warning.baby`,
  multiSwap = `multi_swap`,
  nearbyClose = `nearby_close`,
  nearbyCloser = `nearby_closer`,
  nearbyClosest = `nearby_closest`,
  note = `note`,
  noteBass = `note.bass`,
  ominousBottleEndUse = `ominous_bottle.end_use`,
  ominousItemSpawnerAboutToSpawnItem = `ominous_item_spawner.about_to_spawn_item`,
  ominousItemSpawnerSpawnItem = `ominous_item_spawner.spawn_item`,
  ominousItemSpawnerSpawnItemBegin = `ominous_item_spawner.spawn_item_begin`,
  open = `open`,
  openLong = `open_long`,
  panic = `panic`,
  pant = `pant`,
  particleSoulEscapeLoud = `particle.soul_escape.loud`,
  particleSoulEscapeQuiet = `particle.soul_escape.quiet`,
  pauseGrowth = `pause_growth`,
  pickBerriesCaveVines = `pick_berries.cave_vines`,
  pickup = `pickup`,
  pickupEnchanted = `pickup_enchanted`,
  pistonIn = `piston.in`,
  pistonOut = `piston.out`,
  place = `place`,
  placeInWater = `place_in_water`,
  placeItem = `place_item`,
  plop = `plop`,
  pop = `pop`,
  portal = `portal`,
  portalTravel = `portal.travel`,
  potionBrewed = `potion.brewed`,
  powerOff = `power.off`,
  powerOffSculkSensor = `power.off.sculk_sensor`,
  powerOn = `power.on`,
  powerOnSculkSensor = `power.on.sculk_sensor`,
  preRam = `pre_ram`,
  preRamScreamer = `pre_ram.screamer`,
  prepareAttack = `prepare.attack`,
  prepareSummon = `prepare.summon`,
  prepareWololo = `prepare.wololo`,
  presneeze = `presneeze`,
  pressurePlateClickOff = `pressure_plate.click_off`,
  pressurePlateClickOn = `pressure_plate.click_on`,
  pumpkinCarve = `pumpkin.carve`,
  purr = `purr`,
  purreow = `purreow`,
  raidHorn = `raid.horn`,
  ramImpact = `ram_impact`,
  ramImpactScreamer = `ram_impact.screamer`,
  randomAnvilUse = `random.anvil_use`,
  reappeared = `reappeared`,
  record11 = `record.11`,
  record13 = `record.13`,
  record5 = `record.5`,
  recordBlocks = `record.blocks`,
  recordCat = `record.cat`,
  recordChirp = `record.chirp`,
  recordCreator = `record.creator`,
  recordCreatorMusicBox = `record.creator_music_box`,
  recordFar = `record.far`,
  recordLavaChicken = `record.lava_chicken`,
  recordMall = `record.mall`,
  recordMellohi = `record.mellohi`,
  recordOtherside = `record.otherside`,
  recordPigstep = `record.pigstep`,
  recordPrecipice = `record.precipice`,
  recordRelic = `record.relic`,
  recordStal = `record.stal`,
  recordStrad = `record.strad`,
  recordTears = `record.tears`,
  recordWait = `record.wait`,
  recordWard = `record.ward`,
  reflect = `reflect`,
  remedy = `remedy`,
  resetGrowth = `reset_growth`,
  respawnAnchorAmbient = `respawn_anchor.ambient`,
  respawnAnchorCharge = `respawn_anchor.charge`,
  respawnAnchorDeplete = `respawn_anchor.deplete`,
  respawnAnchorSetSpawn = `respawn_anchor.set_spawn`,
  retreat = `retreat`,
  roar = `roar`,
  saddle = `saddle`,
  saddleInWater = `saddle_in_water`,
  scared = `scared`,
  scrape = `scrape`,
  screech = `screech`,
  shake = `shake`,
  shatterPot = `shatter_pot`,
  shear = `shear`,
  shoot = `shoot`,
  shulkerClose = `shulker.close`,
  shulkerOpen = `shulker.open`,
  shulkerboxClosed = `shulkerbox.closed`,
  shulkerboxOpen = `shulkerbox.open`,
  singleSwap = `single_swap`,
  sleep = `sleep`,
  smithingTableUse = `smithing_table.use`,
  sneeze = `sneeze`,
  sonicBoom = `sonic_boom`,
  sonicCharge = `sonic_charge`,
  sparklerActive = `sparkler.active`,
  sparklerUse = `sparkler.use`,
  spawn = `spawn`,
  splash = `splash`,
  spongeAbsorb = `sponge.absorb`,
  squidInkSquirt = `squid.ink_squirt`,
  squishBig = `squish.big`,
  squishSmall = `squish.small`,
  stare = `stare`,
  stateChange = `state_change`,
  step = `step`,
  stepBaby = `step.baby`,
  stepLava = `step_lava`,
  stepSand = `step_sand`,
  stun = `stun`,
  swim = `swim`,
  swoop = `swoop`,
  takeoff = `takeoff`,
  teleport = `teleport`,
  tempt = `tempt`,
  thorns = `thorns`,
  throw = `throw`,
  thunder = `thunder`,
  tiltDownBigDripleaf = `tilt_down.big_dripleaf`,
  tiltUpBigDripleaf = `tilt_up.big_dripleaf`,
  tongue = `tongue`,
  trapdoorClose = `trapdoor.close`,
  trapdoorOpen = `trapdoor.open`,
  trialSpawnerAmbient = `trial_spawner.ambient`,
  trialSpawnerAmbientOminous = `trial_spawner.ambient_ominous`,
  trialSpawnerChargeActivate = `trial_spawner.charge_activate`,
  trialSpawnerCloseShutter = `trial_spawner.close_shutter`,
  trialSpawnerDetectPlayer = `trial_spawner.detect_player`,
  trialSpawnerEjectItem = `trial_spawner.eject_item`,
  trialSpawnerOpenShutter = `trial_spawner.open_shutter`,
  trialSpawnerSpawnMob = `trial_spawner.spawn_mob`,
  tripod = `tripod`,
  twinkle = `twinkle`,
  uiCartographyTableTakeResult = `ui.cartography_table.take_result`,
  uiLoomTakeResult = `ui.loom.take_result`,
  uiStonecutterTakeResult = `ui.stonecutter.take_result`,
  undefined = `undefined`,
  unfect = `unfect`,
  unfreeze = `unfreeze`,
  unsaddle = `unsaddle`,
  vaultActivate = `vault.activate`,
  vaultAmbient = `vault.ambient`,
  vaultCloseShutter = `vault.close_shutter`,
  vaultDeactivate = `vault.deactivate`,
  vaultEjectItem = `vault.eject_item`,
  vaultInsertItem = `vault.insert_item`,
  vaultInsertItemFail = `vault.insert_item_fail`,
  vaultOpenShutter = `vault.open_shutter`,
  vaultRejectRewardedPlayer = `vault.reject_rewarded_player`,
  warn = `warn`,
  water = `water`,
  whine = `whine`,
  windChargeBurst = `wind_charge.burst`
}


/**
 * Item Components Repairable (minecraft:repairable)
 * Defines the items that can be used to repair a defined item, and
 * the amount of durability each item restores upon repair. Each
 * entry needs to define a list of strings for 'items' that can be
 * used for the repair and an optional 'repair_amount' for how much
 * durability is repaired.
 */
export interface MinecraftItemV1260ComponentsMinecraftRepairable {

  /**
   * @remarks
   * List of repair item entries. Each entry needs to define a list of
   * strings for `items` that can be used for the repair and an
   * optional `repair_amount` for how much durability is gained.
   * 
   * Sample Values:
   * Chestplate: [{"items":["minecraft:stick"],"repair_amount":"context.other->query.remaining_durability + 0.05 * context.other->query.max_durability"}]
   *
   *
   * My Sword Chuck: [{"items":["minecraft:diamond"],"repair_amount":"query.max_durability * 0.25"}]
   *
   *
   */
  repair_items?: string;

}


/**
 * Item Components Shooter (minecraft:shooter)
 * Compels an item to shoot projectiles, similarly to a bow or
 * crossbow. Must have the minecraft:use_modifiers component in
 * order to function properly.
 * Note: Ammunition used by minecraft:shooter must have the
 * minecraft:projectile component in order to function 
 * properly.
 * Note: Items equipped with the shooter component will only sustain
 * damage while shooting. Durability will remain unaffected if the
 * item is used for melee attacks.
 */
export interface MinecraftItemV1260ComponentsMinecraftShooter {

  /**
   * @remarks
   * A list of ammunition entries that define which items can be
   * used as projectiles for this shooter. Each entry specifies the
   * item, whether to search the offhand, inventory, and whether to
   * use in creative mode.
   * 
   * Sample Values:
   * My Sword Shoot: [{"item":"minecraft:snowball","use_offhand":true,"search_inventory":true,"use_in_creative":true}]
   *
   */
  ammunition?: MinecraftItemV1260ComponentsMinecraftShooterAmmunition[];

  /**
   * @remarks
   * When true, the shooter begins charging when the player starts
   * drawing, similar to a crossbow. Default is false.
   */
  charge_on_draw: boolean;

  /**
   * @remarks
   * The maximum time in seconds that a player can draw the shooter
   * before it automatically fires or reaches maximum power. Default is
   * 0.
   * 
   * Sample Values:
   * My Sword Shoot: 1
   *
   */
  max_draw_duration: number;

  /**
   * @remarks
   * When true, the projectile's launch power increases based on how
   * long the player holds the use button before releasing. Default is
   * false.
   * 
   * Sample Values:
   * My Sword Shoot: true
   *
   */
  scale_power_by_draw_duration: boolean;

}


/**
 * Item Components Ammunition (Ammunition)
 * Is ammunition for a shooter item.
 */
export interface MinecraftItemV1260ComponentsMinecraftShooterAmmunition {

  /**
   * @remarks
   * Ammunition item description identifier.
   */
  item: string;

  /**
   * @remarks
   * Can search inventory? Default is set to false.
   */
  search_inventory?: boolean;

  /**
   * @remarks
   * Can use in creative mode? Default is set to false.
   */
  use_in_creative?: boolean;

  /**
   * @remarks
   * Can use off-hand? Default is set to false.
   */
  use_offhand?: boolean;

}


/**
 * Item Components Storage Item (minecraft:storage_item)
 * Enables an item to store data of the dynamic container associated with
 * it. A dynamic container is a container for storing items that is
 * linked to an item instead of a block or an entity.
 * Note: While this component can be defined on its own, to be
 * able to interact with the item's storage container the item must
 * have a `minecraft:bundle_interaction` item component 
 * defined.
 */
export interface MinecraftItemV1260ComponentsMinecraftStorageItem {

  /**
   * @remarks
   * Determines whether another Storage Item is allowed inside of
   * this item. Default is true.
   * 
   * Sample Values:
   * Black Bundle: true
   *
   *
   */
  allow_nested_storage_items?: boolean;

  /**
   * @remarks
   * List of items that are exclusively allowed in this Storage Item.
   * If empty all items are allowed.
   */
  allowed_items?: string;

  /**
   * @remarks
   * List of items that are not allowed in this Storage Item.
   * 
   * Sample Values:
   * Black Bundle: ["minecraft:shulker_box","minecraft:undyed_shulker_box"]
   *
   *
   */
  banned_items?: string;

  /**
   * @remarks
   * The maximum allowed weight of the sum of all contained items.
   * Maximum is 64. Default is 64.
   * 
   * Sample Values:
   * Black Bundle: 64
   *
   *
   */
  max_slots?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Black Bundle: 64
   *
   *
   */
  max_weight_limit?: number;

  /**
   * @remarks
   * 
   * Sample Values:
   * Black Bundle: 4
   *
   *
   */
  weight_in_storage_item?: number;

}


/**
 * Item Components Storage Weight Limit
 * (minecraft:storage_weight_limit)
 * Specifies the maximum weight limit that a storage item can 
 * hold.
 */
export interface MinecraftItemV1260ComponentsMinecraftStorageWeightLimit {

  /**
   * @remarks
   * The maximum allowed weight of the sum of all contained items.
   * Maximum is 64. Default is 64.
   */
  max_weight_limit?: number;

}


/**
 * Item Components Storage Weight Modifier
 * (minecraft:storage_weight_modifier)
 * Specifies the maximum weight limit that a storage item can 
 * hold.
 */
export interface MinecraftItemV1260ComponentsMinecraftStorageWeightModifier {

  /**
   * @remarks
   * The weight of this item when inside another Storage Item. Default is
   * 4. 0 means item is not allowed in another Storage Item.
   */
  weight_in_storage_item?: number;

}


/**
 * Item Components Tags (minecraft:tags)
 * Determines which tags are included on a given item.
 */
export interface MinecraftItemV1260ComponentsMinecraftTags {

  /**
   * @remarks
   * An array that can contain multiple item tags.
   * 
   * Sample Values:
   * Apple: ["minecraft:is_food"]
   *
   */
  tags?: string[];

}


/**
 * Item Components Throwable (minecraft:throwable)
 * Makes an item throwable by the player, similar to a snowball or
 * ender pearl. Use with minecraft:projectile to specify which entity
 * is spawned when thrown.
 * Note: Combine with minecraft:projectile to define the projectile
 * entity. For charged throws (like tridents), set
 * scale_power_by_draw_duration to true and configure min/max draw
 * durations.
 */
export interface MinecraftItemV1260ComponentsMinecraftThrowable {

  /**
   * @remarks
   * Determines whether the item should use the swing animation when
   * thrown. Default is set to false.
   * 
   * Sample Values:
   * Wind Charge: true
   *
   *
   */
  do_swing_animation?: boolean;

  /**
   * @remarks
   * The scale at which the power of the throw increases. Default is
   * set to 1.0.
   * 
   * Sample Values:
   * Wind Charge: 1.5
   *
   * My Sword Chuck: 1
   *
   */
  launch_power_scale?: number;

  /**
   * @remarks
   * The maximum duration to draw a throwable item. Default is set to
   * 0.0.
   */
  max_draw_duration?: number;

  /**
   * @remarks
   * The maximum power to launch the throwable item. Default is set
   * to 1.0.
   * 
   * Sample Values:
   * Wind Charge: 1.5
   *
   * My Sword Chuck: 1
   *
   */
  max_launch_power?: number;

  /**
   * @remarks
   * The minimum duration to draw a throwable item. Default is set to
   * 0.0.
   */
  min_draw_duration?: number;

  /**
   * @remarks
   * Whether or not the power of the throw increases with duration
   * charged. Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;

}


/**
 * Item Components Use Modifiers (minecraft:use_modifiers)
 * Determines how long an item takes to use in combination with
 * components such as Shooter, Throwable, or Food.
 */
export interface MinecraftItemV1260ComponentsMinecraftUseModifiers {

  /**
   * @remarks
   * Whether vibrations are emitted when the item starts or stops being
   * used.
   */
  emit_vibrations?: boolean;

  /**
   * @remarks
   * Multiplier applied to the player's movement speed while the item
   * is in use.
   * 
   * Sample Values:
   * Apple: 0.35
   *
   */
  movement_modifier?: number;

  /**
   * @remarks
   * Sound played when the item starts being used.
   */
  start_sound?: string;

  /**
   * @remarks
   * Time, in seconds, that the item takes to use.
   * 
   * Sample Values:
   * Apple: 1.6
   *
   */
  use_duration?: number;

}


export enum MinecraftItemV1260ComponentsMinecraftUseModifiersStartSound {
  activate = `activate`,
  addChest = `add.chest`,
  admire = `admire`,
  agitated = `agitated`,
  ambient = `ambient`,
  ambientAggressive = `ambient.aggressive`,
  ambientBaby = `ambient.baby`,
  ambientBasaltDeltasAdditions = `ambient.basalt_deltas.additions`,
  ambientBasaltDeltasLoop = `ambient.basalt_deltas.loop`,
  ambientBasaltDeltasMood = `ambient.basalt_deltas.mood`,
  ambientCandle = `ambient.candle`,
  ambientCave = `ambient.cave`,
  ambientCrimsonForestAdditions = `ambient.crimson_forest.additions`,
  ambientCrimsonForestLoop = `ambient.crimson_forest.loop`,
  ambientCrimsonForestMood = `ambient.crimson_forest.mood`,
  ambientInAir = `ambient.in.air`,
  ambientInRaid = `ambient.in.raid`,
  ambientInWater = `ambient.in.water`,
  ambientNetherWastesAdditions = `ambient.nether_wastes.additions`,
  ambientNetherWastesLoop = `ambient.nether_wastes.loop`,
  ambientNetherWastesMood = `ambient.nether_wastes.mood`,
  ambientPollinate = `ambient.pollinate`,
  ambientScreamer = `ambient.screamer`,
  ambientSoulsandValleyAdditions = `ambient.soulsand_valley.additions`,
  ambientSoulsandValleyLoop = `ambient.soulsand_valley.loop`,
  ambientSoulsandValleyMood = `ambient.soulsand_valley.mood`,
  ambientTame = `ambient.tame`,
  ambientUnderwaterEnter = `ambient.underwater.enter`,
  ambientUnderwaterExit = `ambient.underwater.exit`,
  ambientWarpedForestAdditions = `ambient.warped_forest.additions`,
  ambientWarpedForestLoop = `ambient.warped_forest.loop`,
  ambientWarpedForestMood = `ambient.warped_forest.mood`,
  ambientWeatherTheEndLightFlash = `ambient.weather.the_end_light_flash`,
  ambientWorried = `ambient.worried`,
  angry = `angry`,
  applyEffectBadOmen = `apply_effect.bad_omen`,
  applyEffectRaidOmen = `apply_effect.raid_omen`,
  applyEffectTrialOmen = `apply_effect.trial_omen`,
  armor = `armor`,
  armorBreakWolf = `armor.break_wolf`,
  armorCrackWolf = `armor.crack_wolf`,
  armorEquipChain = `armor.equip_chain`,
  armorEquipCopper = `armor.equip_copper`,
  armorEquipDiamond = `armor.equip_diamond`,
  armorEquipElytra = `armor.equip_elytra`,
  armorEquipGeneric = `armor.equip_generic`,
  armorEquipGold = `armor.equip_gold`,
  armorEquipIron = `armor.equip_iron`,
  armorEquipLeather = `armor.equip_leather`,
  armorEquipNetherite = `armor.equip_netherite`,
  armorEquipWolf = `armor.equip_wolf`,
  armorRepairWolf = `armor.repair_wolf`,
  armorUnequipGeneric = `armor.unequip_generic`,
  armorUnequipWolf = `armor.unequip_wolf`,
  attach = `attach`,
  attack = `attack`,
  attackCritical = `attack.critical`,
  attackNodamage = `attack.nodamage`,
  attackStrong = `attack.strong`,
  balloonpop = `balloonpop`,
  beaconActivate = `beacon.activate`,
  beaconAmbient = `beacon.ambient`,
  beaconDeactivate = `beacon.deactivate`,
  beaconPower = `beacon.power`,
  blast = `blast`,
  blockBambooSaplingPlace = `block.bamboo_sapling.place`,
  blockBarrelClose = `block.barrel.close`,
  blockBarrelOpen = `block.barrel.open`,
  blockBeehiveDrip = `block.beehive.drip`,
  blockBeehiveEnter = `block.beehive.enter`,
  blockBeehiveExit = `block.beehive.exit`,
  blockBeehiveShear = `block.beehive.shear`,
  blockBeehiveWork = `block.beehive.work`,
  blockBellHit = `block.bell.hit`,
  blockBlastfurnaceFireCrackle = `block.blastfurnace.fire_crackle`,
  blockCampfireCrackle = `block.campfire.crackle`,
  blockCartographyTableUse = `block.cartography_table.use`,
  blockClick = `block.click`,
  blockClickFail = `block.click.fail`,
  blockComposterEmpty = `block.composter.empty`,
  blockComposterFill = `block.composter.fill`,
  blockComposterFillSuccess = `block.composter.fill_success`,
  blockComposterReady = `block.composter.ready`,
  blockCopperBulbTurnOff = `block.copper_bulb.turn_off`,
  blockCopperBulbTurnOn = `block.copper_bulb.turn_on`,
  blockCreakingHeartTrail = `block.creaking_heart.trail`,
  blockDecoratedPotInsert = `block.decorated_pot.insert`,
  blockDecoratedPotInsertFail = `block.decorated_pot.insert_fail`,
  blockEnchantingTableUse = `block.enchanting_table.use`,
  blockEndPortalSpawn = `block.end_portal.spawn`,
  blockEndPortalFrameFill = `block.end_portal_frame.fill`,
  blockFletchingTableUse = `block.fletching_table.use`,
  blockFrogSpawnBreak = `block.frog_spawn.break`,
  blockFrogSpawnHatch = `block.frog_spawn.hatch`,
  blockFurnaceLit = `block.furnace.lit`,
  blockGrindstoneUse = `block.grindstone.use`,
  blockLoomUse = `block.loom.use`,
  blockScaffoldingClimb = `block.scaffolding.climb`,
  blockSculkSpread = `block.sculk.spread`,
  blockSculkCatalystBloom = `block.sculk_catalyst.bloom`,
  blockSculkSensorPlace = `block.sculk_sensor.place`,
  blockSculkShriekerPlace = `block.sculk_shrieker.place`,
  blockSculkShriekerShriek = `block.sculk_shrieker.shriek`,
  blockSignWaxedInteractFail = `block.sign.waxed_interact_fail`,
  blockSmithingTableUse = `block.smithing_table.use`,
  blockSmokerSmoke = `block.smoker.smoke`,
  blockSnifferEggCrack = `block.sniffer_egg.crack`,
  blockSnifferEggHatch = `block.sniffer_egg.hatch`,
  blockStonecutterUse = `block.stonecutter.use`,
  blockSweetBerryBushHurt = `block.sweet_berry_bush.hurt`,
  blockSweetBerryBushPick = `block.sweet_berry_bush.pick`,
  blockTurtleEggAttack = `block.turtle_egg.attack`,
  blockTurtleEggBreak = `block.turtle_egg.break`,
  blockTurtleEggCrack = `block.turtle_egg.crack`,
  blockTurtleEggHatch = `block.turtle_egg.hatch`,
  boost = `boost`,
  born = `born`,
  bottleDragonbreath = `bottle.dragonbreath`,
  bottleEmpty = `bottle.empty`,
  bottleFill = `bottle.fill`,
  bow = `bow`,
  bowHit = `bow.hit`,
  break = `break`,
  breakBlock = `break.block`,
  breakPot = `break_pot`,
  breathe = `breathe`,
  breezeWindChargeBurst = `breeze_wind_charge.burst`,
  brush = `brush`,
  brushCompleted = `brush_completed`,
  bubbleDown = `bubble.down`,
  bubbleDowninside = `bubble.downinside`,
  bubblePop = `bubble.pop`,
  bubbleUp = `bubble.up`,
  bubbleUpinside = `bubble.upinside`,
  bucketEmptyFish = `bucket.empty.fish`,
  bucketEmptyLava = `bucket.empty.lava`,
  bucketEmptyPowderSnow = `bucket.empty.powder_snow`,
  bucketEmptyWater = `bucket.empty.water`,
  bucketFillFish = `bucket.fill.fish`,
  bucketFillLava = `bucket.fill.lava`,
  bucketFillPowderSnow = `bucket.fill.powder_snow`,
  bucketFillWater = `bucket.fill.water`,
  bulletHit = `bullet.hit`,
  bundleDropContents = `bundle.drop_contents`,
  bundleInsert = `bundle.insert`,
  bundleInsertFail = `bundle.insert_fail`,
  bundleRemoveOne = `bundle.remove_one`,
  burp = `burp`,
  buttonClickOff = `button.click_off`,
  buttonClickOn = `button.click_on`,
  cakeAddCandle = `cake.add_candle`,
  cameraTakePicture = `camera.take_picture`,
  cantBreed = `cant_breed`,
  castSpell = `cast.spell`,
  cauldronDripLavaPointedDripstone = `cauldron_drip.lava.pointed_dripstone`,
  cauldronDripWaterPointedDripstone = `cauldron_drip.water.pointed_dripstone`,
  celebrate = `celebrate`,
  charge = `charge`,
  chargeSculk = `charge.sculk`,
  chestClosed = `chest.closed`,
  chestOpen = `chest.open`,
  chimeAmethystBlock = `chime.amethyst_block`,
  chorusdeath = `chorusdeath`,
  chorusgrow = `chorusgrow`,
  close = `close`,
  closeLong = `close_long`,
  conduitActivate = `conduit.activate`,
  conduitAmbient = `conduit.ambient`,
  conduitAttack = `conduit.attack`,
  conduitDeactivate = `conduit.deactivate`,
  conduitShort = `conduit.short`,
  convertMooshroom = `convert_mooshroom`,
  convertToDrowned = `convert_to_drowned`,
  convertToFrog = `convert_to_frog`,
  convertToStray = `convert_to_stray`,
  convertedToZombified = `converted_to_zombified`,
  copperWaxOff = `copper.wax.off`,
  copperWaxOn = `copper.wax.on`,
  crafterCraft = `crafter.craft`,
  crafterDisableSlot = `crafter.disable_slot`,
  crafterFail = `crafter.fail`,
  creakingHeartSpawn = `creaking_heart_spawn`,
  crossbowLoadingEnd = `crossbow.loading.end`,
  crossbowLoadingMiddle = `crossbow.loading.middle`,
  crossbowLoadingStart = `crossbow.loading.start`,
  crossbowQuickChargeEnd = `crossbow.quick_charge.end`,
  crossbowQuickChargeMiddle = `crossbow.quick_charge.middle`,
  crossbowQuickChargeStart = `crossbow.quick_charge.start`,
  crossbowShoot = `crossbow.shoot`,
  dashReady = `dash_ready`,
  deactivate = `deactivate`,
  death = `death`,
  deathBaby = `death.baby`,
  deathInWater = `death.in.water`,
  deathMidVolume = `death.mid.volume`,
  deathMinVolume = `death.min.volume`,
  deathScreamer = `death.screamer`,
  deathToZombie = `death.to.zombie`,
  default = `default`,
  deny = `deny`,
  detach = `detach`,
  disappeared = `disappeared`,
  doorClose = `door.close`,
  doorOpen = `door.open`,
  drink = `drink`,
  drinkHoney = `drink.honey`,
  drinkMilk = `drink.milk`,
  dripLavaPointedDripstone = `drip.lava.pointed_dripstone`,
  dripWaterPointedDripstone = `drip.water.pointed_dripstone`,
  dropSlot = `drop.slot`,
  eat = `eat`,
  elderguardianCurse = `elderguardian.curse`,
  elemconstructOpen = `elemconstruct.open`,
  enderchestClosed = `enderchest.closed`,
  enderchestOpen = `enderchest.open`,
  explode = `explode`,
  extinguishCandle = `extinguish.candle`,
  extinguishFire = `extinguish.fire`,
  fall = `fall`,
  fallBig = `fall.big`,
  fallSmall = `fall.small`,
  fang = `fang`,
  fenceGateClose = `fence_gate.close`,
  fenceGateOpen = `fence_gate.open`,
  fire = `fire`,
  fizz = `fizz`,
  flap = `flap`,
  flop = `flop`,
  fly = `fly`,
  freeze = `freeze`,
  fuse = `fuse`,
  gallop = `gallop`,
  glass = `glass`,
  glowSquidInkSquirt = `glow_squid.ink_squirt`,
  glowstickUse = `glowstick.use`,
  growl = `growl`,
  haggle = `haggle`,
  haggleIdle = `haggle.idle`,
  haggleNo = `haggle.no`,
  haggleYes = `haggle.yes`,
  heartbeat = `heartbeat`,
  heavyStep = `heavy.step`,
  hit = `hit`,
  hornBreak = `horn_break`,
  hornCall0 = `horn_call0`,
  hornCall1 = `horn_call1`,
  hornCall2 = `horn_call2`,
  hornCall3 = `horn_call3`,
  hornCall4 = `horn_call4`,
  hornCall5 = `horn_call5`,
  hornCall6 = `horn_call6`,
  hornCall7 = `horn_call7`,
  hurt = `hurt`,
  hurtBaby = `hurt.baby`,
  hurtInWater = `hurt.in.water`,
  hurtReduced = `hurt.reduced`,
  hurtScreamer = `hurt.screamer`,
  icebombHit = `icebomb.hit`,
  ignite = `ignite`,
  imitateBlaze = `imitate.blaze`,
  imitateBogged = `imitate.bogged`,
  imitateBreeze = `imitate.breeze`,
  imitateCamelHusk = `imitate.camel_husk`,
  imitateCaveSpider = `imitate.cave_spider`,
  imitateCreaking = `imitate.creaking`,
  imitateCreeper = `imitate.creeper`,
  imitateDrowned = `imitate.drowned`,
  imitateElderGuardian = `imitate.elder_guardian`,
  imitateEnderDragon = `imitate.ender_dragon`,
  imitateEnderman = `imitate.enderman`,
  imitateEndermite = `imitate.endermite`,
  imitateEvocationIllager = `imitate.evocation_illager`,
  imitateGhast = `imitate.ghast`,
  imitateGuardian = `imitate.guardian`,
  imitateHappyGhast = `imitate.happy_ghast`,
  imitateHusk = `imitate.husk`,
  imitateMagmaCube = `imitate.magma_cube`,
  imitateParched = `imitate.parched`,
  imitatePhantom = `imitate.phantom`,
  imitatePillager = `imitate.pillager`,
  imitatePolarBear = `imitate.polar_bear`,
  imitateRavager = `imitate.ravager`,
  imitateShulker = `imitate.shulker`,
  imitateSilverfish = `imitate.silverfish`,
  imitateSkeleton = `imitate.skeleton`,
  imitateSlime = `imitate.slime`,
  imitateSpider = `imitate.spider`,
  imitateStray = `imitate.stray`,
  imitateVex = `imitate.vex`,
  imitateVindicationIllager = `imitate.vindication_illager`,
  imitateWarden = `imitate.warden`,
  imitateWitch = `imitate.witch`,
  imitateWither = `imitate.wither`,
  imitateWitherSkeleton = `imitate.wither_skeleton`,
  imitateWolf = `imitate.wolf`,
  imitateZoglin = `imitate.zoglin`,
  imitateZombie = `imitate.zombie`,
  imitateZombiePigman = `imitate.zombie_pigman`,
  imitateZombieVillager = `imitate.zombie_villager`,
  insert = `insert`,
  insertEnchanted = `insert_enchanted`,
  irongolemCrack = `irongolem.crack`,
  irongolemRepair = `irongolem.repair`,
  itemBookPut = `item.book.put`,
  itemCopperSpearAttackHit = `item.copper_spear.attack_hit`,
  itemCopperSpearAttackMiss = `item.copper_spear.attack_miss`,
  itemCopperSpearUse = `item.copper_spear.use`,
  itemDiamondSpearAttackHit = `item.diamond_spear.attack_hit`,
  itemDiamondSpearAttackMiss = `item.diamond_spear.attack_miss`,
  itemDiamondSpearUse = `item.diamond_spear.use`,
  itemEnchantLunge1 = `item.enchant.lunge1`,
  itemEnchantLunge2 = `item.enchant.lunge2`,
  itemEnchantLunge3 = `item.enchant.lunge3`,
  itemFizz = `item.fizz`,
  itemGoldenSpearAttackHit = `item.golden_spear.attack_hit`,
  itemGoldenSpearAttackMiss = `item.golden_spear.attack_miss`,
  itemGoldenSpearUse = `item.golden_spear.use`,
  itemIronSpearAttackHit = `item.iron_spear.attack_hit`,
  itemIronSpearAttackMiss = `item.iron_spear.attack_miss`,
  itemIronSpearUse = `item.iron_spear.use`,
  itemNetheriteSpearAttackHit = `item.netherite_spear.attack_hit`,
  itemNetheriteSpearAttackMiss = `item.netherite_spear.attack_miss`,
  itemNetheriteSpearUse = `item.netherite_spear.use`,
  itemShieldBlock = `item.shield.block`,
  itemSpearAttackHit = `item.spear.attack_hit`,
  itemSpearAttackMiss = `item.spear.attack_miss`,
  itemSpearUse = `item.spear.use`,
  itemSpyglassStopUsing = `item.spyglass.stop_using`,
  itemSpyglassUse = `item.spyglass.use`,
  itemStoneSpearAttackHit = `item.stone_spear.attack_hit`,
  itemStoneSpearAttackMiss = `item.stone_spear.attack_miss`,
  itemStoneSpearUse = `item.stone_spear.use`,
  itemTridentHit = `item.trident.hit`,
  itemTridentHitGround = `item.trident.hit_ground`,
  itemTridentReturn = `item.trident.return`,
  itemTridentRiptide1 = `item.trident.riptide_1`,
  itemTridentRiptide2 = `item.trident.riptide_2`,
  itemTridentRiptide3 = `item.trident.riptide_3`,
  itemTridentThrow = `item.trident.throw`,
  itemTridentThunder = `item.trident.thunder`,
  itemUseOn = `item.use.on`,
  itemWoodenSpearAttackHit = `item.wooden_spear.attack_hit`,
  itemWoodenSpearAttackMiss = `item.wooden_spear.attack_miss`,
  itemWoodenSpearUse = `item.wooden_spear.use`,
  itemGiven = `item_given`,
  itemTaken = `item_taken`,
  itemThrown = `item_thrown`,
  jump = `jump`,
  jumpPrevent = `jump.prevent`,
  jumpToBlock = `jump_to_block`,
  land = `land`,
  largeBlast = `large.blast`,
  launch = `launch`,
  lava = `lava`,
  lavaPop = `lava.pop`,
  layEgg = `lay_egg`,
  laySpawn = `lay_spawn`,
  leadBreak = `lead.break`,
  leadLeash = `lead.leash`,
  leadUnleash = `lead.unleash`,
  leashknotBreak = `leashknot.break`,
  leashknotPlace = `leashknot.place`,
  levelup = `levelup`,
  listening = `listening`,
  listeningAngry = `listening_angry`,
  lodestoneCompassLinkCompassToLodestone = `lodestone_compass.link_compass_to_lodestone`,
  ltReactionBleach = `lt.reaction.bleach`,
  ltReactionEpaste = `lt.reaction.epaste`,
  ltReactionEpaste2 = `lt.reaction.epaste2`,
  ltReactionFertilizer = `lt.reaction.fertilizer`,
  ltReactionFire = `lt.reaction.fire`,
  ltReactionFireball = `lt.reaction.fireball`,
  ltReactionIcebomb = `lt.reaction.icebomb`,
  ltReactionMgsalt = `lt.reaction.mgsalt`,
  ltReactionMiscexplosion = `lt.reaction.miscexplosion`,
  ltReactionMiscfire = `lt.reaction.miscfire`,
  ltReactionMiscmystical = `lt.reaction.miscmystical`,
  ltReactionMiscmystical2 = `lt.reaction.miscmystical2`,
  ltReactionProduct = `lt.reaction.product`,
  maceHeavySmashGround = `mace.heavy_smash_ground`,
  maceSmashAir = `mace.smash_air`,
  maceSmashGround = `mace.smash_ground`,
  mad = `mad`,
  milk = `milk`,
  milkScreamer = `milk.screamer`,
  milkSuspiciously = `milk_suspiciously`,
  mobArmadilloBrush = `mob.armadillo.brush`,
  mobArmadilloScuteDrop = `mob.armadillo.scute_drop`,
  mobArmorStandPlace = `mob.armor_stand.place`,
  mobHoglinConvertedToZombified = `mob.hoglin.converted_to_zombified`,
  mobHuskConvertToZombie = `mob.husk.convert_to_zombie`,
  mobPigDeath = `mob.pig.death`,
  mobPlayerHurtDrown = `mob.player.hurt_drown`,
  mobPlayerHurtFreeze = `mob.player.hurt_freeze`,
  mobPlayerHurtOnFire = `mob.player.hurt_on_fire`,
  mobWarning = `mob.warning`,
  mobWarningBaby = `mob.warning.baby`,
  multiSwap = `multi_swap`,
  nearbyClose = `nearby_close`,
  nearbyCloser = `nearby_closer`,
  nearbyClosest = `nearby_closest`,
  note = `note`,
  noteBass = `note.bass`,
  ominousBottleEndUse = `ominous_bottle.end_use`,
  ominousItemSpawnerAboutToSpawnItem = `ominous_item_spawner.about_to_spawn_item`,
  ominousItemSpawnerSpawnItem = `ominous_item_spawner.spawn_item`,
  ominousItemSpawnerSpawnItemBegin = `ominous_item_spawner.spawn_item_begin`,
  open = `open`,
  openLong = `open_long`,
  panic = `panic`,
  pant = `pant`,
  particleSoulEscapeLoud = `particle.soul_escape.loud`,
  particleSoulEscapeQuiet = `particle.soul_escape.quiet`,
  pauseGrowth = `pause_growth`,
  pickBerriesCaveVines = `pick_berries.cave_vines`,
  pickup = `pickup`,
  pickupEnchanted = `pickup_enchanted`,
  pistonIn = `piston.in`,
  pistonOut = `piston.out`,
  place = `place`,
  placeInWater = `place_in_water`,
  placeItem = `place_item`,
  plop = `plop`,
  pop = `pop`,
  portal = `portal`,
  portalTravel = `portal.travel`,
  potionBrewed = `potion.brewed`,
  powerOff = `power.off`,
  powerOffSculkSensor = `power.off.sculk_sensor`,
  powerOn = `power.on`,
  powerOnSculkSensor = `power.on.sculk_sensor`,
  preRam = `pre_ram`,
  preRamScreamer = `pre_ram.screamer`,
  prepareAttack = `prepare.attack`,
  prepareSummon = `prepare.summon`,
  prepareWololo = `prepare.wololo`,
  presneeze = `presneeze`,
  pressurePlateClickOff = `pressure_plate.click_off`,
  pressurePlateClickOn = `pressure_plate.click_on`,
  pumpkinCarve = `pumpkin.carve`,
  purr = `purr`,
  purreow = `purreow`,
  raidHorn = `raid.horn`,
  ramImpact = `ram_impact`,
  ramImpactScreamer = `ram_impact.screamer`,
  randomAnvilUse = `random.anvil_use`,
  reappeared = `reappeared`,
  record11 = `record.11`,
  record13 = `record.13`,
  record5 = `record.5`,
  recordBlocks = `record.blocks`,
  recordCat = `record.cat`,
  recordChirp = `record.chirp`,
  recordCreator = `record.creator`,
  recordCreatorMusicBox = `record.creator_music_box`,
  recordFar = `record.far`,
  recordLavaChicken = `record.lava_chicken`,
  recordMall = `record.mall`,
  recordMellohi = `record.mellohi`,
  recordOtherside = `record.otherside`,
  recordPigstep = `record.pigstep`,
  recordPrecipice = `record.precipice`,
  recordRelic = `record.relic`,
  recordStal = `record.stal`,
  recordStrad = `record.strad`,
  recordTears = `record.tears`,
  recordWait = `record.wait`,
  recordWard = `record.ward`,
  reflect = `reflect`,
  remedy = `remedy`,
  resetGrowth = `reset_growth`,
  respawnAnchorAmbient = `respawn_anchor.ambient`,
  respawnAnchorCharge = `respawn_anchor.charge`,
  respawnAnchorDeplete = `respawn_anchor.deplete`,
  respawnAnchorSetSpawn = `respawn_anchor.set_spawn`,
  retreat = `retreat`,
  roar = `roar`,
  saddle = `saddle`,
  saddleInWater = `saddle_in_water`,
  scared = `scared`,
  scrape = `scrape`,
  screech = `screech`,
  shake = `shake`,
  shatterPot = `shatter_pot`,
  shear = `shear`,
  shoot = `shoot`,
  shulkerClose = `shulker.close`,
  shulkerOpen = `shulker.open`,
  shulkerboxClosed = `shulkerbox.closed`,
  shulkerboxOpen = `shulkerbox.open`,
  singleSwap = `single_swap`,
  sleep = `sleep`,
  smithingTableUse = `smithing_table.use`,
  sneeze = `sneeze`,
  sonicBoom = `sonic_boom`,
  sonicCharge = `sonic_charge`,
  sparklerActive = `sparkler.active`,
  sparklerUse = `sparkler.use`,
  spawn = `spawn`,
  splash = `splash`,
  spongeAbsorb = `sponge.absorb`,
  squidInkSquirt = `squid.ink_squirt`,
  squishBig = `squish.big`,
  squishSmall = `squish.small`,
  stare = `stare`,
  stateChange = `state_change`,
  step = `step`,
  stepBaby = `step.baby`,
  stepLava = `step_lava`,
  stepSand = `step_sand`,
  stun = `stun`,
  swim = `swim`,
  swoop = `swoop`,
  takeoff = `takeoff`,
  teleport = `teleport`,
  tempt = `tempt`,
  thorns = `thorns`,
  throw = `throw`,
  thunder = `thunder`,
  tiltDownBigDripleaf = `tilt_down.big_dripleaf`,
  tiltUpBigDripleaf = `tilt_up.big_dripleaf`,
  tongue = `tongue`,
  trapdoorClose = `trapdoor.close`,
  trapdoorOpen = `trapdoor.open`,
  trialSpawnerAmbient = `trial_spawner.ambient`,
  trialSpawnerAmbientOminous = `trial_spawner.ambient_ominous`,
  trialSpawnerChargeActivate = `trial_spawner.charge_activate`,
  trialSpawnerCloseShutter = `trial_spawner.close_shutter`,
  trialSpawnerDetectPlayer = `trial_spawner.detect_player`,
  trialSpawnerEjectItem = `trial_spawner.eject_item`,
  trialSpawnerOpenShutter = `trial_spawner.open_shutter`,
  trialSpawnerSpawnMob = `trial_spawner.spawn_mob`,
  tripod = `tripod`,
  twinkle = `twinkle`,
  uiCartographyTableTakeResult = `ui.cartography_table.take_result`,
  uiLoomTakeResult = `ui.loom.take_result`,
  uiStonecutterTakeResult = `ui.stonecutter.take_result`,
  undefined = `undefined`,
  unfect = `unfect`,
  unfreeze = `unfreeze`,
  unsaddle = `unsaddle`,
  vaultActivate = `vault.activate`,
  vaultAmbient = `vault.ambient`,
  vaultCloseShutter = `vault.close_shutter`,
  vaultDeactivate = `vault.deactivate`,
  vaultEjectItem = `vault.eject_item`,
  vaultInsertItem = `vault.insert_item`,
  vaultInsertItemFail = `vault.insert_item_fail`,
  vaultOpenShutter = `vault.open_shutter`,
  vaultRejectRewardedPlayer = `vault.reject_rewarded_player`,
  warn = `warn`,
  water = `water`,
  whine = `whine`,
  windChargeBurst = `wind_charge.burst`
}


/**
 * Item Components Wearable (minecraft:wearable)
 * Sets the wearable item component, which allows an item to be
 * worn by a player in a specified equipment slot.
 * Note: Valid equipment slots are: slot.armor.head, slot.armor.chest,
 * slot.armor.legs, slot.armor.feet, slot.armor.body, and
 * slot.weapon.offhand. When a non-hand armor slot is used, the max
 * stack size is automatically set to 1.
 */
export interface MinecraftItemV1260ComponentsMinecraftWearable {

  /**
   * @remarks
   * 
   * Sample Values:
   * Chestplate: true
   *
   *
   */
  dispensable?: boolean;

  /**
   * @remarks
   * Determines whether the Player's location is hidden on Locator Maps
   * and the Locator Bar when the wearable item is worn. Default is
   * false.
   */
  hides_player_location?: boolean;

  /**
   * @remarks
   * How much protection the wearable item provides. Default is set
   * to 0.
   */
  protection?: number;

  /**
   * @remarks
   * Specifies where the item can be worn. If any non-hand slot is
   * chosen, the max stack size is set to 1.
   * 
   * Sample Values:
   * Chestplate: "slot.armor.chest"
   *
   * Crown: "slot.armor.head"
   *
   * My Boots: "slot.armor.feet"
   *
   */
  slot: string;

}


export enum MinecraftItemV1260ComponentsMinecraftWearableSlot {
  slotArmorBody = `slot.armor.body`,
  slotArmorChest = `slot.armor.chest`,
  slotArmorFeet = `slot.armor.feet`,
  slotArmorHead = `slot.armor.head`,
  slotArmorLegs = `slot.armor.legs`,
  slotWeaponMainhand = `slot.weapon.mainhand`,
  slotWeaponOffhand = `slot.weapon.offhand`
}


/**
 * Item Description (description)
 * Contains the required identifier for the item. May contain optional
 * fields like menu_category.
 */
export interface MinecraftItemV1260Description {

  /**
   * @remarks
   * Unique name for the item that must include a namespace and must
   * not use the Minecraft namespace unless overriding a Vanilla 
   * item.
   */
  identifier: string;

  /**
   * @remarks
   * menu_category contains the creative group name and category for
   * this item.
   */
  menu_category?: MinecraftItemV1260DescriptionMenuCategory;

}


/**
 * Item Menu Category (menu_category)
 * Menu_category contains the creative group name and category for
 * this item.
 */
export interface MinecraftItemV1260DescriptionMenuCategory {

  /**
   * @remarks
   * Creative category where this item belongs. Defaults to 
   * "none".
   */
  category?: string;

  /**
   * @remarks
   * The Creative Group that this item belongs to. Group name is
   * limited to 256 characters. The name also must start with a
   * namespace.
   */
  group?: string;

  /**
   * @remarks
   * Determines whether or not this item can be used with commands.
   * Defaults to false.
   */
  is_hidden_in_commands?: boolean;

}


export enum MinecraftItemV1260DescriptionMenuCategoryCategory {
  construction = `construction`,
  equipment = `equipment`,
  items = `items`,
  nature = `nature`,
  none = `none`
}