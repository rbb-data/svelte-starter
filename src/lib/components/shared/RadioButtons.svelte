<script>
  /**
   * Group of vertically aligned radio buttons.
   *
   * The rendered markup is:
   *
   * ```html
   * <fieldset>
   *   <legend>
   *     <!-- label (if given) -->
   *   </legend>
   *   <label>
   *     <input role="radio" />
   *     <!-- slot -->
   *   </label>
   * </fieldset>
   * ```
   *
   * @component
   */

  import * as colors from '$lib/tokens';
  import { capitalize } from '$lib/utils';

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
   * @type {string}
   */
  export let label;

  /** hides label visually but keep it around for screen readers */
  export let hideLabelVisually = false;

  /**
   * maps to pre-defined colors (dark and light shade)
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let accentColor = 'blue';

  /**
   * if given, overwrites the dark shade of the accent color
   *
   * @type {string}
   */
  export let customColor = undefined;

  /**
   * if given, overwrites the light shade of the accent color
   *
   * @type {string}
   */
  export let customColorLight = undefined;

  /**
   * if given, overwrites the shade that is used for the focus ring
   *
   * @type {string}
   */
  export let customColorFocus = undefined;

  /**
   * function that maps an option to its value
   *
   * @param {(option: any) => string}
   */
  export let getOptionValue = (option) => option;

  /**
   * function that maps an option to `true` if disabled
   *
   * @param {(option: any) => boolean}
   */
  export let isOptionDisabled = () => false;

  $: color = customColor || colors['cUiAccent' + capitalize(accentColor)];
  $: colorLight = customColorLight || colors[`c${capitalize(accentColor)}100`];
  $: colorFocus = customColorFocus || color;

  let focusedValue = null;
</script>

<fieldset
  {id}
  aria-orientation="vertical"
  style:--c-accent={color}
  style:--c-accent-light={colorLight}
  style:--c-accent-focus={colorFocus}
  {...$$restProps}
>
  {#if label}
    <legend class:visually-hidden={hideLabelVisually}>
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const v = getOptionValue(option)}
    {@const checked = v === selectedValue}
    {@const disabled = isOptionDisabled(option)}
    {@const focused = v === focusedValue}
    <label class:focused class:checked class:disabled>
      <input
        type="radio"
        name={id}
        value={v}
        {disabled}
        bind:group={selectedValue}
        on:focus={(e) => {
          if (e.currentTarget.matches(':focus-visible')) {
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
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-sm);
    margin-bottom: var(--s-px-2);
  }

  label {
    display: block;
    cursor: pointer;
    padding: var(--s-px-2);
    background-color: var(--c-accent-light);
    margin: var(--s-px-2) 0;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    white-space: nowrap;

    display: flex;
    align-items: center;

    &.focused {
      @include focus(var(--c-accent-focus));
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
      @include focus(var(--c-accent-focus), var(--c-accent-light));
    }

    &:focus:not(:focus-visible),
    &:focus-visible {
      box-shadow: none;
    }

    &:checked {
      border: 5px solid var(--c-accent);
      background-color: white;
    }
  }
</style>
