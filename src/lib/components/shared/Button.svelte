<script>
  import { createEventDispatcher } from 'svelte';

  import * as colors from '$lib/tokens';

  /** @type {'primary' | 'sencondary' | 'tertiary'} */
  export let type = 'primary';

  /**
   * color scheme with preset light and dark colors
   *
   * @type {'blue' | 'gray' | 'turquoise' | 'purple' | 'orange' | 'red'}
   */
  export let colorScheme = 'blue';

  /**
   * custom colors
   *
   * @type {{ light: string; dark: string }}
   */
  export let colorPair = undefined;

  // To make sure the button remains focusable – even when disabled –
  // we ignore the HTML attribute "disabled" and instead implement
  // disabled buttons via ARIA semantics.

  /** disables the button accessibly */
  export let disabled = false;

  /**
   * optional feedback after an interaction; this is applicable to disabled buttons only
   *
   * @type {'processing' | 'done' | 'success' | 'error'}
   */
  export let feedback = undefined;

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  function getPairFromName(color) {
    const name = `cPair` + capitalize(color);
    return {
      light: colors[name + 'Light'],
      dark: colors[name + 'Dark'],
    };
  }

  $: classes = ['reset', type, feedback].filter((c) => c).join(' ');
  $: buttonColors = colorPair || getPairFromName(colorScheme);

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
  class:show-feedback={feedback !== undefined}
  on:click={handlePress}
  on:touchstart|preventDefault={handlePress}
  {...$$restProps}
  class={classes + ($$restProps.class ? ' ' + $$restProps.class : '')}
  disabled={false}
  aria-disabled={disabled}
  style:--color-dark={buttonColors.dark}
  style:--color-light={buttonColors.light}
>
  <slot />
</button>

<style>
  button {
    --color: black;
    --background-color: transparent;

    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    padding: var(--s-px-2) var(--s-px-4);
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    color: var(--color);
    background-color: var(--background-color);
  }

  button.primary {
    --color: white;
    --background-color: var(--color-dark);
  }

  button.secondary {
    --color: var(--color-dark);
    --border-color: var(--color-dark);

    outline: 1px solid var(--border-color);
    outline-offset: -1px;
  }

  button.tertiary {
    --color: var(--color-dark);
  }

  button.disabled {
    cursor: default;
  }

  button.disabled:not(.show-feedback) {
    opacity: 0.3;
  }

  button.disabled.show-feedback {
    --color: black;
  }
</style>
