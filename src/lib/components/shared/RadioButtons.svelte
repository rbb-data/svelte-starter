<script>
  /**
   * Group of vertically aligned radio buttons.
   *
   * The rendered markup is composed of:
   *
   * - `.radio-buttons`: assigned the given id
   * - `.radio-buttons .label`: only rendered if prop `label` is given
   * - `.radio-buttons .radio-button`: with classes `.focused`, `.checked` and
   *   `.disabled` applied appropriately
   * - `.radio-buttons .radio-button input[type="radio"]`
   * - `.radio-buttons .radio-button <slot />`
   *
   * CSS variables:
   *
   * - `--c-accent`: used for selected radio markers
   * - `--c-light`: used as background color
   * - `--c-focus`: used for the focus ring
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import * as tokens from '$lib/tokens';
  import { cAccentId, c100Id } from '$lib/utils';

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
   * currently selected value
   *
   * @type {any}
   */
  export let selectedValue;

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

  /** @type {any} */
  let focusedValue = null;
</script>

<fieldset
  {id}
  class:radio-buttons={true}
  aria-orientation="vertical"
  style:--c-accent-default={tokens[cAccentId(colorScheme)] || null}
  style:--c-light-default={tokens[c100Id(colorScheme)] || null}
  style:--c-focus-default={tokens[cAccentId(colorScheme)] || null}
  {...$$restProps}
>
  {#if label}
    <legend class="legend" class:visually-hidden={hideLabelVisually}>
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const v = getOptionValue(option)}
    {@const checked = v === selectedValue}
    {@const disabled = isOptionDisabled(option)}
    {@const focused = v === focusedValue}
    <label class="radio-button" class:focused class:checked class:disabled>
      <input
        type="radio"
        name={id}
        value={v}
        {disabled}
        bind:group={selectedValue}
        on:focus={(e) => {
          const node = e.currentTarget;
          if (node.classList.contains('focus-visible')) {
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
  .radio-buttons {
    --_c-accent: var(
      --c-accent,
      var(--c-accent-default, var(--c-ui-accent-blue))
    );
    --_c-light: var(--c-light, var(--c-light-default, var(--c-blue-100)));
    --_c-focus: var(--c-focus, var(--c-focus-default, var(--c-ui-accent-blue)));

    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
  }

  .label {
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-sm);
    margin-bottom: var(--s-px-2);
  }

  .radio-button {
    display: block;
    cursor: pointer;
    padding: var(--s-px-2);
    background-color: var(--_c-light);
    margin: var(--s-px-2) 0;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    white-space: nowrap;

    display: flex;
    align-items: center;

    &.focused {
      @include focus(var(--_c-focus));
    }

    &.disabled {
      cursor: default;
      opacity: 0.3;
    }
  }

  input[type='radio'] {
    appearance: none;

    width: 1.2em;
    height: 1.2em;
    margin-right: var(--s-px-2);
    border-radius: 50%;
    border: 1px solid black;

    &:focus {
      box-shadow: none;
    }

    &:checked {
      border: 5px solid var(--_c-accent);
      background-color: white;
    }
  }
</style>
