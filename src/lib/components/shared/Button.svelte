<script>
  /**
   * Primary, secondary and tertiary buttons.
   *
   * CSS variables:
   *
   * - `--button-color-accent`: accent color _(default: blue)_
   * - `--button-color-mute`: secondary color _(default: white)_
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  /** @type {'primary' | 'secondary' | 'tertiary'} */
  export let type = 'primary';
</script>

<button type="button" {...$$restProps} on:click data-type={type}>
  <slot>Button</slot>
</button>

<style lang="scss">
  button {
    --_c-accent: var(--button-color-accent, var(--c-ui-accent-blue));
    --_c-mute: var(--button-color-mute, white);

    --_color: var(--_c-mute);
    --_background-color: var(--_c-accent);

    --c-focus: var(--_c-accent);

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

    &[disabled] {
      opacity: 0.3;
    }

    &[data-type='secondary'] {
      --_color: var(--_c-accent);
      --_background-color: var(--_c-mute);

      outline: 1px solid var(--_c-accent);
      outline-offset: -1px;
    }

    &[data-type='tertiary'] {
      --_background-color: transparent;
      --_color: var(--_c-accent);
    }
  }
</style>
