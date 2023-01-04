<script lang="ts">
  /**
   * Input widget with an associated popup for suggestions.
   *
   * CSS variables:
   *
   * - `--ui-color-accent`: accent color _(default: blue)_
   *
   * The rendered markup is composed of:
   *
   * - `.search`: assigned the given id, wrapper element
   * - `.search__form`: form that wraps the label, input and buttons
   * - `.search__label`: label
   * - `.search__field`: input field that wraps the text input and buttons
   * - `.search__input`: text input
   * - `.search__button-submit`: submit button
   * - `.search__suggestions`: list of suggestions (only visible if expanded)
   * - `.search__suggestion`: with classes `.focused`, `.highlighted` and
   *   `.selected` applied appropriately
   */

  type Suggestion = $$Generic;

  import { tick } from 'svelte';

  import CheckIcon from '$icons/CheckIcon.svelte';
  import SearchIcon from '$icons/SearchIcon.svelte';

  import { getIndexBefore, getIndexAfter } from './helpers';

  /** globally unique id */
  export let id: string;

  /**
   * function that, given a user-specified query string, yields a list of
   * suggestions
   *
   * can either return the list itself or a promise
   */
  export let search: (query: string) => Suggestion[] | Promise<Suggestion[]>;

  /** label of the input field */
  export let label: string;

  /** hides label visually but keeps it around for screen readers */
  export let hideLabelVisually = false;

  /** shown in the input field if empty */
  export let placeholder: string | undefined = undefined;

  /** true, if the popup is currently shown */
  export let isOpen = false;

  /** currently selected value */
  export let selectedSuggestion: Suggestion | undefined;

  /**
   * format an option; if selected, an option is formatted and displayed in the
   * input field (should be the same formatting applied to the options itself)
   */
  export let formatSuggestion: (suggestion: Suggestion) => any = (suggestion) =>
    suggestion;

  let inputElement: HTMLInputElement;
  let inputValue: string;

  let focusedIndex: number | undefined;
  let highlightedIndex: number | undefined;

  let suggestionElements: HTMLElement[] = [];
  let suggestions: Suggestion[] = [];

  function isPromise<T>(r: any): r is Promise<T> {
    return typeof r === 'object' && typeof r.then === 'function';
  }

  $: if (
    !(selectedSuggestion && formatSuggestion(selectedSuggestion) === inputValue)
  ) {
    const result = search(inputValue);

    // search result is a promise
    if (isPromise(result)) {
      result.then((s) => (suggestions = s));
    } else {
      suggestions = result;
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

  function handleKeyDown(e: KeyboardEvent) {
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
      const selectedIndex = suggestions.indexOf(selectedSuggestion as any);

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

  function handleInput() {
    let selectedIndex: number | undefined = suggestions.indexOf(
      selectedSuggestion as any
    );
    if (selectedIndex < 0) selectedIndex = undefined;
    highlightedIndex = selectedIndex || focusedIndex || 0;
  }

  function handleClickOutside(e: MouseEvent) {
    const node = e.target as HTMLElement;
    if (
      node.closest(`#${id}`) ||
      (node.tagName === 'LI' && node.getAttribute('role') === 'option')
    )
      return;
    isOpen = false;
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div
  {id}
  class:search={true}
  class={$$restProps.class}
  style={$$restProps.style}
>
  <form
    class="search__form"
    on:submit|preventDefault={handleSubmit}
    on:keydown={handleKeyDown}
  >
    {#if label}
      <label
        for="{id}__input"
        class="search__label"
        class:visually-hidden={hideLabelVisually}
      >
        {label}
      </label>
    {/if}
    <div class="search__field">
      <input
        id="{id}__input"
        class="search__input | reset"
        role="combobox"
        type="text"
        {placeholder}
        autocomplete="off"
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        enterkeyhint="done"
        aria-haspopup="listbox"
        aria-controls={isOpen ? `${id}__listbox` : null}
        aria-expanded={isOpen}
        aria-autocomplete="list"
        aria-activedescendant={focusedIndex
          ? `${id}--option-${focusedIndex}`
          : null}
        bind:this={inputElement}
        bind:value={inputValue}
        on:input={handleInput}
      />

      <button
        type="submit"
        class="search__button-submit | slant reset"
        data-slant-position="left"
        aria-label="Bestätigen"
      >
        <SearchIcon color="#ffffff" />
      </button>
    </div>
  </form>

  {#if isOpen}
    <ul
      id="{id}__listbox"
      class="search__suggestions | shadow-sm"
      role="listbox"
      aria-orientation="vertical"
    >
      {#each suggestions as suggestion, i}
        {@const focused = focusedIndex === i}
        {@const highlighted = highlightedIndex === i}
        {@const selected = selectedSuggestion === suggestion}
        <!-- svelte-ignore a11y-click-events-have-key-events key events handled by parent -->
        <li
          id="{id}--option-{i}"
          class="search__suggestion"
          role="option"
          class:focused
          class:highlighted
          class:selected
          aria-selected={selected}
          bind:this={suggestionElements[i]}
          on:click={() => {
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
          <slot {suggestion} {selected}>
            {suggestion}
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
  .search {
    --_ui-color-accent: var(--ui-color-accent, var(--c-ui-accent-blue));

    --c-focus: var(--_ui-color-accent);

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

    &__label {
      display: block;
      font-weight: var(--font-weight-semi-bold);
      font-size: var(--font-size-sm);
      margin-bottom: var(--s-px-2);
    }

    &__field {
      position: relative;
    }

    &__input {
      width: 100%;
      padding: var(--padding-v) var(--padding-h);
      background-color: var(--c-ui-gray-100);
      font-size: var(--font-size-base);

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

    &__button-submit {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 54px; /* arbitrary value */
      background-color: var(--_ui-color-accent);
    }

    &__suggestions {
      list-style-type: none;
      padding: 0;
      margin-top: var(--offset);
      position: absolute;
      width: 100%;
      background-color: #ffffff;

      max-height: 200px;
      overflow: auto;
    }

    &__suggestion {
      padding: var(--padding-v) var(--padding-h);
      color: var(--c-ui-gray-400);
      position: relative;

      &.focused {
        --c-focus: var(--c-ui-black);
        @include focus-inset;
        z-index: 1;
      }

      &.selected {
        color: var(--c-ui-black);
      }

      &.highlighted {
        background-color: var(--c-ui-gray-100);
      }
    }
  }
</style>
