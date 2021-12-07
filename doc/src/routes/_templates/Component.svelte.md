<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = '%rbb-data.placeholder%.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/Header.svelte';
  import APITable from '$lib/APITable.svelte'
  
  export let meta;
</script>

<Header name={meta.name} description={meta.description} />

Custom text...

<APITable params={meta.props} />
