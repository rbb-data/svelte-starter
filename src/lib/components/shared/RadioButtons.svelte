<script>
  /**
   * Group of vertically aligned radio buttons.
   *
   * The rendered markup is:
   *
   * ```html
   * <div role="radiogroup">
   *   <label>
   *     <input role="radio" />
   *     <!-- slot -->
   *   </label>
   * </div>
   * ```
   *
   * **Make sure give the radio group an appropriate label.**
   *
   * @component
   */

  import * as colors from '$lib/tokens';
  import { capitalize } from '$lib/utils';
  import css from '$lib/actions/css';

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
   * @type {string}
   */
  export let selectedValue;

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

  $: color = colors['cUiAccent' + capitalize(accentColor)];
  $: colorLight = colors[`c${capitalize(accentColor)}100`];
</script>

<div
  role="radiogroup"
  aria-orientation="vertical"
  style:--c-accent={color}
  style:--c-accent-light={colorLight}
  {...$$restProps}
>
  {#each options as option}
    {@const v = getValue(option)}
    {@const isChecked = v === selectedValue}
    <label class:checked={isChecked}>
      <input type="radio" name={id} bind:group={selectedValue} value={v} />
      <slot {option} checked={isChecked} />
    </label>
  {/each}
</div>

<style>
  [role='radiogroup'] {
    width: 100%;
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

  input[type='radio'] {
    appearance: none;
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
