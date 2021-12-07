<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'BingLayer.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/Header.svelte';
  import APITable from '$lib/APITable.svelte'
  
  export let meta;

  const { name, description, props } = meta;
</script>

<Header {name} {description} />

<!-- More documentation... -->

<APITable params={props} />
