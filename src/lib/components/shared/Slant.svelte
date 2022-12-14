<script lang="ts">
  /**
   * Renders a slant on one of the sides or both sides.
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
  style:--height="{height}px"
  style:--color={color}
  style:--background-color={backgroundColor}
  data-position={position}
>
  <slot />
</div>

<style lang="scss">
  .slant {
    --_slant: var(--slant, 0.25);
    --_color: var(--color, var(--c-ui-black));
    --_background-color: var(--background-color, var(--c-ui-accent-blue));
    --_slant-padding: var(--slant-padding, var(--s-px-4));
    --_straight-padding: var(--straight-padding, var(--s-px-1));

    display: inline-block;
    min-width: 1rem;
    min-height: 1.15rem;
    padding-right: var(--_slant-padding);
    padding-left: var(--_straight-padding);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);

    color: var(--_color);
    background-color: var(--_background-color);

    clip-path: polygon(
      0 0,
      100% 0,
      calc(100% - var(--_slant) * var(--height)) 100%,
      0 100%
    );

    &[data-position='left'] {
      padding-left: var(--_slant-padding);
      padding-right: var(--_straight-padding);

      clip-path: polygon(
        calc(var(--_slant) * var(--height)) 0,
        100% 0,
        100% 100%,
        0 100%
      );
    }

    &[data-position='both'] {
      padding-left: var(--_slant-padding);
      padding-right: var(--_slant-padding);

      clip-path: polygon(
        calc(var(--_slant) * var(--height)) 0,
        100% 0,
        calc(100% - var(--_slant) * var(--height)) 100%,
        0 100%
      );
    }
  }
</style>
