<script lang="ts">
  /**
   * Primary, secondary and tertiary buttons.
   *
   * CSS variables:
   *
   * - `--button-color-accent`: accent color _(default: blue)_
   * - `--button-color-secondary`: secondary color _(default: white)_
   * - `--icon-height`: height of the icon, only applicable if the content contains an `<img />` or `<svg />` _(default: min(2em, 28px))_
   * - `--icon-width`: width of the icon, only applicable if the content contains an `<img />` or `<svg />` _(default: auto)_
   * - `--button-size`: width and height of the button, only applicable if class `icon` is set, _(default: 44px)_
   *
   * Classes:
   *
   * - `.icon`: render content as icon
   *
   * The rendered markup is composed of:
   *
   * - `.button`: button
   */

  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'secondary' | 'tertiary';

  interface $$Props extends HTMLButtonAttributes {
    variant?: Variant;
  }

  /** variant */
  export let variant: Variant = 'primary';
</script>

<button
  type="button"
  class:button={true}
  {...$$restProps}
  on:click
  data-variant={variant}
>
  <slot>Label missing</slot>
</button>

<style lang="scss">
  button {
    --_button-color-accent: var(--button-color-accent, var(--c-ui-accent-blue));
    --_button-color-secondary: var(--button-color-secondary, white);

    --_icon-height: var(--icon-height, min(2em, 28px));
    --_icon-width: var(--icon-width, auto);

    --_color: var(--_button-color-secondary);
    --_background-color: var(--_button-color-accent);

    --c-focus: var(--_button-color-accent);

    // reset browser defaults
    display: inline-block;
    border: none;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // prevents flash on touch
    user-select: none;

    position: relative;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    padding: var(--s-px-3) var(--s-px-4);
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;

    color: var(--_color);
    background-color: var(--_background-color);
    border: 1px solid var(--_button-color-accent);

    &:disabled {
      opacity: 0.3;
    }

    &[data-variant='secondary'] {
      --_color: var(--_button-color-accent);
      --_background-color: var(--_button-color-secondary);
      border-color: currentColor;
    }

    &[data-variant='tertiary'] {
      --_background-color: transparent;
      --_color: var(--_button-color-accent);
      border: none;
    }

    &.icon {
      --_button-size: var(--button-size, 44px);

      position: relative;
      width: var(--_button-size);
      height: var(--_button-size);

      :global {
        img,
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    :global {
      img,
      svg {
        display: inline-block;
        height: var(--_icon-height);
        width: var(--_icon-width);
      }

      svg path {
        fill: var(--_color);
      }
    }
  }
</style>
