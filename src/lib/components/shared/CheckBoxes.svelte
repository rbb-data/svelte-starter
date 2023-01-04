<script lang="ts">
  /**
   * Group of vertically aligned check boxes.
   *
   * CSS variables:
   *
   * - `--ui-color-accent`: accent color _(default: blue)_
   * - `--ui-color-secondary`: secondary color _(default: light blue)_
   *
   * Classes:
   *
   * - `.chips`: apply to style as inline chips
   *
   * The rendered markup is composed of:
   *
   * - `.check-boxes`: assigned the given id, wrapper element
   * - `.check-boxes__label`: label
   * - `.check-boxes__option`: single option, with classes `.focused`, `.selected`
   *   and `.disabled` applied appropriately
   * - `.check-boxes__input`: checkbox input
   */

  type Option = $$Generic;

  /** globally unique id */
  export let id: string;

  /** list of options */
  export let options: Option[];

  /** label of the input group */
  export let label: string;

  /** currently selected options */
  export let selectedOptions: Option[] = [];

  /** hides label visually but keeps it around for screen readers */
  export let hideLabelVisually = false;

  /** function that maps an option to `true` if disabled */
  export let isOptionDisabled: (option: Option) => boolean = () => false;

  // currently focused option
  let focusedOption: Option | null = null;
</script>

<fieldset
  {id}
  class:check-boxes={true}
  class={$$restProps.class}
  style={$$restProps.style}
>
  {#if label}
    <legend
      class="check-boxes__label"
      class:visually-hidden={hideLabelVisually}
    >
      {label}
    </legend>
  {/if}
  {#each options as option}
    {@const checked = selectedOptions.includes(option)}
    {@const disabled = isOptionDisabled(option)}
    {@const focused = option === focusedOption}
    <label
      class="check-boxes__option"
      class:focused
      class:checked
      class:selected={checked}
      class:disabled
    >
      <input
        class="check-boxes__input"
        type="checkbox"
        name={id}
        value={option}
        {disabled}
        bind:group={selectedOptions}
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
  .check-boxes {
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
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-semi-bold);
      white-space: nowrap;

      + .check-boxes__option {
        margin-top: var(--s-px-2);
      }

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
      border-radius: 0;
      width: 1.2em;
      height: 1.2em;
      background-color: transparent;
      margin-right: var(--s-px-2);
      border: 1px solid currentColor;
      position: relative;

      &:focus {
        outline: none;
      }

      &:checked {
        background-color: var(--_ui-color-accent);
        border: 1px solid var(--_ui-color-accent);
      }

      &:checked::before {
        // cspell:disable-next-line
        content: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' style='fill:white;fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2'%3E%3Cpath style='fill:none' d='M0 0h32v32H0z'/%3E%3Cpath d='M14.078 18.772 9.6 12.8l-3.2 2.4L13 24h2.133l10.461-13.791-3.187-2.417-8.329 10.98Z'/%3E%3C/svg%3E");
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) translate(0.5px, 2px);
      }
    }
  }

  // render check boxes as chips
  .chips {
    --_ui-color-accent: var(--ui-color-accent, var(--c-blue-300));
    --c-focus: var(--ui-color-accent, var(--c-ui-accent-blue));

    .check-boxes__option {
      display: inline-block;
      width: max-content;
      border-radius: 2em;
      padding: var(--s-px-2) var(--s-px-4);
      color: var(--c-ui-gray-400);
      margin: var(--s-px-2) var(--s-px-2) 0 0;

      &:last-of-type {
        margin-right: 0;
      }

      &.selected {
        background-color: var(--_ui-color-accent);
        color: var(--c-ui-black);
      }
    }

    .check-boxes__input {
      @include visually-hidden;
    }
  }
</style>
