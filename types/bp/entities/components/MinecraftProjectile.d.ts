// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Entity Components Documentation - minecraft:projectile
 */

import * as jsoncommon from '../../../common';

/**
 * Entity Projectile (minecraft:projectile)
 * Turns the entity into a projectile: a thrown or shot entity that
 * flies along a ballistic arc and reacts when it impacts a
 * block, a fluid, or another entity.
 */
export default interface MinecraftProjectile {

  /**
   * @remarks
   * Reference point on the shooter used to position the projectile at
   * spawn: `0` = origin (feet), `1` = eye height, `2` = middle of
   * the bounding box.
   */
  anchor?: MinecraftProjectileAnchor;

  /**
   * @remarks
   * Additional upwards pitch (in degrees) applied to the shooter's aim
   * direction at launch. Negative values aim downward.
   */
  angle_offset?: number;

  /**
   * @remarks
   * Determines whether the entity hit will be set on fire. Note: the
   * presence of this field in the component definition causes targets to
   * catch fire regardless of the value set. To prevent fire, remove
   * this field entirely from the component.
   */
  catch_fire?: boolean;

  /**
   * @remarks
   * If `true`, critical-hit particles are spawned on the projectile when
   * it is struck.
   */
  crit_particle_on_hurt?: boolean;

  /**
   * @remarks
   * If `true`, the projectile is removed from the world when 
   * struck.
   */
  destroy_on_hurt?: boolean;

  /**
   * @remarks
   * Downward acceleration (blocks per tick squared) applied each tick
   * while in flight. Higher values make the projectile fall 
   * faster.
   */
  gravity?: number;

  /**
   * @remarks
   * Identifier of the sound to play when the projectile hits a
   * block. Defaults to `hit_sound` when empty.
   */
  hit_ground_sound?: string;

  /**
   * @remarks
   * If `true`, when the projectile hits a vehicle with at least one
   * passenger, the on-hit behavior is applied to the passenger closest
   * to the impact point instead of the vehicle itself.
   */
  hit_nearest_passenger?: boolean;

  /**
   * @remarks
   * Identifier of the sound to play when the projectile hits an
   * entity. Also used for block hits when `hit_ground_sound` is not
   * specified.
   */
  hit_sound?: string;

  /**
   * @remarks
   * If `true`, the projectile treats water as a hit surface and
   * stops on contact.
   */
  hit_water?: boolean;

  /**
   * @remarks
   * If `true`, the projectile steers towards an active target while in
   * flight.
   */
  homing?: boolean;

  /**
   * @remarks
   * Array of entity identifiers that the projectile will pass through
   * without registering a hit.
   */
  ignored_entities?: string[];

  /**
   * @remarks
   * Fraction of the projectile's velocity preserved each tick while
   * traveling through air. Values below `1.0` cause it to slow down
   * over time.
   */
  inertia?: number;

  /**
   * @remarks
   * If `true`, the projectile is flagged as dangerous, affecting AI
   * reactions and certain client-side behaviors.
   */
  is_dangerous?: boolean;

  /**
   * @remarks
   * If true, this projectile is not affected by outside forces such
   * as friction and drag.
   */
  isolated_physics?: boolean;

  /**
   * @remarks
   * If `true`, the projectile can channel a lightning bolt when it
   * hits an entity during a thunderstorm.
   */
  lightning?: boolean;

  /**
   * @remarks
   * Fraction of the projectile's velocity preserved each tick while
   * traveling through a fluid.
   */
  liquid_inertia?: number;

  /**
   * @remarks
   * If `true`, the projectile can hit more than one entity over the
   * course of its flight; if `false`, it stops at the first entity it
   * hits. Projectiles launched with the Piercing enchantment have
   * this value set to `true`.
   */
  multiple_targets?: boolean;

  /**
   * @remarks
   * Offset, relative to the `anchor`, at which the projectile is
   * spawned when fired by the shooter.
   */
  offset?: number[];

  /**
   * @remarks
   * Duration in seconds for which an entity set on fire by this
   * projectile remains burning. Applied both by the legacy top-level
   * `catch_fire` flag and by the `catch_fire` on-hit 
   * subcomponent.
   */
  on_fire_time?: number;

  /**
   * @remarks
   * Map of on-hit subcomponents that drive what happens when the
   * projectile impacts a block, fluid, or entity. Each key is a
   * subcomponent name and its value is that subcomponent's 
   * configuration.
   */
  on_hit?: object;

  /**
   * @remarks
   * Number of ticks immediately after launch during which the
   * projectile cannot hit its own shooter.
   */
  owner_launch_immunity_ticks?: number;

  /**
   * @remarks
   * Particle effect emitted at the impact location when the
   * projectile hits something.
   */
  particle?: MinecraftProjectileParticle;

  /**
   * @remarks
   * Default potion aux value associated with the projectile. Normally set
   * programmatically by potion items; rarely useful at authoring time.
   * A value matching the water potion is required for the
   * `douse_fire` on-hit subcomponent to extinguish fires.
   */
  potion_effect?: number;

  /**
   * @remarks
   * Initial speed (in blocks per tick) at which the projectile is
   * launched.
   */
  power?: number;

  /**
   * @remarks
   * Duration in seconds after launch during which the projectile cannot
   * be reflected by being struck.
   */
  reflect_immunity?: number;

  /**
   * @remarks
   * If true, this projectile will be reflected back when hit by
   * another projectile or by taking damage.
   */
  reflect_on_hurt?: boolean;

  /**
   * @remarks
   * Identifier of the sound to play when the projectile is 
   * fired.
   */
  shoot_sound?: string;

  /**
   * @remarks
   * If `true`, the projectile is aimed at the shooter's current target
   * (when one exists) rather than straight ahead.
   */
  shoot_target?: boolean;

  /**
   * @remarks
   * Controls whether the projectile bounces off entities on impact. `no`
   * disables bouncing, `if_invulnerable` bounces only off
   * invulnerable entities, and `if_no_damage_dealt` bounces whenever no
   * damage is dealt to the target.
   */
  should_bounce?: MinecraftProjectileShouldBounce;

  /**
   * @remarks
   * Splash radius (in blocks) used when applying potion effects via
   * the splash/lingering potion code path.
   */
  splash_range?: number;

  /**
   * @remarks
   * If `true`, when hitting an entity and the projectile is on
   * fire, spread the fire to the entity.
   */
  spread_fire?: boolean;

  /**
   * @remarks
   * If `true`, the projectile has its velocity zeroed out when
   * struck.
   */
  stop_on_hurt?: boolean;

  /**
   * @remarks
   * Base inaccuracy added to the launch direction. The total
   * inaccuracy is `uncertainty_base - difficultyLevel *
   * uncertainty_multiplier`.
   */
  uncertainty_base?: number;

  /**
   * @remarks
   * Per-difficulty-level reduction in inaccuracy. See
   * `uncertainty_base` for the full formula.
   */
  uncertainty_multiplier?: number;

}


export enum MinecraftProjectileAnchor {
  eyeHeight = `eye_height`,
  middle = `middle`,
  origin = `origin`
}


export enum MinecraftProjectileParticle {
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
  iceballbreak = `iceballbreak`,
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


export enum MinecraftProjectileShouldBounce {
  ifInvulnerable = `if_invulnerable`,
  ifNoDamageDealt = `if_no_damage_dealt`,
  no = `no`
}