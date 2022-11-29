<script>
  /**
   * Group of vertically aligned radio buttons.
   *
   * CSS variables:
   *
   * - `--ui-color-accent`: accent color _(default: blue)_
   * - `--ui-color-secondary`: secondary color _(default: light blue)_
   *
   * The rendered markup is composed of:
   *
   * - `.radio-buttons`: assigned the given id
   * - `.radio-buttons legend`
   * - `.radio-buttons .radio-button`: with classes `.focused`, `.selected` and
   *   `.disabled` applied appropriately
   * - `.radio-buttons .radio-button input[type="radio"]`
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

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
   * label of the input group
   *
   * @type {string}
   */
  export let label;

  /**
   * currently selected value
   *
   * @type {any}
   */
  export let selectedOption;

  /** hides label visually but keep it around for screen readers */
  export let hideLabelVisually = false;

  /**
   * function that maps an option to `true` if disabled
   *
   * @type {(option: any) => boolean}
   */
  export let isOptionDisabled = () => false;

  // $: color = customColors.accent || tokens[cAccentId(colorScheme)];
  // $: colorLight = customColors.light || tokens[c100Id(colorScheme)];
  // $: colorFocus = customColors.focus || color;

  /** @type {any} */
  let focusedOption = null;
</script>

<fieldset {id} class:radio-buttons={true} class={$$restProps.class}>
  {#if label}
    <legend class:visually-hidden={hideLabelVisually}>
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const checked = option === selectedOption}
    {@const disabled = isOptionDisabled(option)}
    {@const focused = option === focusedOption}
    <label
      class="radio-button"
      class:focused
      class:checked
      class:selected={checked}
      class:disabled
    >
      <input
        type="radio"
        name={id}
        value={option}
        {disabled}
        bind:group={selectedOption}
        on:focus={(e) => {
          const node = e.currentTarget;
          if (node.classList.contains('focus-visible')) {
            focusedOption = option;
          }
        }}
        on:blur={() => (focusedOption = null)}
      />
      <slot {option} selected={checked}>
        {option}
      </slot>
    </label>
  {/each}
</fieldset>

<style lang="scss">
  fieldset {
    --_ui-color-accent: var(--ui-color-accent, var(--c-ui-accent-blue));
    --_ui-color-secondary: var(--ui-color-secondary, var(--c-blue-100));

    --c-focus: var(--_ui-color-accent);

    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
  }

  legend {
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-sm);
    margin-bottom: var(--s-px-2);
  }

  label {
    display: block;
    padding: var(--s-px-2);
    background-color: var(--_ui-color-secondary);
    margin: var(--s-px-2) 0;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semi-bold);
    white-space: nowrap;

    display: flex;
    align-items: center;

    &.focused {
      @include focus;
    }

    &.disabled {
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
      border: 5px solid var(--_ui-color-accent);
      background-color: white;
    }
  }
</style>
