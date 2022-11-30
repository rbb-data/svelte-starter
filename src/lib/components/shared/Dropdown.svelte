<script lang="ts">
  /**
   * Dropdown menu to select a single value
   *
   * The rendered markup is composed of:
   *
   * - `.dropdown`: assigned the given id, wrapper element
   * - `.dropdown__field`: clickable field
   * - `.dropdown__options`: list of options (only visible if expanded)
   * - `.dropdown__option`: with class `.selected` applied appropriately
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import { tick } from 'svelte';

  import DropdownIcon from '$icons/DropdownIcon.svelte';
  import CheckIcon from '$icons/CheckIcon.svelte';

  import typeahead from '$lib/actions/typeahead';
  import { getIndexBefore, getIndexAfter } from './helpers';

  type Option = $$Generic;

  /** globally unique id */
  export let id: string;

  /** visually hidden label */
  export let label: string;

  /** list of options to choose from */
  export let options: Option[];

  /** text rendered when no option is selected */
  export let placeholder: string;

  /** hides label visually but keep it around for screen readers */
  export let hideLabelVisually = false;

  /** currently selected option */
  export let selectedOption: Option | undefined = undefined;

  /** true, if the popup is currently shown */
  export let isOpen = false;

  /**
   * format an option; a selected option is formatted and displayed in the
   * combobox (should be the same formatting applied to the options itself)
   */
  export let formatOption: (option: Option) => any = (option) => option;

  /** if true, disables the input accessibly */
  export let disabled = false;

  let focusedIndex: number | undefined;

  let selectElement: HTMLElement;

  let optionElements: HTMLElement[] = [];

  $: focusedIndex = selectedOption
    ? options.indexOf(selectedOption)
    : undefined;

  $: if (
    focusedIndex !== undefined &&
    focusedIndex >= 0 &&
    optionElements[focusedIndex]
  )
    optionElements[focusedIndex].focus();

  function selectOption(value: Option) {
    selectedOption = value;
    closePopup();
  }

  function closePopup() {
    isOpen = false;
    selectElement.focus();
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (disabled) return;

    if (e.key === 'Escape') {
      if (isOpen) isOpen = false;
      else {
        selectedOption = undefined;
        focusedIndex = undefined;
      }
      return;
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      isOpen = true;

      tick().then(() => {
        const defaultIndex = e.key === 'ArrowDown' ? 0 : options.length - 1;
        const nextIndex =
          focusedIndex !== undefined ? focusedIndex : defaultIndex;
        focusedIndex = nextIndex;
      });
    }
  }

  function handleClickOutside(e: MouseEvent) {
    const node = e.target as HTMLElement;
    if (
      node === selectElement ||
      (node.tagName === 'LI' && node.getAttribute('role') === 'option')
    )
      return;
    isOpen = false;
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div {id} class="dropdown">
  <div
    id="{id}__label"
    class="dropdown__label"
    class:visually-hidden={hideLabelVisually}
  >
    {label}
  </div>
  <button
    role="combobox"
    class="[ dropdown__field ] [ reset ]"
    type="button"
    aria-haspopup="listbox"
    aria-controls={isOpen ? `${id}__listbox` : null}
    aria-expanded={isOpen}
    aria-autocomplete="none"
    aria-disabled={disabled}
    aria-labelledby="{id}__label"
    disabled={false}
    bind:this={selectElement}
    on:click={() => {
      if (disabled) return;
      isOpen = !isOpen;
      if (isOpen) {
        tick().then(() => {
          const nextIndex = focusedIndex || 0;
          focusedIndex = nextIndex;
        });
      }
    }}
    use:typeahead={{
      handleInput: (input) => {
        if (disabled) return;
        const option = options.find((o) =>
          formatOption(o).toLowerCase().startsWith(input)
        );
        if (!option) return;
        selectedOption = option;
      },
    }}
    on:keydown={handleKeyDown}
  >
    {#if selectedOption}
      {formatOption(selectedOption)}
    {:else}
      {placeholder}
    {/if}
    <DropdownIcon />
  </button>

  {#if isOpen}
    <ul
      id="{id}__listbox"
      class="[ dropdown__options ] [ shadow-sm ]"
      role="listbox"
      aria-orientation="vertical"
      use:typeahead={{
        handleInput: (input) => {
          const index = options.findIndex((o) =>
            formatOption(o).toLowerCase().startsWith(input)
          );
          if (index < 0) return;
          focusedIndex = index;
        },
      }}
    >
      {#each options as option, i}
        {@const selected = selectedOption === option}
        <li
          class="dropdown__option"
          role="option"
          aria-selected={selected}
          class:selected
          tabindex={selected || (!selectedOption && i === 0) ? 0 : -1}
          bind:this={optionElements[i]}
          on:click={() => selectOption(option)}
          on:keydown|preventDefault={(e) => {
            switch (e.key) {
              case 'Escape':
                closePopup();
                return;
              case 'Enter':
              case 'Spacebar':
              case ' ':
                selectOption(option);
                return;
              case 'Home':
                focusedIndex = 0;
                return;
              case 'End':
                focusedIndex = options.length - 1;
            }

            if (focusedIndex === undefined) {
              focusedIndex = 0;
              return;
            }

            const getNextIndex =
              e.key === 'ArrowUp' ? getIndexBefore : getIndexAfter;
            focusedIndex = getNextIndex(focusedIndex, options.length);
          }}
        >
          <slot {option} {selected}>
            {option}
          </slot>
          {#if selected}
            <CheckIcon />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .dropdown {
    --padding-v: var(--s-px-2);
    --padding-h: var(--s-px-4);
    --icon-size: 1.6em;
    --icon-padding-right: var(--s-px-4);
    --icon-padding-left: var(--s-px-2);
    --offset: var(--s-px-2);

    --c-focus: var(--c-ui-black);

    width: 100%;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);

    &__label {
      font-weight: var(--font-weight-semi-bold);
      font-size: var(--font-size-sm);
      margin-bottom: var(--s-px-2);
    }

    &__field {
      --padding-r: calc(
        var(--icon-size) + var(--icon-padding-left) + var(--icon-padding-right)
      );

      width: 100%;
      padding: var(--padding-v) var(--padding-r) var(--padding-v)
        var(--padding-h);
      background-color: var(--c-ui-gray-100);
      position: relative;

      &[aria-expanded='true'] :global(svg) {
        transform: translateY(-50%) rotate(180deg);
      }

      &[aria-disabled='true'] {
        color: rgba(0, 0, 0, 0.3);
        background-color: rgba(
          235,
          235,
          235,
          0.3
        ); /* var(--c-ui-gray-100) with opacity 0.3 */

        :global(svg) {
          opacity: 0.3;
        }
      }
    }

    &__options {
      list-style-type: none;
      padding: 0;
      margin-top: var(--offset);
      position: absolute;
      width: 100%;
      background-color: #ffffff;

      max-height: 200px;
      overflow: auto;
    }

    &__option {
      padding: var(--padding-v) var(--padding-h);
      color: var(--c-ui-gray-400);
      position: relative;

      &.selected {
        color: var(--c-ui-black);
      }

      &:hover {
        background-color: var(--c-ui-gray-100);
      }
    }

    :global(.dropdown__option.focus-visible) {
      @include focus-inset;
      z-index: 1;
    }

    :global(svg) {
      width: var(--icon-size);
      height: var(--icon-size);
      position: absolute;
      top: 50%;
      right: var(--icon-padding-right);
      transform: translateY(-50%);
    }
  }
</style>
