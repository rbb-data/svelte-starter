<script>
  /**
   * Group of vertically aligned check boxes.
   *
   * The rendered markup is composed of:
   *
   * - `.check-boxes`: assigned the given id
   * - `.check-boxes legend`
   * - `.check-boxes .check-box`: with classes `.focused`, `.checked` and
   *   `.disabled` applied appropriately
   * - `.check-boxes .check-box input[type="checkbox"]`
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import * as tokens from '$lib/tokens';
  import { cAccentId, c100Id } from '$lib/utils';

  /**
   * globally unique id
   *
   * @type {string}
   */
  export let id;

  /**
   * list of options
   *
   * @type {any[]}
   */
  export let options;

  /**
   * currently selected values
   *
   * @type {any[]}
   */
  export let selectedValues = [];

  /**
   * label of the input group
   *
   * **note:** if not provided, `aria-labelledby` or `aria-label` must be used instead
   *
   * @type {string | undefined}
   */
  export let label = undefined;

  /** hides label visually but keeps it around for screen readers */
  export let hideLabelVisually = false;

  /**
   * sets CSS variables `--c-accent`, `--c-light` and `--c-focus` to pre-defined colors
   *
   * @type {Exclude<import('$lib/types').AccentColor, 'black'>}
   */
  export let colorScheme = 'blue';

  /**
   * sets CSS variables `--c-accent`, `--c-light` and `--c-focus`
   *
   * @type {{ accent?: string; light?: string; focus?: string }}
   */
  export let customColors = {};

  /**
   * function that maps an option to its value
   *
   * @type {(option: any) => any}
   */
  export let getOptionValue = (option) => option;

  /**
   * function that maps an option to `true` if disabled
   *
   * @type {(option: any) => boolean}
   */
  export let isOptionDisabled = () => false;

  /**
   * ARIA attributes
   *
   * @type {{
   *   label?: string;
   *   labelledby?: string;
   *   describedby?: string;
   *   orientation?: 'horizontal' | 'vertical';
   * }}
   */
  export let aria = { orientation: 'vertical' };

  $: color = customColors.accent || tokens[cAccentId(colorScheme)];
  $: colorLight = customColors.light || tokens[c100Id(colorScheme)];
  $: colorFocus = customColors.focus || color;

  /** @type {any} */
  let focusedValue = null;
</script>

<fieldset
  {id}
  class="check-boxes"
  style:--c-accent={color}
  style:--c-light={colorLight}
  style:--c-focus={colorFocus}
  aria-label={aria.label}
  aria-labelledby={aria.labelledby}
  aria-describedby={aria.describedby}
  aria-orientation={aria.orientation}
>
  {#if label}
    <legend class:visually-hidden={hideLabelVisually}>
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const v = getOptionValue(option)}
    {@const checked = selectedValues.includes(v)}
    {@const disabled = isOptionDisabled(option)}
    {@const focused = v === focusedValue}
    <label class="check-box" class:focused class:checked class:disabled>
      <input
        type="checkbox"
        name={id}
        value={v}
        {disabled}
        bind:group={selectedValues}
        on:focus={(e) => {
          const node = e.currentTarget;
          if (node.classList.contains('focus-visible')) {
            focusedValue = v;
          }
        }}
        on:blur={() => (focusedValue = null)}
      />
      <slot {option} {checked} />
    </label>
  {/each}
</fieldset>

<style lang="scss">
  fieldset {
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
  }

  legend {
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-sm);
    margin-bottom: var(--s-px-2);
  }

  label {
    display: block;
    cursor: pointer;
    padding: var(--s-px-2);
    background-color: var(--c-light);
    margin: var(--s-px-2) 0;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    white-space: nowrap;

    display: flex;
    align-items: center;

    &.focused {
      @include focus;
    }

    &.disabled {
      cursor: default;
      opacity: 0.3;
    }
  }

  input[type='checkbox'] {
    appearance: none;
    border-radius: 0;
    width: 1.2em;
    height: 1.2em;
    background-color: transparent;
    margin-right: var(--s-px-2);
    border: 1px solid currentColor;
    position: relative;

    &:focus {
      box-shadow: none;
    }

    &:checked {
      background-color: var(--c-accent);
      border: 1px solid var(--c-accent);
    }

    &:checked::before {
      content: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='fill:white;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2'%3E%3Cpath style='fill:none' d='M0 0h32v32H0z'/%3E%3Cpath d='M14.078 18.772 9.6 12.8l-3.2 2.4L13 24h2.133l10.461-13.791-3.187-2.417-8.329 10.98Z'/%3E%3C/svg%3E");
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) translate(0.5px, 1.5px);
    }
  }
</style>
