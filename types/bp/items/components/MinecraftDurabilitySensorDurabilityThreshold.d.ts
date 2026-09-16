// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Item Components Documentation - minecraft:durability_sensor_durability_threshold
 */

import * as jsoncommon from '../../../common';

/**
 * Item Durability Sensor Durability Threshold
 * (minecraft:durability_sensor durability_threshold)
 * Defines both the durability threshold, and the effects emitted when
 * that threshold is met.
 */
export default interface MinecraftDurabilitySensorDurabilityThreshold {

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
  particle_type?: MinecraftDurabilitySensorDurabilityThresholdParticleType;

  /**
   * @remarks
   * Sound effect to emit when the threshold is met.
   */
  sound_event?: string;

}


export enum MinecraftDurabilitySensorDurabilityThresholdParticleType {
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