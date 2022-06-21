<script>
  /**
   * Group of horizontally aligned check boxes, rendered as a collection of chips.
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

  import CheckBoxes from './CheckBoxes.svelte';

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
  {getOptionValue}
  {isOptionDisabled}
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
