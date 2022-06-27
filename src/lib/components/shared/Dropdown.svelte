<script>
  /**
   * Dropdown menu to select a single value. Optionally, available options can be grouped.
   *
   * @component
   */

  import { tick } from 'svelte';
  import { ascending } from 'd3-array';

  import DropdownIcon from '$icons/Dropdown.svelte';

  import press from '$actions/press';
  import typeahead from '$actions/typeahead';

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
   * currently selected value
   *
   * @type {any}
   */
  export let selectedValue = undefined;

  /**
   * function that maps an option to its value
   *
   * @type {(option: any) => any}
   */
  export let getOptionValue = (option) => option;

  /**
   * function that maps an option to its label
   *
   * @type {(option: any) => any}
   */
  export let getOptionLabel = (option) => option;

  /**
   * function that maps an option to its group; groups are visually separated
   *
   * @type {(option: any) => number}
   */
  export let getOptionGroup = () => 0;

  /** @type {number} */
  let focusedIndex;

  /** @type {HTMLElement} */
  let selectElement;

  /** @type {HTMLElement[]} */
  let optionElements = [];

  // sort options according to their groups
  $: sortedOptions = options
    .slice()
    .sort((a, b) => ascending(getOptionGroup(a), getOptionGroup(b)));

  /** @type {(option: any) => boolean} */
  $: isFirstInGroup = (option) => {
    const index = sortedOptions.findIndex(
      (o) => getOptionValue(o) === getOptionValue(option)
    );
    if (index <= 0) return false;

    const previousOption = sortedOptions[index - 1];
    return getOptionGroup(previousOption) !== getOptionGroup(option);
  };

  $: focusedIndex = selectedValue
    ? options.findIndex((o) => getOptionValue(o) === selectedValue)
    : undefined;

  $: if (
    focusedIndex !== undefined &&
    focusedIndex >= 0 &&
    optionElements[focusedIndex]
  )
    optionElements[focusedIndex].focus();

  /** @param {any} value */
  function selectOption(value) {
    selectedValue = value;
    closePopup();
  }

  function closePopup() {
    isOpen = false;
    selectElement.focus();
  }

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      if (isOpen) isOpen = false;
      else {
        selectedValue = undefined;
        focusedIndex = undefined;
      }
      return;
    }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      isOpen = true;

      tick().then(() => {
        const defaultIndex = e.key === 'ArrowDown' ? 0 : options.length - 1;
        const nextIndex =
          focusedIndex !== undefined ? focusedIndex : defaultIndex;
        focusedIndex = nextIndex;
      });
    }
  }

  /** @param {KeyboardEvent} e */
  function navigateBetweenOptions(e) {
    /** @typedef {'Home' | 'End' | 'ArrowUp' | 'ArrowDown'} AllowedKey */

    /** @param {AllowedKey} keyPressed */
    const getNextIndex = (keyPressed) => {
      switch (keyPressed) {
        case 'Home':
          return 0;
        case 'End':
          return options.length - 1;
        case 'ArrowUp':
          return focusedIndex - 1 >= 0 ? focusedIndex - 1 : focusedIndex;
        case 'ArrowDown':
          return focusedIndex + 1 < options.length
            ? focusedIndex + 1
            : focusedIndex;
      }
    };

    const nextIndex = getNextIndex(/** @type {AllowedKey} */ (e.key));
    focusedIndex = nextIndex;
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
    class="select reset"
    type="button"
    aria-haspopup="listbox"
    aria-controls="{id}--listbox"
    aria-expanded={isOpen}
    bind:this={selectElement}
    use:press={() => {
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
        const option = options.find((o) =>
          getOptionValue(o).toLowerCase().startsWith(input)
        );
        if (!option) return;
        selectedValue = getOptionValue(option);
      },
    }}
    on:keydown={handleKeyDown}
  >
    {#if selectedValue}
      {getOptionLabel(
        options.find((option) => getOptionValue(option) === selectedValue)
      )}
    {:else}
      {placeholder}
    {/if}
    <DropdownIcon />
  </button>

  {#if isOpen}
    <ul
      id="{id}--listbox"
      role="listbox"
      aria-orientation="vertical"
      use:typeahead={{
        handleInput: (input) => {
          const index = options.findIndex((o) =>
            getOptionValue(o).toLowerCase().startsWith(input)
          );
          console.log(input, index);
          if (index < 0) return;
          focusedIndex = index;
        },
      }}
    >
      {#each options as option, i}
        {@const v = getOptionValue(option)}
        {@const selected = selectedValue === v}
        <li
          role="option"
          aria-selected={selected}
          class:selected
          class:separator={isFirstInGroup(option)}
          tabindex={selected || (!selectedValue && i === 0) ? 0 : -1}
          bind:this={optionElements[i]}
          use:press={() => selectOption(v)}
          on:keydown|preventDefault={(e) => {
            if (e.key === 'Escape') {
              closePopup();
              return;
            }

            if (e.key === 'Enter' || e.key === 'Spacebar' || e.key === ' ') {
              selectOption(v);
              return;
            }

            if (['Home', 'End', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
              navigateBetweenOptions(e);
            }
          }}
        >
          <slot {option} {selected} />
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
    font-weight: var(--font-weight-regular);
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

    &:focus-visible {
      @include focus(var(--c-ui-gray-500));
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    box-shadow: var(--shadow-sm);
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

      &:focus-visible {
        @include focus-inset(var(--c-ui-gray-500));
        z-index: 1;
      }

      &.selected,
      &:hover {
        background-color: var(--c-ui-gray-100);
      }

      &.separator::before {
        content: '';
        width: calc(100% - 2 * var(--padding-h) + 2 * var(--s-px-1));
        height: 1px;
        background-color: var(--c-ui-gray-400);
        position: absolute;
        top: 0;
        left: calc(var(--padding-h) - var(--s-px-1));
      }
    }
  }

  :global {
    .select {
      svg {
        width: var(--icon-size);
        height: var(--icon-size);
        position: absolute;
        top: 50%;
        right: var(--icon-padding-right);
        transform: translateY(-50%);
      }

      &[aria-expanded='true'] svg {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
</style>
