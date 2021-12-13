<script context="module">
  import { fetchMetaData } from '$lib/fetchMetaData.js';
  const filename = 'data/meta/actions/css.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  import Custom from './_/Custom.svelte';

  /** @type {Array<{ name: string; description: string; type: string; params: Array<import('$lib/types').ParamDoc> }>} */
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
