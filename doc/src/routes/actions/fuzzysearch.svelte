<script context="module">
  import { fetchMetaData } from '$lib/core/load.js';
  const filename = 'data/meta/actions/fuzzysearch.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/core/components/Header.svelte';
  import APITable from '$lib/core/components/APITable.svelte';

  import Custom from '$lib/custom/actions/fuzzysearch/Custom.svelte';

  /** @type {Array<{ name: string; description: string; type: string; params: Array<import('$lib/core/types').ParamDoc> }>} */
  export let meta;

  const { name, description, params } = meta[0];
</script>

<Header name={`use:${name}`} {description} />

<div class="custom">
  <Custom {meta} />
</div>

<APITable {params} />

<style>
  .custom {
    margin: 2rem 0;
  }
</style>
