<script>
  /**
   * Dropdown menu to select a single value
   *
   * The rendered markup is composed of:
   *
   * - `.dropdown`: assigned the given id
   * - `.dropdown button[role="combobox"]`
   * - `.dropdown .options`: assigned the id `{id}--listbox`, inferred from the given id
   * - `.dropdown .options .option`: with class `.selected` applied appropriately
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * @component
   */

  import { tick } from 'svelte';

  import DropdownIcon from '$icons/Dropdown.svelte';
  import CheckIcon from '$icons/Check.svelte';

  import press from '$actions/press';
  import typeahead from '$actions/typeahead';
  import { getIndexBefore, getIndexAfter } from '$lib/utils';

  /**
   * globally unique id
   *
   * @type {string}
   */
  export let id;

  /**
   * list of options to choose from
   *
   * @type {any[]}
   */
  export let options;

  /**
   * text rendered when no option is selected
   *
   * @type {string}
   */
  export let placeholder;

  /** true, if the popup is currently shown */
  export let isOpen = false;

  /**
   * currently selected item
   *
   * @type {any}
   */
  export let selectedOption = undefined;

  /**
   * format an option; a selected option is formatted and displayed in the
   * combobox (should be the same formatting applied to the options itself)
   *
   * @type {(option: any) => any}
   */
  export let formatOption = (option) => option;

  /** if true, disables the input accessibly */
  export let disabled = false;

  /** @type {number | undefined} */
  let focusedIndex;

  /** @type {HTMLElement} */
  let selectElement;

  /** @type {HTMLElement[]} */
  let optionElements = [];

  $: focusedIndex = selectedOption
    ? options.indexOf(selectedOption)
    : undefined;

  $: if (
    focusedIndex !== undefined &&
    focusedIndex >= 0 &&
    optionElements[focusedIndex]
  )
    optionElements[focusedIndex].focus();

  /** @param {any} value */
  function selectOption(value) {
    selectedOption = value;
    closePopup();
  }

  function closePopup() {
    isOpen = false;
    selectElement.focus();
  }

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
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
</script>

<svelte:window
  on:click={(e) => {
    const node = /** @type {HTMLElement} */ (e.target);
    if (
      node === selectElement ||
      (node.tagName === 'LI' && node.getAttribute('role') === 'option')
    )
      return;
    isOpen = false;
  }}
/>

<div {id} class="dropdown">
  <button
    role="combobox"
    class="[ select ] [ reset ]"
    type="button"
    aria-haspopup="listbox"
    aria-controls={isOpen ? `${id}--listbox` : null}
    aria-expanded={isOpen}
    aria-autocomplete="none"
    aria-disabled={disabled}
    disabled={false}
    bind:this={selectElement}
    use:press={() => {
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
      id="{id}--listbox"
      class="[ options ] [ shadow-sm ]"
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
          class="option"
          role="option"
          aria-selected={selected}
          class:selected
          tabindex={selected || (!selectedOption && i === 0) ? 0 : -1}
          bind:this={optionElements[i]}
          use:press={() => selectOption(option)}
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
          <slot {option} {selected} />
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

    width: 100%;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);

    :global(.select.focus-visible) {
      --c-focus: var(--c-ui-gray-500);
      @include focus;
    }

    :global([role='listbox'] [role='option'].focus-visible) {
      --c-focus: var(--c-ui-gray-500);
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

  .select {
    --padding-r: calc(
      var(--icon-size) + var(--icon-padding-left) + var(--icon-padding-right)
    );

    width: 100%;
    padding: var(--padding-v) var(--padding-r) var(--padding-v) var(--padding-h);
    background-color: var(--c-ui-gray-100);
    cursor: pointer;
    position: relative;

    &[aria-expanded='true'] :global(svg) {
      transform: translateY(-50%) rotate(180deg);
    }

    &[aria-disabled='true'] {
      cursor: default;
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

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: var(--offset);
    position: absolute;
    width: 100%;
    background-color: #ffffff;

    max-height: 200px;
    overflow: auto;

    li {
      padding: var(--padding-v) var(--padding-h);
      color: var(--c-ui-gray-400);
      cursor: pointer;
      position: relative;

      &.selected {
        color: var(--c-ui-gray-500);
      }

      &:hover {
        background-color: var(--c-ui-gray-100);
      }
    }
  }
</style>
