<script>
  /**
   * Light wrapper around a native button element. The implementation extends
   * `<button>` in two ways:
   *
   * - The `on:click` and `on:touchstart` are unified to an `on:press` event for a
   *   snappier mobile experience
   * - The native disabled attribute is ignored in favour of ARIA semantics to
   *   ensure the button remains focusable, even when disabled
   *
   * @component
   */

  import { createEventDispatcher } from 'svelte';

  import css from '$lib/actions/css';

  // To make sure the button remains focusable – even when disabled –
  // we ignore the HTML attribute "disabled" and instead implement
  // disabled buttons via ARIA semantics.

  /** disables the button accessibly */
  export let disabled = false;

  /**
   * CSS variables to be added to the button
   *
   * @type {Record<string, string>}
   */
  export let cssVars = {};

  const dispatch = createEventDispatcher();

  function handlePress(e) {
    if (disabled) return;
    dispatch('press', { event: e });
  }
</script>

<button
  type="button"
  class:reset={true}
  class:disabled
  on:click={handlePress}
  on:touchstart|preventDefault={handlePress}
  {...$$restProps}
  disabled={false}
  aria-disabled={disabled}
  use:css={cssVars}
>
  <slot />
</button>

<style>
  button {
    cursor: pointer;
  }

  button.disabled {
    cursor: default;
    opacity: 0.3;
  }
</style>
