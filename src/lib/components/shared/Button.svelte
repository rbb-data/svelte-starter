<script>
  import { createEventDispatcher } from 'svelte';

  /**
   * disables the button accessibly
   *
   * To make sure the button remains focusable – even when disabled – we ignore
   * the HTML attribute "disabled" and instead implement disabled buttons via
   * ARIA semantics.
   */
  export let disabled = false;

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
>
  <slot />
</button>

<style lang="scss">
  button {
    cursor: pointer;

    &:focus-visible {
      @include focus;
    }

    &.disabled {
      cursor: not-allowed;
    }
  }
</style>
