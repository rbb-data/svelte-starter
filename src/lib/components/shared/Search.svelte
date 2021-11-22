<script lang="ts">
  import fuzzysearch from '$lib/actions/fuzzysearch';

  import type { Suggestion } from '$lib/types';

  export let data: Array<string | Record<string, any>>;
  export let key: string;
  export let format = (d: any): string => d;
  export let nSuggestions = 8;

  export let hideLabel = false;
  export let label = 'Label';
  export let placeholder = 'Placeholder';
  export let highlightSelection = true;

  export let hideResetButton = false;
  export let resetButtonLabel = 'Reset';

  export let hideSubmitButton = false;
  export let submitButtonLabel = 'Submit';

  export let result: string | Record<string, any> | null = null;

  let inputElement: HTMLInputElement;

  let suggestions: Array<Suggestion> = [];
  let highlightedIndex: number | null = null;

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

  function handleSearch(e: CustomEvent<{ suggestions: Array<Suggestion> }>) {
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
    <input
      id="input-search"
      type="search"
      {placeholder}
      autocomplete="off"
      use:fuzzysearch={{ data, key, limit: nSuggestions }}
      on:search={handleSearch}
      bind:this={inputElement}
    />

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

  <div class="suggestions">
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
