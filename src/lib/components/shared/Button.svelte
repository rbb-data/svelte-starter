<script>
  /**
   * Primary, secondary and tertiary buttons.
   *
   * @component
   */

  import { createEventDispatcher } from 'svelte';

  import CheckIcon from '$icons/Check.svelte';
  import ErrorCloseIcon from '$icons/ErrorClose.svelte';
  import ProcessingIcon from '$icons/Processing.svelte';

  import { capitalize, computeTransparentColor } from '$lib/utils';
  import * as colors from '$lib/tokens';

  /** @type {'primary' | 'secondary' | 'tertiary'} */
  export let type = 'primary';

  /**
   * maps to a pre-defined color
   *
   * @type {'blue' | 'black' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let accentColor = 'blue';

  /**
   * if given, overwrites `accentColor`
   *
   * @type {string}
   */
  export let customColor = undefined;

  /** disables the button accessibly */
  export let disabled = false;

  /**
   * optionally shows feedback after an interaction; only applicable to disabled buttons
   *
   * @type {'processing' | 'done' | 'success' | 'error'}
   */
  export let feedback = undefined;

  /**
   * if true, shows feedback without rendering a default icon for
   * `processing`/`success`/`error`
   */
  export let hideFeedbackIcon = false;

  const dispatch = createEventDispatcher();

  /** @param {Event} e */
  function handlePress(e) {
    if (disabled) return;
    dispatch('press', { event: e });
  }

  $: showFeedbackIcon =
    !hideFeedbackIcon && type !== 'tertiary' && feedback && feedback !== 'done';
  $: classes = [
    'button',
    'reset',
    type,
    feedback && 'show-feedback',
    feedback,
    showFeedbackIcon && 'show-icon',
  ].filter((c) => c);

  // @ts-ignore
  $: color = customColor || colors['cUiAccent' + capitalize(accentColor)];
  $: colorTransparent = computeTransparentColor(color);
</script>

<button
  type="button"
  class:disabled
  style:--c-accent={color}
  style:--c-accent-transparent={colorTransparent}
  on:click={handlePress}
  on:touchstart|preventDefault={handlePress}
  {...$$restProps}
  class={classes.join(' ') + ($$restProps.class ? ' ' + $$restProps.class : '')}
  disabled={false}
  aria-disabled={disabled}
>
  {#if showFeedbackIcon}
    <div class="content">
      {#if feedback === 'processing'}
        <ProcessingIcon />
      {:else if feedback === 'success'}
        <CheckIcon />
      {:else if feedback === 'error'}
        <ErrorCloseIcon />
      {/if}
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</button>

<style lang="scss">
  button {
    --color: var(--c-ui-gray-500);
    --background-color: transparent;
    --icon-size: 1.8em;
    --icon-padding: var(--s-px-1);

    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    padding: var(--s-px-3) var(--s-px-4);
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    color: var(--color);
    background-color: var(--background-color);

    &:focus-visible {
      @include focus(var(--c-accent));
    }

    &.primary {
      --color: #ffffff;
      --background-color: var(--c-accent);
    }

    &.secondary {
      --color: var(--c-accent);
      --border-color: var(--c-accent);

      outline: 1px solid var(--border-color);
      outline-offset: -1px;
    }

    &.tertiary {
      --color: var(--c-accent);
    }

    &.disabled {
      cursor: default;

      &:not(.show-feedback) {
        &.primary {
          --background-color: var(--c-accent-transparent);
        }
        &.secondary {
          --color: var(--c-accent-transparent);
          --border-color: var(--c-accent-transparent);
        }
        &.tertiary {
          --color: var(--c-accent-transparent);
        }
      }

      &.show-feedback {
        --color: var(--c-ui-gray-500);
      }

      &.processing {
        --color: var(--c-ui-gray-400);

        &.primary {
          --background-color: var(--c-accent-transparent);
        }

        &.secondary {
          --border-color: var(--c-accent-transparent);
        }
      }

      &.done {
        --c-accent: var(--c-ui-gray-300) !important;

        &.primary {
          --background-color: var(--c-ui-gray-100);
        }

        &.secondary {
          --border-color: #bfbfbf;
        }
      }

      &.success {
        --c-accent: #396a56 !important;
        --c-accent-medium: var(--c-quality-positive);
        --c-accent-light: #d3eeda;
      }

      &.error {
        --c-accent: var(--c-rbb-burgundy) !important;
        --c-accent-medium: #ea693e;
        --c-accent-light: var(--c-rbb-burgundy);
      }

      &.success,
      &.error {
        &.primary {
          --background-color: var(--c-accent-medium);
        }

        &.secondary {
          --background-color: var(-c-accent-light);
          --border-color: var(--c-accent);
          --color: var(--c-accent);
        }

        &.tertiary {
          --color: var(--c-accent);
        }
      }
    }

    &.show-icon {
      .content {
        position: relative;
        margin-left: calc(
          var(--icon-size) + var(--icon-padding)
        ); /* reserve space for the icon */
      }
    }
  }

  :global {
    .button.show-icon {
      svg {
        width: var(--icon-size);
        height: var(--icon-size);
        left: calc(-1 * (var(--icon-size) + var(--icon-padding)));

        /* vertically align the icon */
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        path {
          fill: var(--color);
        }
      }

      &.processing {
        svg {
          animation: spin 1.5s linear infinite;
        }
      }
    }
  }

  @keyframes spin {
    from {
      transform: translateY(-50%) rotate(0deg);
    }
    to {
      transform: translateY(-50%) rotate(360deg);
    }
  }
</style>
