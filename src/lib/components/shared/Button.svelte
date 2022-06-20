<script>
  /**
   * Primary, secondary and tertiary buttons
   *
   * @component
   */

  import HeadlessButton from '$shared/headless/Button.svelte';
  import CheckIcon from '$shared/icons/Check.svelte';
  import XmarkIcon from '$shared/icons/Xmark.svelte';
  import ProcessingIcon from '$shared/icons/Processing.svelte';

  import { capitalize, hex2rgba } from '$lib/utils';
  import * as colors from '$lib/tokens';

  /** @type {'primary' | 'sencondary' | 'tertiary'} */
  export let type = 'primary';

  /**
   * maps to a pre-defined color
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
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
   * optionally show feedback after an interaction; only applicable to disabled buttons
   *
   * @type {'processing' | 'done' | 'success' | 'error'}
   */
  export let feedback = undefined;

  /** don't render default feedback icon */
  export let hideFeedbackIcon = false;

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

  $: color = customColor || colors['cUiAccent' + capitalize(accentColor)];
  $: colorRgb = hex2rgba(color);
</script>

<HeadlessButton
  {disabled}
  on:press
  {...$$restProps}
  class={classes.join(' ') + ($$restProps.class ? ' ' + $$restProps.class : '')}
  cssVars={{
    'c-accent': color,
    'c-accent-r': colorRgb[0],
    'c-accent-g': colorRgb[1],
    'c-accent-b': colorRgb[2],
  }}
>
  {#if showFeedbackIcon}
    <div class="content">
      {#if feedback === 'processing'}
        <ProcessingIcon />
      {:else if feedback === 'success'}
        <CheckIcon />
      {:else if feedback === 'error'}
        <XmarkIcon />
      {/if}
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</HeadlessButton>

<style lang="scss">
  :global {
    .button {
      --color: var(--c-ui-gray-500);
      --background-color: transparent;
      --c-accent-transparent: rgba(
        var(--c-accent-r),
        var(--c-accent-g),
        var(--c-accent-b),
        0.3
      );
      --icon-size: 1.6em;
      --icon-padding: var(--s-px-1);

      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-regular);
      padding: var(--s-px-2) var(--s-px-4);
      text-transform: uppercase;
      text-align: center;
      white-space: nowrap;

      color: var(--color);
      background-color: var(--background-color);

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
        &.show-feedback {
          opacity: 1;
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
          &.primary {
            --background-color: var(--c-ui-gray-100);
          }

          &.secondary {
            --border-color: #bfbfbf;
          }
        }

        &.success {
          &.primary {
            --background-color: var(--c-quality-positive);
          }

          &.secondary {
            --background-color: #d3eeda;
            --border-color: #396a56;
            --color: #396a56;
          }

          &.tertiary {
            --color: #396a56;
          }
        }

        &.error {
          &.primary {
            --background-color: #ea693e;
          }

          &.secondary {
            --background-color: #f3dace;
            --border-color: var(--c-rbb-burgundy);
            --color: var(--c-rbb-burgundy);
          }

          &.tertiary {
            --color: var(--c-rbb-burgundy);
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

        &.processing svg {
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
