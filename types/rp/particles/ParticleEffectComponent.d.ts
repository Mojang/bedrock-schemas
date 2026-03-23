// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_effect_component
 */

import * as jsoncommon from '../../common';

/**
 * Client Particles Particle Effect Component (particle_effect 
 * component)
 * Container for all particle effect components that define behavior and
 * appearance. Components control every aspect of particle effects:
 * emitter shape and rate, particle lifetime and motion, visual
 * appearance and colors, collision responses, and event triggers.
 * Combine components to build complex effects from reusable, modular
 * pieces.
 */
export default interface ParticleEffectComponent {

  "minecraft:emitter_initialization"?: ParticleEffectComponentMinecraftEmitterInitialization;

  "minecraft:emitter_lifetime_events"?: object;

  "minecraft:emitter_lifetime_expression"?: ParticleEffectComponentMinecraftEmitterLifetimeExpression;

  "minecraft:emitter_lifetime_looping"?: ParticleEffectComponentMinecraftEmitterLifetimeLooping;

  "minecraft:emitter_lifetime_once"?: ParticleEffectComponentMinecraftEmitterLifetimeOnce;

  "minecraft:emitter_local_space"?: object;

  "minecraft:emitter_rate_instant"?: ParticleEffectComponentMinecraftEmitterRateInstant;

  "minecraft:emitter_rate_manual"?: ParticleEffectComponentMinecraftEmitterRateManual;

  "minecraft:emitter_rate_steady"?: ParticleEffectComponentMinecraftEmitterRateSteady;

  "minecraft:emitter_shape_box"?: ParticleEffectComponentMinecraftEmitterShapeBox;

  "minecraft:emitter_shape_custom"?: ParticleEffectComponentMinecraftEmitterShapeCustom;

  "minecraft:emitter_shape_disc"?: ParticleEffectComponentMinecraftEmitterShapeDisc;

  "minecraft:emitter_shape_entity_aabb"?: ParticleEffectComponentMinecraftEmitterShapeEntityAabb;

  "minecraft:emitter_shape_point"?: ParticleEffectComponentMinecraftEmitterShapePoint;

  "minecraft:emitter_shape_sphere"?: ParticleEffectComponentMinecraftEmitterShapeSphere;

  "minecraft:particle_appearance_billboard"?: ParticleEffectComponentMinecraftParticleAppearanceBillboard;

  "minecraft:particle_appearance_lighting"?: object;

  "minecraft:particle_appearance_tinting"?: ParticleEffectComponentMinecraftParticleAppearanceTinting;

  /**
   * @remarks
   * List of block identifiers. Particles will expire when they are
   * in any of these blocks.
   */
  "minecraft:particle_expire_if_in_blocks"?: string[];

  /**
   * @remarks
   * List of block identifiers. Particles will expire when they are
   * NOT in any of these blocks.
   */
  "minecraft:particle_expire_if_not_in_blocks"?: string[];

  /**
   * @remarks
   * The initial speed of particles. Can be a number, Molang expression, or
   * array of [x, y, z] speeds.
   */
  "minecraft:particle_initial_speed"?: string;

  "minecraft:particle_initial_spin"?: ParticleEffectComponentMinecraftParticleInitialSpin;

  "minecraft:particle_initialization"?: ParticleEffectComponentMinecraftParticleInitialization;

  /**
   * @remarks
   * A plane (A, B, C, D coefficients) that kills particles when they
   * cross it. Defined as an array of 4 numbers [A, B, C, D] where Ax
   * + By + Cz + D = 0.
   */
  "minecraft:particle_kill_plane"?: string[];

  "minecraft:particle_lifetime_events"?: object;

  "minecraft:particle_lifetime_expression"?: ParticleEffectComponentMinecraftParticleLifetimeExpression;

  "minecraft:particle_motion_collision"?: ParticleEffectComponentMinecraftParticleMotionCollision;

  "minecraft:particle_motion_dynamic"?: ParticleEffectComponentMinecraftParticleMotionDynamic;

  "minecraft:particle_motion_parametric"?: ParticleEffectComponentMinecraftParticleMotionParametric;

}


/**
 * Emitter Initialization (emitter_initialization)
 * Defines Molang expressions that run when the emitter is created and
 * on each update. Useful for initializing and updating emitter
 * variables.
 */
export interface ParticleEffectComponentMinecraftEmitterInitialization {

  /**
   * @remarks
   * Molang expression run once when the emitter is created. Use this
   * to initialize variables.
   */
  creation_expression?: string;

  /**
   * @remarks
   * Molang expression run each frame while the emitter is active. Use
   * this to update variables based on time or other conditions.
   */
  per_update_expression?: string;

}


/**
 * Client Particles Emitter Lifetime Expression
 * (emitter_lifetime_expression)
 * Controls when the emitter activates and expires using Molang
 * expressions. The activation expression starts particle emission when
 * it evaluates to non-zero, and the expiration expression stops it.
 * This enables dynamic effects tied to entity state—like flames that
 * only appear when an entity is on fire, or magic particles that
 * pulse with the caster's mana.
 */
export interface ParticleEffectComponentMinecraftEmitterLifetimeExpression {

  /**
   * @remarks
   * When the expression is non-zero, the emitter is activated. Can
   * be a number or Molang expression.
   */
  activation_expression?: string;

  /**
   * @remarks
   * When the expression is non-zero, the emitter expires. Can be a
   * number or Molang expression.
   */
  expiration_expression?: string;

}


/**
 * Client Particles Emitter Lifetime Looping 
 * (emitter_lifetime_looping)
 * Creates repeating particle effects that cycle between active and
 * dormant phases. The emitter runs for the active_time duration, pauses
 * for sleep_time, then repeats indefinitely. Perfect for ambient
 * effects like bubbling cauldrons, flickering torches, pulsing
 * enchantment glows, or creature breathing animations.
 */
export interface ParticleEffectComponentMinecraftEmitterLifetimeLooping {

  /**
   * @remarks
   * The time in seconds that the emitter is active. Can be a
   * number or Molang expression.
   */
  active_time?: string;

  /**
   * @remarks
   * The time in seconds that the emitter sleeps between active periods.
   * Can be a number or Molang expression.
   */
  sleep_time?: string;

}


/**
 * Client Particles Emitter Lifetime Once 
 * (emitter_lifetime_once)
 * Creates a single-burst particle effect that runs once and stops.
 * The emitter activates for the specified active_time duration, emits
 * particles, then terminates. Ideal for impact effects like
 * explosions, block breaking, critical hits, potion splashes, and
 * other momentary visual feedback.
 */
export interface ParticleEffectComponentMinecraftEmitterLifetimeOnce {

  /**
   * @remarks
   * The time in seconds that the emitter is active. Can be a
   * number or Molang expression.
   */
  active_time?: string;

}


/**
 * Client Particles Emitter Rate Instant (emitter_rate_instant)
 * Spawns all particles in a single instant burst when the emitter
 * activates. Unlike steady emission that spawns particles over
 * time, this creates an immediate cloud of particles—perfect for
 * explosions, block destruction debris, potion splash impacts, ender
 * teleportation effects, and any effect that needs an
 * instantaneous particle release.
 */
export interface ParticleEffectComponentMinecraftEmitterRateInstant {

  /**
   * @remarks
   * The number of particles to emit. Can be a number or Molang
   * expression.
   */
  num_particles: string;

}


/**
 * Client Particles Emitter Rate Manual (emitter_rate_manual)
 * Allows manual control over particle emission through events rather
 * than automatic spawning. Particles are only created when
 * explicitly triggered via Molang or particle events, up to the
 * max_particles limit. Useful for effects that should only spawn
 * under specific conditions, like damage indicators, pickup sparkles, or
 * script-controlled visual feedback.
 */
export interface ParticleEffectComponentMinecraftEmitterRateManual {

  /**
   * @remarks
   * The maximum number of particles that can exist at once. Can be
   * a number or Molang expression.
   */
  max_particles: string;

}


/**
 * Client Particles Emitter Rate Steady (emitter_rate_steady)
 * Continuously spawns particles at a consistent rate over time. The
 * spawn_rate controls how many particles appear per second, while
 * max_particles limits the total active count. This is the most
 * common emission mode, used for ongoing effects like torch flames,
 * mob auras, weather effects, potion bubbles, and ambient
 * environmental particles.
 */
export interface ParticleEffectComponentMinecraftEmitterRateSteady {

  /**
   * @remarks
   * The maximum number of particles that can exist at once. Can be
   * a number or Molang expression.
   */
  max_particles: string;

  /**
   * @remarks
   * The number of particles to spawn per second. Can be a number or
   * Molang expression.
   */
  spawn_rate: string;

}


/**
 * Client Particles Emitter Shape Box (emitter_shape_box)
 * Emits particles from random positions within a rectangular box
 * volume. Define the box using half_dimensions (distance from
 * center to each edge) and offset from the emitter. Particles can
 * emit outward from spawn points, inward toward center, or in
 * custom directions. Ideal for area effects like smoke filling a
 * room, rain in a region, or magic barriers.
 */
export interface ParticleEffectComponentMinecraftEmitterShapeBox {

  /**
   * @remarks
   * The direction of particle emission. Can be a string ('inwards' or
   * 'outwards'), or an array of [x, y, z] Molang expressions.
   */
  direction?: string;

  /**
   * @remarks
   * The half dimensions of the box, as [x, y, z] Molang expressions or
   * numbers.
   */
  half_dimensions: string[];

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions or numbers.
   */
  offset?: string[];

  surface_only?: boolean;

}


/**
 * Client Particles Emitter Shape Custom (emitter_shape_custom)
 * Emits particles from positions calculated by custom Molang
 * expressions. Unlike preset shapes, this gives complete control over
 * spawn locations using math expressions that can create rings,
 * spirals, waves, or any procedural pattern. Use the offset
 * expressions to define X, Y, Z coordinates relative to the
 * emitter for complex artistic effects.
 */
export interface ParticleEffectComponentMinecraftEmitterShapeCustom {

  /**
   * @remarks
   * The direction of particle emission, as [x, y, z] Molang expressions or
   * numbers.
   */
  direction?: string[];

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions or numbers.
   */
  offset?: string[];

}


/**
 * Client Particles Emitter Shape Disc (emitter_shape_disc)
 * Emits particles from random positions on a flat circular disc.
 * Configure the radius and plane normal to control disc size and
 * orientation. Surface_only restricts spawns to the disc edge for
 * ring effects. Perfect for ground-based effects like summoning circles,
 * shockwaves, splash impacts, and aura rings around entities.
 */
export interface ParticleEffectComponentMinecraftEmitterShapeDisc {

  /**
   * @remarks
   * The direction of particle emission. Can be a string ('inwards' or
   * 'outwards'), or an array of [x, y, z] Molang expressions.
   */
  direction?: string;

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions or numbers.
   */
  offset?: string[];

  /**
   * @remarks
   * The normal vector of the disc plane. Can be 'x', 'y', 'z', or
   * an array of [x, y, z] values.
   */
  plane_normal?: string;

  /**
   * @remarks
   * The radius of the disc. Can be a number or Molang 
   * expression.
   */
  radius?: string;

  surface_only?: boolean;

}


/**
 * Client Particles Emitter Shape Entity Aabb
 * (emitter_shape_entity_aabb)
 * Emits particles from random positions within the attached entity's
 * axis-aligned bounding box. The emission volume automatically scales
 * with entity size, making it perfect for body-covering effects like
 * burning, freezing, poison clouds, healing auras, or damage feedback
 * that should wrap around creatures of any size.
 */
export interface ParticleEffectComponentMinecraftEmitterShapeEntityAabb {

  /**
   * @remarks
   * The direction of particle emission. Can be a string ('inwards' or
   * 'outwards'), or an array of [x, y, z] Molang expressions.
   */
  direction?: string;

  surface_only?: boolean;

}


/**
 * Client Particles Emitter Shape Point (emitter_shape_point)
 * Emits all particles from a single point in space, offset from the
 * emitter origin. This is the simplest and most common emission
 * shape—all particles spawn at the same location and spread outward
 * based on their initial velocity. Used for torches, candles, sparks,
 * magic projectile cores, and any effect with a focused emission
 * source.
 */
export interface ParticleEffectComponentMinecraftEmitterShapePoint {

  /**
   * @remarks
   * The direction of particle emission, as [x, y, z] Molang
   * expressions.
   */
  direction?: string[];

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions.
   */
  offset?: string[];

}


/**
 * Client Particles Emitter Shape Sphere (emitter_shape_sphere)
 * Emits particles from random positions within a spherical volume.
 * Configure the radius to set sphere size and surface_only to
 * restrict spawns to the outer shell. Direction can be inward,
 * outward, or custom. Ideal for explosions, magical orbs, bubble
 * columns, mob spawn effects, and any effect needing uniform 3D
 * distribution.
 */
export interface ParticleEffectComponentMinecraftEmitterShapeSphere {

  /**
   * @remarks
   * The direction of particle emission. Can be a string ('inwards' or
   * 'outwards'), or an array of [x, y, z] Molang expressions.
   */
  direction?: string;

  /**
   * @remarks
   * The offset from the emitter position, as [x, y, z] Molang
   * expressions or numbers.
   */
  offset?: string[];

  /**
   * @remarks
   * The radius of the sphere. Can be a number or Molang 
   * expression.
   */
  radius?: string;

  surface_only?: boolean;

}


/**
 * Client Particles Particle Appearance Billboard
 * (particle_appearance_billboard)
 * Controls how particle sprites render and orient toward the
 * camera. The facing_camera_mode determines billboard behavior:
 * 'lookat_xyz' always faces the camera (classic sprites), 'rotate_y' only
 * rotates vertically (tall flames), and direction modes align with
 * particle velocity (arrows, sparks). Size controls particle dimensions
 * using Molang for dynamic scaling.
 */
export interface ParticleEffectComponentMinecraftParticleAppearanceBillboard {

  direction?: object;

  /**
   * @remarks
   * The facing mode of the billboard. Controls how the particle faces
   * the camera.
   */
  facing_camera_mode?: string;

  /**
   * @remarks
   * The size of the particle billboard, as [width, height] using
   * Molang expressions or numbers.
   */
  size: string[];

  uv?: object;

}


export enum ParticleEffectComponentMinecraftParticleAppearanceBillboardFacingCameraMode {
  lookatXyz = `lookat_xyz`,
  lookatY = `lookat_y`,
  lookatDirection = `lookat_direction`,
  rotateXyz = `rotate_xyz`,
  rotateY = `rotate_y`,
  directionX = `direction_x`,
  directionY = `direction_y`,
  directionZ = `direction_z`,
  emitterTransformXy = `emitter_transform_xy`,
  emitterTransformXz = `emitter_transform_xz`,
  emitterTransformYz = `emitter_transform_yz`
}


/**
 * Client Particles Particle Appearance Tinting
 * (particle_appearance_tinting)
 * Applies color tinting to particle textures, from simple solid
 * colors to complex gradients. Use hex colors for static tints, RGBA
 * arrays with Molang for dynamic colors, or gradient objects to
 * blend between colors over particle lifetime. Essential for
 * flames fading orange-to-gray, magical auras shifting colors, or
 * any effect needing color variation.
 */
export interface ParticleEffectComponentMinecraftParticleAppearanceTinting {

  /**
   * @remarks
   * The color of the particle, can be a hex color string (like
   * '#RRGGBB'), an array of [r, g, b, a] values (numbers or
   * Molang), or an object with gradient and interpolant.
   */
  color: string[];

}


/**
 * Client Particles Particle Initial Spin 
 * (particle_initial_spin)
 * Sets the starting rotation angle and spin velocity for each
 * particle. Initial rotation provides random orientation variety, while
 * spin_rate creates continuous rotation during the particle's lifetime.
 * Use for debris that tumbles, leaves spinning as they fall, sparks
 * that twist, or any particle needing rotational motion.
 */
export interface ParticleEffectComponentMinecraftParticleInitialSpin {

  rotation?: { [key: string]: string };

  rotation_rate?: { [key: string]: string };

}


/**
 * Client Particles Particle Initialization 
 * (particle_initialization)
 * Runs Molang expressions when each individual particle spawns to
 * initialize per-particle variables. Unlike emitter_initialization which
 * runs once per emitter, this executes for every particle—enabling randomized
 * properties, unique trajectories, or per-particle state that
 * persists through the particle's lifetime.
 */
export interface ParticleEffectComponentMinecraftParticleInitialization {

  per_render_expression?: { [key: string]: string };

  per_update_expression?: { [key: string]: string };

}


/**
 * Client Particles Particle Lifetime Expression
 * (particle_lifetime_expression)
 * Controls individual particle lifetimes using Molang expressions. The
 * max_lifetime sets the absolute duration limit, while
 * expiration_expression can terminate particles early when
 * conditions are met (like leaving a certain area). Enables dynamic
 * particle populations that respond to game state beyond simple
 * time-based expiration.
 */
export interface ParticleEffectComponentMinecraftParticleLifetimeExpression {

  /**
   * @remarks
   * When the expression is non-zero, the particle expires. Can be a
   * number or Molang expression.
   */
  expiration_expression?: string;

  /**
   * @remarks
   * The maximum lifetime of the particle in seconds. Can be a
   * number or Molang expression.
   */
  max_lifetime?: string;

}


/**
 * Client Particles Particle Motion Collision 
 * (particle_motion_collision)
 * Enables particle collision with world geometry. Configure collision
 * radius, bounce coefficient (how much velocity is retained), friction
 * to slow sliding, and whether to expire on impact. Essential for
 * physical particles like rain hitting ground, debris bouncing off
 * surfaces, or arrows embedding in blocks.
 */
export interface ParticleEffectComponentMinecraftParticleMotionCollision {

  coefficient_of_restitution?: number;

  collision_drag?: number;

  collision_radius: number;

  enabled?: { [key: string]: string };

  events?: ParticleEffectComponentMinecraftParticleMotionCollisionEvents[];

  expire_on_contact?: boolean;

}


/**
 */
export interface ParticleEffectComponentMinecraftParticleMotionCollisionEvents {

  event?: string;

  min_speed?: number;

}


/**
 * Client Particles Particle Motion Dynamic 
 * (particle_motion_dynamic)
 * Applies physics simulation to particle movement including gravity,
 * acceleration, and air resistance. Linear acceleration adds
 * constant force (gravity pulls down, wind pushes sideways), while
 * drag slows particles over time. Rotation acceleration and drag
 * control spinning. Creates natural-feeling motion for smoke rising,
 * debris falling, or leaves drifting.
 */
export interface ParticleEffectComponentMinecraftParticleMotionDynamic {

  /**
   * @remarks
   * The linear acceleration of particles, as [x, y, z] Molang
   * expressions or numbers.
   */
  linear_acceleration?: string[];

  /**
   * @remarks
   * The drag coefficient applied to particle motion. Can be a
   * number or Molang expression.
   */
  linear_drag_coefficient?: string;

  /**
   * @remarks
   * The rotation acceleration. Can be a number or Molang 
   * expression.
   */
  rotation_acceleration?: string;

  /**
   * @remarks
   * The rotation drag coefficient. Can be a number or Molang
   * expression.
   */
  rotation_drag_coefficient?: string;

}


/**
 * Client Particles Particle Motion Parametric
 * (particle_motion_parametric)
 * Controls particle position and rotation using Molang expressions
 * evaluated each frame, overriding physics simulation. Position is
 * relative to emitter origin, allowing mathematical motion patterns
 * like orbits, waves, spirals, or any path describable through
 * equations. Ideal for magical effects, precise choreographed motion,
 * or synchronized particle formations.
 */
export interface ParticleEffectComponentMinecraftParticleMotionParametric {

  /**
   * @remarks
   * Direction of particle motion, as [x, y, z] Molang 
   * expressions.
   */
  direction?: string[];

  /**
   * @remarks
   * Position offset relative to the particle emitter, as [x, y, z]
   * Molang expressions.
   */
  relative_position?: string[];

  rotation?: { [key: string]: string };

}