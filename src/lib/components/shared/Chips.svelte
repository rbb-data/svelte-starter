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

  // @ts-ignore
  const color = customColors.accent || colors[`c${capitalize(colorScheme)}300`];
  const colorFocus =
    // @ts-ignore
    customColors.focus || colors['cUiAccent' + capitalize(colorScheme)];
</script>

<CheckBoxes
  class="chips"
  aria-orientation="horizontal"
  {id}
  {options}
  {label}
  {hideLabelVisually}
  {colorScheme}
  customColors={{ accent: color, light: customColors.light, focus: colorFocus }}
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
