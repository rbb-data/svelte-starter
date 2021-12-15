<script context="module">
  import { fetchMetaData } from '$lib/fetchMetaData.js';
  const filename = 'data/meta/%rbb-data.placeholder%.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';

  import Custom from './_/Custom.svelte.md';

  /** @type {import('$lib/types').ParamDoc[]} */
  export let meta;

  const { name, description, type } = meta[0];
</script>

<!--
  DANGER: This file is OVERWRITTEN each time `npm run update` is run
  If you want to add custom documentation, edit ./_/Custom.svelte.md
-->

<div class="slim">
  <Header name={'$' + name} {description} />

  <p>
    <b>Type:</b> <code>{type}</code>
  </p>

  <div class="custom">
    <Custom {meta} />
  </div>
</div>

<style>
  .custom {
    margin: 2rem 0;
  }
</style>
