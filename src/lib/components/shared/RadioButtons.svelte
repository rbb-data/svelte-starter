<script>
  /**
   * Group of vertically aligned radio buttons.
   *
   * The rendered markup is composed of:
   *
   * - `.radio-buttons`: assigned the given id
   * - `.radio-buttons legend`
   * - `.radio-buttons .radio-button`: with classes `.focused`, `.checked` and
   *   `.disabled` applied appropriately
   * - `.radio-buttons .radio-button input[type="radio"]`
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
   * currently selected value
   *
   * @type {any}
   */
  export let selectedValue;

  /**
   * label of the input group
   *
   * **note:** if not provided, `aria-labelledby` or `aria-label` must be used instead
   *
   * @type {string | undefined}
   */
  export let label = undefined;

  /** hides label visually but keep it around for screen readers */
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
  class="radio-buttons"
  style:--c-accent={color}
  style:--c-light={colorLight}
  style:--c-focus={colorFocus}
  aria-orientation={aria.orientation}
  aria-label={aria.label}
  aria-labelledby={aria.labelledby}
  aria-describedby={aria.describedby}
>
  {#if label}
    <legend class:g-visually-hidden={hideLabelVisually}>
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const v = getOptionValue(option)}
    {@const checked = v === selectedValue}
    {@const disabled = isOptionDisabled(option)}
    {@const focused = v === focusedValue}
    <label class="radio-button" class:focused class:checked class:disabled>
      <input
        type="radio"
        name={id}
        value={v}
        {disabled}
        bind:group={selectedValue}
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
      @include focus(var(--c-focus));
    }

    &.disabled {
      cursor: default;
      opacity: 0.3;
    }
  }

  input[type='radio'] {
    appearance: none;

    width: 1.2em;
    height: 1.2em;
    margin-right: var(--s-px-2);
    border-radius: 50%;
    border: 1px solid black;

    &:focus {
      box-shadow: none;
    }

    &:checked {
      border: 5px solid var(--c-accent);
      background-color: white;
    }
  }
</style>
