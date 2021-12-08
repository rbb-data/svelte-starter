<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'focus.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  export let meta;

  const { name, description, params } = meta[0];
</script>

<Header name={`use:${name}`} {description} />

<!-- More documentation... -->

<APITable {params} />
