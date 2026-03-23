// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Behaviors Documentation - minecraft:behavior.avoid_mob_type
 * 
 * minecraft:behavior.avoid_mob_type Samples

Bogged - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json

"minecraft:behavior.avoid_mob_type": {
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "wolf"
      },
      "max_dist": 6,
      "walk_speed_multiplier": 1.2,
      "sprint_speed_multiplier": 1.2
    }
  ],
  "priority": 4
}


Cave Spider - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json

"minecraft:behavior.avoid_mob_type": {
  "entity_types": [
    {
      "filters": {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "armadillo"
          },
          {
            "test": "enum_property",
            "subject": "other",
            "domain": "minecraft:armadillo_state",
            "value": "unrolled"
          }
        ]
      },
      "max_dist": 6,
      "sprint_speed_multiplier": 1.2
    }
  ],
  "priority": 2
}


Dolphin - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json

"minecraft:behavior.avoid_mob_type": {
  "priority": 2,
  "entity_types": [
    {
      "filters": {
        "any_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "guardian_elder"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "guardian"
          }
        ]
      },
      "max_dist": 8,
      "walk_speed_multiplier": 1,
      "sprint_speed_multiplier": 1
    }
  ],
  "probability_per_strength": 0.14
}


Fox - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json

"minecraft:behavior.avoid_mob_type": {
  "priority": 5,
  "entity_types": [
    {
      "filters": {
        "any_of": [
          {
            "all_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "player"
              },
              {
                "test": "trusts",
                "subject": "other",
                "operator": "!=",
                "value": true
              },
              {
                "test": "is_sneaking",
                "subject": "other",
                "operator": "!=",
                "value": true
              }
            ]
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "polarbear"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "wolf"
          }
        ]
      },
      "max_dist": 10,
      "walk_speed_multiplier": 1,
      "sprint_speed_multiplier": 1.5
    }
  ]
}


Guardian - https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json

"minecraft:behavior.avoid_mob_type": {
  "entity_types": [
    {
      "filters": {
        "AND": [
          {
            "test": "is_family",
            "subject": 1,
            "operator": 0,
            "value": "player"
          }
        ]
      },
      "max_dist": 8
    }
  ],
  "priority": 1
}

 */

import * as jsoncommon from '../../../common';

/**
 * Entity Avoid Mob Type Behavior 
 * (minecraft:behavior.avoid_mob_type)
 * Allows the entity to run away from other entities that meet the
 * criteria specified.
 * Note: This behavior defines which entities cause this mob to
 * flee. Use entity_types filters to specify which mobs to avoid, with
 * optional speed multipliers for walking and sprinting away.
 */
export default interface MinecraftBehaviorAvoidMobType {

  /**
   * @remarks
   * The sound event to play when the mob is avoiding another 
   * mob.
   */
  avoid_mob_sound?: string;

  /**
   * @remarks
   * The next target position the entity chooses to avoid another entity
   * will be chosen within this XZ Distance.
   */
  avoid_target_xz?: number;

  /**
   * @remarks
   * The next target position the entity chooses to avoid another entity
   * will be chosen within this Y Distance.
   */
  avoid_target_y?: number;

  control_flags?: string[];

  /**
   * @remarks
   * The list of conditions another entity must meet to be a valid
   * target to avoid.
   * 
   * Sample Values:
   * Bogged: [{"filters":{"test":"is_family","subject":"other","value":"wolf"},"max_dist":6,"walk_speed_multiplier":1.2,"sprint_speed_multiplier":1.2}]
   *
   * Cave Spider: [{"filters":{"all_of":[{"test":"is_family","subject":"other","value":"armadillo"},{"test":"enum_property","subject":"other","domain":"minecraft:armadillo_state","value":"unrolled"}]},"max_dist":6,"sprint_speed_multiplier":1.2}]
   *
   * Dolphin: [{"filters":{"any_of":[{"test":"is_family","subject":"other","value":"guardian_elder"},{"test":"is_family","subject":"other","value":"guardian"}]},"max_dist":8,"walk_speed_multiplier":1,"sprint_speed_multiplier":1}]
   *
   */
  entity_types?: object[];

  /**
   * @remarks
   * Whether or not to ignore direct line of sight while this entity is
   * running away from other specified entities.
   */
  ignore_visibility?: boolean;

  /**
   * @remarks
   * Maximum distance to look for an avoid target for the entity.
   */
  max_dist?: number;

  /**
   * @remarks
   * How many blocks away from its avoid target the entity must be
   * for it to stop fleeing from the avoid target.
   */
  max_flee?: number;

  /**
   * @remarks
   * Event that is triggered when escaping from a mob.
   */
  on_escape_event?: MinecraftBehaviorAvoidMobTypeOnEscapeEvent;

  /**
   * @remarks
   * As priority approaches 0, the priority is increased. The higher the
   * priority, the sooner this behavior will be executed as a 
   * goal.
   * 
   * Sample Values:
   * Bogged: 4
   *
   * Cave Spider: 2
   *
   *
   * Fox: 5
   *
   */
  priority?: number;

  /**
   * @remarks
   * Percent chance this entity will stop avoiding another entity based
   * on that entity's strength, where 1.0 = 100%.
   * 
   * Sample Values:
   * Dolphin: 0.14
   *
   */
  probability_per_strength?: number;

  /**
   * @remarks
   * Determine if we should remove target when fleeing or not.
   */
  remove_target?: boolean;

  /**
   * @remarks
   * Multiplier for speed when following river. 1.0 means keep the
   * regular speed, while higher numbers make the speed faster.
   */
  river_speed_multiplier?: number;

  /**
   * @remarks
   * The range of time in seconds to randomly wait before playing the
   * sound again.
   */
  sound_interval?: MinecraftBehaviorAvoidMobTypeSoundInterval;

  /**
   * @remarks
   * How many blocks within range of its avoid target the entity must
   * be for it to begin sprinting away from the avoid target.
   */
  sprint_distance?: number;

  /**
   * @remarks
   * Multiplier for sprint speed. 1.0 means keep the regular speed,
   * while higher numbers make the sprint speed faster.
   */
  sprint_speed_multiplier?: number;

  /**
   * @remarks
   * Multiplier for walking speed. 1.0 means keep the regular speed,
   * while higher numbers make the walking speed faster.
   */
  walk_speed_multiplier?: number;

}


export enum MinecraftBehaviorAvoidMobTypeAvoidMobSound {
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


export enum MinecraftBehaviorAvoidMobTypeControlFlags {
  jump = `jump`,
  look = `look`,
  move = `move`
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
export interface MinecraftBehaviorAvoidMobTypeOnEscapeEvent {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftBehaviorAvoidMobTypeOnEscapeEventFilters;

  target?: string;

}


/**
 * Filters (filters)
 */
export interface MinecraftBehaviorAvoidMobTypeOnEscapeEventFilters {

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


export enum MinecraftBehaviorAvoidMobTypeOnEscapeEventTarget {
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
 * Item Components FloatRange (FloatRange)
 * Has minimum and maximum float values.
 */
export interface MinecraftBehaviorAvoidMobTypeSoundInterval {

  max?: number;

  min?: number;

}