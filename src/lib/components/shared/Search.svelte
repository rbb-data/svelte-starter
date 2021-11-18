<script>
  import fuzzysearch from '$lib/actions/fuzzysearch';

  const data = ['banana', 'apple', 'citron', 'banane', 'ban', 'ba'];
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
    inputElement.value = result.item;
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
      use:fuzzysearch={{ data }}
      on:search={handleSearch}
      bind:this={inputElement}
    />

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </form>

  <ul>
    {#each suggestions as suggestion, i}
      <li class:active={i === highlightedIndex}>{suggestion.item}</li>
    {/each}
  </ul>
</div>

<style>
  .search {
    width: 100%;
  }

  input {
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    background-color: aliceblue;
  }

  li.active {
    background-color: steelblue;
  }
</style>
