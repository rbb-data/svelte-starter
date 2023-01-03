const __resolved__virtual_storySource_srcLibComponentsSharedSearchStorySvelte = `<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  import { csvParse } from 'd3-dsv';
  import debounce from 'lodash.debounce';

  import Search from './Search.svelte';
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

  let selectedSuggestion: typeof options[number];
  let selectedComplexSuggestion: typeof complexOptions[number];

  const simpleSearch = (query: string) => {
    if (!query) return [];
    return options.filter((o) =>
      o.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  const simpleSearchWithComplexOptions = (query: string) => {
    if (!query) return [];
    return complexOptions.filter((o) =>
      o.name.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  async function autocomplete(query: string, limit = 5) {
    const params = new URLSearchParams({
      name: query,
      limit: limit.toString(),
    });
    const url = \`https://datasette-rtt5dktola-ey.a.run.app/berlin_first_names/autocomplete_regardless_of_gender.csv?\${params}\`;

    const res = await fetch(url, {
      method: 'GET',
    });

    const text = await res.text();

    const response = csvParse(text);
    return response.map(({ name }) => name);
  }

  const debouncedAutocomplete = debounce((query) => autocomplete(query), 300, {
    leading: true,
    trailing: true,
  });
<\/script>

<Hst.Story group="ui" title="Search" layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Basic">
    <div class="wrapper">
      <Search
        id="my-unique-search-id"
        search={simpleSearch}
        label="Suche nach Namen (mit A)"
        placeholder="z.B. Anna"
        bind:selectedSuggestion
      />
      <div class="result">
        Selected value:
        {#if selectedSuggestion}
          <i>{selectedSuggestion}</i>
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Complex options">
    <div class="wrapper">
      <Search
        id="my-unique-search-id"
        search={simpleSearchWithComplexOptions}
        label="Suche nach Namen (mit A)"
        placeholder="z.B. Anna"
        formatSuggestion={(s) => s.name}
        bind:selectedSuggestion={selectedComplexSuggestion}
        let:suggestion
      >
        {suggestion.name}
      </Search>
      <div class="result">
        Selected value:
        {#if selectedSuggestion}
          {JSON.stringify(selectedSuggestion, null, 2)}
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Fuzzy searching">
    <div class="wrapper">
      <Search
        id="my-unique-search-id"
        search={(query) => fuzzysearch(query, options)}
        label="Suche nach Namen (mit A)"
        placeholder="z.B. Anna"
        bind:selectedSuggestion
      />
      <div class="result">
        Selected value:
        {#if selectedSuggestion}
          <i>{selectedSuggestion}</i>
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Fuzzy searching complex options">
    <div class="wrapper">
      <Search
        id="my-unique-search-id"
        search={(query) => fuzzysearch(query, complexOptions, { key: 'name' })}
        label="Suche nach Namen (mit A)"
        placeholder="z.B. Anna"
        formatSuggestion={(s) => s.name}
        bind:selectedSuggestion={selectedComplexSuggestion}
        let:suggestion
      >
        {suggestion.name}
      </Search>
      <div class="result">
        Selected value:
        {#if selectedSuggestion}
          {JSON.stringify(selectedSuggestion, null, 2)}
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Async loading">
    <div class="wrapper">
      <Search
        id="my-unique-search-id"
        search={async (query) => {
          return await debouncedAutocomplete(query);
        }}
        label="Suche nach Namen"
        placeholder="z.B. Anna"
        bind:selectedSuggestion
      />
      <div class="result">
        Selected value:
        {#if selectedSuggestion}
          <i>{selectedSuggestion}</i>
        {/if}
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Hide label visually">
    <div class="wrapper">
      <Search
        id="my-unique-search-id"
        search={simpleSearch}
        label="Suche nach Namen (mit A)"
        placeholder="Suche nach Namen (mit A)"
        hideLabelVisually
        bind:selectedSuggestion
      />
      <div class="result">
        Selected value:
        {#if selectedSuggestion}
          {JSON.stringify(selectedSuggestion, null, 2)}
        {/if}
      </div>
    </div>
  </Hst.Variant>
</Hst.Story>

<style>
  .wrapper {
    height: 300px;
    padding: 0 var(--s-px-1);
  }

  .result {
    margin-top: var(--s-px-5);
    font-size: var(--font-size-sm);
    border-top: 1px dashed var(--c-ui-gray-400);
    padding-top: var(--s-px-1);
  }
</style>
`;
export {
  __resolved__virtual_storySource_srcLibComponentsSharedSearchStorySvelte as default
};
