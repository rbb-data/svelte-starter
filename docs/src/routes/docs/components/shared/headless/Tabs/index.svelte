<script context="module">
  export const load = async () => {
    const meta = (await import('$lib/../data/meta/components/shared/headless/Tabs.json'))
      .default;

    return {
      props: {
        meta,
      },
    };
  };
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import APITable from '$lib/components/APITable.svelte';

  import Custom from './_/Custom.svelte.md';

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

<!--
  DANGER: This file is OVERWRITTEN each time `npm run update` is run
  If you want to add custom documentation, edit ./_/Custom.svelte.md
-->

<div class="slim">
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
</div>

<h2>API</h2>

<APITable params={props} />

<style>
  .custom {
    margin: 2rem 0;
  }
</style>
