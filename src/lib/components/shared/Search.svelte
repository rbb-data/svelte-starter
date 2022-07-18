<script>
  /**
   * Input widget with an associated popup for suggestions.
   *
   * The rendered markup is composed of:
   *
   * - `.search`: assigned the given id
   * - `.search form`
   * - `.search form label`
   * - `.search form .input-wrapper`
   * - `.search form .input-wrapper input[role="combobox"]`: assigned the id
   *   `{id}--input`, inferred from the given id
   * - `.search form .input-wrapper button[type="submit"]`
   * - `.search .suggestions`: assigned the id `{id}--listbox`, inferred from the given id
   * - `.search .suggestions .suggestion`: with classes `.focused`, `.highlighted`
   *   and `.selected` applied appropriately
   *
   * **Note:** The focus ring is implemented via `box-shadow`.
   *
   * **Note:** The slant makes the search button overflow but `overflow: hidden`
   * can't be used on the container element as that would cut off the focus
   * ring. Instead, a pseudo element is rendered that hides the overflowing
   * content. Its color defaults to white but can be overwritten by setting the
   * CSS variable `--c-background`.
   *
   * @component
   */

  import { tick } from 'svelte';

  import CheckIcon from '$icons/Check.svelte';
  import SearchIcon from '$icons/Search.svelte';

  import press from '$actions/press';
  import * as tokens from '$lib/tokens';
  import { cAccentId, getIndexBefore, getIndexAfter } from '$lib/utils';

  /**
   * globally unique id
   *
   * @type {string}
   */
  export let id;

  /**
   * function that, given a user-specfied query string, yields a list of suggestions
   *
   * can either return the list itself or a promise
   *
   * @type {(query: string) => any[] | Promise<any[]>}
   */
  export let search;

  /**
   * shown in the input field if empty
   *
   * @type {string | undefined}
   */
  export let placeholder = undefined;

  /** true, if the popup is currently shown */
  export let isOpen = false;

  /**
   * currently selected value
   *
   * @type {any}
   */
  export let selectedSuggestion;

  /**
   * format an option; if selected, an option is formatted and displayed in the
   * input field (should be the same formatting applied to the options itself)
   *
   * @type {(suggestion: any) => any}
   */
  export let formatSuggestion = (suggestion) => suggestion;

  /**
   * accent color used for the button and the focus ring
   *
   * @type {Exclude<import('$lib/types').AccentColor, 'black'>}
   */
  export let accentColor = 'blue';

  /**
   * label of the input field
   *
   * **note:** if not provided, `aria-labelledby` or `aria-label` must be used instead
   *
   * @type {string | undefined}
   */
  export let label = undefined;

  /** hides label visually but keeps it around for screen readers */
  export let hideLabelVisually = false;

  /**
   * ARIA attributes
   *
   * @type {{
   *   label?: string;
   *   labelledby?: string;
   *   describedby?: string;
   * }}
   */
  export let aria = {};

  /** @type {HTMLInputElement} */
  let inputElement;

  /** @type {string} */
  let inputValue;

  /** @type {number | undefined} */
  let focusedIndex;

  /** @type {number | undefined} */
  let highlightedIndex;

  /** @type {HTMLElement[]} */
  let suggestionElements = [];

  $: color = tokens[cAccentId(accentColor)];

  /** @type {any[]} */
  let suggestions = [];

  $: if (
    !(selectedSuggestion && formatSuggestion(selectedSuggestion) === inputValue)
  ) {
    const result = search(inputValue);

    // search result is a promise
    if (
      typeof result === 'object' &&
      typeof (/** @type {any} */ (result).then) === 'function'
    ) {
      /** @type {Promise<any[]>} */ (result).then((s) => (suggestions = s));
    } else {
      suggestions = /** @type {any[]} */ (result);
    }
  }

  $: isOpen = suggestions.length > 0;
  $: if (!isOpen) focusedIndex = undefined;
  $: if (!inputValue) discardSuggestions();

  $: highlightedIndex = focusedIndex;

  // focus selected option briefly to make sure it is scrolled into view
  $: if (focusedIndex !== undefined && suggestionElements[focusedIndex]) {
    const element = suggestionElements[focusedIndex];
    element.tabIndex = 0;
    suggestionElements[focusedIndex].focus();
    inputElement.focus();
    element.tabIndex = -1;
  }

  function discardSuggestions() {
    suggestions = [];
    focusedIndex = undefined;
  }

  function submit() {
    if (highlightedIndex === undefined) return;
    selectedSuggestion = suggestions[highlightedIndex];
    inputValue = formatSuggestion(selectedSuggestion);
    tick().then(discardSuggestions);
  }

  function handleSubmit() {
    submit();
  }

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      selectedSuggestion = undefined;
      discardSuggestions();
    }

    if (!['Home', 'End', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
    if (suggestions.length === 0) return;

    e.preventDefault();

    if (focusedIndex === undefined) {
      if (e.key === 'Home' || e.key === 'End') {
        focusedIndex = e.key === 'Home' ? 0 : suggestions.length - 1;
        return;
      }

      // find the currently selected value in the list of suggestions
      const selectedIndex = suggestions.indexOf(selectedSuggestion);

      if (!selectedSuggestion || selectedIndex < 0) {
        focusedIndex = e.key === 'ArrowDown' ? 0 : suggestions.length - 1;
      } else {
        focusedIndex = selectedSuggestion ? selectedIndex : undefined;
      }
    } else {
      const getNextIndex = e.key === 'ArrowUp' ? getIndexBefore : getIndexAfter;
      focusedIndex = getNextIndex(focusedIndex, suggestions.length);
    }
  }
</script>

<svelte:window
  on:click={(e) => {
    const node = /** @type {HTMLElement} */ (e.target);
    if (
      node.closest(`#${id}`) ||
      (node.tagName === 'LI' && node.getAttribute('role') === 'option')
    )
      return;
    isOpen = false;
  }}
/>

<div {id} class="search" style:--c-accent={color}>
  <form on:submit|preventDefault={handleSubmit} on:keydown={handleKeyDown}>
    {#if label}
      <label for="{id}--input" class:g-visually-hidden={hideLabelVisually}>
        {label}
      </label>
    {/if}
    <div class="input-wrapper">
      <input
        id="{id}--input"
        role="combobox"
        type="search"
        class="g-reset"
        {placeholder}
        autocomplete="off"
        aria-haspopup="listbox"
        aria-controls={isOpen ? `${id}--listbox` : null}
        aria-expanded={isOpen}
        aria-autocomplete="list"
        aria-activedescendant={focusedIndex
          ? `${id}--option-${focusedIndex}`
          : null}
        bind:this={inputElement}
        bind:value={inputValue}
        on:input={() => {
          /** @type {number | undefined} */
          let selectedIndex = suggestions.indexOf(selectedSuggestion);
          if (selectedIndex < 0) selectedIndex = undefined;
          highlightedIndex = selectedIndex || focusedIndex || 0;
        }}
        aria-label={aria.label}
        aria-labelledby={aria.labelledby}
        aria-describedby={aria.describedby}
      />

      <button type="submit" class="g-reset" aria-label="Bestätigen">
        <SearchIcon color="#ffffff" />
      </button>
    </div>
  </form>

  {#if isOpen}
    <ul
      id="{id}--listbox"
      class="suggestions"
      role="listbox"
      aria-orientation="vertical"
    >
      {#each suggestions as suggestion, i}
        {@const focused = focusedIndex === i}
        {@const highlighted = highlightedIndex === i}
        {@const selected = selectedSuggestion === suggestion}
        <li
          id="{id}--option-{i}"
          class="suggestion"
          role="option"
          class:focused
          class:highlighted
          class:selected
          aria-selected={selected}
          bind:this={suggestionElements[i]}
          use:press={() => {
            focusedIndex = i;
            submit();
            inputElement.focus();
          }}
          on:mouseenter={() => (highlightedIndex = i)}
          on:mouseleave={() => (highlightedIndex = undefined)}
          on:touchstart={() => (highlightedIndex = i)}
          on:touchend={() => (highlightedIndex = undefined)}
          on:touchcancel={() => (highlightedIndex = undefined)}
        >
          <slot {suggestion} {selected} />
          {#if selected}
            <CheckIcon />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .search {
    --c-background: #ffffff;
    --padding-v: var(--s-px-2);
    --padding-h: var(--s-px-4);
    --icon-size: 1.6em;
    --icon-padding: var(--s-px-4);
    --offset: var(--s-px-2);

    width: 100%;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semi-bold);

    :global(svg) {
      width: var(--icon-size);
      height: var(--icon-size);
      position: absolute;
      top: 50%;
      right: var(--icon-padding);
      transform: translateY(-50%);
    }
  }

  .input-wrapper {
    position: relative;

    /* can't use `overflow: hidden` here since that would cut off the focus ring;
    instead, two pseudo elements are rendered above the overflowing content on both sides  */

    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 12px; /* arbitrary value, depends on the degree of skewing */
      height: calc(
        100% + 8px
      ); /* height plus focus ring on top and bottom (2*4px) */
      background-color: var(--c-background);
      z-index: 2;
      right: 0;
      transform: translate(100%, -4px);
    }
  }

  input[type='search'] {
    width: 100%;
    padding: var(--padding-v) var(--padding-h);
    background-color: var(--c-ui-gray-100);
    font-size: var(--font-size-base);

    :global(&.focus-visible) {
      @include focus(var(--c-accent));
    }

    &::placeholder {
      color: var(--c-ui-gray-400);
      opacity: 1;
      font-style: italic;
      font-size: var(--font-size-sm);
    }

    /* hide clear button in Chrome */
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* hide clear button in Safari */
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }

  label {
    display: block;
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-sm);
    margin-bottom: var(--s-px-2);
  }

  button[type='submit'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 54px; /* arbitrary value */
    transform: skew(-10deg);
    transform-origin: bottom;
    background-color: var(--c-accent);
    cursor: pointer;

    :global(svg) {
      transform: translateY(-50%) skew(10deg);
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

      &.focused {
        @include focus-inset(var(--c-ui-gray-500));
        z-index: 1;
      }

      &.selected {
        color: var(--c-ui-gray-500);
      }

      &.highlighted {
        background-color: var(--c-ui-gray-100);
      }
    }
  }
</style>
