<script>
  /**
   * Group of horizontally aligned check boxes, rendered as a collection of chips.
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

  import CheckBoxes from './CheckBoxes.svelte';

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
  export let customColor = undefined;

  /**
   * if given, overwrites the light shade of `accentColor`
   *
   * @type {string}
   */
  export let customColorLight = undefined;

  /**
   * if given, overwrites the `accentColor` shade that is used for the focus ring
   *
   * @type {string}
   */
  export let customColorFocus = undefined;

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

  const color = customColor || colors[`c${capitalize(accentColor)}300`];
  const colorFocus =
    customColorFocus || colors['cUiAccent' + capitalize(accentColor)];
</script>

<CheckBoxes
  class="chips"
  aria-orientation="horizontal"
  {id}
  {options}
  {label}
  {hideLabelVisually}
  {accentColor}
  customColor={color}
  {customColorLight}
  customColorFocus={colorFocus}
  {getValue}
  {isDisabled}
  let:option
  let:checked
  bind:selectedValues
>
  <slot {option} {checked} />
</CheckBoxes>

<style lang="scss">
  :global {
    fieldset.chips {
      input[type='checkbox'] {
        @include visually-hidden;
      }

      label {
        display: inline-block;
        width: max-content;
        border-radius: 15px;
        padding: var(--s-px-2) var(--s-px-4);
        color: var(--c-ui-gray-400);
        margin: var(--s-px-2) var(--s-px-2) 0 0;

        &:last-of-type {
          margin-right: 0;
        }

        &.checked {
          background-color: var(--c-accent);
          color: var(--c-ui-gray-500);
        }
      }
    }
  }
</style>
