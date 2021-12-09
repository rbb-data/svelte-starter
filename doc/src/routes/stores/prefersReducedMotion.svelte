<script context="module">
  import { fetchMetaData } from '$lib/core/load.js';
  const filename = 'data/meta/stores/prefersReducedMotion.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/core/components/Header.svelte';

  import Custom from '$lib/custom/stores/prefersReducedMotion/Custom.svelte';

  export let meta;

  const { name, description, type } = meta[0];
</script>

<Header name={'$' + name} {description} />

<p>
  <b>Type:</b> <code>{type}</code>
</p>

<div class="custom">
  <Custom {meta} />
</div>

<style>
  .custom {
    margin: 2rem 0;
  }
</style>
