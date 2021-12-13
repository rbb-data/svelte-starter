<script context="module">
  import { fetchMetaData } from '$lib/fetchMetaData.js';
  const filename = 'data/meta/components/shared/LocalMap.json';
  export const load = fetchMetaData(filename);
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  import Custom from './_/Custom.svelte';

  /**
   * @type {{
   *   name: string;
   *   description: string;
   *   props: import('$lib/types').ParamDoc[];
   *   slots: string[];
   * }}
   */
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
