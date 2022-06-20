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

  $: color = colors['cUiAccent' + capitalize(accentColor)];
  $: colorLight = colors[`c${capitalize(accentColor)}100`];
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
    <label class:checked class:disabled>
      <input
        type="checkbox"
        name={id}
        bind:group={selectedValues}
        value={v}
        {disabled}
      />
      <slot {option} {checked} />
    </label>
  {/each}
</fieldset>

<style>
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
  }

  label.disabled {
    cursor: default;
    opacity: 0.3;
  }

  input[type='checkbox'] {
    appearance: none;
    width: 1.2em;
    height: 1.2em;
    background-color: transparent;
    margin-right: var(--s-px-2);
    border: 1px solid currentColor;
    position: relative;
  }

  input[type='checkbox']:checked {
    background-color: var(--c-accent);
    border: 1px solid var(--c-accent);
  }

  input[type='checkbox']:checked::before {
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
  }

  @supports (
    clip-path: polygon(15% 50%, 5% 61%, 35% 100%, 90% 0, 75% 0, 34% 75%)
  ) {
    input[type='checkbox']:checked::before {
      height: 80%;
      width: 80%;
      clip-path: polygon(15% 50%, 5% 61%, 35% 100%, 90% 0, 75% 0, 34% 75%);
    }
  }
</style>
