<script context="module">
  import { fetchMetaData } from '$lib/core/load.js';
  const filename = 'data/meta/components/shared/leaflet/ZoomControl.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/core/components/Header.svelte';
  import APITable from '$lib/core/components/APITable.svelte';

  import Custom from '$lib/custom/components/shared/leaflet/ZoomControl/Custom.svelte';

  export let meta;

  const { name, description, props, slots } = meta;
</script>

<Header {name} {description} />

<div class="custom">
  <Custom {meta} />
</div>

{#if slots}
  <b>Slots:</b>
  {#each slots as slot}
    <code>{slot}</code>
  {/each}
{/if}

<APITable params={props} />

<style>
  .custom {
    margin: 2rem 0;
  }
</style>
