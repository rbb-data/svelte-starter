<script lang="ts">
  /**
   * Renders a slant on one of the sides or both sides.
   *
   * CSS variables:
   *
   * - `--slant`: slant "degree" _(default: 0.25)_
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
  data-position={position}
>
  <slot />
</div>

<style lang="scss">
  .slant {
    --_slant: var(--slant, 0.25);
    --_color: var(--slant-text-color, var(--c-ui-black));
    --_background-color: var(--slant-background-color, var(--c-ui-accent-blue));
    --_slant-padding: var(--slant-padding, var(--s-px-4));
    --_straight-padding: var(--straight-padding, var(--s-px-1));

    display: inline-block;
    min-width: 0.8em;
    min-height: 1.15em;
    padding-right: var(--_slant-padding);
    padding-left: var(--_straight-padding);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);

    color: var(--_color);
    background-color: var(--_background-color);

    clip-path: polygon(
      0 0,
      100% 0,
      calc(100% - var(--_slant) * var(--slant-height)) 100%,
      0 100%
    );

    &[data-position='left'] {
      padding-left: var(--_slant-padding);
      padding-right: var(--_straight-padding);

      clip-path: polygon(
        calc(var(--_slant) * var(--slant-height)) 0,
        100% 0,
        100% 100%,
        0 100%
      );
    }

    &[data-position='both'] {
      padding-left: var(--_slant-padding);
      padding-right: var(--_slant-padding);

      clip-path: polygon(
        calc(var(--_slant) * var(--slant-height)) 0,
        100% 0,
        calc(100% - var(--_slant) * var(--slant-height)) 100%,
        0 100%
      );
    }
  }
</style>
