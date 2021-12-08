<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'data/meta/stores/prefersReducedMotion.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';

  export let meta;

  const { name, description, type } = meta[0];
</script>

<Header name={'$' + name} {description} />

<p>
  <b>Type:</b> <code>{type}</code>
</p>

<!-- More documentation... -->
