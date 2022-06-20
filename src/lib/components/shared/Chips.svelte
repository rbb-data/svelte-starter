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
   * Maps to a pre-defined color
   *
   * @type {'blue' | 'beige' | 'turquoise' | 'purple' | 'yellow' | 'red'}
   */
  export let accentColor = 'blue';

  /**
   * Maps a option to its value
   *
   * @param {(option: any) => string}
   */
  export let getValue = (option) => option;

  /**
   * disable individual options
   *
   * @param {(option: any) => boolean}
   */
  export let isDisabled = () => false;
</script>

<CheckBoxes
  class="chips"
  aria-orientation="horizontal"
  {id}
  {options}
  {label}
  {hideLabelVisually}
  {accentColor}
  {getValue}
  {isDisabled}
  let:option
  let:checked
  bind:selectedValues
>
  <slot {option} {checked} />
</CheckBoxes>

<style>
  :global(fieldset.chips input[type='checkbox']) {
    /* TODO: @include visually-hidden */
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  :global(fieldset.chips label) {
    display: inline-block;
    width: max-content;
    border-radius: 15px;
    padding: var(--s-px-2) var(--s-px-4);
    color: var(--c-ui-gray-400);
  }

  :global(fieldset.chips label + label) {
    margin-left: var(--s-px-2);
  }

  :global(fieldset.chips label.checked) {
    background-color: var(--c-accent);
    color: var(--c-ui-gray-500);
  }
</style>
