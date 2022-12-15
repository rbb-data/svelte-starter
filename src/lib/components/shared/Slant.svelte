<script lang="ts">
  /**
   * Renders a slant on one of the sides or both sides.
   *
   * CSS variables:
   *
   * - `--slant`: slant "degree" _(default: 0.25)_
   * - `--slant-height`: height of the element _(default: 1rem)_
   * - `--slant-text-color`: text color _(default: black)_
   * - `--slant-background-color`: background color _(default: blue)_
   * - `--slant-padding`: horizontal padding on the side of the slant _(default: var(--s-px-4))_
   * - `--straight-padding`: horizontal padding on the straight side _(default: var(--s-px-1))_
   *
   * The rendered markup is composed of:
   *
   * - `.slant`: wrapper element (inline by default)
   *
   * @component
   */

  import * as tokens from '$lib/tokens';
  import { getHighestContrastColor } from '$lib/utils';

  export let position: 'right' | 'left' | 'both' = 'right';
  export let direction: 'forward' | 'backward' = 'forward';
  export let backgroundColor = tokens.cUiAccentBlue;
  export let color = getHighestContrastColor(backgroundColor);

  let height = 0;
</script>

<div
  class:slant={true}
  class={$$restProps.class}
  style={$$restProps.style}
  bind:clientHeight={height}
  style:--slant-height="{height}px"
  style:--slant-text-color={color}
  style:--slant-background-color={backgroundColor}
  data-slant-position={position}
  data-slant-direction={direction}
>
  <slot />
</div>
