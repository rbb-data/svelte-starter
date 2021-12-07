<script>
  import SvelteMarkdown from 'svelte-markdown';

  export let name;
  export let description = '';
</script>

<h1><code>{name}</code></h1>

{#if description}
  <SvelteMarkdown source={description} />
{/if}
