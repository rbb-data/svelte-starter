<script context="module">
  import { fetchMetaData } from '$lib/core/load.js';
  const filename = 'data/meta/%rbb-data.placeholder%.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/core/components/Header.svelte';

  import Custom from '$lib/custom/%rbb-data.placeholder%/Custom.svelte';

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
