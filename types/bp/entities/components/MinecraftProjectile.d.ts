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
   * stops on contact. (Education Edition chemistry feature)
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
  on_hit?: MinecraftProjectileOnHit;

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


/**
 * Entity OnHitCommandsStorage (OnHitCommandsStorage)
 */
export interface MinecraftProjectileOnHit {

  /**
   * @remarks
   * Variant of `mob_effect` that derives the effects from the
   * arrow's tipped-potion data and splits durations across the
   * standard eight-arrow stack.
   */
  arrow_effect?: MinecraftProjectileOnHitArrowEffect;

  /**
   * @remarks
   * Causes the projectile to embed itself in the block it hits.
   */
  catch_fire?: MinecraftProjectileOnHitCatchFire;

  /**
   * @remarks
   * Fires an entity event on the shooter, the projectile, the entity
   * hit, and/or all entities in a splash radius.
   */
  definition_event?: MinecraftProjectileOnHitDefinitionEvent;

  /**
   * @remarks
   * When the projectile is a water-effect potion, extinguishes fires
   * and campfires at and around the hit block.
   */
  douse_fire?: object;

  /**
   * @remarks
   * Freezes nearby water blocks to ice in a configurable volume around
   * the impact (Education Edition chemistry feature).
   */
  freeze_on_hit?: MinecraftProjectileOnHitFreezeOnHit;

  /**
   * @remarks
   * Drops experience orbs at the impact location.
   */
  grant_xp?: MinecraftProjectileOnHitGrantXp;

  /**
   * @remarks
   * Damages the projectile's owner when the projectile lands.
   */
  hurt_owner?: MinecraftProjectileOnHitHurtOwner;

  /**
   * @remarks
   * Triggers the entity's `on_ignite` definition when the projectile 
   * hits.
   */
  ignite?: object;

  /**
   * @remarks
   * Deals damage to the entity that was hit and optionally applies
   * knockback, fire, channeling, and critical-hit scaling.
   */
  impact_damage?: MinecraftProjectileOnHitImpactDamage;

  /**
   * @remarks
   * Applies one or more mob effects to the entity hit. Effects are
   * described with an `effects` array of effect objects.
   */
  mob_effect?: MinecraftProjectileOnHitMobEffect;

  /**
   * @remarks
   * Emits a particle effect at the impact location, optionally only
   * for entity hits or only for non-entity hits.
   */
  particle_on_hit?: MinecraftProjectileOnHitParticleOnHit;

  /**
   * @remarks
   * Removes the projectile from the world when it hits a block, entity,
   * or (if `hit_water` is set) water.
   */
  remove_on_hit?: object;

  /**
   * @remarks
   * Spawns an area effect cloud at the impact point that applies potion
   * effects to entities inside it over time
   */
  spawn_aoe_cloud?: MinecraftProjectileOnHitSpawnAoeCloud;

  /**
   * @remarks
   * Conditionally spawns one or two groups of entities at the impact
   * location and optionally fires events on each spawned entity.
   */
  spawn_chance?: MinecraftProjectileOnHitSpawnChance;

  /**
   * @remarks
   * Causes the projectile to embed itself in the block it hits.
   */
  stick_in_ground?: MinecraftProjectileOnHitStickInGround;

  /**
   * @remarks
   * Teleports the projectile's owner to the impact location.
   */
  teleport_owner?: object;

  /**
   * @remarks
   * Applies the splash-potion effects of a thrown potion to nearby
   * entities at the impact point.
   */
  thrown_potion_effect?: MinecraftProjectileOnHitThrownPotionEffect;

  /**
   * @remarks
   * Releases an outward wind burst at the impact point that pushes
   * nearby entities away.
   */
  wind_burst_on_hit?: object;

}


/**
 * Entity ArrowEffectSubcomponentDefinition 
 * (ArrowEffectSubcomponentDefinition)
 * Variant of `mob_effect` that derives the effects from the
 * arrow's tipped-potion data and splits durations across the
 * standard eight-arrow stack.
 */
export interface MinecraftProjectileOnHitArrowEffect {

  /**
   * @remarks
   * If `true`, effects are still applied to targets that blocked the
   * projectile.
   */
  apply_effect_to_blocking_targets?: boolean;

}


/**
 * Entity CatchFireSubcomponentDefinition 
 * (CatchFireSubcomponentDefinition)
 * Causes the projectile to embed itself in the block it hits.
 */
export interface MinecraftProjectileOnHitCatchFire {

  /**
   * @remarks
   * If `true`, the block-ignition behavior is suppressed when the
   * shooter is a mob and the `mobGriefing` game rule is off.
   */
  fire_affected_by_griefing?: boolean;

  /**
   * @remarks
   * Duration in seconds for which entity remains on fire
   */
  on_fire_time?: number;

}


/**
 * Entity ActorDefinitionEventSubcomponentDefinition 
 * (ActorDefinitionEventSubcomponentDefinition)
 * Fires an entity event on the shooter, the projectile, the entity
 * hit, and/or all entities in a splash radius.
 */
export interface MinecraftProjectileOnHitDefinitionEvent {

  /**
   * @remarks
   * If `true`, the event is fired on the projectile entity 
   * itself.
   */
  affect_projectile?: boolean;

  /**
   * @remarks
   * If `true`, the event is fired on the projectile's shooter.
   */
  affect_shooter?: boolean;

  /**
   * @remarks
   * If `true`, the event is fired on every entity within `splash_area` blocks
   * of the impact.
   */
  affect_splash_area?: boolean;

  /**
   * @remarks
   * If `true`, the event is fired on the entity hit by the
   * projectile.
   */
  affect_target?: boolean;

  /**
   * @remarks
   * Event trigger (with optional filters) to fire on the selected
   * target(s).
   */
  event_trigger?: MinecraftProjectileOnHitDefinitionEventEventTrigger;

  /**
   * @remarks
   * Radius (in blocks) used by `affect_splash_area`.
   */
  splash_area?: number;

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
export interface MinecraftProjectileOnHitDefinitionEventEventTrigger {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftProjectileOnHitDefinitionEventEventTriggerFilters;

  target?: MinecraftProjectileOnHitDefinitionEventEventTriggerTarget;

}


/**
 * Filters (filters)
 */
export interface MinecraftProjectileOnHitDefinitionEventEventTriggerFilters {

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


export enum MinecraftProjectileOnHitDefinitionEventEventTriggerTarget {
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
 * Entity FreezeOnHitSubcomponentDefinition 
 * (FreezeOnHitSubcomponentDefinition)
 * Freezes nearby water blocks to ice in a configurable volume around
 * the impact (Education Edition chemistry feature).
 */
export interface MinecraftProjectileOnHitFreezeOnHit {

  /**
   * @remarks
   * Shape of the freezing volume. Allowed values: `cube`, 
   * `sphere`.
   */
  shape?: MinecraftProjectileOnHitFreezeOnHitShape;

  /**
   * @remarks
   * Half-extent of the freezing volume (in blocks).
   */
  size?: number;

  /**
   * @remarks
   * If `true`, the freezing volume is centered on the hit block's center
   * instead of the precise impact point.
   */
  snap_to_block?: boolean;

}


export enum MinecraftProjectileOnHitFreezeOnHitShape {
  cube = `cube`,
  sphere = `sphere`
}


/**
 * Entity GrantXPSubcomponentDefinition 
 * (GrantXPSubcomponentDefinition)
 * Drops experience orbs at the impact location.
 */
export interface MinecraftProjectileOnHitGrantXp {

  /**
   * @remarks
   * Maximum amount of experience to drop.
   */
  maxXP?: number;

  /**
   * @remarks
   * Minimum amount of experience to drop.
   */
  minXP?: number;

}


/**
 * Entity HurtOwnerSubcomponentDefinition 
 * (HurtOwnerSubcomponentDefinition)
 * Damages the projectile's owner when the projectile lands.
 */
export interface MinecraftProjectileOnHitHurtOwner {

  /**
   * @remarks
   * If `true`, the damage sets the owner on fire.
   */
  ignite?: boolean;

  /**
   * @remarks
   * If `true`, the damage applies knockback to the owner.
   */
  knockback?: boolean;

  /**
   * @remarks
   * Amount of damage to deal to the owner.
   */
  owner_damage?: number;

}


/**
 * Entity ImpactDamageSubcomponentDefinition 
 * (ImpactDamageSubcomponentDefinition)
 * Deals damage to the entity that was hit and optionally applies
 * knockback, fire, channeling, and critical-hit scaling.
 */
export interface MinecraftProjectileOnHitImpactDamage {

  /**
   * @remarks
   * If `true`, knockback is still applied to targets that
   * successfully blocked the hit.
   */
  apply_knockback_to_blocking_targets?: boolean;

  /**
   * @remarks
   * If `true`, the entity hit is set on fire (uses the projectile's
   * `on_fire_time`).
   */
  catch_fire?: boolean;

  /**
   * @remarks
   * If `true`, rounds the projectile's damage up to the next integer
   * before the critical-hit multiplier is applied.
   */
  ceil_pre_critical_damage?: boolean;

  /**
   * @remarks
   * If `true`, the projectile can call down a lightning bolt on the
   * entity hit during a thunderstorm.
   */
  channeling?: boolean;

  /**
   * @remarks
   * Range of damage to apply on impact. A random value in `[min, max]`
   * is rolled per hit and the velocity-scaled `power_multiplier` term
   * is added to it to define the projectile's base damage.
   */
  damage?: MinecraftProjectileOnHitImpactDamageDamage;

  /**
   * @remarks
   * If `true`, the projectile is removed when it deals damage to an
   * entity.
   */
  destroy_on_hit?: boolean;

  /**
   * @remarks
   * If `true`, `destroy_on_hit` only triggers when at least one
   * point of damage is actually dealt (targets that fully absorb damage
   * will not destroy the projectile).
   */
  destroy_on_hit_requires_damage?: boolean;

  /**
   * @remarks
   * Controls how world difficulty contributes to the rolled damage.
   * `none` ignores difficulty, `additive` adds a difficulty-driven term
   * on top of the base damage, and `multiplicative` folds the
   * difficulty term into `power_multiplier` before scaling by
   * velocity.
   */
  difficulty_randomization?: MinecraftProjectileOnHitImpactDamageDifficultyRandomization;

  /**
   * @remarks
   * Entity family or type that the projectile is restricted to
   * damaging. Entities outside the filter are not damaged.
   */
  filter?: string;

  /**
   * @remarks
   * If `true`, the entity hit is knocked back away from the
   * projectile.
   */
  knockback?: boolean;

  /**
   * @remarks
   * If specified, sets the maximum damage after critical damage has
   * been applied. Enchantments have already been applied at this
   * point, so this clamps the final damage value of critical 
   * hits.
   */
  max_critical_damage?: number;

  /**
   * @remarks
   * If specified, sets the minimum damage after critical damage has
   * been applied. Enchantments have already been applied at this
   * point, so this clamps the final damage value of critical 
   * hits.
   */
  min_critical_damage?: number;

  /**
   * @remarks
   * Multiplied by the projectile's velocity and added to the rolled
   * `damage` to define the projectile's base damage, so it can be
   * used on its own to scale damage by the projectile's 
   * velocity.
   */
  power_multiplier?: number;

  /**
   * @remarks
   * If `true`, the projectile only registers as the last hurt-by source
   * on the target when at least one point of damage is actually 
   * dealt.
   */
  set_last_hurt_requires_damage?: boolean;

}


/**
 * Legacy FloatRange (FloatRange)
 */
export interface MinecraftProjectileOnHitImpactDamageDamage {

  max?: number;

  min?: number;

}


export enum MinecraftProjectileOnHitImpactDamageDifficultyRandomization {
  additive = `additive`,
  multiplicative = `multiplicative`,
  none = `none`
}


/**
 * Entity MobEffectSubcomponentDefinition 
 * (MobEffectSubcomponentDefinition)
 * Applies one or more mob effects to the entity hit. Effects are
 * described with an `effects` array of effect objects.
 */
export interface MinecraftProjectileOnHitMobEffect {

  /**
   * @remarks
   * Array of effect objects. Each element may specify `effect` (name),
   * `amplifier`, and per-difficulty durations `durationeasy`, `durationnormal`,
   * `durationhard`.
   */
  effects?: MinecraftProjectileOnHitMobEffectEffects[];

}


/**
 * Entity MobEffectInstance (MobEffectInstance)
 */
export interface MinecraftProjectileOnHitMobEffectEffects {

  amplifier?: number;

  durationeasy?: number;

  durationhard?: number;

  durationnormal?: number;

  effect?: string;

}


/**
 * Entity ParticleOnHitSubcomponentDefinition 
 * (ParticleOnHitSubcomponentDefinition)
 * Emits a particle effect at the impact location, optionally only
 * for entity hits or only for non-entity hits.
 */
export interface MinecraftProjectileOnHitParticleOnHit {

  /**
   * @remarks
   * Number of particles to spawn per hit.
   */
  num_particles?: number;

  /**
   * @remarks
   * If `true`, particles are spawned when the projectile hits an
   * entity.
   */
  on_entity_hit?: boolean;

  /**
   * @remarks
   * If `true`, particles are spawned when the projectile hits
   * something that is not an entity.
   */
  on_other_hit?: boolean;

  /**
   * @remarks
   * Map from item identifier to a filter group, used to select an
   * item icon for `iconcrack`-style particles based on context (e.g.
   * the projectile's owner).
   */
  particle_item_name?: MinecraftProjectileOnHitParticleOnHitParticleItemName;

  /**
   * @remarks
   * Particle type to spawn at the impact point.
   */
  particle_type?: MinecraftProjectileOnHitParticleOnHitParticleType;

}


/**
 * Particle Item Name (particle_item_name)
 */
export interface MinecraftProjectileOnHitParticleOnHitParticleItemName {

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


export enum MinecraftProjectileOnHitParticleOnHitParticleType {
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
 * Entity SpawnAoECloudSubcomponentDefinition 
 * (SpawnAoECloudSubcomponentDefinition)
 * Spawns an area effect cloud at the impact point that applies potion
 * effects to entities inside it over time.
 */
export interface MinecraftProjectileOnHitSpawnAoeCloud {

  /**
   * @remarks
   * If `true`, the projectile's owner can be affected by the 
   * cloud.
   */
  affect_owner?: boolean;

  /**
   * @remarks
   * How long, in seconds, the cloud persists before 
   * disappearing.
   */
  duration?: number;

  /**
   * @remarks
   * Particle effect emitted by the cloud.
   */
  particle?: MinecraftProjectileOnHitSpawnAoeCloudParticle;

  /**
   * @remarks
   * Aux value of the potion whose effects the cloud applies. When
   * `-1`, the potion is taken from the projectile entity itself.
   */
  potion?: number;

  /**
   * @remarks
   * Initial radius (in blocks) of the cloud.
   */
  radius?: number;

  /**
   * @remarks
   * Amount the radius shrinks (or grows) each time the cloud applies its
   * effects. `-1` keeps the radius unchanged.
   */
  radius_on_use?: number;

  /**
   * @remarks
   * Number of ticks the cloud waits before re-applying its effects to
   * the same entity.
   */
  reapplication_delay?: number;

}


export enum MinecraftProjectileOnHitSpawnAoeCloudParticle {
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
 * Entity SpawnChanceSubcomponentDefinition 
 * (SpawnChanceSubcomponentDefinition)
 * Conditionally spawns one or two groups of entities at the impact
 * location and optionally fires events on each spawned entity.
 */
export interface MinecraftProjectileOnHitSpawnChance {

  /**
   * @remarks
   * Percent chance (0-1.0) that the first group spawns.
   */
  first_spawn_chance?: number;

  /**
   * @remarks
   * Number of entities spawned when the first roll succeeds.
   */
  first_spawn_count?: number;

  /**
   * @remarks
   * Array of entity event triggers to fire on each spawned 
   * entity.
   */
  on_spawn?: MinecraftProjectileOnHitSpawnChanceOnSpawn[];

  /**
   * @remarks
   * Percent chance (0-1.0) that the second group spawns (rolled
   * independently of the first).
   */
  second_spawn_chance?: number;

  /**
   * @remarks
   * Number of entities spawned when the second roll succeeds.
   */
  second_spawn_count?: number;

  /**
   * @remarks
   * If `true`, spawned entities start as babies (where 
   * applicable).
   */
  spawn_baby?: boolean;

  /**
   * @remarks
   * Identifier of the entity definition to spawn.
   */
  spawn_definition?: string;

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
export interface MinecraftProjectileOnHitSpawnChanceOnSpawn {

  event?: string;

  /**
   * @remarks
   * Filters allow data objects to specify test criteria which allows
   * their use. Filters can be defined by a single object of type
   * (Filter Test), an array of tests, collection groups, or a
   * combination of these objects.
   */
  filters?: MinecraftProjectileOnHitSpawnChanceOnSpawnFilters;

  target?: MinecraftProjectileOnHitSpawnChanceOnSpawnTarget;

}


/**
 * Filters (filters)
 */
export interface MinecraftProjectileOnHitSpawnChanceOnSpawnFilters {

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


export enum MinecraftProjectileOnHitSpawnChanceOnSpawnTarget {
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
 * Entity StickInGroundSubcomponentDefinition 
 * (StickInGroundSubcomponentDefinition)
 * Causes the projectile to embed itself in the block it hits.
 */
export interface MinecraftProjectileOnHitStickInGround {

  /**
   * @remarks
   * Duration in seconds for which the projectile visually shakes after
   * sticking.
   */
  shake_time?: number;

}


/**
 * Entity ThrownPotionEffectSubcomponentDefinition 
 * (ThrownPotionEffectSubcomponentDefinition)
 * Applies the splash-potion effects of a thrown potion to nearby
 * entities at the impact point.
 */
export interface MinecraftProjectileOnHitThrownPotionEffect {

  /**
   * @remarks
   * Aux value of the potion to apply.
   */
  effect?: number;

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