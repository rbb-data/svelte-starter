<script>
  /**
   * Primary, secondary and tertiary buttons.
   *
   * CSS variables:
   *
   * - `--color`: text color
   * - `--background-color`: background color
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import { createEventDispatcher } from 'svelte';

  import { cAccentId, makeTransparent } from '$lib/utils';
  import * as tokens from '$lib/tokens';

  /** @type {'primary' | 'secondary' | 'tertiary'} */
  export let type = 'primary';

  /**
   * maps to a pre-defined color
   *
   * @type {import('$lib/types').AccentColor}
   */
  export let accentColor = 'blue';

  /**
   * if given, overwrites `accentColor`
   *
   * @type {string | undefined}
   */
  export let customColor = undefined;

  /** disables the button accessibly */
  export let disabled = false;

  /**
   * optionally shows feedback after an interaction; only applicable to disabled buttons
   *
   * @type {'processing' | 'done' | 'success' | 'error' | undefined}
   */
  export let feedback = undefined;

  const dispatch = createEventDispatcher();

  /** @param {Event} e */
  function handlePress(e) {
    if (disabled) return;
    dispatch('press', { event: e });
  }

  $: classes = [
    'g-reset',
    type,
    feedback && 'show-feedback',
    feedback,
    $$slots.icon && 'show-icon',
  ].filter((c) => c);

  $: color =
    customColor || /** @type {string} */ (tokens[cAccentId(accentColor)]);
  $: colorTransparent = makeTransparent(color);
</script>

<button
  type="button"
  class={classes.join(' ')}
  class:disabled
  style:--c-accent={color}
  style:--c-accent-transparent={colorTransparent}
  on:click={handlePress}
  on:touchstart|preventDefault={handlePress}
  disabled={false}
  aria-disabled={disabled}
>
  {#if $$slots.icon}
    <div class="content">
      <slot name="icon" />
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</button>

<style lang="scss">
  button {
    --_color: var(--color, var(--c-ui-gray-500));
    --_background-color: var(--background-color, transparent);
    --_icon-size: var(--icon-size, 1.8em);
    --_icon-padding: var(--icon-padding, var(--s-px-1));

    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    padding: var(--s-px-3) var(--s-px-4);
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    color: var(--_color);
    background-color: var(--_background-color);

    &.focus-visible {
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

        :global(svg) {
          animation: spin 1.5s linear infinite;
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
          var(--_icon-size) + var(--_icon-padding)
        ); /* reserve space for the icon */
      }

      :global {
        svg {
          width: var(--_icon-size);
          height: var(--_icon-size);
          left: calc(-1 * (var(--_icon-size) + var(--_icon-padding)));

          /* vertically align the icon */
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        svg path {
          fill: var(--_color);
        }
      }
    }
  }
</style>
