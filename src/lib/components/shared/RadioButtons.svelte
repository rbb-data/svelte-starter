<script>
  /**
   * Group of vertically aligned radio buttons.
   *
   * The rendered markup is:
   *
   * ```html
   * <fieldset>
   *   <legend>
   *     <!-- label -->
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
   * Currently selected value, must be returned by `getValue`
   *
   * @type {any}
   */
  export let selectedValue;

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
   * Maps an option to its value
   *
   * @param {(option: any) => any}
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
    {@const checked = v === selectedValue}
    {@const disabled = isDisabled(option)}
    <label class:checked class:disabled>
      <input
        type="radio"
        name={id}
        bind:group={selectedValue}
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

  input[type='radio'] {
    appearance: none;
    background-color: #fff; /* for iOS */

    width: 1.2em;
    height: 1.2em;
    margin-right: var(--s-px-2);
    border-radius: 50%;
    border: 1px solid black;
  }

  input[type='radio']:checked {
    border: 5px solid var(--c-accent);
    background-color: white;
  }
</style>