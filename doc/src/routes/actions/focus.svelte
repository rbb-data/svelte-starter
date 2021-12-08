<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'data/meta/actions/focus.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  export let meta;

  const { name, description, params } = meta[0];
</script>

<Header name={`use:${name}`} {description} />

<!-- More documentation... use <div class="slim"></div> if you want a slim design -->

<APITable {params} />
