// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * Particles Documentation - minecraft:particle_document
 */

import * as jsoncommon from '../../common';

/**
 * Particle Effect Document (particle_document)
 * A resource pack particle effect definition document for
 * Minecraft Bedrock Edition. This describes the complete JSON file
 * structure including format_version and the particle_effect wrapper.
 * Particles use a component-based system with emitters controlling spawn
 * rate and shape, and particle components controlling appearance and
 * motion.
 */
export default interface ParticleDocument {

  /**
   * @remarks
   * The format version of this particle effect file. Use '1.10.0' or
   * later for the modern particle system.
   */
  format_version: string | number[];

  /**
   * @remarks
   * The particle effect definition containing description and
   * components.
   */
  particle_effect: ParticleDocumentParticleEffect;

}


/**
 * Particle Effect (particle_effect)
 * Defines a particle effect that can be spawned by entities, blocks,
 * or scripts. Particle effects use a component-based system with
 * emitters (controlling spawn rate and shape), appearance (billboard
 * rendering and colors), and motion (physics and collision).
 */
export interface ParticleDocumentParticleEffect {

  components: ParticleDocumentParticleEffectComponents;

  curves?: ParticleDocumentParticleEffectCurves;

  /**
   * @remarks
   * The description MUST contain an identifier and
   * basic_render_parameters.
   */
  description: ParticleDocumentParticleEffectDescription;

  events?: ParticleDocumentParticleEffectEvents;

}


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
export interface ParticleDocumentParticleEffectComponents {

  "minecraft:emitter_initialization"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterInitialization;

  "minecraft:emitter_lifetime_events"?: object;

  "minecraft:emitter_lifetime_expression"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterLifetimeExpression;

  "minecraft:emitter_lifetime_looping"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterLifetimeLooping;

  "minecraft:emitter_lifetime_once"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterLifetimeOnce;

  "minecraft:emitter_local_space"?: object;

  "minecraft:emitter_rate_instant"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterRateInstant;

  "minecraft:emitter_rate_manual"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterRateManual;

  "minecraft:emitter_rate_steady"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterRateSteady;

  "minecraft:emitter_shape_box"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeBox;

  "minecraft:emitter_shape_custom"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeCustom;

  "minecraft:emitter_shape_disc"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeDisc;

  "minecraft:emitter_shape_entity_aabb"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeEntityAabb;

  "minecraft:emitter_shape_point"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterShapePoint;

  "minecraft:emitter_shape_sphere"?: ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeSphere;

  "minecraft:particle_appearance_billboard"?: ParticleDocumentParticleEffectComponentsMinecraftParticleAppearanceBillboard;

  "minecraft:particle_appearance_lighting"?: object;

  "minecraft:particle_appearance_tinting"?: ParticleDocumentParticleEffectComponentsMinecraftParticleAppearanceTinting;

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

  "minecraft:particle_initial_spin"?: ParticleDocumentParticleEffectComponentsMinecraftParticleInitialSpin;

  "minecraft:particle_initialization"?: ParticleDocumentParticleEffectComponentsMinecraftParticleInitialization;

  /**
   * @remarks
   * A plane (A, B, C, D coefficients) that kills particles when they
   * cross it. Defined as an array of 4 numbers [A, B, C, D] where Ax
   * + By + Cz + D = 0.
   */
  "minecraft:particle_kill_plane"?: string[];

  "minecraft:particle_lifetime_events"?: object;

  "minecraft:particle_lifetime_expression"?: ParticleDocumentParticleEffectComponentsMinecraftParticleLifetimeExpression;

  "minecraft:particle_motion_collision"?: ParticleDocumentParticleEffectComponentsMinecraftParticleMotionCollision;

  "minecraft:particle_motion_dynamic"?: ParticleDocumentParticleEffectComponentsMinecraftParticleMotionDynamic;

  "minecraft:particle_motion_parametric"?: ParticleDocumentParticleEffectComponentsMinecraftParticleMotionParametric;

}


/**
 * Emitter Initialization (emitter_initialization)
 * Defines Molang expressions that run when the emitter is created and
 * on each update. Useful for initializing and updating emitter
 * variables.
 */
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterInitialization {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterLifetimeExpression {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterLifetimeLooping {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterLifetimeOnce {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterRateInstant {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterRateManual {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterRateSteady {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeBox {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeCustom {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeDisc {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeEntityAabb {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterShapePoint {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftEmitterShapeSphere {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleAppearanceBillboard {

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


export enum ParticleDocumentParticleEffectComponentsMinecraftParticleAppearanceBillboardFacingCameraMode {
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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleAppearanceTinting {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleInitialSpin {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleInitialization {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleLifetimeExpression {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleMotionCollision {

  coefficient_of_restitution?: number;

  collision_drag?: number;

  collision_radius: number;

  enabled?: { [key: string]: string };

  events?: ParticleDocumentParticleEffectComponentsMinecraftParticleMotionCollisionEvents[];

  expire_on_contact?: boolean;

}


/**
 */
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleMotionCollisionEvents {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleMotionDynamic {

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
export interface ParticleDocumentParticleEffectComponentsMinecraftParticleMotionParametric {

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


/**
 * Curves (curves)
 */
export interface ParticleDocumentParticleEffectCurves {

  horizontal_range?: { [key: string]: string };

  input: { [key: string]: string };

  nodes: { [key: string]: string };

  type: object;

}


/**
 * Client Particles Particle Effect Description (particle_effect 
 * description)
 * The description MUST contain an identifier and
 * basic_render_parameters.
 */
export interface ParticleDocumentParticleEffectDescription {

  /**
   * @remarks
   * The parameters MUST contain a material and texture.
   */
  basic_render_parameters: ParticleDocumentParticleEffectDescriptionBasicRenderParameters;

  identifier: string;

}


/**
 * Client Particles Particle Effect Basic Render Parameters
 * (particle_effect basic_render_parameters)
 * The parameters MUST contain a material and texture.
 */
export interface ParticleDocumentParticleEffectDescriptionBasicRenderParameters {

  /**
   * @remarks
   * The material used for rendering the particle effect.
   */
  material: string;

  /**
   * @remarks
   * The texture path used for the particle effect.
   */
  texture: string;

}


/**
 * Client Particles Particle Event Node (particle_event_node)
 * Defines actions triggered by particle events like spawning, collision,
 * or expiration. Event nodes can run Molang expressions to modify
 * variables, spawn nested particle effects, play sounds, or
 * control emitter state. Chain multiple effects together for
 * complex reactions like explosions spawning secondary debris
 * particles.
 */
export interface ParticleDocumentParticleEffectEvents {

  expression?: { [key: string]: string };

  log?: string;

  particle_effect?: ParticleDocumentParticleEffectEventsParticleEffect;

  randomize?: ParticleDocumentParticleEffectEventsRandomize[];

  sequence?: object[];

  sound_effect?: ParticleDocumentParticleEffectEventsSoundEffect;

}


/**
 * Client Particles Particle Visual Effect Event
 * (particle_visual_effect_event)
 * Spawns another particle effect when triggered by particle events,
 * enabling cascading visual sequences. Reference other particle effects
 * by identifier to create chains like explosions spawning embers,
 * impacts creating dust clouds, or magical projectiles trailing
 * sparkles. Builds complex layered effects from simpler reusable
 * components.
 */
export interface ParticleDocumentParticleEffectEventsParticleEffect {

  effect: object;

  pre_effect_expression?: { [key: string]: string };

  type: string;

}


export enum ParticleDocumentParticleEffectEventsParticleEffectType {
  emitter = `emitter`,
  emitterBound = `emitter_bound`,
  particle = `particle`,
  particleWithVelocity = `particle_with_velocity`
}


/**
 * Client Particles Particle Event Random Node
 * (particle_event_random_node)
 * Triggers one of several possible effects randomly when a
 * particle event fires, with weighted probability. Assign weights to
 * different event outcomes for varied responses—like impacts sometimes
 * spawning sparks, sometimes dust, with configurable chances. Adds
 * natural variation to effects without needing complex Molang 
 * logic.
 */
export interface ParticleDocumentParticleEffectEventsRandomize {

  expression?: { [key: string]: string };

  log?: string;

  particle_effect?: ParticleDocumentParticleEffectEventsRandomizeParticleEffect;

  randomize?: object[];

  sequence?: object[];

  sound_effect?: ParticleDocumentParticleEffectEventsRandomizeSoundEffect;

  weight: number;

}


/**
 * Client Particles Particle Visual Effect Event
 * (particle_visual_effect_event)
 * Spawns another particle effect when triggered by particle events,
 * enabling cascading visual sequences. Reference other particle effects
 * by identifier to create chains like explosions spawning embers,
 * impacts creating dust clouds, or magical projectiles trailing
 * sparkles. Builds complex layered effects from simpler reusable
 * components.
 */
export interface ParticleDocumentParticleEffectEventsRandomizeParticleEffect {

  effect: object;

  pre_effect_expression?: { [key: string]: string };

  type: string;

}


export enum ParticleDocumentParticleEffectEventsRandomizeParticleEffectType {
  emitter = `emitter`,
  emitterBound = `emitter_bound`,
  particle = `particle`,
  particleWithVelocity = `particle_with_velocity`
}






/**
 * Client Particles Particle Sound Effect Event
 * (particle_sound_effect_event)
 * Plays a sound effect when triggered by particle events like
 * spawning, collision, or expiration. Reference sounds defined in
 * sound_definitions.json using their identifier. Synchronizes audio
 * with visual particle moments—sparks crackling, explosions booming, or
 * magical effects chiming for immersive multi-sensory 
 * feedback.
 */
export interface ParticleDocumentParticleEffectEventsRandomizeSoundEffect {

  event_name: string;

}




/**
 * Client Particles Particle Sound Effect Event
 * (particle_sound_effect_event)
 * Plays a sound effect when triggered by particle events like
 * spawning, collision, or expiration. Reference sounds defined in
 * sound_definitions.json using their identifier. Synchronizes audio
 * with visual particle moments—sparks crackling, explosions booming, or
 * magical effects chiming for immersive multi-sensory 
 * feedback.
 */
export interface ParticleDocumentParticleEffectEventsSoundEffect {

  event_name: string;

}