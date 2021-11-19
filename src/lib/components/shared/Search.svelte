<script>
  import fuzzysearch from '$lib/actions/fuzzysearch';

  export let data;
  export let key;
  export let format = (d) => d;

  let inputElement;

  let suggestions = [];
  let highlightedIndex = null;

  $: result = highlightedIndex !== null ? suggestions[highlightedIndex] : null;

  function discardSuggestions() {
    suggestions = [];
    highlightedIndex = null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    inputElement.value = format(result);
    discardSuggestions();
  }

  function handleReset(e) {
    discardSuggestions();
  }

  function handleKeyDown(e) {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

    const up = e.key === 'ArrowUp';
    if (
      (up && highlightedIndex === 0) ||
      (!up && highlightedIndex === suggestions.length - 1)
    )
      return;

    up ? highlightedIndex-- : highlightedIndex++;
  }

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
    <input
      use:fuzzysearch={{ data, key }}
      on:search={handleSearch}
      bind:this={inputElement}
    />

    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </form>

  <div class="suggestions">
    <ul>
      {#each suggestions as suggestion, i}
        <li class:active={i === highlightedIndex}>{format(suggestion)}</li>
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
  }

  li {
    background-color: aliceblue;
  }

  li.active {
    background-color: steelblue;
  }
</style>
