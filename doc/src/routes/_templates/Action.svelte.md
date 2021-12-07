<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = '%rbb-data.placeholder%.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/Header.svelte';
  import APITable from '$lib/APITable.svelte';

  export let meta;

  const { name, description, type, params } = meta[0];
</script>

<Header {name} {description} />

Custom text....

Type: {type}

<APITable {params} />
