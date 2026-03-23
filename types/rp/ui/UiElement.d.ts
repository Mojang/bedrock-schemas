// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// Type definitions for working with Minecraft Bedrock Edition pack JSON schemas.
// Project: https://learn.microsoft.com/minecraft/creator/

/**
 * @packageDocumentation
 * Contains types for working with various Minecraft Bedrock Edition JSON schemas.
 * 
 * UI Documentation - minecraft:ui_element
 */

import * as jsoncommon from '../../common';

/**
 * UI Element (ui_element)
 * A UI element definition in a Minecraft Bedrock UI screen file. UI
 * elements define the visual and interactive components of
 * Minecraft's user interface.
 */
export default interface UiElement {

  /**
   * @remarks
   * Whether this element can be clipped by parent elements.
   */
  allow_clipping?: boolean;

  /**
   * @remarks
   * The opacity of the element, from 0.0 (transparent) to 1.0
   * (opaque).
   */
  alpha?: number;

  /**
   * @remarks
   * Whether pointer events are always handled by this element.
   */
  always_handle_pointer?: boolean;

  /**
   * @remarks
   * The anchor point on the parent element from which this element is
   * positioned.
   */
  anchor_from?: UiElementAnchorFrom| string;

  /**
   * @remarks
   * The anchor point on this element used for positioning.
   */
  anchor_to?: UiElementAnchorTo| string;

  /**
   * @remarks
   * The name of the animation state to reset to.
   */
  animation_reset_name?: string;

  /**
   * @remarks
   * Animation references to apply to this element.
   */
  anims?: string[];

  /**
   * @remarks
   * Whether to use bilinear filtering for textures.
   */
  bilinear?: boolean;

  /**
   * @remarks
   * Data bindings that connect UI element properties to game 
   * data.
   */
  bindings?: UiElementBindings[];

  /**
   * @remarks
   * Mappings from input buttons to actions.
   */
  button_mappings?: UiElementButtonMappings[];

  /**
   * @remarks
   * Whether clipping is pixel-perfect.
   */
  clip_pixelperfect?: boolean;

  /**
   * @remarks
   * Whether child elements are clipped to this element's bounds.
   */
  clips_children?: boolean;

  /**
   * @remarks
   * The name of the collection to use for grid or stack panel 
   * items.
   */
  collection_name?: string;

  /**
   * @remarks
   * The color tint applied to the element, specified as [r, g, b]
   * with values 0.0-1.0.
   */
  color?: number[];

  /**
   * @remarks
   * Whether input events are consumed by this element.
   */
  consume_event?: boolean;

  /**
   * @remarks
   * Child elements contained within this element.
   */
  controls?: UiElementControls[];

  /**
   * @remarks
   * Priority for receiving default focus.
   */
  default_focus_precedence?: boolean;

  /**
   * @remarks
   * Whether this element is enabled and can be interacted with.
   */
  enabled?: boolean;

  /**
   * @remarks
   * The factory configuration for dynamic element creation.
   */
  factory?: string;

  /**
   * @remarks
   * Whether image fills its container.
   */
  fill?: string;

  /**
   * @remarks
   * The element to focus when navigating down.
   */
  focus_change_down?: string;

  /**
   * @remarks
   * The element to focus when navigating left.
   */
  focus_change_left?: string;

  /**
   * @remarks
   * The element to focus when navigating right.
   */
  focus_change_right?: string;

  /**
   * @remarks
   * The element to focus when navigating up.
   */
  focus_change_up?: string;

  /**
   * @remarks
   * Whether this element can receive focus.
   */
  focus_enabled?: boolean;

  /**
   * @remarks
   * A multiplier for the font size.
   */
  font_scale_factor?: boolean;

  /**
   * @remarks
   * The size of the font for text rendering.
   */
  font_size?: UiElementFontSize| string;

  /**
   * @remarks
   * The font to use for text rendering.
   */
  font_type?: UiElementFontType| string;

  /**
   * @remarks
   * Whether the element is rendered in grayscale.
   */
  grayscale?: boolean;

  /**
   * @remarks
   * The binding for determining grid dimensions.
   */
  grid_dimension_binding?: string;

  /**
   * @remarks
   * The template element to use for grid items.
   */
  grid_item_template?: number;

  /**
   * @remarks
   * How the grid resizes its cells.
   */
  grid_rescaling_type?: UiElementGridRescalingType| string;

  /**
   * @remarks
   * If true, this element is ignored during layout and 
   * rendering.
   */
  ignored?: boolean;

  /**
   * @remarks
   * Whether to auto-scroll to bottom when content updates.
   */
  jump_to_bottom_on_update?: boolean;

  /**
   * @remarks
   * Whether to maintain aspect ratio when scaling.
   */
  keep_ratio?: boolean;

  /**
   * @remarks
   * The rendering layer for this element. Higher values render on
   * top of lower values.
   */
  layer?: number;

  /**
   * @remarks
   * The control to display when this element is locked.
   */
  locked_control?: boolean;

  /**
   * @remarks
   * Maximum character length for text input elements.
   */
  max_length?: number;

  /**
   * @remarks
   * The maximum size constraints for the UI element.
   */
  max_size?: number[];

  /**
   * @remarks
   * The minimum size constraints for the UI element.
   */
  min_size?: number[];

  /**
   * @remarks
   * Whether this element acts as a modal overlay.
   */
  modal?: boolean;

  /**
   * @remarks
   * The bottom size for nine-slice image rendering.
   */
  nine_slice_buttom?: number;

  /**
   * @remarks
   * The left size for nine-slice image rendering.
   */
  nine_slice_left?: number;

  /**
   * @remarks
   * The right size for nine-slice image rendering.
   */
  nine_slice_right?: number;

  /**
   * @remarks
   * The top size for nine-slice image rendering.
   */
  nine_slice_top?: number;

  /**
   * @remarks
   * The offset of the UI element from its anchor position. Specified as
   * [x, y] in pixels.
   */
  offset?: number[];

  /**
   * @remarks
   * The orientation for stack panels, determining the direction children
   * are laid out.
   */
  orientation?: UiElementOrientation| string;

  /**
   * @remarks
   * Placeholder text shown when an input is empty.
   */
  place_holder_text?: string;

  /**
   * @remarks
   * Whether touch input is blocked by this element.
   */
  prevent_touch_input?: boolean;

  /**
   * @remarks
   * Whether alpha transparency is propagated to child elements.
   */
  propagate_alpha?: boolean;

  /**
   * @remarks
   * The renderer to use for custom element types. Examples include
   * 'hud_player_renderer', 'inventory_item_renderer', etc.
   */
  renderer?: string;

  /**
   * @remarks
   * Reference to the panel containing scrollbar box and track.
   */
  scroll_box_and_track_panel?: string;

  /**
   * @remarks
   * Reference to the scrollable content element.
   */
  scroll_content?: string;

  /**
   * @remarks
   * The speed of scrolling in scroll views.
   */
  scroll_speed?: string;

  /**
   * @remarks
   * Reference to the scroll viewport element.
   */
  scroll_view_port?: string;

  /**
   * @remarks
   * Reference to the scrollbar box element.
   */
  scrollbar_box?: string;

  /**
   * @remarks
   * Whether the scrollbar responds to touch.
   */
  scrollbar_touch_button?: boolean;

  /**
   * @remarks
   * Reference to the scrollbar track element.
   */
  scrollbar_track?: string;

  /**
   * @remarks
   * Whether to render a shadow behind text.
   */
  shadow?: boolean;

  /**
   * @remarks
   * The size of the UI element. Can be specified as [width, height]
   * where each can be a number (pixels), percentage string ('100%'), or
   * special value ('fill', '100%c', '100%cm').
   */
  size?: number[];

  /**
   * @remarks
   * The range for slider elements.
   */
  slider_range?: number;

  /**
   * @remarks
   * Whether the slider value changes on hover.
   */
  slider_select_on_hover?: string;

  /**
   * @remarks
   * The number of discrete steps in a slider.
   */
  slider_steps?: number;

  /**
   * @remarks
   * The text content for label elements. Can include localization 
   * keys.
   */
  text?: string;

  /**
   * @remarks
   * The horizontal alignment of text within a label.
   */
  text_alignment?: UiElementTextAlignment| string;

  /**
   * @remarks
   * The name identifier for a text box.
   */
  text_box_name?: string;

  /**
   * @remarks
   * The texture path for image elements. Relative to the resource pack
   * textures folder.
   */
  texture?: string;

  /**
   * @remarks
   * Whether the texture is tiled when rendering.
   */
  tiled?: boolean;

  /**
   * @remarks
   * The priority for ordering elements in text-to-speech.
   */
  tts_control_type_order_priority?: string;

  /**
   * @remarks
   * Whether to ignore this element when counting for 
   * text-to-speech.
   */
  tts_ignore_count?: boolean;

  /**
   * @remarks
   * Whether to skip this element in text-to-speech narration.
   */
  tts_skip_message?: boolean;

  /**
   * @remarks
   * The type of UI element. Determines how the element is rendered and
   * behaves.
   */
  type?: UiElementType| string;

  /**
   * @remarks
   * UV coordinates for texture mapping, specified as [u, v].
   */
  uv?: number[];

  /**
   * @remarks
   * The size of the UV region to sample from the texture.
   */
  uv_size?: number[];

  /**
   * @remarks
   * Variable definitions for conditional logic.
   */
  variables?: { [key: string]: UiElementVariables };

  /**
   * @remarks
   * Whether this input uses a virtual keyboard buffer.
   */
  virtual_keyboard_buffer_control?: boolean;

  /**
   * @remarks
   * Whether this element is visible by default.
   */
  visible?: boolean;

}


export enum UiElementAnchorFrom {
  topLeft = `top_left`,
  topMiddle = `top_middle`,
  topRight = `top_right`,
  leftMiddle = `left_middle`,
  center = `center`,
  rightMiddle = `right_middle`,
  bottomLeft = `bottom_left`,
  bottomMiddle = `bottom_middle`,
  bottomRight = `bottom_right`
}


export enum UiElementAnchorTo {
  topLeft = `top_left`,
  topMiddle = `top_middle`,
  topRight = `top_right`,
  leftMiddle = `left_middle`,
  center = `center`,
  rightMiddle = `right_middle`,
  bottomLeft = `bottom_left`,
  bottomMiddle = `bottom_middle`,
  bottomRight = `bottom_right`
}


/**
 */
export interface UiElementBindings {

  /**
   * @remarks
   * The name of the collection when using collection bindings.
   */
  binding_collection_name?: string;

  /**
   * @remarks
   * When the binding should be evaluated.
   */
  binding_condition?: UiElementBindingsBindingCondition| string;

  /**
   * @remarks
   * The name of the data source to bind to (e.g., 
   * '#player_name').
   */
  binding_name?: string;

  /**
   * @remarks
   * The property on the UI element to bind the value to.
   */
  binding_name_override?: string;

  /**
   * @remarks
   * The type of binding.
   */
  binding_type?: UiElementBindingsBindingType| string;

  /**
   * @remarks
   * The name of the source control for view bindings.
   */
  source_control_name?: string;

  /**
   * @remarks
   * The property name on the source control.
   */
  source_property_name?: string;

  /**
   * @remarks
   * The property name on the target element.
   */
  target_property_name?: string;

}


export enum UiElementBindingsBindingCondition {
  always = `always`,
  visible = `visible`,
  once = `once`,
  alwaysWhenVisible = `always_when_visible`,
  visibilityChanged = `visibility_changed`
}


export enum UiElementBindingsBindingType {
  global = `global`,
  collection = `collection`,
  collectionDetails = `collection_details`,
  view = `view`,
  none = `none`
}


/**
 */
export interface UiElementButtonMappings {

  /**
   * @remarks
   * The input button that triggers the action.
   */
  from_button_id: string;

  /**
   * @remarks
   * The input mode required for this mapping.
   */
  input_mode_condition?: UiElementButtonMappingsInputModeCondition| string;

  /**
   * @remarks
   * The type of button mapping.
   */
  mapping_type?: UiElementButtonMappingsMappingType| string;

  /**
   * @remarks
   * The action button to trigger.
   */
  to_button_id: string;

}


export enum UiElementButtonMappingsInputModeCondition {
  notGaze = `not_gaze`,
  gamepadAndNotGaze = `gamepad_and_not_gaze`
}


export enum UiElementButtonMappingsMappingType {
  pressed = `pressed`,
  doublePressed = `double_pressed`,
  global = `global`,
  focused = `focused`
}


/**
 */
export interface UiElementControls {

  /**
   * @remarks
   * A child UI element. The key is the element name, optionally with
   * @base_element syntax for inheritance.
   */
  "azAZ09_:@": object;

}


export enum UiElementFontSize {
  small = `small`,
  normal = `normal`,
  large = `large`,
  extraLarge = `extra_large`
}


export enum UiElementFontType {
  default = `default`,
  smooth = `smooth`,
  rune = `rune`,
  unicode = `unicode`,
  minecraftTen = `MinecraftTen`
}


export enum UiElementGridRescalingType {
  none = `none`,
  horizontal = `horizontal`,
  vertical = `vertical`
}


export enum UiElementOrientation {
  horizontal = `horizontal`,
  vertical = `vertical`
}


export enum UiElementTextAlignment {
  left = `left`,
  center = `center`,
  right = `right`
}


export enum UiElementType {
  panel = `panel`,
  stackPanel = `stack_panel`,
  image = `image`,
  label = `label`,
  button = `button`,
  toggle = `toggle`,
  slider = `slider`,
  sliderBox = `slider_box`,
  editBox = `edit_box`,
  grid = `grid`,
  scrollView = `scroll_view`,
  scrollbarBox = `scrollbar_box`,
  dropdown = `dropdown`,
  inputPanel = `input_panel`,
  screen = `screen`,
  custom = `custom`,
  factory = `factory`,
  selectionWheel = `selection_wheel`
}


/**
 */
export interface UiElementVariables {

  /**
   * @remarks
   * The condition that must be met for this variable to be 
   * active.
   */
  requires?: boolean;

}