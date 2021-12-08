<script context="module">
  import { fetchMetaData } from '$lib/load.js';
  const filename = 'data/meta/components/shared/LocalMap.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  export let meta;

  const { name, description, props, slots } = meta;
</script>

<Header {name} {description} />

<!-- More documentation... use <div class="slim"></div> if you want a slim design -->

{#if slots}
  <b>Slots:</b>
  {#each slots as slot}
    <code>{slot}</code>
  {/each}
{/if}

<APITable params={props} />
