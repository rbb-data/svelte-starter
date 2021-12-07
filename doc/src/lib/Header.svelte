<script>
  import SvelteMarkdown from 'svelte-markdown';

  export let name;
  export let description = '';
</script>

<h1>{name}</h1>

{#if description}
  <SvelteMarkdown source={description} />
{/if}
