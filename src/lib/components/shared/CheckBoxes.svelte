<script>
  /**
   * Group of vertically aligned check boxes.
   *
   * The rendered markup is:
   *
   * ```html
   * <fieldset>
   *   <legend>
   *     <!-- label -->
   *   </legend>
   *   <label>
   *     <input role="checkbox" />
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
   * Globally unique id
   *
   * @type {string}
   */
  export let id;

  /**
   * List of options
   *
   * @type {string[] | Record<any, any>[]}
   */
  export let options;

  /**
   * Currently selected values, all entries must be returned by `getValue`
   *
   * @type {any[]}
   */
  export let selectedValues = [];

  /**
   * Label of the radio group
   *
   * @type {string}
   */
  export let label;

  /** Hide label visually but keep it around for screen readers */
  export let hideLabelVisually = false;

  /**
   * Maps to pre-defined colors (dark and light shade)
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let accentColor = 'blue';

  /**
   * if given, overwrites the dark shade of `accentColor`
   *
   * @type {string}
   */
  export let customColor;

  /**
   * if given, overwrites the light shade of `accentColor`
   *
   * @type {string}
   */
  export let customColorLight;

  /**
   * Maps an option to its value
   *
   * @param {(option: any) => string}
   */
  export let getValue = (option) => option;

  /**
   * disable individual options based on a condition
   *
   * @param {(option: any) => boolean}
   */
  export let isDisabled = () => false;

  $: color = customColor || colors['cUiAccent' + capitalize(accentColor)];
  $: colorLight = customColorLight || colors[`c${capitalize(accentColor)}100`];

  let focusedValue = null;
</script>

<fieldset
  aria-orientation="vertical"
  style:--c-accent={color}
  style:--c-accent-light={colorLight}
  {...$$restProps}
>
  {#if label}
    <legend class:visually-hidden={hideLabelVisually}>
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const v = getValue(option)}
    {@const checked = selectedValues.includes(v)}
    {@const disabled = isDisabled(option)}
    {@const focused = v === focusedValue}
    <label class:focused class:checked class:disabled>
      <input
        type="checkbox"
        name={id}
        value={v}
        {disabled}
        bind:group={selectedValues}
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

  label {
    display: block;
    cursor: pointer;
    padding: var(--s-px-2);
    background-color: var(--c-accent-light);
    margin: var(--s-px-1) 0;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    white-space: nowrap;

    display: flex;
    align-items: center;

    &.focused {
      @include focus(var(--c-accent));
    }

    &.disabled {
      cursor: default;
      opacity: 0.3;
    }
  }

  input[type='checkbox'] {
    appearance: none;
    width: 1.2em;
    height: 1.2em;
    background-color: transparent;
    margin-right: var(--s-px-2);
    border: 1px solid currentColor;
    position: relative;

    &:focus {
      @include focus(var(--c-accent), var(--c-accent-light));
    }

    &:focus:not(:focus-visible),
    &:focus-visible {
      box-shadow: none;
    }

    &:checked {
      background-color: var(--c-accent);
      border: 1px solid var(--c-accent);
    }

    &:checked::before {
      content: '';
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      top: 0;
      height: 50%;
      width: 50%;
      background-color: white;

      @supports (
        clip-path: polygon(15% 50%, 5% 61%, 35% 100%, 90% 0, 75% 0, 34% 75%)
      ) {
        height: 80%;
        width: 80%;
        clip-path: polygon(15% 50%, 5% 61%, 35% 100%, 90% 0, 75% 0, 34% 75%);
      }
    }
  }
</style>
