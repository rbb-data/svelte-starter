<script lang="ts">
  /**
   * Primary, secondary and tertiary buttons.
   *
   * CSS variables:
   *
   * - `--button-color-accent`: accent color _(default: blue)_
   * - `--button-color-secondary`: secondary color _(default: white)_
   *
   * The rendered markup is composed of:
   *
   * - `.button`: button
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  export let type: 'primary' | 'secondary' | 'tertiary' = 'primary';
</script>

<button
  type="button"
  class:button={true}
  {...$$restProps}
  on:click
  data-type={type}
>
  <slot>Button</slot>
</button>

<style lang="scss">
  button {
    --_button-color-accent: var(--button-color-accent, var(--c-ui-accent-blue));
    --_button-color-secondary: var(--button-color-secondary, white);

    --_color: var(--_button-color-secondary);
    --_background-color: var(--_button-color-accent);

    --c-focus: var(--_button-color-accent);

    // reset browser defaults
    display: inline-block;
    border: none;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
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

    &:disabled {
      opacity: 0.3;
    }

    &[data-type='secondary'] {
      --_color: var(--_button-color-accent);
      --_background-color: var(--_button-color-secondary);

      outline: 1px solid var(--_button-color-accent);
      outline-offset: -1px;
    }

    &[data-type='tertiary'] {
      --_background-color: transparent;
      --_color: var(--_button-color-accent);
    }
  }
</style>
