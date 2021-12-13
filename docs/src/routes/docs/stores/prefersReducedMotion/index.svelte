<script context="module">
  import { fetchMetaData } from '$lib/fetchMetaData.js';
  const filename = 'data/meta/stores/prefersReducedMotion.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';

  import Custom from './_/Custom.svelte';

  /** @type {import('$lib/types').ParamDoc[]} */
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
