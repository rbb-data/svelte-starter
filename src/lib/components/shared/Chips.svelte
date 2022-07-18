<script>
  /**
   * Group of horizontally aligned check boxes, rendered as a collection of chips.
   *
   * The rendered markup is composed of:
   *
   * - `.chips .check-boxes`: assigned the given id
   * - `.chips .check-boxes .label`: only rendered if prop `label` is given
   * - `.chips .check-boxes .check-box`: with classes `.focused`, `.checked` and
   *   `.disabled` applied appropriately
   * - `.chips .check-boxes .check-box input[type="checkbox"]`
   * - `.chips .check-boxes .check-box <slot />`
   *
   * CSS variables:
   *
   * - `--c-accent`: used for selected chips
   * - `--c-light`: used as background color
   * - `--c-focus`: used for the focus ring
   *
   * **Note:** The exposed CSS variables can only be passed through the `style`
   * tag. Passing these CSS variables as `--props` has no effect.
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import CheckBoxes from './CheckBoxes.svelte';

  import * as tokens from '$lib/tokens';
  import { c300Id, cAccentId } from '$lib/utils';

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

  /** hides label visually but keep it around for screen readers */
  export let hideLabelVisually = false;

  /**
   * sets CSS variables `--c-accent`, `--c-light` and `--c-focus` to pre-defined colors
   *
   * @type {Exclude<import('$lib/types').AccentColor, 'black'>}
   */
  export let colorScheme = 'blue';

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

  $: color = tokens[c300Id(colorScheme)];
  $: colorFocus = tokens[cAccentId(colorScheme)];
</script>

<div class="chips" {...$$restProps}>
  <CheckBoxes
    aria-orientation="horizontal"
    {id}
    {options}
    {label}
    {hideLabelVisually}
    {colorScheme}
    {getOptionValue}
    {isOptionDisabled}
    --c-accent={color}
    --c-focus={colorFocus}
    let:option
    let:checked
    bind:selectedValues
  >
    <slot {option} {checked} />
  </CheckBoxes>
</div>

<style lang="scss">
  .chips :global {
    .check-boxes input[type='checkbox'] {
      @include visually-hidden;
    }

    .check-box {
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
</style>
