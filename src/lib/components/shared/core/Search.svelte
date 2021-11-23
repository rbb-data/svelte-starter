<script lang="ts">
  import fuzzysearch from '$lib/actions/fuzzysearch';
  import css from '$lib/actions/css';

  import type { Item } from '$lib/actions/fuzzysearch';
  type T = $$Generic<Item>;

  // the data to search through
  export let data: Array<T>;

  // the key to search on if the data is an array of objects
  export let key: string;

  // format a data item for display
  export let format = (d: T): string => d as string;

  // the maximum number of suggestions to display
  export let nSuggestions = 8;

  // the placeholder text to display
  export let placeholder = 'Placeholder';

  // if true, the label is hidden visually (but is still accessible)
  export let hideLabel = false;
  // the label to display
  export let label = 'Label';

  // if true, no reset button is rendered
  export let hideResetButton = false;
  // the reset button label
  export let resetButtonLabel = 'Reset';

  // if true, no submit button is rendered
  export let hideSubmitButton = false;
  // the submit button label
  export let submitButtonLabel = 'Submit';

  // if true, minimal styling is applied to highlight
  // the selected suggestion for debugging purposes;
  // however, this is not recommended for production use
  export let highlightSelection = false;

  // the search result
  export let result: T | null = null;

  let inputElement: HTMLInputElement;

  let suggestions: Array<T> = [];
  let highlightedIndex: number | null = null;

  let inputWidth = 0;

  $: highlightedElement =
    highlightedIndex !== null ? suggestions[highlightedIndex] : null;

  function discardSuggestions() {
    suggestions = [];
    highlightedIndex = null;
  }

  function submit() {
    inputElement.value = format(highlightedElement);
    result = highlightedElement;
    discardSuggestions();
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (highlightedElement === null) return;
    submit();
  }

  function handleReset() {
    result = null;
    discardSuggestions();
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      result = null;
      discardSuggestions();
      return;
    }

    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

    const up = e.key === 'ArrowUp';
    if (
      (up && highlightedIndex === 0) ||
      (!up && highlightedIndex === suggestions.length - 1)
    )
      return;

    up ? highlightedIndex-- : highlightedIndex++;
  }

  function handleSearch(e: CustomEvent<{ suggestions: Array<T> }>) {
    suggestions = e.detail.suggestions;
    highlightedIndex = suggestions.length > 0 ? 0 : null;
  }
</script>

<div class="search">
  <form
    on:submit={handleSubmit}
    on:reset={handleReset}
    on:keydown={handleKeyDown}
  >
    <label class:hidden={hideLabel} for="input-search">{label}</label>
    <div class="input-wrapper" bind:clientWidth={inputWidth}>
      <input
        id="input-search"
        type="search"
        {placeholder}
        autocomplete="off"
        use:fuzzysearch={{ data, key, limit: nSuggestions }}
        on:search={handleSearch}
        bind:this={inputElement}
      />
    </div>

    {#if !hideResetButton}
      {#if $$slots['reset-button']}
        <slot name="reset-button" />
      {:else}
        <button type="reset">{resetButtonLabel}</button>
      {/if}
    {/if}

    {#if !hideSubmitButton}
      {#if $$slots['submit-button']}
        <slot name="submit-button" />
      {:else}
        <button type="submit">{submitButtonLabel}</button>
      {/if}
    {/if}
  </form>

  <div class="suggestions" use:css={{ 'input-width': `${inputWidth}px` }}>
    <ul>
      {#each suggestions as suggestion, i}
        <li
          class:active={i === highlightedIndex}
          class:highlight={highlightSelection}
          on:pointerover={() => (highlightedIndex = i)}
          on:pointerdown={() => submit()}
        >
          {format(suggestion)}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .suggestions {
    position: relative;
  }

  ul {
    width: var(--input-width);
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    background-color: white;
  }

  li.highlight:hover,
  li.highlight.active {
    font-weight: bold;
    cursor: pointer;
  }

  form {
    position: relative;
  }

  .input-wrapper {
    display: inline-block;
  }

  label {
    display: block;
  }

  /* hides label visually but keeps it avaliable
  for screen readers and assistive technology */
  label.hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  /* sensible default for accessible placeholder text */
  input::placeholder {
    color: #767676;
    opacity: 1;
  }

  /* hide clear button in Chrome */
  input[type='search']::-ms-clear,
  input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  /* hide clear button in Safari */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }
</style>
