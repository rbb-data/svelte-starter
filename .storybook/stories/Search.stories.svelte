<script>
  import { csvParse } from 'd3-dsv';
  import debounce from 'lodash.debounce';
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Search from '$comps/shared/Search.svelte';
  import { fuzzysearch } from '$lib/utils';

  const options = [
    'Amber',
    'Anna',
    'Anton',
    'Anja',
    'Arnold',
    'Archie',
    'Ashton',
  ];
  const complexOptions = [
    {
      name: 'Amber',
      value: 'amber',
    },
    {
      name: 'Anna',
      value: 'anna',
    },
    {
      name: 'Anton',
      value: 'anton',
    },
    {
      name: 'Anja',
      value: 'anja',
    },
    {
      name: 'Arnold',
      value: 'arnold',
    },
    {
      name: 'Archie',
      value: 'archie',
    },
    {
      name: 'Ashton',
      value: 'ashton',
    },
  ];

  /** @type {string} */
  let selectedSuggestion;

  /** @param {string} query */
  const simpleSearch = (query) => {
    if (!query) return [];
    return options.filter((o) =>
      o.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  /** @param {string} query */
  const simpleSearchWithComplexOptions = (query) => {
    if (!query) return [];
    return complexOptions.filter((o) =>
      o.name.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  /**
   * @param {string} query
   * @param {number} limit
   */
  async function autocomplete(query, limit = 5) {
    const params = new URLSearchParams({
      name: query,
      limit: limit.toString(),
    });
    const url = `https://datasette-rtt5dktola-ey.a.run.app/berlin_first_names/autocomplete_regardless_of_gender.csv?${params}`;

    const res = await fetch(url, {
      method: 'GET',
    });

    const text = await res.text();

    const response = csvParse(text);
    return response.map(({ name }) => name);
  }

  const debouncedAutocomplete = debounce(
    (/** @type {string} */ query) => autocomplete(query),
    300,
    {
      leading: true,
      trailing: true,
    }
  );
</script>

<Meta
  title="UI/Search"
  component={Search}
  argTypes={{
    id: {
      // @ts-ignore
      type: { required: true },
    },
    search: {
      // @ts-ignore
      type: { required: true },
    },
    formatSuggestion: {
      table: {
        defaultValue: { summary: '(suggestion) => suggestion' },
      },
    },
  }}
/>

<Story name="Basic">
  <div class="wrapper">
    <Search
      id="my-unique-search-id"
      search={simpleSearch}
      label="Suche nach Namen (mit A)"
      placeholder="z.B. Anna"
      bind:selectedSuggestion
      let:suggestion
    >
      {suggestion}
    </Search>
    <div class="result">
      Selected value:
      {#if selectedSuggestion}
        <i>{selectedSuggestion}</i>
      {/if}
    </div>
  </div>
</Story>

<Story name="Complex options">
  <div class="wrapper">
    <Search
      id="my-unique-search-id"
      search={simpleSearchWithComplexOptions}
      label="Suche nach Namen (mit A)"
      placeholder="z.B. Anna"
      formatSuggestion={(s) => s.name}
      bind:selectedSuggestion
      let:suggestion
    >
      {suggestion.name}
    </Search>
    <div class="result">
      Selected value:
      {#if selectedSuggestion}
        <pre>{JSON.stringify(selectedSuggestion, null, 2)}</pre>
      {/if}
    </div>
  </div>
</Story>

<Story name="Fuzzy searching">
  <div class="wrapper">
    <Search
      id="my-unique-search-id"
      search={(query) => fuzzysearch(query, options)}
      label="Suche nach Namen (mit A)"
      placeholder="z.B. Anna"
      bind:selectedSuggestion
      let:suggestion
    >
      {suggestion}
    </Search>
    <div class="result">
      Selected value:
      {#if selectedSuggestion}
        <i>{selectedSuggestion}</i>
      {/if}
    </div>
  </div>
</Story>

<Story name="Fuzzy searching complex options">
  <div class="wrapper">
    <Search
      id="my-unique-search-id"
      search={(query) => fuzzysearch(query, complexOptions, { key: 'name' })}
      label="Suche nach Namen (mit A)"
      placeholder="z.B. Anna"
      formatSuggestion={(s) => s.name}
      bind:selectedSuggestion
      let:suggestion
    >
      {suggestion.name}
    </Search>
    <div class="result">
      Selected value:
      {#if selectedSuggestion}
        <pre>{JSON.stringify(selectedSuggestion, null, 2)}</pre>
      {/if}
    </div>
  </div>
</Story>

<Story name="Async loading">
  <div class="wrapper">
    <Search
      id="my-unique-search-id"
      search={async (query) => {
        return await debouncedAutocomplete(query);
      }}
      label="Suche nach Namen"
      placeholder="z.B. Anna"
      bind:selectedSuggestion
      let:suggestion
    >
      {suggestion}
    </Search>
    <div class="result">
      Selected value:
      {#if selectedSuggestion}
        <i>{selectedSuggestion}</i>
      {/if}
    </div>
  </div>
</Story>

<Story name="Hide label visually">
  <div class="wrapper">
    <Search
      id="my-unique-search-id"
      search={simpleSearch}
      label="Suche nach Namen (mit A)"
      placeholder="Suche nach Namen (mit A)"
      hideLabelVisually
      bind:selectedSuggestion
      let:suggestion
    >
      {suggestion}
    </Search>
    <div class="result">
      Selected value:
      {#if selectedSuggestion}
        <pre>{JSON.stringify(selectedSuggestion, null, 2)}</pre>
      {/if}
    </div>
  </div>
</Story>

<Story name="External label">
  <div class="wrapper">
    <div id="search-label">Suche nach Namen (mit A)</div>
    <Search
      id="my-unique-search-id"
      search={simpleSearch}
      placeholder="z.B. Anna"
      aria={{ labelledby: 'search-label' }}
      bind:selectedSuggestion
      let:suggestion
    >
      {suggestion}
    </Search>
    <div class="result">
      Selected value:
      {#if selectedSuggestion}
        <pre>{JSON.stringify(selectedSuggestion, null, 2)}</pre>
      {/if}
    </div>
  </div>
</Story>

<style>
  .wrapper {
    height: 250px;
  }

  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }
</style>
