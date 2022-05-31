<script>
  /**
   * `Search` implements an input field that facilitates searching. The setup
   * includes a reset and submit button as well as the necessary event
   * management for an accessible search experience.
   *
   * @component
   */

  import css from '$lib/actions/css';
  import { px } from '$lib/utils';

  /** @typedef {any} Item */
  /** @typedef {Record<string, any>} SearchConfig */

  /**
   * Svelte action to perform search on key strokes; must expose a custom event
   * `search` of type `CustomEvent<{ suggestions: Array<Item> }>`
   *
   * @type {(node: HTMLInputElement, options: SearchConfig) => any}
   */
  export let search;

  /**
   * options for the search action
   *
   * @type {SearchConfig}
   */
  export let searchConfig = undefined;

  /**
   * format suggestion for display
   *
   * @type {(d: Item) => string}
   */
  export let format = (d) => d;

  /** the placeholder text to display */
  export let placeholder = 'Placeholder';

  /** if true, the label is hidden visually (but is still accessible) */
  export let hideLabel = false;

  /** the label to display */
  export let label = 'Label';

  /** if true, no reset button is rendered */
  export let hideResetButton = false;

  /** the reset button label */
  export let resetButtonLabel = 'Reset';

  /** if true, no submit button is rendered */
  export let hideSubmitButton = false;

  /** the submit button label */
  export let submitButtonLabel = 'Submit';

  /**
   * the search result
   *
   * @type {Item}
   * @exposed
   */
  export let result = null;

  /**
   * if true, minimal styling is applied to highlight the selected suggestion
   * for debugging purposes; however, this is not recommended for production use
   */
  export let debug = false;

  /** @type {HTMLInputElement} */
  let inputElement;

  /** @type {Item[]} */
  let suggestions = [];

  /** @type {number} */
  let highlightedIndex = null;

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

  /** @param {Event} e */
  function handleSubmit(e) {
    e.preventDefault();
    if (highlightedElement === null) return;
    submit();
  }

  function handleReset() {
    result = null;
    discardSuggestions();
  }

  /** @param {KeyboardEvent} e */
  function handleKeyDown(e) {
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

  /** @param {CustomEvent<{ suggestions: Item[] }>} e */
  function handleSearch(e) {
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
        use:search={searchConfig}
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

  <div class="suggestions" use:css={{ 'input-width': px(inputWidth) }}>
    <ul>
      {#each suggestions as suggestion, i}
        <li
          class:active={i === highlightedIndex}
          class:highlight={debug}
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
    z-index: 1;
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
