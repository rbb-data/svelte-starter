<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'data/meta/components/shared/LocalMap.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  export let meta;

  const { name, description, props } = meta;
</script>

<Header {name} {description} />

<!-- More documentation... -->

<APITable params={props} />
