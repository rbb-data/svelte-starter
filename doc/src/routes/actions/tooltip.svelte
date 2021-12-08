<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'tooltip.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/Header.svelte';
  import APITable from '$lib/APITable.svelte';

  export let meta;

  const { name, description, params } = meta[0];
</script>

<Header name={`use:${name}`} {description} />

<!-- More documentation... -->

<APITable {params} />
