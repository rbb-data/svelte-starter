<script>
  /**
   * Group of vertically aligned check boxes.
   *
   * The rendered markup is:
   *
   * ```html
   * <fieldset>
   *   <legend>
   *     <!-- label (if given) -->
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
   * @type {string}
   */
  export let label = undefined;

  /** hides label visually but keeps it around for screen readers */
  export let hideLabelVisually = false;

  /**
   * sets CSS variables `--c-accent`, `--c-light` and `--c-focus` to pre-defined colors
   *
   * @type {'blue' | 'turquoise' | 'purple' | 'yellow' | 'red'}
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

  $: color =
    // @ts-ignore
    customColors.accent || colors['cUiAccent' + capitalize(colorScheme)];
  $: colorLight =
    // @ts-ignore
    customColors.light || colors[`c${capitalize(colorScheme)}100`];
  $: colorFocus = customColors.focus || color;

  /** @type {any} */
  let focusedValue = null;
</script>

<fieldset
  {id}
  aria-orientation="vertical"
  style:--c-accent={color}
  style:--c-light={colorLight}
  style:--c-focus={colorFocus}
  {...$$restProps}
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
    <label class:focused class:checked class:disabled>
      <input
        type="checkbox"
        name={id}
        value={v}
        {disabled}
        bind:group={selectedValues}
        on:focus={(e) => {
          const node = e.currentTarget;
          // @ts-ignore
          const matches = node.matches || node.matchesSelector;

          // some browsers throw a SyntaxError if an invalid
          // (or unsupported) pseudo-selector is used
          try {
            if (matches.call(node, ':focus-visible')) {
              focusedValue = v;
            }
          } catch (error) {
            // if :focus-visibile is not supported, focus in any case
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
    background-color: var(--c-light);
    margin: var(--s-px-2) 0;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
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

  input[type='checkbox'] {
    appearance: none;
    width: 1.2em;
    height: 1.2em;
    background-color: transparent;
    margin-right: var(--s-px-2);
    border: 1px solid currentColor;
    position: relative;

    &:focus {
      @include focus(var(--c-focus), var(--c-light));
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
      background-color: #ffffff;

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
