<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'prefersReducedMotion.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/Header.svelte';
  import APITable from '$lib/APITable.svelte';

  export let meta;

  const { name, description, type } = meta[0];
</script>

<Header name={'$' + name} {description} />

<code>{type}</code>

<!-- More documentation... -->
