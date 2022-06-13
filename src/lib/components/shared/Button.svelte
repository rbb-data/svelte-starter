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
  on:click={handlePress}
  on:touchstart|preventDefault={handlePress}
  {...$$restProps}
  class={'reset ' + ($$restProps['class'] || '')}
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

    &[aria-disabled='true'] {
      cursor: not-allowed;
    }
  }
</style>
