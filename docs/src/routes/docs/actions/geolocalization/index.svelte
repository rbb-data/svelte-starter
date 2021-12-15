<script context="module">
  import { fetchMetaData } from '$lib/fetchMetaData.js';
  const filename = 'data/meta/actions/geolocalization.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  import Custom from './_/Custom.svelte.md';

  /**
   * @type {{
   *   name: string;
   *   description: string;
   *   type: string;
   *   params: import('$lib/types').ParamDoc[];
   * }[]}
   */
  export let meta;

  const { name, description, params } = meta[0];
</script>

<!--
  DANGER: This file is OVERWRITTEN each time `npm run update` is run
  If you want to add custom documentation, edit ./_/Custom.svelte.md
-->

<div class="slim">
  <Header name={`use:${name}`} {description} />

  <div class="custom">
    <Custom {meta} />
  </div>
</div>

<h2>API</h2>

<APITable {params} />

<style>
  .custom {
    margin: 2rem 0;
  }
</style>
