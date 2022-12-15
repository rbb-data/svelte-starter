<script lang="ts">
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
   * - `.radio-buttons`: assigned the given id, wrapper element
   * - `.radio-buttons__label`: label
   * - `.radio-buttons__option`: single option, with classes `.focused`,
   *   `.selected` and `.disabled` applied appropriately
   * - `.radio-buttons__input`: radio input
   *
   * @component
   */

  type Option = $$Generic;

  /** globally unique id */
  export let id: string;

  /** list of options */
  export let options: Option[];

  /** label of the input group */
  export let label: string;

  /** currently selected option */
  export let selectedOption: Option;

  /** hides label visually but keep it around for screen readers */
  export let hideLabelVisually = false;

  /** function that maps an option to `true` if disabled */
  export let isOptionDisabled: (option: Option) => boolean = () => false;

  let focusedOption: Option | null = null;
</script>

<fieldset
  {id}
  class:radio-buttons={true}
  class={$$restProps.class}
  style={$$restProps.style}
>
  {#if label}
    <legend
      class="radio-buttons__label"
      class:visually-hidden={hideLabelVisually}
    >
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const checked = option === selectedOption}
    {@const disabled = isOptionDisabled(option)}
    {@const focused = option === focusedOption}
    <label
      class="radio-buttons__option"
      class:focused
      class:checked
      class:selected={checked}
      class:disabled
    >
      <input
        class="radio-buttons__input"
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
  .radio-buttons {
    --_ui-color-accent: var(--ui-color-accent, var(--c-ui-accent-blue));
    --_ui-color-secondary: var(--ui-color-secondary, var(--c-blue-100));

    --c-focus: var(--_ui-color-accent);

    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;

    &__label {
      font-weight: var(--font-weight-semi-bold);
      font-size: var(--font-size-sm);
      margin-bottom: var(--s-px-2);
    }

    &__option {
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

    &__input {
      appearance: none;

      width: 1.2em;
      height: 1.2em;
      margin-right: var(--s-px-2);
      border-radius: 50%;
      border: 1px solid black;

      &:focus {
        outline: none;
      }

      &:checked {
        border: 5px solid var(--_ui-color-accent);
        background-color: white;
      }
    }
  }
</style>
